import apiService from "@/service/apiService";
import { websiteEndpoints } from "@/config/websiteEndpoints";
import { CountriesResponse, Country } from "@/interfaces/interface";

const CACHE_KEY = "countries_data";
const CACHE_DURATION = 86400000; // 24 hours in milliseconds

export async function getCountries(): Promise<Country[]> {
    // Check local storage if in browser
    if (typeof window !== 'undefined') {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
            try {
                const { data, timestamp } = JSON.parse(cached);
                const isFresh = Date.now() - timestamp < CACHE_DURATION;
                if (isFresh && Array.isArray(data)) {
                    return data;
                }
            } catch (error) {
                console.error("Error parsing cached countries:", error);
                localStorage.removeItem(CACHE_KEY);
            }
        }
    }

    // Fetch from API if no valid cache
    try {
        const res = await apiService.get<CountriesResponse>(websiteEndpoints.countries);
        if (res?.success && Array.isArray(res.data)) {
            // Store in local storage if in browser
            if (typeof window !== 'undefined') {
                localStorage.setItem(CACHE_KEY, JSON.stringify({
                    data: res.data,
                    timestamp: Date.now()
                }));
            }
            return res.data;
        }
    } catch (error) {
        console.error("Failed to fetch countries:", error);
    }

    return [];
}
