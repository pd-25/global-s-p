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


// ─── SubcategoryTag ───────────────────────────────────────────────────────────


function SubcategoryTag({ name, slug, total_products }: Subcategory) {
  return (
    <Link href={`${routes.serviceProductListPage.replace("[categoryId]", slug)}`} className="ps-sub-link">
      <Box className="ps-sub-tag">
        <span className="ps-sub-tag__name">{name}</span>
        {total_products > 0 && (
          <Chip
            label={total_products.toLocaleString()}
            size="small"
            className="ps-sub-tag__chip"
          />
        )}
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
            <Link href={`${routes.serviceProductListPage.replace("[categoryId]", category.slug)}`} className="ps-sub-link">
              <Button
                className="ps-cat-card__cta"
                variant="contained"
                tabIndex={-1}
              >
                Source Now
              </Button>
            </Link>
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
