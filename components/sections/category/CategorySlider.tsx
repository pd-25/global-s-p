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

interface CategoryItem {
  id: number
  title: string
  image: any
  flag: any
  discount: string
}

interface CategorySliderProps {
  categories: CategoryItem[]
}

export default function CategorySlider({ categories }: CategorySliderProps) {
  return (
    <Box component="section" className="categorySliderWrapper secPadd pb-0">
      <Container>
        <Box className="sectionHeading" sx={{ textAlign: "center" }}>
          <Typography variant="h2" component="h2">
            Product Category
          </Typography>
          <Typography variant="body1" component="p">
            Make Passive Income Online
          </Typography>
        </Box>
        <Box className="shortTitle">
          <Typography variant="h3" component="h3">
            Product <span>Recommendation</span>
          </Typography>
        </Box>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          navigation
          autoplay={false}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 16,
            },
          }}
          className="category-swiper"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <Box className="categoryItem">
                <Link href={`/category/${category.id}`}></Link>
                <Box className="categoryItemImage">
                  <Box className="holder">
                    <Image
                      src={category.image}
                      alt={category.title}
                      width={190}
                      height={190}
                    />
                  </Box>
                  <Box className="categoryItemFlag">
                    <Image
                      src={category.flag}
                      alt="country flag"
                      width={32}
                      height={32}
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
                    {category.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "12px", md: "14px" },
                      fontWeight: 700,
                      color: "#7FAF0D",
                    }}
                  >
                    {category.discount}
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
