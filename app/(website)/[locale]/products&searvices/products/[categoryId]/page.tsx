// SSR page — category-specific product listing
import ProductListing from '@/components/sections/products/ProductListing'
import { fetchProducts } from '@/lib/fetchProducts'

interface PageProps {
    params: Promise<{ locale: string; categoryId: string }>
    searchParams?: Promise<{ page?: string; search_string?: string }>
}

export default async function ProductsByCategory({ params, searchParams }: PageProps) {
    const { categoryId } = await params
    const resolvedSearch = await searchParams
    const currentPage = Math.max(1, Number(resolvedSearch?.page ?? 1))
    const searchString = resolvedSearch?.search_string

    const { products, meta } = await fetchProducts(categoryId, currentPage, 30, searchString)

    return <ProductListing products={products} meta={meta} />
}
