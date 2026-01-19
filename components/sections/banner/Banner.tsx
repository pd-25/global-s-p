"use client"

import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material"
import Image from "next/image"
// Hero section images
import HeroBg from "@/public/home/home-hero-pic.webp"
import HeroPerson from "@/public/home/home-hero-person.webp"
import SearchIcon from "@/public/search.png"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

export default function Banner() {
  return (
    <Box
      component="section"
      className="heroWrapper"
      sx={{ position: "relative" }}
    >
      <Box className="heroFormOuter" sx={{ width: { xs: "100%", md: "100%" } }}>
        <Stack
          direction="row"
          spacing={2}
          className="searchForm"
          sx={{ alignItems: "flex-end" }}
        >
          <TextField
            id="standard-basic"
            placeholder="Search Items e,g, CNC Milling,Packaging , Gas"
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                fontSize: "15px",
                height: "61px",
                backgroundColor: "rgba(255,255,255,1)",
                borderRadius: "18px",
                padding: "0 0 0 0",
                "& fieldset": {
                  borderColor: "white",
                  borderRadius: "18px",
                  transition: "all 0.3s ease",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "& input": {
                  color: "#000",
                  padding: "0 70px 0 15px",
                  fontSize: "15px",
                  "&::placeholder": {
                    color: "#000",
                    opacity: 0.7,
                    fontSize: "15px",
                  },
                  backgroundColor: "transparent",
                }
              },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& fieldset": {
                  borderColor: "#7FAF0D",
                },
              },
            }}
          />
          <Button variant="contained" type="submit">
            <Image src={SearchIcon} alt="search-icon" width={32} height={32} />
          </Button>
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          className="btnHolder"
        >
          <Button variant="contained" href="/" sx={{ fontSize: "20px" }}>
            Get Quote
          </Button>
          <Button variant="outlined" href="/" sx={{ fontSize: "20px" }}>
            Learn More
          </Button>
        </Stack>
      </Box>
      {/* slider */}
      <Box className="heroSliderOuter">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          speed={1500}
          autoplay={false}
          // autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: false,
          // }}
          loop={true}
          className="hero-swiper"
        >
          <SwiperSlide>
            <Box className="heroSliderCard">
              <Box className="heroBg">
                {/* <Image
                  src="https://d18yn9dcojt05d.cloudfront.net/apps/visable-dev/homepage-frontend/_nuxt/market-place-home.Dp_XERVV.svg"
                  alt="hero-bg"
                  width={1000}
                  height={1080}
                /> */}
                <picture>
                  <source srcSet="/home/banner-slider-pic-01.svg" media="(min-width: 768px)" />
                  <source srcSet="/home/banner-slider-pic-mobile-01.svg" media="(max-width: 767px)" />
                  <img src="/home/banner-slider-pic-01.svg" alt="hero-bg" width={1000} height={1080} />
                </picture>
              </Box>
              <Container sx={{ position: "relative", zIndex: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 3,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{ flex: 1, width: { xs: "100%", md: "50%" } }}
                    className="heroTextWrapper"
                  >
                    <Stack spacing={3}>
                      <Box className="heroText">
                        <Typography
                          variant="h1"
                          component="h1"
                          sx={{
                            mb: 2,
                            color: "white",
                          }}
                        >
                          The leading B2B marketplace for European trade
                        </Typography>
                        <Typography
                          variant="body1"
                          component="p"
                          sx={{
                            fontSize: { md: "24px" },
                            lineHeight: 1.5,
                            color: "white",
                          }}
                        >
                          Post your request to verified suppliers.
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              </Container>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className="heroSliderCard">
              <Box className="heroBg">
                {/* <Image
                  src="/home/banner4.jpg"
                  alt="hero-bg"
                  width={1000}
                  height={1080}
                /> */}
                <picture>
                  <source srcSet="/home/banner4.jpg" media="(min-width: 768px)" />
                  <source srcSet="/home/banner4-mobile.jpg" media="(max-width: 767px)" />
                  <img src="/home/banner4.jpg" alt="hero-bg" width={1000} height={1080} />
                </picture>
              </Box>
              <Container sx={{ position: "relative", zIndex: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 3,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{ flex: 1, width: { xs: "100%", md: "50%" } }}
                    className="heroTextWrapper"
                  >
                    <Stack spacing={3}>
                      <Box className="heroText">
                        <Typography
                          variant="h1"
                          component="h1"
                          sx={{
                            mb: 2,
                            color: "white",
                          }}
                        >
                          The leading B2B marketplace for European trade
                        </Typography>
                        <Typography
                          variant="body1"
                          component="p"
                          sx={{
                            fontSize: { md: "24px" },
                            lineHeight: 1.5,
                            color: "white",
                          }}
                        >
                          Post your request to verified suppliers.
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              </Container>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
      {/* slider */}
    </Box>
  )
}
