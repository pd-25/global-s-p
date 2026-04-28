"use client"
import React, { Suspense, useEffect, useState } from "react"
import { Alert, Box, Button, Grid, Stack, Typography } from "@mui/material"
import SingleProductCard from "./SingleProductCard"
import ProductPagination from "./ProductPagination"
import type {
  ProductListingItem,
  ProductListingMeta,
} from "@/interfaces/interface"
import Loader from "@/components/ui/loader/Loader"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { useCategorySlug } from "@/components/providers/CategorySlugProvider"
import { routes } from "@/config/routes"

interface ProductListingProps {
  products: ProductListingItem[]
  meta: ProductListingMeta
  fromServicePage?: boolean
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? ""

/**
 * Resolve a raw image path from the API into a usable URL.
 * - If already an absolute URL (http/https) → return as-is.
 * - Otherwise prefix with the API base URL.
 * - Falls back to an empty string so callers can show a placeholder.
 */
function resolveImageUrl(path: string | null | undefined): string {
  if (!path) return ""
  if (path.startsWith("http://") || path.startsWith("https://")) return path
  return `${BASE_URL}/${path}`
}

export default function ProductListing({
  products,
  meta,
  fromServicePage = false
}: ProductListingProps) {
  const searchParams = useSearchParams()
  const categorySlug = useCategorySlug()
  const [loading, setLoading] = useState(false)
  const [activeQuery, setActiveQuery] = useState(searchParams.toString())

  // 1. Detect URL changes to show loading UI
  useEffect(() => {
    if (searchParams.toString() !== activeQuery) {
      setLoading(true)
      setActiveQuery(searchParams.toString())
    }
  }, [searchParams, activeQuery])

  // 2. Shut off loading UI when Next.js delivers new product props from SSR
  useEffect(() => {
    setLoading(false)
  }, [products, meta])

  if (loading) {
    return (
      <Box
        className="mainContent"
        sx={{
          flex: {
            xs: "1 1 100%",
            sm: "1 1 calc(100% - 0px)",
            md: "1 1 calc(75% - 32px)",
            lg: "1 1 calc(75% - 24px)",
          },
          minWidth: 0,
          position: "relative",
        }}
      >
        <Loader minHeight={400} text="Fetching products..." />
      </Box>
    )
  }

  if (products.length === 0) {
    return (
      <Box
        className="mainContent"
        sx={{
          flex: {
            xs: "1 1 100%",
            sm: "1 1 calc(100% - 0px)",
            md: "1 1 calc(75% - 32px)",
            lg: "1 1 calc(75% - 24px)",
          },
          minWidth: 0,
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          py: 8,
          color: "#aaa",
          fontSize: 15,
        }}
      >
        <Alert
          severity="error"
          sx={{ justifyContent: "center", py: 4, width: "100%" }}
        >
          No products found in this category.
        </Alert>
      </Box>
    )
  }

  return (
    <Box
      className="mainContent"
      sx={{
        flex: {
          xs: "1 1 100%",
          sm: "1 1 calc(100% - 0px)",
          md: "1 1 calc(75% - 32px)",
          lg: "1 1 calc(75% - 24px)",
        },
        minWidth: 0,
      }}
    >
      <Box className="childCategoryLisitngOuter">
        {!fromServicePage && (
          <Box sx={{ mb: 3, pb: 2, borderBottom: "1px solid #eaeaea" }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "18px", md: "22px" },
                fontWeight: "600",
                color: "#000",
              }}
            >
              {meta.total_count} Product{meta.total_count !== 1 ? "s" : ""} and
              services
            </Typography>
          </Box>
        )}
        <Grid container spacing={2} className="childCategoryLisitngRow">
          {products.map((product) => (
            <Grid
              key={product.id}
              size={{ xs: 12, md: 6, lg: 4 }}
              className="childCategoryLisitngCol"
            >
              <SingleProductCard
                imageUrl={resolveImageUrl(product.primary_image?.image)}
                supplierFlagUrl={product.country?.country_flag ?? ""}
                supplierName={product.supplier?.name ?? ""}
                title={product.title}
                slug={product.slug}
              />
            </Grid>
          ))}
        </Grid>

        {/* Pagination — wrapped in Suspense because ProductPagination reads useSearchParams */}
        {!fromServicePage ? (
          <Suspense fallback={null}>
            <ProductPagination
              currentPage={meta.page}
              totalPages={meta.total_pages}
              totalCount={meta.total_count}
              perPage={meta.per_page}
            />
          </Suspense>
        ) :
          (
            <Stack direction="row" justifyContent="center" sx={{ mt: 4 }}>
              {/* <Button variant="outlined" color="primary">
                <Link href={`${routes.serviceProductListPage.replace("[categoryId]", categorySlug)}`} className="ps-sub-link">
                  <Button
                    className="ps-cat-card__cta"
                    variant="contained"
                    tabIndex={-1}
                  >
                    View All
                  </Button>
                </Link>
              </Button> */}
              <Link href={`${routes.productsServicesDetailsPage.replace("[slug]", categorySlug)}`} className="ps-sub-link">
                <Button
                  className="ps-cat-card__cta ps-cat-card__cta--outline"
                  variant="outlined"
                  color="primary"
                  tabIndex={-1}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Details
                </Button>
              </Link>
            </Stack>
          )}
      </Box>
    </Box>
  )
}
