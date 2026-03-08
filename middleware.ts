import { NextRequest, NextResponse } from 'next/server';
import { LOGIN_PATH, ADMIN_PATH_PREFIX, TOKEN_COOKIE_NAME } from '@/lib/constants';


export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const token = request.cookies.get(TOKEN_COOKIE_NAME)?.value;

    // ─── Protect admin routes ──────────────────────────────────────────────────
    // If the user is trying to access any /gse/admin/* page without a token,
    // redirect them to the login page.
    if (pathname.startsWith(ADMIN_PATH_PREFIX) && !token) {
        const loginUrl = new URL(LOGIN_PATH, request.url);
        // Preserve the original URL so we can redirect back after login
        loginUrl.searchParams.set('redirect', pathname);
        return NextResponse.redirect(loginUrl);
    }

    // ─── Redirect authenticated users away from login ──────────────────────────
    // If the user is already logged in and tries to visit the login page,
    // redirect them straight to the dashboard.
    if (pathname === LOGIN_PATH && token) {
        const dashboardUrl = new URL('/gse/admin/dashboard', request.url);
        return NextResponse.redirect(dashboardUrl);
    }

    return NextResponse.next();
}

// Only run middleware on admin-related routes (not on public pages, API routes, or static assets)
export const config = {
    matcher: [
        '/gse/admin/:path*',
        '/gse/login',
    ],
};
