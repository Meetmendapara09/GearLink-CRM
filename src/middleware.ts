import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('firebaseIdToken');
  const { pathname } = request.nextUrl;

  const isAuthRoute = pathname === '/login' || pathname === '/signup';

  if (!token && !isAuthRoute && pathname.startsWith('/')) {
     if (pathname === '/') return NextResponse.next();
     if (pathname === '/terms') return NextResponse.next();
     if (pathname === '/privacy') return NextResponse.next();
     const url = request.nextUrl.clone();
     url.pathname = '/login';
     return NextResponse.redirect(url);
  }

  if (token && isAuthRoute) {
    const url = request.nextUrl.clone();
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
