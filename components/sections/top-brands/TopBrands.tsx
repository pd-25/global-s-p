"use client"

import { Box, Button, Container, Stack, Typography } from "@mui/material"
import Icon from "@/components/ui/icon/Icon"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
// Top brands & marketplace images
import topBrandImage from "@/public/home/top-brand-thumbnail.png"
import appleLogo from "@/public/home/apple-logo.png"
import Image from "next/image"
import { useSliderNavigation } from "@/hooks/useSliderNavigation"

const brands = [
  {
    id: 1,
    name: "IPHONE",
    logo: appleLogo,
    image: topBrandImage,
    offer: "UP to 80% OFF",
    brandType: "apple",
  },
  {
    id: 2,
    name: "IPHONE",
    logo: appleLogo,
    image: topBrandImage,
    offer: "UP to 80% OFF",
    brandType: "realme",
  },
  {
    id: 3,
    name: "IPHONE",
    logo: appleLogo,
    image: topBrandImage,
    offer: "UP to 80% OFF",
    brandType: "xiaomi",
  },
]

export default function TopBrands() {
  const { showNavigation } = useSliderNavigation(
    brands.length,
    1, // default slidesPerView
    {
      640: 1,
      768: 2,
      992: 2,
      1280: 3,
    }
  )
  return (
    <Box component="section" className="topBrandsWrapper secPadd pb-0">
      <Container>
        <Box
          className="shortTitle"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h3" component="h3">
            Top <span>Electronics Brands</span>
          </Typography>

          <Button variant="text" href="/">
            View All
            <Icon name="arrowRight" width={10} height={10} />
          </Button>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            speed={1500}
            navigation={
              showNavigation
                ? {
                    nextEl: ".ComSliderNavigation .swiper-button-next",
                    prevEl: ".ComSliderNavigation .swiper-button-prev",
                  }
                : false
            }
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              992: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
            }}
            className="top-brands-swiper"
          >
            {showNavigation && (
              <Box className="ComSliderNavigation">
                <Box className="swiper-button-prev"></Box>
                <Box className="swiper-button-next"></Box>
              </Box>
            )}
            {brands.map((brand) => (
              <SwiperSlide key={brand.id}>
                <Box
                  className={`topBrandsCard topBrandsCard--${brand.brandType}`}
                  data-brand-type={brand.brandType}
                >
                  <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box className="brandContent">
                      <Typography
                        variant="body1"
                        component="p"
                        className="brandName"
                      >
                        {brand.name}
                      </Typography>
                      <Box className="brandLogo">
                        <Image src={brand.logo} alt="brand-logo" />
                      </Box>
                      <Typography
                        variant="h3"
                        component="h3"
                        className="brandOffer"
                      >
                        {brand.offer}
                      </Typography>
                    </Box>
                    <Box className="brandImage">
                      <Image src={brand.image} alt="brand-image" />
                    </Box>
                  </Stack>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  )
}
