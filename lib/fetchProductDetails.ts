import { websiteEndpoints } from '@/config/websiteEndpoints'
import type { ProductDetailResponse } from '@/interfaces/interface'
import apiService from '@/service/apiService'

/**
 * Fetch product details from the API.
 * @param slug - The slug of the product.
 */
export async function fetchProductDetails(slug: string): Promise<ProductDetailResponse | null> {
    try {
        // Replace {slug} placeholder in the endpoint
        const endpoint = websiteEndpoints.productDetails.replace('{slug}', slug);
        const response = await apiService.get<ProductDetailResponse>(endpoint);
        return response;
    } catch (error) {
        console.error('Error fetching product details:', error);
        return null;
    }
}
