// ─── Website API Types ────────────────────────────────────────────────────────

export interface ProductPrimaryImage {
    id: number
    image: string
    is_preview: boolean
}
export interface CountryImage {
    id: number
    country_flag: string
}

export interface RecommendedProduct {
    id: number
    slug: string
    title: string
    primary_image: ProductPrimaryImage | null
    country: CountryImage | null
}

export interface RecommendedProductsResponse {
    success: boolean
    message: string
    data: RecommendedProduct[]
    meta: Record<string, unknown>
}

// ─── Category Wise Subcategories ──────────────────────────────────────────────

export interface Subcategory {
    id: number
    slug: string
    name: string
    image: string
    total_products: number
}

export interface CategoryWithSubcategories {
    id: number
    slug: string
    name: string
    image: string
    total_products: number
    subcategories: Subcategory[]
}

export interface CategoryWiseSubcategoriesResponse {
    success: boolean
    message: string
    data: CategoryWithSubcategories[]
    meta: Record<string, unknown>
}

// ─── Valuable Partners ────────────────────────────────────────────────────────

export interface ValuablePartner {
    id: number
    name: string
    logo: string
}

export interface ValuablePartnersResponse {
    success: boolean
    message: string
    data: ValuablePartner[]
    meta: Record<string, unknown>
}

// ─── Product Listing ──────────────────────────────────────────────────────────

export interface ProductListingItem {
    id: number
    slug: string
    title: string
    primary_image: {
        image: string
    } | null
    country: {
        country_flag: string
    } | null
    supplier: {
        name: string
    } | null
}

export interface ProductListingMeta {
    page: number
    per_page: number
    total_count: number
    total_pages: number
}

export interface ProductListingResponse {
    success: boolean
    message: string
    data: ProductListingItem[]
    meta: ProductListingMeta
}
