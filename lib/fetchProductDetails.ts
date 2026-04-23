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
        const clientIp = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || '';
        console.log('x-for- ', headersList.get('x-forwarded-for'));
        console.log('x-real-ip: ', headersList.get('x-real-ip'));

        // Replace {slug} placeholder in the endpoint
        const endpoint = websiteEndpoints.productDetails.replace('{slug}', slug);
        const response = await apiService.get<ProductDetailResponse>(endpoint, { client_ip: clientIp });
        return response;
    } catch (error) {
        console.error('Error fetching product details:', error);
        return null;
    }
}
