import { API_BASE_URL } from '@/lib/constants';
import { getAuthToken } from '@/lib/cookies';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';
// const BASE_URL = API_BASE_URL;

// ─── Helpers ───────────────────────────────────────────────────────────────────

/**
 * Build common headers for JSON requests.
 * Automatically attaches the Bearer token when available.
 */
function buildHeaders(extra: Record<string, string> = {}): Record<string, string> {
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...extra,
    };

    const token = getAuthToken();
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    return headers;
}

/**
 * Custom error class that carries field-level validation errors
 * from the API (e.g. FastAPI's RequestValidationError).
 */
export class ApiError extends Error {
    fieldErrors: Record<string, string>;
    status: number;

    constructor(message: string, status: number, fieldErrors: Record<string, string> = {}) {
        super(message);
        this.name = 'ApiError';
        this.status = status;
        this.fieldErrors = fieldErrors;
    }
}

/**
 * Centralised response handler.
 * - Throws ApiError on non-OK status so callers can rely on try/catch.
 * - Parses FastAPI validation error responses into field-level errors.
 * - Returns the parsed JSON body on success.
 */
async function handleResponse<T = any>(response: Response): Promise<T> {
    if (!response.ok) {
        let errorMessage = `HTTP Error ${response.status}: ${response.statusText}`;
        let fieldErrors: Record<string, string> = {};

        try {
            const errorBody = await response.json();

            if (errorBody.detail) {
                if (typeof errorBody.detail === 'string') {
                    // Simple string error (e.g. "Incorrect credentials")
                    errorMessage = errorBody.detail;
                } else if (typeof errorBody.detail === 'object' && errorBody.detail.errors) {
                    // FastAPI validation error: { detail: { message: "...", errors: [...] } }
                    errorMessage = errorBody.detail.message || 'Validation error';
                    for (const err of errorBody.detail.errors) {
                        // loc is an array like ["body", "description"] or ["description"]
                        const fieldName = err.loc?.[err.loc.length - 1] || 'unknown';
                        // Clean up the error message — remove "Value error, " prefix if present
                        const msg = (err.msg || 'Invalid value').replace(/^Value error,\s*/i, '');
                        fieldErrors[fieldName] = msg;
                    }
                }
            } else if (errorBody.message) {
                errorMessage = errorBody.message;
            }
        } catch {
            // Body wasn't JSON – keep the default message
        }

        throw new ApiError(errorMessage, response.status, fieldErrors);
    }

    // 204 No Content – nothing to parse
    if (response.status === 204) {
        return null as T;
    }

    return response.json() as Promise<T>;
}

// ─── API Service ───────────────────────────────────────────────────────────────

const apiService = {

    /**
     * GET request
     * @param url  - API endpoint path (e.g. `/categories`)
     * @param params - Optional query parameters as key-value pairs
     */
    get: async function <T = any>(url: string, params?: Record<string, string | number | boolean>): Promise<T> {
        let fullUrl = `${BASE_URL}/${url}`;

        // Append query parameters if provided
        if (params) {
            const searchParams = new URLSearchParams();
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                    searchParams.append(key, String(value));
                }
            });
            const qs = searchParams.toString();
            if (qs) fullUrl += `?${qs}`;
        }
        console.log('fullUrl- ', fullUrl);

        const response = await fetch(fullUrl, {
            method: 'GET',
            headers: buildHeaders(),
        });

        return handleResponse<T>(response);
    },

    /**
     * POST request (JSON body)
     * @param url  - API endpoint path
     * @param data - Request body payload
     */
    post: async function <T = any>(url: string, data: any): Promise<T> {
        const response = await fetch(`${BASE_URL}/${url}`, {
            method: 'POST',
            headers: buildHeaders(),
            body: JSON.stringify(data),
        });

        return handleResponse<T>(response);
    },

    /**
     * POST request with URL-encoded form body (application/x-www-form-urlencoded).
     * Used for OAuth2-style endpoints like /auth/token.
     * @param url  - API endpoint path
     * @param data - Key-value pairs to encode
     */
    postUrlEncoded: async function <T = any>(url: string, data: Record<string, string>): Promise<T> {
        const body = new URLSearchParams(data).toString();

        const headers: Record<string, string> = {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
        };

        const token = getAuthToken();
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch(`${BASE_URL}/${url}`, {
            method: 'POST',
            headers,
            body,
        });

        return handleResponse<T>(response);
    },

    /**
     * PUT request – full resource replacement
     * @param url  - API endpoint path
     * @param data - Updated resource payload
     */
    put: async function <T = any>(url: string, data: any): Promise<T> {
        const response = await fetch(`${BASE_URL}/${url}`, {
            method: 'PUT',
            headers: buildHeaders(),
            body: JSON.stringify(data),
        });

        return handleResponse<T>(response);
    },

    /**
     * PATCH request – partial resource update
     * @param url  - API endpoint path
     * @param data - Fields to update
     */
    patch: async function <T = any>(url: string, data: any): Promise<T> {
        const response = await fetch(`${BASE_URL}/${url}`, {
            method: 'PATCH',
            headers: buildHeaders(),
            body: JSON.stringify(data),
        });

        return handleResponse<T>(response);
    },

    /**
     * DELETE request
     * @param url - API endpoint path
     */
    delete: async function <T = any>(url: string): Promise<T> {
        const response = await fetch(`${BASE_URL}/${url}`, {
            method: 'DELETE',
            headers: buildHeaders(),
        });

        return handleResponse<T>(response);
    },

    /**
     * POST with FormData – use for file uploads (logos, images, etc.).
     * Does NOT set Content-Type so the browser auto-sets the multipart boundary.
     * @param url      - API endpoint path
     * @param formData - FormData instance containing fields and files
     */
    postFormData: async function <T = any>(url: string, formData: FormData): Promise<T> {
        const headers: Record<string, string> = {
            Accept: 'application/json',
        };

        const token = getAuthToken();
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch(`${BASE_URL}/${url}`, {
            method: 'POST',
            headers,
            body: formData,
        });

        return handleResponse<T>(response);
    },

    /**
     * PUT with FormData – use for updating resources that include file uploads.
     * @param url      - API endpoint path
     * @param formData - FormData instance containing fields and files
     */
    putFormData: async function <T = any>(url: string, formData: FormData): Promise<T> {
        const headers: Record<string, string> = {
            Accept: 'application/json',
        };

        const token = getAuthToken();
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch(`${BASE_URL}/${url}`, {
            method: 'PUT',
            headers,
            body: formData,
        });

        return handleResponse<T>(response);
    },
};

export default apiService;