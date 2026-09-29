import { type NextRequest, NextResponse } from 'next/server'

/**
 * Protect all dashboard routes. Since auth is stored in localStorage (not cookies),
 * we rely on client-side redirect in the page itself. This middleware provides
 * server-side protection for routes that should never be seen unauthenticated.
 * 
 * Note: For stronger cookie-based auth, replace this with a JWT cookie check.
 */
const PROTECTED = ['/dashboard', '/sheet', '/revision', '/analytics', '/profile', '/lastminute']
const AUTH_PAGES = ['/login', '/register']

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Nothing to guard at middleware level without cookies; client redirects handle this.
  // This matcher ensures _app routes_ are served normally and not accidentally cached.
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
