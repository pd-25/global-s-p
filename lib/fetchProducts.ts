import { websiteEndpoints } from '@/config/websiteEndpoints'
import type { ProductListingItem, ProductListingMeta, ProductListingResponse } from '@/interfaces/interface'
import apiService from '@/service/apiService'

export const DEFAULT_META: ProductListingMeta = {
    page: 1,
    per_page: 30,
    total_count: 0,
    total_pages: 1,
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
    searchString?: string
): Promise<{ products: ProductListingItem[]; meta: ProductListingMeta }> {
    try {
        const endpoint = categorySlug
            ? websiteEndpoints.productListing.replace('{categorySlug}', categorySlug)
            : websiteEndpoints.productListingGlobal

        const json = await apiService.get<ProductListingResponse>(endpoint, {
            per_page: perPage,
            page,
            ...(searchString && { search_string: searchString }),
        })

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
