'use client'

import React, { createContext, useContext, useState, useEffect, useRef } from 'react'
import type { ProductListingItem, ProductListingMeta } from '@/interfaces/interface'
import { fetchProducts, ProductFilters } from '@/lib/fetchProducts'
import { useParams, useSearchParams, useRouter, usePathname } from 'next/navigation'

interface ProductFilterContextState {
    products: ProductListingItem[]
    meta: ProductListingMeta
    loading: boolean
    setInitialData: (initialProducts: ProductListingItem[], initialMeta: ProductListingMeta) => void
    filters: ProductFilters
    setFilters: React.Dispatch<React.SetStateAction<ProductFilters>>
    page: number
    setPage: React.Dispatch<React.SetStateAction<number>>
    mounted: boolean
}

const ProductFilterContext = createContext<ProductFilterContextState | null>(null)

export function ProductFilterProvider({ children }: { children: React.ReactNode }) {
    const [products, setProducts] = useState<ProductListingItem[]>([])
    const [meta, setMeta] = useState<ProductListingMeta>({ page: 1, per_page: 30, total_count: 0, total_pages: 1 })
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    
    const [filters, setFilters] = useState<ProductFilters>({})
    const [mounted, setMounted] = useState(false)

    const params = useParams()
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    // Used to stop useEffect from triggering the API request on mount.
    // The SSR injects initial payload, so initial fetch isn't needed.
    const isInitialMount = useRef(true)

    const debounceTimeout = useRef<NodeJS.Timeout | null>(null)

    const setInitialData = (initialProducts: ProductListingItem[], initialMeta: ProductListingMeta) => {
        if (!mounted) {
            setProducts(initialProducts)
            setMeta(initialMeta)
            setPage(initialMeta.page)
            
            setFilters({
                country_code: searchParams.get('country_code') || undefined,
                supplier_type_slug: searchParams.get('supplier_type_slug') || undefined,
                supplier_slug: searchParams.get('supplier_slug') || undefined,
                min_price: searchParams.get('min_price') ? Number(searchParams.get('min_price')) : undefined,
                max_price: searchParams.get('max_price') ? Number(searchParams.get('max_price')) : undefined,
            })
            setMounted(true)
        } else if (isInitialMount.current) {
            // Re-sync if navigate happens and we are already mounted but want to reset.
            // Normally shouldn't happen without unmount in layout.
        }
    }

    // Call API when filters or page changes
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false
            return
        }

        if (debounceTimeout.current) clearTimeout(debounceTimeout.current)

        debounceTimeout.current = setTimeout(async () => {
             // 1. First push URL state
             const urlParams = new URLSearchParams(searchParams.toString())
             
             // Clean previous filter states
             urlParams.delete('country_code')
             urlParams.delete('supplier_type_slug')
             urlParams.delete('supplier_slug')
             urlParams.delete('min_price')
             urlParams.delete('max_price')
             
             // Append new filters to reflect in URL
             if (filters.country_code) urlParams.set('country_code', filters.country_code)
             if (filters.supplier_type_slug) urlParams.set('supplier_type_slug', filters.supplier_type_slug)
             if (filters.supplier_slug) urlParams.set('supplier_slug', filters.supplier_slug)
             if (filters.min_price !== undefined) urlParams.set('min_price', filters.min_price.toString())
             if (filters.max_price !== undefined) urlParams.set('max_price', filters.max_price.toString())
             
             if (page > 1) urlParams.set('page', page.toString())
             else urlParams.delete('page')

             const query = urlParams.toString()
             router.push(`${pathname}${query ? `?${query}` : ""}`, { scroll: false })

             // 2. Fetch data (client side so debounce works)
             setLoading(true)
             const searchString = searchParams.get('search_string') || undefined;
             const categoryId = params.categoryId as string | undefined;

             try {
                const data = await fetchProducts(categoryId, page, 30, searchString, filters)
                setProducts(data.products)
                setMeta(data.meta)
             } catch (err) {
                console.error("Failed to fetch products on client:", err)
             } finally {
                setLoading(false)
             }
        }, 500)

        return () => {
             if (debounceTimeout.current) clearTimeout(debounceTimeout.current)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters, page, params.categoryId])

    return (
        <ProductFilterContext.Provider value={{ products, meta, loading, setInitialData, filters, setFilters, page, setPage, mounted }}>
            {children}
        </ProductFilterContext.Provider>
    )
}

export const useProductFilter = () => {
    const context = useContext(ProductFilterContext)
    if (!context) throw new Error("useProductFilter must be used within ProductFilterProvider")
    return context
}
