// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect /features to /features/overview
  if (pathname === '/features') {
    return NextResponse.redirect(new URL('/features/overview', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/features'], // Apply middleware only to /features
};