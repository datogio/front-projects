import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
  const token = req.cookies.get("token");

  if (token) {
    if (req.nextUrl.pathname.includes("/auth")) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  if (!token) {
    if (req.nextUrl.pathname === "/") {
      return NextResponse.redirect(new URL("/auth/sign-in", req.url));
    }
  }
};
