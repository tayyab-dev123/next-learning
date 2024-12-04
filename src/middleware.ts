import { NextResponse, type NextRequest } from "next/server";
import { cookies } from "next/headers";

export function middleware(request: NextRequest) {
  const email = request.cookies.get("email");

  if (!email) {
    const response = NextResponse.redirect(request.url);
    response.cookies.set("email", "tayyab@gmail.com");
    return response;
  }

  return NextResponse.next();
}
