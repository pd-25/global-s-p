// SSR page — global product listing (no category filter)
import ProductListing from '@/components/sections/products/ProductListing'
import { fetchProducts } from '@/lib/fetchProducts'

interface PageProps {
    searchParams?: Promise<{
        page?: string;
        search_string?: string;
        country_code?: string;
        supplier_type_slug?: string;
        supplier_slug?: string;
        min_price?: string;
        max_price?: string;
    }>
}

export default async function ProductListingPage({ searchParams }: PageProps) {
    const resolvedSearch = await searchParams
    const currentPage = Math.max(1, Number(resolvedSearch?.page ?? 1))
    const searchString = resolvedSearch?.search_string

    const filters = {
        country_code: resolvedSearch?.country_code,
        supplier_type_slug: resolvedSearch?.supplier_type_slug,
        supplier_slug: resolvedSearch?.supplier_slug,
        min_price: resolvedSearch?.min_price ? Number(resolvedSearch.min_price) : undefined,
        max_price: resolvedSearch?.max_price ? Number(resolvedSearch.max_price) : undefined,
    }

    // categorySlug omitted → hits the global products endpoint
    const { products, meta } = await fetchProducts(undefined, currentPage, 30, searchString, filters)

    return <ProductListing products={products} meta={meta} />
}
