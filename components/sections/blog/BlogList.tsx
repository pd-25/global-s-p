"use client"

import { Box, Button, Container, Typography } from "@mui/material"
import { Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
// Blog images
import blogImage1 from "@/public/home/blog-thumbnail-01.webp"
import blogImage2 from "@/public/home/blog-thumbnail-02.webp"
import blogImage3 from "@/public/home/blog-thumbnail-03.webp"
import blogImage4 from "@/public/home/blog-thumbnail-04.webp"
import Image from "next/image"
import { useSliderNavigation } from "@/hooks/useSliderNavigation"

const blogs = [
  {
    id: 1,
    image: blogImage1,
    title: "Are you having trouble finding the right dog?",
    link: "/",
  },
  {
    id: 2,
    image: blogImage2,
    title: "Are you having trouble finding the right dog?",
    link: "/",
  },
  {
    id: 3,
    image: blogImage3,
    title: "Are you having trouble finding the right dog?",
    link: "/",
  },
  {
    id: 4,
    image: blogImage4,
    title: "Are you having trouble finding the right dog?",
    link: "/",
  },
]

export default function BlogList() {
  const { showNavigation } = useSliderNavigation(
    blogs.length,
    1, // default slidesPerView
    {
      768: 2,
      1024: 3,
      1400: 4,
    }
  )
  return (
    <Box component="section" className="ourBlogWrapper secPadd pb-0">
      <Container>
        <Box className="sectionHeading" sx={{ textAlign: "center" }}>
          <Typography variant="h2" component="h2">
            Inside Business: The B2B blog from europages
          </Typography>
          <Typography variant="body1" component="p">
            Most trending business topics for you
          </Typography>
        </Box>
        <Box className="blogSliderOuter" sx={{ mt: 4 }}>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
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
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1400: {
                slidesPerView: 4,
                spaceBetween: 34,
              },
            }}
            className="blog-swiper"
          >
            {showNavigation && (
              <Box className="ComSliderNavigation">
                <Box className="swiper-button-prev"></Box>
                <Box className="swiper-button-next"></Box>
              </Box>
            )}
            {blogs.map((blog) => (
              <SwiperSlide key={blog.id}>
                <Box className="blogCard">
                  <Box className="blogCardImage">
                    <Image src={blog.image} alt="blog-image" />
                  </Box>
                  <Box className="blogCardContent">
                    <Typography variant="h3" component="h3">
                      {blog.title}
                    </Typography>
                    <Button variant="text" href={blog.link}>
                      Read More
                    </Button>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  )
}
