import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  try {
    const cookieStore = await cookies();
    
    // Clear admin auth cookie
    cookieStore.delete('adminAuth');

    return NextResponse.json({
      success: true,
      message: 'Logged out successfully'
    });

  } catch (error) {
    console.error('Error during admin logout:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred during logout' },
      { status: 500 }
    );
  }
}