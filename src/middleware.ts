import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import  jwt from "jsonwebtoken";
import { getDataFromToken } from "./helper/getDataFromToken";

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname

    // define public path
  const isPublicPath = path === "/login" || path === "/register" || path === '/' || path === '/about' || path === '/doctors'
  || path === '/contact' || path === '/service'
    
    // getting token from the cookies
  const token = request.cookies.get('token')?.value || ''

 // const isAdmin = getDataFromToken(request)
  
  console.log("isAdmin: ");

    // Redirect logic based on the path and token presence

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/admin',request.nextUrl))
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
}

export const config = {
  matcher: [
    '/',
      '/admin',
    '/profile',
    '/doctors',
    '/posts/create',
    '/login',
    '/register',
    '/contact'
  ]
}