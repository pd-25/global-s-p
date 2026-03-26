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
    slug: string
    name: string
    logo: string
}

export interface ValuablePartnersResponse {
    success: boolean
    message: string
    data: ValuablePartner[]
    meta: Record<string, unknown>
}

// ─── Countries ────────────────────────────────────────────────────────────────

export interface Country {
    id: number
    name: string
    country_flag: string
    country_code: string
    created_at: string
    updated_at: string
}

export interface CountriesResponse {
    success: boolean
    message: string
    data: Country[]
    meta: Record<string, unknown>
}

// ─── Supplier Types ───────────────────────────────────────────────────────────

export interface SupplierType {
    id: number
    slug: string
    name: string
    created_at: string
    updated_at: string
}

export interface SupplierTypesResponse {
    success: boolean
    message: string
    data: SupplierType[]
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

export interface TrendingProduct {
    slug: string
    title: string
    short_desc: string
    primary_image: {
        image: string
    } | null
    country: {
        country_flag: string
    } | null
    supplier: {
        name: string
        is_verified: boolean
    } | null
}

export interface TrendingProductsResponse {
    success: boolean
    message: string
    data: TrendingProduct[]
    meta: {
        page: number
        per_page: number
        total_count: number
        total_pages: number
    }
}


// ─── Contact Form Data ────────────────────────────────────────────────────────
export interface ContactFormData {
    product: {
        id: number
        title: string
        slug: string
        preview_image: string
    } | null
    supplier: {
        id: number
        slug: string
        name: string
        about: string
        logo: string
        zipcode: string
        city: string
        country_id: number
        address: string
        delivery_area: string
        founded_year: number
        employee_strength: number
        supplier_type_id: number
        is_verified: boolean
        vat_number: string
        company_site: string
        company_phone_number: string
        company_email: string
        created_at: string
        updated_at: string
        supplier_type: {
            id: number
            name: string
            created_at: string
            updated_at: string
        }
    }
}

export interface ContactFormDataResponse {
    success: boolean
    message: string
    data: ContactFormData
    meta: Record<string, unknown>
}

// ─── Product Details ───────────────────────────────────────────────────────────

export interface ProductImage {
    id: number
    image: string
    is_preview: boolean
    created_at: string
}

export interface ProductDetail {
    id: number
    slug: string
    title: string
    description: string
    short_desc: string
    currency: string
    price: string
    price_per_measurement: string
    min_order: number
    country_id: number
    supplier_id: number
    product_type_id: number
    category_id: number
    created_at: string
    updated_at: string
    country: {
        id: number
        name: string
        country_flag: string
    }
    supplier: {
        id: number
        slug: string
        name: string
        about: string
        logo: string
        zipcode: string
        city: string
        country_id: number
        address: string
        delivery_area: string
        founded_year: number
        employee_strength: number
        supplier_type_id: number
        is_verified: boolean
        vat_number: string
        company_site: string
        company_phone_number: string
        company_email: string
        created_at: string
        updated_at: string
        supplier_type: {
            id: number
            name: string
            created_at: string
            updated_at: string
        }
    }
    product_type: {
        id: number
        name: string
    }
    category: {
        id: number
        name: string
        slug: string
    }
    images: ProductImage[]
}

export interface ProductDetailResponse {
    success: boolean
    message: string
    data: ProductDetail
    meta: Record<string, unknown>
}

export interface SupplierType {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface Country {
    id: number;
    name: string;
    country_flag: string;
}

export interface Supplier {
    id: number;
    slug: string;
    name: string;
    about: string;
    logo: string;
    zipcode: string;
    city: string;
    country_id: number;
    address: string;
    delivery_area: string;
    founded_year: number;
    employee_strength: number;
    supplier_type_id: number;
    is_verified: boolean;
    vat_number: string;
    company_site: string;
    company_phone_number: string;
    company_email: string;
    created_at: string;
    updated_at: string;
    supplier_type: SupplierType;
    country: Country;
}

export interface SupplierInfoProps {
    supplier: Supplier;
}
