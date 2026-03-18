import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from '@/i18n/routing';
import { LOGIN_PATH, ADMIN_PATH_PREFIX, TOKEN_COOKIE_NAME } from '@/lib/constants';

const intlMiddleware = createMiddleware(routing);

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // ─── Admin routes: skip i18n, handle auth ──────────────────────────────────
    if (pathname.startsWith(ADMIN_PATH_PREFIX) || pathname === LOGIN_PATH) {
        const token = request.cookies.get(TOKEN_COOKIE_NAME)?.value;

        // Protect admin routes
        if (pathname.startsWith(ADMIN_PATH_PREFIX) && !token) {
            const loginUrl = new URL(LOGIN_PATH, request.url);
            loginUrl.searchParams.set('redirect', pathname);
            return NextResponse.redirect(loginUrl);
        }

        // Redirect authenticated users away from login
        if (pathname === LOGIN_PATH && token) {
            const dashboardUrl = new URL('/gse/admin/dashboard', request.url);
            return NextResponse.redirect(dashboardUrl);
        }

        return NextResponse.next();
    }

    // ─── Public website routes: handle i18n ────────────────────────────────────
    return intlMiddleware(request);
}

export const config = {
    matcher: [
        // Admin routes
        '/gse/admin/:path*',
        '/gse/login',
        // i18n routes: match all paths except Next.js internals and static files
        '/((?!_next|api|gse|.*\\..*).*)',
    ],
};
