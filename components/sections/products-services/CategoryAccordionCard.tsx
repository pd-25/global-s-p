"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Box, Button, Chip, Collapse, Typography } from "@mui/material"
import type {
  CategoryWithSubcategories,
  Subcategory,
} from "@/interfaces/interface"
import { routes } from "@/config/routes"
import Link from "next/link"
import { useTranslations } from "next-intl"


// ─── SubcategoryTag ───────────────────────────────────────────────────────────


// function SubcategoryTag({ name, slug, total_products }: Subcategory) {
//   return (
//     <Link href={`${routes.serviceProductListPage.replace("[categoryId]", slug)}`} className="ps-sub-link">
//       <Box className="ps-sub-tag">
//         <span className="ps-sub-tag__name">{name}</span>
//         {total_products > 0 && (
//           <Chip
//             label={total_products.toLocaleString()}
//             size="small"
//             className="ps-sub-tag__chip"
//           />
//         )}
//       </Box>
//     </Link>
//   )
// }


function SubcategoryTag({ name, slug, total_products, image }: Subcategory) {
  const t = useTranslations("categoryWiseProducts")
  return (
    <Link href={routes.serviceProductListPage?.replace("[categoryId]", slug) || "#"} style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
      <Box className="ps-sub-card">
        <Box className="ps-sub-card__img-wrap">
          <Image
            src={image || "/home/category-thumbnail-01.png"}
            alt={name}
            fill
            sizes="(max-width: 768px) 50vw, 200px"
            style={{ objectFit: "cover" }}
            unoptimized
            onError={(e) => {
              e.currentTarget.onerror = null
              e.currentTarget.src = "/home/category-thumbnail-01.png"
            }}
          />
        </Box>
        <Box className="ps-sub-card__content">
          <Typography className="ps-sub-card__title" noWrap>
            {name}
          </Typography>
          {total_products > 0 && (
            <Typography className="ps-sub-card__meta">
              {total_products.toLocaleString()} {t("products")}
            </Typography>
          )}
        </Box>
      </Box>
    </Link>
  )
}

// ─── CategoryAccordionCard ────────────────────────────────────────────────────

interface CategoryAccordionCardProps {
  category: CategoryWithSubcategories
  index?: number
}

export default function CategoryAccordionCard({
  category,
  index = 0,
}: CategoryAccordionCardProps) {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen((prev) => !prev)

  return (
    <Box
      className={`ps-cat-card ${open ? "ps-cat-card--open" : ""}`}
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      {/* ── Header row ──────────────────────────────────────────── */}
      <Box
        className="ps-cat-card__hd"
        onClick={toggle}
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            toggle()
          }
        }}
      >
        {/* Thumbnail */}
        <Box className="ps-cat-card__thumb">
          <Image
            src={category.image}
            alt={category.name}
            fill
            sizes="90px"
            style={{ objectFit: "cover" }}
            unoptimized
          />
          <Box className="ps-cat-card__thumb-overlay" />
        </Box>

        {/* Info */}
        <Box className="ps-cat-card__info">
          <Typography
            className="ps-cat-card__name"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
              background: 'linear-gradient(135deg, #054934 0%, #7FAF0D 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textTransform: 'capitalize',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              mb: 0.5,
              display: 'inline-block',
            }}
          >
            {category.name}
          </Typography>
          <Box className="ps-cat-card__pills">
            {/* {category?.total_products > 0 && ( */}
            <Box className="ps-pill ps-pill--primary">
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
              </svg>
              {category.total_products} Products
            </Box>
            {/* )} */}
            {category.subcategories.length > 0 && (
              <Box className="ps-pill ps-pill--secondary">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M4 6h16M4 12h10M4 18h6" />
                </svg>
                {category.subcategories.length} Subcategories
              </Box>
            )}

          </Box>
        </Box>

        {/* CTA – stops accordion toggle when clicking the button */}
        <Box
          className="ps-cat-card__end"
          onClick={(e) => e.stopPropagation()}
        >
          {category.slug != "others" ? (
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Link href={`${routes.productsServicesDetailsPage.replace("[slug]", category.slug)}`} className="ps-sub-link">
                <Button
                  className="ps-cat-card__cta ps-cat-card__cta--outline"
                  variant="outlined"
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
              <Link href={`${routes.serviceProductListPage.replace("[categoryId]", category.slug)}`} className="ps-sub-link">
                <Button
                  className="ps-cat-card__cta"
                  variant="contained"
                  tabIndex={-1}
                >
                  Source Now
                </Button>
              </Link>
            </Box>
          ) : (
            <Link href={`${routes.productListPage}`} className="ps-sub-link">
              <Button
                className="ps-cat-card__cta"
                variant="contained"
                tabIndex={-1}
              >
                View others
              </Button>
            </Link>
          )}
        </Box>

        {/* Chevron */}
        <Box className="ps-cat-card__chevron">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              display: "block",
              transition: "transform 0.35s cubic-bezier(.4,0,.2,1)",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </Box>
      </Box>

      {/* ── Accordion body — subcategories ──────────────────────── */}
      <Collapse in={open} timeout={360}>
        <Box className="ps-cat-card__bd">
          <Typography className="ps-cat-card__bd-label">
            Subcategories
          </Typography>
          <Box className="ps-sub-wrap">
            {category.subcategories.length > 0 ? (
              category.subcategories.map((sub) => (
                <SubcategoryTag key={sub.id} {...sub} />
              ))
            ) : (
              <Typography
                sx={{ fontSize: 13, color: "#999", fontStyle: "italic" }}
              >
                No subcategories available.
              </Typography>
            )}
          </Box>
        </Box>
      </Collapse>
    </Box>
  )
}
