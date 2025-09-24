import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const adminCookie = cookieStore.get('adminAuth');

    if (!adminCookie?.value) {
      return NextResponse.json({
        success: false,
        message: 'No authentication token found'
      });
    }

    try {
      const adminData = JSON.parse(adminCookie.value);
      
      // Verify the admin data has required fields
      if (!adminData.id || !adminData.email) {
        return NextResponse.json({
          success: false,
          message: 'Invalid authentication token'
        });
      }

      return NextResponse.json({
        success: true,
        admin: adminData,
        message: 'Authenticated'
      });
    } catch (parseError) {
      console.error('Error parsing admin cookie:', parseError);
      return NextResponse.json({
        success: false,
        message: 'Invalid authentication token format'
      });
    }

  } catch (error) {
    console.error('Error checking auth status:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}