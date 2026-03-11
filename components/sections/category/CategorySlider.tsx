"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import Image from "next/image"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Container from "@mui/material/Container"
import Link from "next/link"
import { useSliderNavigation } from "@/hooks/useSliderNavigation"
import { CountryImage, ProductPrimaryImage } from "@/interfaces/interface"

interface Image {
  image: string
}
interface CategoryItem {
  id: number
  title: string
  primary_image: ProductPrimaryImage | null
  country: CountryImage | null
}

interface CategorySliderProps {
  recommendedProducts: CategoryItem[]
}

export default function CategorySlider({ recommendedProducts }: CategorySliderProps) {
  const { showNavigation } = useSliderNavigation(
    recommendedProducts.length,
    2, // default slidesPerView
    {
      640: 3,
      768: 3,
      992: 4,
      1024: 4,
      1280: 4,
      1400: 6,
    }
  )

  return (
    <Box component="section" className="categorySliderWrapper secPadd pb-0">
      <Container>
        {/* <Box className="sectionHeading" sx={{ textAlign: "center" }}>
          <Typography variant="h2" component="h2">
            Product Category
          </Typography>
          <Typography variant="body1" component="p">
            Make Passive Income Online
          </Typography>
        </Box> */}
        <Box className="shortTitle">
          <Typography variant="h3" component="h3">
            Product <span>Recommendation</span>
          </Typography>
        </Box>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          navigation={
            showNavigation
              ? {
                nextEl: ".ComSliderNavigation .swiper-button-next",
                prevEl: ".ComSliderNavigation .swiper-button-prev",
              }
              : false
          }
          autoplay={false}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
          loop={false}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            1400: {
              slidesPerView: 6,
            },
          }}
          className="category-swiper"
        >
          {showNavigation && (
            <Box className="ComSliderNavigation">
              <Box className="swiper-button-prev"></Box>
              <Box className="swiper-button-next"></Box>
            </Box>
          )}

          {recommendedProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <Box className="categoryItem">
                <Link href={`/category/${product.id}`}></Link>
                <Box className="categoryItemImage">
                  <Box className="holder">
                    <Image
                      src={product?.primary_image?.image || "/home/category-thumbnail-01.png"}
                      alt={product.title}
                      width={190}
                      height={190}
                      unoptimized
                      onError={(e) => {
                        e.currentTarget.onerror = null
                        e.currentTarget.src = "/home/category-thumbnail-01.png"
                      }}
                    />
                  </Box>
                  <Box className="categoryItemFlag">
                    <Image
                      src={product.country?.country_flag || "/flag/usa.svg"}
                      alt="country flag"
                      width={32}
                      height={32}
                      unoptimized
                      onError={(e) => {
                        e.currentTarget.onerror = null
                        e.currentTarget.src = "/flag/usa.svg"
                      }}
                    />
                  </Box>
                </Box>
                <Stack
                  spacing={0.5}
                  sx={{ width: "100%" }}
                  className="categoryItemContent"
                >
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontSize: { xs: "14px", md: "16px" },
                      fontWeight: 700,
                      color: "#030303",
                      mb: 0.5,
                    }}
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "12px", md: "14px" },
                      fontWeight: 700,
                      color: "#7FAF0D",
                    }}
                  >
                    {/* {product.discount} */}
                  </Typography>
                </Stack>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  )
}
