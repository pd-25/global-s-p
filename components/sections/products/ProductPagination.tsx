"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { Pagination, PaginationItem, Box, Typography } from "@mui/material"

interface ProductPaginationProps {
    currentPage: number
    totalPages: number
    totalCount: number
    perPage: number
}

export default function ProductPagination({
    currentPage,
    totalPages,
    totalCount,
    perPage,
}: ProductPaginationProps) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    if (totalPages <= 1) return null

    const from = (currentPage - 1) * perPage + 1
    const to = Math.min(currentPage * perPage, totalCount)

    function handleChange(_: React.ChangeEvent<unknown>, page: number) {
        const params = new URLSearchParams(searchParams.toString())
        if (page === 1) {
            params.delete("page")
        } else {
            params.set("page", String(page))
        }
        const query = params.toString()
        router.push(`${pathname}${query ? `?${query}` : ""}`, { scroll: false })
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
                mt: 4,
                pt: 3,
                borderTop: "1px solid #e8ecf0",
            }}
        >
            {/* Results counter */}
            <Typography
                variant="body2"
                sx={{ color: "#6b7280", fontSize: "13px", flexShrink: 0 }}
            >
                Showing{" "}
                <Box component="span" sx={{ fontWeight: 600, color: "#111" }}>
                    {from}–{to}
                </Box>{" "}
                of{" "}
                <Box component="span" sx={{ fontWeight: 600, color: "#111" }}>
                    {totalCount}
                </Box>{" "}
                products
            </Typography>

            {/* Page controls */}
            <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handleChange}
                shape="rounded"
                siblingCount={1}
                boundaryCount={1}
                renderItem={(item) => (
                    <PaginationItem
                        {...item}
                        sx={{
                            fontSize: "13px",
                            fontWeight: 500,
                            color: "#374151",
                            borderColor: "#e5e7eb",
                            borderRadius: "8px",
                            minWidth: "36px",
                            height: "36px",
                            "&.Mui-selected": {
                                backgroundColor: "#7FAF0D",
                                color: "#fff",
                                borderColor: "#7FAF0D",
                                "&:hover": {
                                    backgroundColor: "#6a9a0b",
                                },
                            },
                            "&:hover": {
                                backgroundColor: "#f3f4f6",
                            },
                        }}
                    />
                )}
            />
        </Box>
    )
}
