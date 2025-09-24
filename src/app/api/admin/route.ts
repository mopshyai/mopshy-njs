import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

// GET - Fetch all admins or single admin by ID
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
      // Fetch single admin
      const admin = await prisma.admin.findUnique({
        where: { id },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          createdAt: true,
          updatedAt: true
        }
      });

      if (!admin) {
        return NextResponse.json(
          { 
            success: false, 
            error: 'Admin not found' 
          },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        admin
      });
    } else {
      // Fetch all admins
      const admins = await prisma.admin.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          createdAt: true,
          updatedAt: true
        },
        orderBy: {
          createdAt: 'desc'
        }
      });

      return NextResponse.json({
        success: true,
        admins,
        count: admins.length
      });
    }
  } catch (error) {
    console.error('Error fetching admin(s):', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'An unexpected error occurred while fetching admin(s)' 
      },
      { status: 500 }
    );
  }
}

// POST - Create new admin
export async function POST(request: NextRequest) {
  try {
    const { name, email, password, role = 'admin' } = await request.json();

    // Validate required fields
    if (!name || !email || !password) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Name, email, and password are required' 
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid email format' 
        },
        { status: 400 }
      );
    }

    // Validate password strength
    if (password.length < 6) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Password must be at least 6 characters long' 
        },
        { status: 400 }
      );
    }

    // Validate role
    const validRoles = ['admin', 'super_admin', 'moderator'];
    if (!validRoles.includes(role)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid role. Must be one of: admin, super_admin, moderator' 
        },
        { status: 400 }
      );
    }

    // Check if admin already exists
    const existingAdmin = await prisma.admin.findUnique({
      where: { email }
    });

    if (existingAdmin) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Admin with this email already exists' 
        },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create admin
    const admin = await prisma.admin.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true
      }
    });

    return NextResponse.json({
      success: true,
      message: 'Admin created successfully',
      admin
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating admin:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'An unexpected error occurred while creating admin' 
      },
      { status: 500 }
    );
  }
}

// PUT - Update existing admin
export async function PUT(request: NextRequest) {
  try {
    const { id, name, email, password, role } = await request.json();

    // Validate required fields
    if (!id) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Admin ID is required' 
        },
        { status: 400 }
      );
    }

    // Check if admin exists
    const existingAdmin = await prisma.admin.findUnique({
      where: { id }
    });

    if (!existingAdmin) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Admin not found' 
        },
        { status: 404 }
      );
    }

    // Prepare update data
    const updateData: any = {};

    // Update name if provided
    if (name !== undefined) {
      if (!name.trim()) {
        return NextResponse.json(
          { 
            success: false, 
            error: 'Name cannot be empty' 
          },
          { status: 400 }
        );
      }
      updateData.name = name.trim();
    }

    // Update email if provided
    if (email !== undefined) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { 
            success: false, 
            error: 'Invalid email format' 
          },
          { status: 400 }
        );
      }

      // Check if email is already taken by another admin
      if (email !== existingAdmin.email) {
        const emailExists = await prisma.admin.findUnique({
          where: { email }
        });

        if (emailExists) {
          return NextResponse.json(
            { 
              success: false, 
              error: 'Email is already taken by another admin' 
            },
            { status: 409 }
          );
        }
      }
      
      updateData.email = email;
    }

    // Update password if provided
    if (password !== undefined) {
      if (password.length < 6) {
        return NextResponse.json(
          { 
            success: false, 
            error: 'Password must be at least 6 characters long' 
          },
          { status: 400 }
        );
      }
      updateData.password = await bcrypt.hash(password, 12);
    }

    // Update role if provided
    if (role !== undefined) {
      const validRoles = ['admin', 'super_admin', 'moderator'];
      if (!validRoles.includes(role)) {
        return NextResponse.json(
          { 
            success: false, 
            error: 'Invalid role. Must be one of: admin, super_admin, moderator' 
          },
          { status: 400 }
        );
      }
      updateData.role = role;
    }

    // If no fields to update
    if (Object.keys(updateData).length === 0) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'No fields provided to update' 
        },
        { status: 400 }
      );
    }

    // Update admin
    const updatedAdmin = await prisma.admin.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true
      }
    });

    return NextResponse.json({
      success: true,
      message: 'Admin updated successfully',
      admin: updatedAdmin
    });

  } catch (error) {
    console.error('Error updating admin:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'An unexpected error occurred while updating admin' 
      },
      { status: 500 }
    );
  }
}

// DELETE - Delete admin
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Admin ID is required' 
        },
        { status: 400 }
      );
    }

    // Check if admin exists
    const existingAdmin = await prisma.admin.findUnique({
      where: { id }
    });

    if (!existingAdmin) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Admin not found' 
        },
        { status: 404 }
      );
    }

    // Check if this is the last admin (prevent deleting all admins)
    const adminCount = await prisma.admin.count();
    if (adminCount <= 1) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Cannot delete the last admin. At least one admin must exist.' 
        },
        { status: 400 }
      );
    }

    // Delete admin
    await prisma.admin.delete({
      where: { id }
    });

    return NextResponse.json({
      success: true,
      message: 'Admin deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting admin:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'An unexpected error occurred while deleting admin' 
      },
      { status: 500 }
    );
  }
}