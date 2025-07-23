// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const user = request.cookies.get('user');
  const { pathname } = request.nextUrl;

  // Protect /dashboard and any other protected route
  if (pathname.startsWith('/dashboard') && !user) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  // Otherwise, allow the request
  return NextResponse.next();
}

// Choose which routes to run the middleware on
export const config = {
  matcher: ['/dashboard/:path*'], // Any route(s) you want to protect
};
