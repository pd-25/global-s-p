"use client"

import { AnimateOnScroll } from "@/components/animations"
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import type {
  CategoryWithSubcategories,
  Subcategory,
} from "@/interfaces/interface"
import { useTranslations } from "next-intl"
import { routes } from "@/config/routes"

// ─── SubcategoryCard ──────────────────────────────────────────────────────────

function SubcategoryCard({ item }: { item: Subcategory }) {
  const t = useTranslations("categoryWiseProducts")
  return (
    <Box className="productShowcaseBox">
      <Button
        href={routes.serviceProductListPage?.replace("[categoryId]", item.slug)}
        className="innerLink"
      ></Button>
      <Box className="productShowcaseCard">
        <Box className="productShowcaseCardImage">
          <Image
            src={item.image || "/home/category-thumbnail-01.png"}
            alt={item.name}
            width={200}
            height={200}
            unoptimized
            onError={(e) => {
              e.currentTarget.onerror = null
              e.currentTarget.src = "/home/category-thumbnail-01.png"
            }}
          />
        </Box>
        <Box className="productShowcaseCardContent">
          <Typography variant="h3" component="h3" className="productTitle">
            {item.name}
          </Typography>
          {item.total_products > 0 && (
            <Typography variant="body1" component="p" className="stockStatus">
              {item.total_products.toLocaleString()} {t("products")}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  )
}

// ─── CategoryRow ──────────────────────────────────────────────────────────────

function CategoryRow({ category }: { category: CategoryWithSubcategories }) {
  const t = useTranslations("categoryWiseProducts")
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down(992))

  return (
    <Box className="productShowcaseRowInner">
      <Box className="productShowcaseContent">
        <Container>
          <Box
            className="productShowcaseRow"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
              justifyContent: "space-between",
            }}
          >
            {/* Featured Category Card (left) */}
            <Box className="productShowcaseColLeft">
              <Box className="featuredProductCard">
                <Box className="featuredProductCardImage">
                  <Image
                    src={category.image || "/home/category-thumbnail-01.png"}
                    alt={category.name}
                    width={200}
                    height={200}
                    unoptimized
                    onError={(e) => {
                      e.currentTarget.onerror = null
                      e.currentTarget.src = "/home/category-thumbnail-01.png"
                    }}
                  />
                </Box>
                <Box className="featuredProductCardContent">
                  {category.total_products > 0 && (
                    <Typography
                      variant="body1"
                      component="p"
                      className="stockStatus"
                    >
                      {category.total_products.toLocaleString()} {t("products")}
                    </Typography>
                  )}
                  <Typography
                    variant="h3"
                    component="h4"
                    className="productCategory"
                  >
                    {category.name}
                  </Typography>
                  <Box className="actionBtn">
                    <Button
                      variant="contained"
                      href={routes.serviceProductListPage?.replace(
                        "[categoryId]",
                        category.slug,
                      )}
                    >
                      {t("sourceNow")}
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Subcategory Cards (right) */}
            <Box className="productShowcaseColRight">
              {isMobile ? (
                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1}
                  navigation={{
                    nextEl: ".ComSliderNavigation .swiper-button-next",
                    prevEl: ".ComSliderNavigation .swiper-button-prev",
                  }}
                  autoplay={false}
                  loop={false}
                  breakpoints={{
                    320: { slidesPerView: 2, spaceBetween: 20 },
                    768: { slidesPerView: 3, spaceBetween: 24 },
                  }}
                  className="product-showcase-swiper"
                >
                  <Box className="ComSliderNavigation">
                    <Box className="swiper-button-prev"></Box>
                    <Box className="swiper-button-next"></Box>
                  </Box>
                  {category.subcategories.map((sub) => (
                    <SwiperSlide key={sub.id}>
                      <SubcategoryCard item={sub} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <Stack className="productShowcaseCardStack">
                  {category.subcategories.map((sub) => (
                    <SubcategoryCard key={sub.id} item={sub} />
                  ))}
                </Stack>
              )}
            </Box>
          </Box>

          {/* <Box className="viewMoreBtn">
            <Button variant="contained" href={`/category/${category.slug}`}>
              View More
            </Button>
          </Box> */}
        </Container>
      </Box>
    </Box>
  )
}

// ─── Main Component ────────────────────────────────────────────────────────────

interface CategoryWiseProductsProps {
  categories: CategoryWithSubcategories[]
}

export default function CategoryWiseProducts({
  categories,
}: CategoryWiseProductsProps) {
  const t = useTranslations("categoryWiseProducts")
  return (
    <Box component="section" className="categorySliderWrapper pb-0 secPadd">
      <Container>
        <AnimateOnScroll animation="fade-up">
          <Box className="sectionHeading" sx={{ textAlign: "center" }}>
            <Typography variant="h2" component="h2">
              {t("heading")}
            </Typography>
          </Box>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={0}>
          <Box className="productShowcaseRowOuter">
            {categories.length > 0 ? (
              categories.map((category) => (
                <CategoryRow key={category.id} category={category} />
              ))
            ) : (
              // Fallback skeleton rows while data is empty / loading
              <Box sx={{ textAlign: "center", py: 6 }}>
                <Typography variant="body1" color="text.secondary">
                  {t("noCategories")}
                </Typography>
              </Box>
            )}
          </Box>
        </AnimateOnScroll>
      </Container>
    </Box>
  )
}
