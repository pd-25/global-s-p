import { websiteEndpoints } from "@/config/websiteEndpoints";
import { SupplierTypesResponse } from "@/interfaces/interface";
import apiService from "@/service/apiService";

export async function fetchSupplierTypes() {
    try {
        const cacheKey = "supplier_types_data";
        if (typeof window !== 'undefined') {
            const cached = localStorage.getItem(cacheKey);
            if (cached) {
                const { data, timestamp } = JSON.parse(cached);
                if (Date.now() - timestamp < 86400000) { // 24 hours
                    console.log('cached data+++++++++++++++++++++++++++++++', data);

                    return data;
                }
            }
        }

        const res = await apiService.get<SupplierTypesResponse>(websiteEndpoints.supplierTypes)
        if (res?.data) {
            if (typeof window !== 'undefined') {
                localStorage.setItem(cacheKey, JSON.stringify({ data: res.data, timestamp: Date.now() }));
            }
            console.log('api data+++++++++++++++++++++++++++++++++++', res.data);
            return res.data;
        }
    } catch (err) {
        console.error("Failed to fetch supplier types:", err)
    }
}