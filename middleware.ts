
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // We can't read Supabase session server-side here without helpers;
  // So this minimal middleware only allows access if a supabase auth cookie exists.
  const hasAuthCookie = req.cookies.get('sb-access-token') || req.cookies.get('sb:token');
  if (req.nextUrl.pathname.startsWith('/dashboard') && !hasAuthCookie) {
    const url = req.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
