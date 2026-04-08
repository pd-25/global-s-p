// SSR page — no "use client" directive
import React from "react"
import Image from "next/image"
import { Box, Breadcrumbs, Container, Typography, Grid } from "@mui/material"
import NextLink from "next/link"
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
  categories.push({
    id: 0,
    slug: "others",
    name: "Others",
    image: "/images/others_category.jpeg",
    total_products: 0,
    subcategories: [],
  })

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

            {/* ── CTA Button ───────────────────────────────────────── */}
            <NextLink href="/products&searvices/products" className="ps-hero__cta-link">
              <span className="ps-hero__cta">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                Explore our products
              </span>
            </NextLink>

          </Box>
        </Container>
      </Box>

      {/* ── Category list ────────────────────────────────────────────── */}
      <Container>
        <Box className="ps-section">

          {/* Section heading — mirrors .shortTitle from _reset.scss */}
          <Box className="ps-section__hd">
            <Typography className="ps-section__label">
              Explore Our <span>Large Catalogue</span>
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
              {/* <CategoryAccordionCard key={0} category={cat} index={idx} /> */}
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

      {/* ── Live Stats Strip (Bottom) ────────────────────────────────────────────── */}
      <Box sx={{
        bgcolor: '#014B35',
        color: '#fff',
        py: { xs: 8, md: 10 },
        mt: 8,
        borderTop: '4px solid #7FAF0D',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative elements */}
        <Box sx={{ position: 'absolute', top: -100, right: -50, width: 300, height: 300, borderRadius: '50%', backgroundColor: 'rgba(127, 175, 13, 0.15)', filter: 'blur(50px)' }} />
        <Box sx={{ position: 'absolute', bottom: -100, left: -50, width: 400, height: 400, borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.03)', filter: 'blur(60px)' }} />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: { xs: '28px', md: '36px' }, fontWeight: 800, mb: 2 }}>
              Marketplace at a Glance
            </Typography>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '18px', maxWidth: '600px', mx: 'auto' }}>
              We're growing every day. Here are the numbers that define our platform's vast international selection.
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {[
              {
                num: categories.length.toString(),
                lbl: "Global Categories",
                icon: (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#7FAF0D" strokeWidth="1.5">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                  </svg>
                ),
              },
              {
                num: totalSubcategories.toString(),
                lbl: "Specialized Subcategories",
                icon: (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#7FAF0D" strokeWidth="1.5">
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
                lbl: "Available Products",
                icon: (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#7FAF0D" strokeWidth="1.5">
                    <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
                    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                  </svg>
                ),
              },
            ].map((s, i) => (
              <Grid size={{ xs: 12, sm: 4 }} key={i}>
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 5,
                    height: '100%',
                    borderRadius: '24px',
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                      bgcolor: 'rgba(255, 255, 255, 0.08)',
                      borderColor: 'rgba(127, 175, 13, 0.3)'
                    }
                  }}
                >
                  <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{
                      p: 2.5,
                      borderRadius: '50%',
                      bgcolor: 'rgba(127, 175, 13, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 'inset 0 0 20px rgba(127, 175, 13, 0.05)'
                    }}>
                      {s.icon}
                    </Box>
                  </Box>
                  <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: '36px', md: '52px' }, color: '#fff', mb: 1, textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
                    {s.num}{s.num !== "—" && "+"}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '16px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                    {s.lbl}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

    </Box>
  )
}
