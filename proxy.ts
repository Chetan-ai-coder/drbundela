// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const token = request.cookies.get('auth_token')

  // If trying to access admin and no token is found
  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (!token || token.value !== 'true') { 
      const loginUrl = new URL('/login', request.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

// Ensure it only runs on admin routes
export const config = {
  matcher: '/admin/:path*',
}