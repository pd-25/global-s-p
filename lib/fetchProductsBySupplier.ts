import { websiteEndpoints } from '@/config/websiteEndpoints'
import apiService from '@/service/apiService'

export async function fetchProductsBySupplier(slug: string, page = 1, perPage = 4) {
    try {
        const endpoint = websiteEndpoints.productsBySupplier.replace('{slug}', slug);
        const url = `${endpoint}?page=${page}&per_page=${perPage}`;
        const response = await apiService.get<any>(url);
        return response;
    } catch (error) {
        console.error('Error fetching products by supplier:', error);
        return null;
    }
}
