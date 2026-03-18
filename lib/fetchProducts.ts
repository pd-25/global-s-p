import { websiteEndpoints } from '@/config/websiteEndpoints'
import type { ProductListingItem, ProductListingMeta, ProductListingResponse } from '@/interfaces/interface'
import apiService from '@/service/apiService'

export const DEFAULT_META: ProductListingMeta = {
    page: 1,
    per_page: 30,
    total_count: 0,
    total_pages: 1,
}

export interface ProductFilters {
    country_code?: string
    supplier_type_slug?: string
    supplier_slug?: string
    min_price?: number
    max_price?: number
}

/**
 * Fetch product listing from the API.
 * @param categorySlug  Optional. When provided, fetches products for that category.
 *                      When omitted, fetches the global product list.
 * @param page          Page number (1-based).
 * @param perPage       Items per page.
 */
export async function fetchProducts(
    categorySlug?: string,
    page = 1,
    perPage = 30,
    searchString?: string,
    filters?: ProductFilters
): Promise<{ products: ProductListingItem[]; meta: ProductListingMeta }> {
    try {
        const endpoint = categorySlug
            ? websiteEndpoints.productListing.replace('{categorySlug}', categorySlug)
            : websiteEndpoints.productListingGlobal

        const queryParams: Record<string, any> = {
            per_page: perPage,
            page,
        }

        if (searchString) queryParams.search_string = searchString
        if (filters?.country_code) queryParams.country_code = filters.country_code
        if (filters?.supplier_type_slug) queryParams.supplier_type_slug = filters.supplier_type_slug
        if (filters?.supplier_slug) queryParams.supplier_slug = filters.supplier_slug
        if (filters?.min_price !== undefined) queryParams.min_price = filters.min_price
        if (filters?.max_price !== undefined) queryParams.max_price = filters.max_price

        const json = await apiService.get<ProductListingResponse>(endpoint, queryParams)

        return {
            products: json?.data ?? [],
            meta: json?.meta ?? { ...DEFAULT_META, page, per_page: perPage },
        }
    } catch {
        return {
            products: [],
            meta: { ...DEFAULT_META, page, per_page: perPage },
        }
    }
}
