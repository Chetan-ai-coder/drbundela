import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { username, password } = await req.json()

  // Verify against .env variables
  if (
    username === process.env.ADMIN_USERNAME && 
    password === process.env.ADMIN_PASSWORD
  ) {
    const response = NextResponse.json({ message: "Authenticated" })
    
    // Set a cookie that expires in 24 hours
    response.cookies.set('auth_token', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, 
      path: '/',
    })

    return response
  }

  return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
}