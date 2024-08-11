import { auth } from "./auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { origin, pathname } = req.nextUrl;

  // Redirect to login if not authenticated and the path is not login or register
  if (!req.auth && pathname !== "/login" && pathname !== "/register") {
    const loginUrl = new URL("/login", origin);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
