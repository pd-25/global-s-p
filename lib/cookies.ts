/**
 * Cookie utility helpers for client-side token management.
 */

const TOKEN_COOKIE_NAME = 'access_token';
const TOKEN_EXPIRY_DAYS = 7;

/**
 * Set a cookie.
 * @param name   - Cookie name
 * @param value  - Cookie value
 * @param days   - Expiry in days (default: 7)
 */
export function setCookie(name: string, value: string, days: number = TOKEN_EXPIRY_DAYS): void {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

/**
 * Get a cookie value by name.
 * @param name - Cookie name
 * @returns The cookie value or null if not found
 */
export function getCookie(name: string): string | null {
    if (typeof document === 'undefined') return null;
    const nameEQ = `${name}=`;
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.startsWith(nameEQ)) {
            return decodeURIComponent(cookie.substring(nameEQ.length));
        }
    }
    return null;
}

/**
 * Delete a cookie by name.
 * @param name - Cookie name
 */
export function deleteCookie(name: string): void {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
}

// ─── Token-specific helpers ────────────────────────────────────────────────────

/**
 * Save the auth token to a cookie.
 */
export function setAuthToken(token: string): void {
    setCookie(TOKEN_COOKIE_NAME, token);
}

/**
 * Retrieve the auth token from cookies.
 */
export function getAuthToken(): string | null {
    return getCookie(TOKEN_COOKIE_NAME);
}

/**
 * Remove the auth token cookie (logout).
 */
export function removeAuthToken(): void {
    deleteCookie(TOKEN_COOKIE_NAME);
}
