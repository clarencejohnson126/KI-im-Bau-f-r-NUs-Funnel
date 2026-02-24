import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Protect /danke — only accessible after email submission
  if (request.nextUrl.pathname === "/danke") {
    const hasAccess = request.cookies.get("download_access")?.value === "granted";

    // Also allow access if coming from Stripe (legacy flow / upsell)
    const hasSessionId = request.nextUrl.searchParams.has("session_id");

    if (!hasAccess && !hasSessionId) {
      return NextResponse.redirect(new URL("/checkout", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/danke"],
};
