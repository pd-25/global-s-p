// SSR page — category-specific product listing
import ProductListing from '@/components/sections/products/ProductListing'
import { fetchProducts } from '@/lib/fetchProducts'

interface PageProps {
    params: Promise<{ locale: string; categoryId: string }>
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

export default async function ProductsByCategory({ params, searchParams }: PageProps) {
    const { categoryId } = await params
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

    const { products, meta } = await fetchProducts(categoryId, currentPage, 30, searchString, filters)

    return <ProductListing products={products} meta={meta} />
}
