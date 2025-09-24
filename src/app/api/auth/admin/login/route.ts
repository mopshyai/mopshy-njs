import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Find admin by email
    const admin = await prisma.admin.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        role: true,
        createdAt: true
      }
    });

    if (!admin) {
      return NextResponse.json(
        { success: false, error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, admin.password);

    if (!isValidPassword) {
      return NextResponse.json(
        { success: false, error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Create admin session data (exclude password)
    const adminSessionData = {
      id: admin.id,
      name: admin.name,
      email: admin.email,
      role: admin.role
    };

    // Set admin auth cookie
    const cookieStore = await cookies();
    cookieStore.set('adminAuth', JSON.stringify(adminSessionData), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    return NextResponse.json({ 
      success: true,
      admin: adminSessionData,
      message: 'Login successful'
    });

  } catch (error) {
    console.error('Error during admin login:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred during login' },
      { status: 500 }
    );
  }
}