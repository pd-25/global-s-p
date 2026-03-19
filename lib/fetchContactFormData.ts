import { websiteEndpoints } from '@/config/websiteEndpoints'
import type { ContactFormDataResponse } from '@/interfaces/interface'
import apiService from '@/service/apiService'

/**
 * Fetch contact form data (product and supplier) from the API.
 * @param slug      The slug of the product.
 * @param reqType   Request type (typically 'product').
 */
export async function fetchContactFormData(
    slug: string,
    reqType = 'product'
): Promise<ContactFormDataResponse | null> {
    try {
        const endpoint = websiteEndpoints.fetchContactFormData
        const queryParams = { slug, req_type: reqType }
        
        const response = await apiService.get<ContactFormDataResponse>(endpoint, queryParams)
        return response
    } catch (error) {
        console.error('Error fetching contact form data:', error)
        return null
    }
}
