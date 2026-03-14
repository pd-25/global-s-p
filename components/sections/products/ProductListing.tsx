import React from "react"
import { Box, Grid } from "@mui/material"
import SingleProductCard from "./SingleProductCard"
import type { ProductListingItem } from "@/interfaces/interface"

interface ProductListingProps {
    products: ProductListingItem[]
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

export default function ProductListing({ products }: ProductListingProps) {
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
                    alignItems: "center",
                    justifyContent: "center",
                    py: 8,
                    color: "#aaa",
                    fontSize: 15,
                }}
            >
                No products found in this category.
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
                <Grid container spacing={2} className="childCategoryLisitngRow">
                    {products.map((product) => (
                        <Grid
                            key={product.id}
                            size={{ xs: 12, md: 6, lg: 4 }}
                            className="childCategoryLisitngCol"
                        >
                            <SingleProductCard
                                imageUrl={resolveImageUrl(product.primary_image?.image)}
                                supplierFlagUrl={resolveImageUrl(product.country?.country_flag)}
                                supplierName={product.supplier?.name ?? ""}
                                title={product.title}
                                slug={product.slug}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}