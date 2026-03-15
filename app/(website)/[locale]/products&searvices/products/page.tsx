// SSR page — global product listing (no category filter)
import ProductListing from '@/components/sections/products/ProductListing'
import { fetchProducts } from '@/lib/fetchProducts'

interface PageProps {
    searchParams?: Promise<{ page?: string; search_string?: string }>
}

export default async function ProductListingPage({ searchParams }: PageProps) {
    const resolvedSearch = await searchParams
    const currentPage = Math.max(1, Number(resolvedSearch?.page ?? 1))
    const searchString = resolvedSearch?.search_string

    // categorySlug omitted → hits the global products endpoint
    const { products, meta } = await fetchProducts(undefined, currentPage, 30, searchString)

    return <ProductListing products={products} meta={meta} />
}
