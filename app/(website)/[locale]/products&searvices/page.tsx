// SSR page — no "use client" directive
import React from "react"
import Image from "next/image"
import { Box, Breadcrumbs, Container, Typography } from "@mui/material"
import homeIcon from "@/public/home-icon.svg"
import CategoryAccordionCard from "@/components/sections/products-services/CategoryAccordionCard"
import { websiteEndpoints } from "@/config/websiteEndpoints"
import type {
  CategoryWithSubcategories,
  CategoryWiseSubcategoriesResponse,
} from "@/interfaces/interface"
import apiService from "@/service/apiService"
import "../../product-services.scss"

// ─── SSR Data Fetcher ─────────────────────────────────────────────────────────

async function getCategories(): Promise<CategoryWithSubcategories[]> {
  try {
    const json = await apiService.get<CategoryWiseSubcategoriesResponse>(
      websiteEndpoints.categoryWiseSubcategories
    )
    return json?.data ?? []
  } catch {
    return []
  }
}

// ─── Page (async SSR) ─────────────────────────────────────────────────────────

export default async function ProductsServices() {
  const categories = await getCategories()

  // Compute stat totals from live data
  const totalProducts = categories.reduce((sum, c) => sum + c.total_products, 0)
  const totalSubcategories = categories.reduce(
    (sum, c) => sum + c.subcategories.length,
    0
  )

  return (
    <Box className="ps-root">

      {/* ── Hero Banner ─────────────────────────────────────────────── */}
      <Box className="ps-hero">
        <Container>
          <Box className="ps-hero__inner">

            {/* <Breadcrumbs aria-label="breadcrumb">
              <a href="/" className="ps-bc-link">
                <Image src={homeIcon} alt="home" width={14} height={14} />
                Home
              </a>
              <Typography className="ps-bc-current">
                Products &amp; Services
              </Typography>
            </Breadcrumbs> */}

            <Typography className="ps-hero__eyebrow">
              <Box component="span" className="ps-hero__dot" />
              Global Marketplace
            </Typography>

            <Typography variant="h1" className="ps-hero__title">
              Products &amp; <span>Services</span>
            </Typography>

            <Typography className="ps-hero__sub">
              Browse our complete catalogue of product categories.
              Click any card to expand and explore its subcategories.
            </Typography>

            {/* Stat strip — driven by live data */}
            <Box className="ps-stats">
              {[
                {
                  num: categories.length.toString(),
                  lbl: "Categories",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" />
                      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                    </svg>
                  ),
                },
                {
                  num: totalSubcategories.toString(),
                  lbl: "Subcategories",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 6h16M4 12h10M4 18h6" />
                    </svg>
                  ),
                },
                {
                  num: totalProducts > 0
                    ? totalProducts >= 1_000
                      ? `${(totalProducts / 1_000).toFixed(0)}K+`
                      : totalProducts.toString()
                    : "—",
                  lbl: "Total Products",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
                      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                    </svg>
                  ),
                },
              ].map((s, i) => (
                <Box key={i} className="ps-stat">
                  <Box className="ps-stat__icon">{s.icon}</Box>
                  <Box>
                    <Typography className="ps-stat__num">{s.num}+</Typography>
                    <Typography className="ps-stat__lbl">{s.lbl}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>

          </Box>
        </Container>
      </Box>

      {/* ── Category list ────────────────────────────────────────────── */}
      <Container>
        <Box className="ps-section">

          {/* Section heading — mirrors .shortTitle from _reset.scss */}
          <Box className="ps-section__hd">
            <Typography className="ps-section__label">
              All <span>Categories</span>
            </Typography>
            {/* <Typography className="ps-section__count">
              {categories.length} {categories.length === 1 ? "category" : "categories"} found
            </Typography> */}
          </Box>

          {/* Cards */}
          {categories.length > 0 ? (
            <Box>
              {categories.map((cat, idx) => (
                <CategoryAccordionCard key={cat.id} category={cat} index={idx} />
              ))}
            </Box>
          ) : (
            <Box
              sx={{
                textAlign: "center",
                py: 10,
                color: "#aaa",
                fontSize: 15,
              }}
            >
              No categories available at the moment.
            </Box>
          )}

        </Box>
      </Container>

    </Box>
  )
}
