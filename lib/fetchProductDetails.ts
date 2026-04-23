import { websiteEndpoints } from '@/config/websiteEndpoints'
import type { ProductDetailResponse } from '@/interfaces/interface'
import apiService from '@/service/apiService'
import { headers } from 'next/headers'

/**
 * Fetch product details from the API.
 * @param slug - The slug of the product.
 */
export async function fetchProductDetails(slug: string): Promise<ProductDetailResponse | null> {
    try {
        const headersList = await headers();
        let clientIp = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || '';
        
        // x-forwarded-for can contain a comma-separated list of IPs (client, proxy1, proxy2, ...)
        // The first IP in the list is the original client IP.
        if (clientIp) {
            clientIp = clientIp.split(',')[0].trim();
        }

        // Replace {slug} placeholder in the endpoint
        const endpoint = websiteEndpoints.productDetails.replace('{slug}', slug);
        const response = await apiService.get<ProductDetailResponse>(endpoint, { client_ip: clientIp });
        return response;
    } catch (error) {
        console.error('Error fetching product details:', error);
        return null;
    }
}
