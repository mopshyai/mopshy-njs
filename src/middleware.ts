// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   console.log('Middleware triggered for:', request.nextUrl.pathname);
  
//   // Redirect root admin path to dashboard
//   if (request.nextUrl.pathname === '/admin') {
//     console.log('Redirecting from /admin to /admin/dashboard');
//     return NextResponse.redirect(new URL('/admin/dashboard', request.url));
//   }
  
//   // Handle admin routes protection
//   if (request.nextUrl.pathname.startsWith('/admin') && 
//       !request.nextUrl.pathname.startsWith('/admin/login')) {
    
//     const adminCookie = request.cookies.get('adminAuth');
//     let isAdminAuthenticated = false;

//     if (adminCookie?.value) {
//       try {
//         const adminData = JSON.parse(adminCookie.value);
//         isAdminAuthenticated = !!(adminData && adminData.id);
//       } catch (error) {
//         console.error('Error parsing admin cookie:', error);
//         isAdminAuthenticated = false;
//       }
//     }

//     if (!isAdminAuthenticated) {
//       console.log('Redirecting to admin login - not authenticated');
//       return NextResponse.redirect(new URL('/admin/login', request.url));
//     }
    
//     return NextResponse.next();
//   }

//   console.log('Proceeding to the next response');
//   return NextResponse.next();
// }

// // Config for path matching
// export const config = {
//   matcher: [
//     '/admin',             // Match exact admin root path
//     '/admin/:path*',      // Protects admin routes (excluding /admin/login)
//   ]
// };

// export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('Middleware triggered for:', request.nextUrl.pathname);
  
  // Redirect root admin path to blog
  if (request.nextUrl.pathname === '/admin') {
    console.log('Redirecting from /admin to /admin/blog');
    return NextResponse.redirect(new URL('/admin/blog', request.url));
  }
  
  // Handle admin routes protection
  if (request.nextUrl.pathname.startsWith('/admin') && 
      !request.nextUrl.pathname.startsWith('/admin/login')) {
    
    const adminCookie = request.cookies.get('adminAuth');
    let isAdminAuthenticated = false;

    if (adminCookie?.value) {
      try {
        const adminData = JSON.parse(adminCookie.value);
        isAdminAuthenticated = !!(adminData && adminData.id);
      } catch (error) {
        console.error('Error parsing admin cookie:', error);
        isAdminAuthenticated = false;
      }
    }

    if (!isAdminAuthenticated) {
      console.log('Redirecting to admin login - not authenticated');
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
    
    return NextResponse.next();
  }

  console.log('Proceeding to the next response');
  return NextResponse.next();
}

// Config for path matching
export const config = {
  matcher: [
    '/admin',             // Match exact admin root path
    '/admin/:path*',      // Protects admin routes (excluding /admin/login)
  ]
};

export const dynamic = 'force-dynamic'