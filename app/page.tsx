"use client"

import { useState, useEffect, useRef } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "./home.scss"
import "./category-slider.scss"
import styles from "./page.module.css"

import CategorySlider from "@/components/sections/category/CategorySlider"
import Footer from "@/components/layout/footer/Footer"
import Header from "@/components/layout/header/Header"
import Icon from "@/components/icon/Icon"

import Link from "next/link"
import Image from "next/image"

// Hero section images
import HeroBg from "@/public/home/home-hero-pic.webp"
import HeroPerson from "@/public/home/home-hero-person.webp"
import SearchIcon from "@/public/search.png"

// Statistics section images
import StatisticsParralax from "@/public/home/home-statistics-parralax.png"
import StatisticsGlobe from "@/public/home/home-statistics-globe.png"
import StatisticsIcon1 from "@/public/home/home-statistics-icon-01.svg"
import StatisticsIcon2 from "@/public/home/home-statistics-icon-02.svg"
import StatisticsIcon3 from "@/public/home/home-statistics-icon-03.svg"
import StatisticsIcon4 from "@/public/home/home-statistics-icon-04.svg"
import StatisticsIcon5 from "@/public/home/home-statistics-icon-05.svg"

// Featured & Product section images
import featuredProductImage from "@/public/home/featured-product-thumbnail.webp"
import productThumbnail1 from "@/public/home/product-thumbnail-01.webp"
import productThumbnail2 from "@/public/home/product-thumbnail-01.webp"

// Top brands & marketplace images
import topBrandImage from "@/public/home/top-brand-thumbnail.png"
import appleLogo from "@/public/home/apple-logo.png"
import marketplaceImage1 from "@/public/home/market-place-icon-01.svg"
import marketplaceImage2 from "@/public/home/market-place-icon-02.svg"

// Partners/Clients/Vendor images
import ourPartnersAvatar from "@/public/home/partners-avatar.webp"
import ourClientsLogo1 from "@/public/home/dummy-logo-01.svg"
import ourClientsLogo2 from "@/public/home/dummy-logo-02.svg"
import ourClientsLogo3 from "@/public/home/dummy-logo-03.svg"
import ourClientsLogo4 from "@/public/home/dummy-logo-04.svg"
import perfectVendorBg from "@/public/home/perfect-vendor-pic.webp"

// Blog images
import blogImage1 from "@/public/home/blog-thumbnail-01.webp"
import blogImage2 from "@/public/home/blog-thumbnail-02.webp"
import blogImage3 from "@/public/home/blog-thumbnail-03.webp"
import blogImage4 from "@/public/home/blog-thumbnail-04.webp"

// Testimonial images
import clientAvatar1 from "@/public/home/testimonial-avatar-01.webp"
import clientAvatar2 from "@/public/home/testimonial-avatar-02.webp"
import testimonialLogo from "@/public/home/testimonial-logo.svg"

// Image paths - add your images to the public folder
const ukFlag = "/home/flag-uk.svg"
const pakistanFlag = "/home/flag-pk.svg"
const uaeFlag = "/home/flag-uae.svg"
const bangladeshFlag = "/home/flag-bd.svg"

// Custom hook for animated counter
function useCounter(
  end: number,
  duration: number = 2000,
  decimals: number = 1
) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true)
            let startTime: number | null = null
            const startValue = 0

            const animate = (currentTime: number) => {
              if (startTime === null) startTime = currentTime
              const progress = Math.min((currentTime - startTime) / duration, 1)

              // Easing function for smooth animation
              const easeOutQuart = 1 - Math.pow(1 - progress, 4)
              const currentCount =
                startValue + (end - startValue) * easeOutQuart

              setCount(parseFloat(currentCount.toFixed(decimals)))

              if (progress < 1) {
                requestAnimationFrame(animate)
              } else {
                setCount(end)
              }
            }

            requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [end, duration, decimals, hasStarted])

  return { count, elementRef }
}

export default function Home() {
  // Counter hooks for all statistics
  const { count: b2bCount, elementRef: b2bRef } = useCounter(2.2, 1000, 1)
  const { count: sectorsCount, elementRef: sectorsRef } = useCounter(
    111,
    1000,
    0
  )
  const { count: productsCount, elementRef: productsRef } = useCounter(
    670,
    1000,
    0
  )
  const { count: picturesCount, elementRef: picturesRef } = useCounter(
    1.3,
    1000,
    1
  )
  const { count: buyersCount, elementRef: buyersRef } = useCounter(1, 1000, 0)

  const categories = [
    {
      id: 1,
      title: "Electronics Item",
      image: "/home/category-thumbnail-01.png",
      flag: ukFlag,
      discount: "UP to 50% OFF",
    },
    {
      id: 2,
      title: "Vegitables",
      image: "/home/category-thumbnail-02.png",
      flag: pakistanFlag,
      discount: "UP to 50% OFF",
    },
    {
      id: 3,
      title: "Fruits",
      image: "/home/category-thumbnail-03.png",
      flag: uaeFlag,
      discount: "UP to 50% OFF",
    },
    {
      id: 4,
      title: "Strowberry",
      image: "/home/category-thumbnail-04.png",
      flag: bangladeshFlag,
      discount: "UP to 50% OFF",
    },
    {
      id: 5,
      title: "Mango",
      image: "/home/category-thumbnail-05.png",
      flag: uaeFlag,
      discount: "UP to 50% OFF",
    },
    {
      id: 6,
      title: "Cherry",
      image: "/home/category-thumbnail-06.png",
      flag: ukFlag,
      discount: "UP to 50% OFF",
    },
  ]

  return (
    <>
      <Header />
      {/* banner-section */}
      <Box
        component="section"
        className="heroWrapper"
        sx={{ position: "relative" }}
      >
        <Box className="heroBg">
          <Image src={HeroBg} alt="hero-bg" width={1000} height={1080} />
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
                      fontSize: { xs: "14px", md: "24px" },
                      lineHeight: 1.5,
                      color: "white",
                    }}
                  >
                    Post your request to verified suppliers.
                  </Typography>
                </Box>
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
                        color: "white",
                        padding: "0 70px 0 15px",
                        fontSize: "15px",
                        height: "61px",
                        "& fieldset": {
                          borderColor: "white",
                          borderRadius: "18px",
                          transition: "all 0.3s ease",
                        },
                        "&:hover fieldset": {
                          borderColor: "white",
                        },
                        "& .MuiInputBase-input::placeholder": {
                          color: "white",
                          opacity: 0.7,
                          fontSize: "15px",
                        },
                      },
                      "& .MuiOutlinedInput-root.Mui-focused": {
                        "& fieldset": {
                          borderColor: "#7FAF0D",
                        },
                      },
                    }}
                  />
                  <Button variant="contained" type="submit">
                    <Image
                      src={SearchIcon}
                      alt="search-icon"
                      width={32}
                      height={32}
                    />
                  </Button>
                </Stack>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  className="btnHolder"
                >
                  <Button
                    variant="contained"
                    component={Link}
                    href="/"
                    sx={{ fontSize: "20px" }}
                  >
                    Get Quote
                  </Button>
                  <Button
                    variant="outlined"
                    component={Link}
                    href="/"
                    sx={{ fontSize: "20px" }}
                  >
                    Learn More
                  </Button>
                </Stack>
              </Stack>
            </Box>
            <Box
              sx={{ flex: 1, width: { xs: "100%", md: "50%" } }}
              className="heroPersonImage"
            >
              <Image src={HeroPerson} alt="hero-person" />
            </Box>
          </Box>
        </Container>
      </Box>
      {/* banner-section */}
      {/* statistics-section */}
      <Box
        component="section"
        className="statisticsWrapper"
        sx={{ position: "relative" }}
      >
        <Box className="statisticsParralax">
          <Image
            src={StatisticsParralax}
            alt="statistics-bg"
            width={1000}
            height={1080}
          />
        </Box>
        <Box className="statisticsGlobe">
          <Image
            src={StatisticsGlobe}
            alt="statistics-globe"
            width={360}
            height={360}
          />
        </Box>
        <Box className="container">
          <Box
            className="statisticsContent"
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 2,
            }}
          >
            {/* statistics-item */}
            <Box className="statisticsItem">
              <Box className="statisticsItemIcon">
                <Image
                  src={StatisticsIcon1}
                  alt="statistics-icon"
                  width={34}
                  height={34}
                />
              </Box>
              <Box className="statisticsItemContent" ref={b2bRef}>
                <Typography variant="h3" component="h3">
                  {b2bCount} <span>Million </span>
                </Typography>
                <Typography variant="body1" component="p">
                  B2B Providers
                </Typography>
              </Box>
            </Box>
            {/* statistics-item */}
            {/* statistics-item */}
            <Box className="statisticsItem">
              <Box className="statisticsItemIcon">
                <Image
                  src={StatisticsIcon2}
                  alt="statistics-icon"
                  width={34}
                  height={34}
                />
              </Box>
              <Box className="statisticsItemContent" ref={sectorsRef}>
                <Typography variant="h3" component="h3">
                  {Math.round(sectorsCount)}
                </Typography>
                <Typography variant="body1" component="p">
                  Industry Sectors
                </Typography>
              </Box>
            </Box>
            {/* statistics-item */}

            {/* statistics-item */}
            <Box className="statisticsItem">
              <Box className="statisticsItemIcon">
                <Image
                  src={StatisticsIcon3}
                  alt="statistics-icon"
                  width={34}
                  height={34}
                />
              </Box>
              <Box className="statisticsItemContent" ref={productsRef}>
                <Typography variant="h3" component="h3">
                  {Math.round(productsCount)}.000
                </Typography>
                <Typography variant="body1" component="p">
                  Products
                </Typography>
              </Box>
            </Box>
            {/* statistics-item */}

            {/* statistics-item */}
            <Box className="statisticsItem">
              <Box className="statisticsItemIcon">
                <Image
                  src={StatisticsIcon4}
                  alt="statistics-icon"
                  width={34}
                  height={34}
                />
              </Box>
              <Box className="statisticsItemContent" ref={picturesRef}>
                <Typography variant="h3" component="h3">
                  {picturesCount} <span>Million</span>
                </Typography>
                <Typography variant="body1" component="p">
                  Pictures & Video
                </Typography>
              </Box>
            </Box>
            {/* statistics-item */}

            {/* statistics-item */}
            <Box className="statisticsItem">
              <Box className="statisticsItemIcon">
                <Image
                  src={StatisticsIcon5}
                  alt="statistics-icon"
                  width={34}
                  height={34}
                />
              </Box>
              <Box className="statisticsItemContent" ref={buyersRef}>
                <Typography variant="h3" component="h3">
                  {Math.round(buyersCount)} <span>Million</span>
                </Typography>
                <Typography variant="body1" component="p">
                  Buyers per month
                </Typography>
              </Box>
            </Box>
            {/* statistics-item */}
          </Box>
          <Box className="actionBtn" sx={{ textAlign: "center", mt: 4 }}>
            <Button variant="contained" component={Link} href="/">
              Get Multiple Quotes
            </Button>
          </Box>
        </Box>
      </Box>
      {/* statistics-section */}
      {/* product-category-slider-section */}
      <CategorySlider categories={categories} />
      {/* product-category-slider-section */}
      {/* product-showcase-section */}
      <Box component="section" className="categorySliderWrapper secPadd">
        <Container>
          <Box className="sectionHeading" sx={{ textAlign: "center" }}>
            <Typography variant="h2" component="h2">
              Search by Product Category And get inspired
            </Typography>
            <Typography variant="body1" component="p">
              Make Passive Income Online
            </Typography>
          </Box>
          <Box className="productShowcaseRowOuter">
            <Box className="productShowcaseRowInner">
              <Box className="shortTitle">
                <Typography variant="h3" component="h3">
                  Product <span>Recommendation</span>
                </Typography>
              </Box>
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
                    <Box className="productShowcaseColLeft">
                      <Box className="featuredProductCard">
                        <Box className="discountBadge">
                          <Typography variant="body1" component="p">
                            56% <span>OFF</span>
                          </Typography>
                        </Box>
                        <Box className="featuredProductCardImage">
                          <Image
                            src={featuredProductImage}
                            alt="product-showcase-image"
                            width={200}
                            height={200}
                          />
                        </Box>
                        <Box className="featuredProductCardContent">
                          <Typography
                            variant="body1"
                            component="p"
                            className="stockStatus"
                          >
                            2.2K Products
                          </Typography>
                          <Typography
                            variant="h3"
                            component="h4"
                            className="productCategory"
                          >
                            Electronics Items And More
                          </Typography>
                          <Typography
                            variant="body1"
                            component="p"
                            className="stockStatus"
                          >
                            2.2K Products
                          </Typography>
                          <Box className="actionBtn">
                            <Button
                              variant="contained"
                              component={Link}
                              href="/"
                            >
                              Source Now
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="productShowcaseColRight">
                      <Stack className="productShowcaseCardStack">
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            component={Link}
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src={productThumbnail1}
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            component={Link}
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src={productThumbnail2}
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            component={Link}
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src={productThumbnail1}
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            component={Link}
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src={productThumbnail2}
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            component={Link}
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src={productThumbnail1}
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            component={Link}
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src={productThumbnail2}
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            component={Link}
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src={productThumbnail1}
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            component={Link}
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src={productThumbnail2}
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                      </Stack>
                    </Box>
                  </Box>
                </Container>
              </Box>
            </Box>
            <Box className="productShowcaseRowInner">
              <Box className="shortTitle">
                <Typography variant="h3" component="h3">
                  Product <span>Recommendation</span>
                </Typography>
              </Box>
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
                    <Box className="productShowcaseColLeft">
                      <Box className="featuredProductCard">
                        <Box className="discountBadge">
                          <Typography variant="body1" component="p">
                            56% <span>OFF</span>
                          </Typography>
                        </Box>
                        <Box className="featuredProductCardImage">
                          <Image
                            src={featuredProductImage}
                            alt="product-showcase-image"
                            width={200}
                            height={200}
                          />
                        </Box>
                        <Box className="featuredProductCardContent">
                          <Typography
                            variant="body1"
                            component="p"
                            className="stockStatus"
                          >
                            2.2K Products
                          </Typography>
                          <Typography
                            variant="h3"
                            component="h4"
                            className="productCategory"
                          >
                            Electronics Items And More
                          </Typography>
                          <Typography
                            variant="body1"
                            component="p"
                            className="stockStatus"
                          >
                            2.2K Products
                          </Typography>
                          <Box className="actionBtn">
                            <Button
                              variant="contained"
                              component={Link}
                              href="/"
                            >
                              Source Now
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="productShowcaseColRight">
                      <Stack className="productShowcaseCardStack">
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            component={Link}
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src={productThumbnail1}
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            component={Link}
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src={productThumbnail2}
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            component={Link}
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src={productThumbnail1}
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            component={Link}
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src={productThumbnail2}
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            component={Link}
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src={productThumbnail1}
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            component={Link}
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src={productThumbnail2}
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            component={Link}
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src={productThumbnail1}
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            component={Link}
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src={productThumbnail2}
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                      </Stack>
                    </Box>
                  </Box>
                </Container>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* product-showcase-section */}
      {/* top-brands-section */}
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

            <Button variant="text" component={Link} href="/">
              View All
              <Icon name="arrowRight" width={10} height={10} />
            </Button>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
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
                  slidesPerView: 2,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 16,
                },
              }}
              className="top-brands-swiper"
            >
              {[
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
              ].map((brand) => (
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
      {/* top-brands-section */}
      {/* marketplace-section */}
      <Box component="section" className="marketplaceWrapper secPadd">
        <Container>
          <Box className="sectionHeading" sx={{ textAlign: "center" }}>
            <Typography variant="h2" component="h2">
              Search by Product Category And get inspired
            </Typography>
            <Typography variant="body2" component="p">
              Make Passive Income Online
            </Typography>
          </Box>
          <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
            <Box
              className="marketplaceCard colorPrimary"
              sx={{ flex: 1, width: { xs: "100%", md: "50%", lg: "50%" } }}
            >
              <Box className="marketplaceCardInner">
                <Box className="marketplaceCardHeader">
                  <Box className="marketplaceCardHeaderContent">
                    <Typography variant="body1" component="p">
                      2.2K Products
                    </Typography>
                    <Typography variant="h3" component="h3">
                      Electronics Items And More
                    </Typography>
                    <Button
                      variant="contained"
                      color="secondary"
                      component={Link}
                      href="/"
                    >
                      Source Now
                    </Button>
                  </Box>
                  <Box className="marketplaceCardHeaderImage">
                    <Image src={marketplaceImage1} alt="marketplace-image" />
                  </Box>
                </Box>
                <Box className="marketplaceCardBody">
                  <Typography variant="body1" component="p">
                    We have had perhaps the best experience of getting our
                    children counselled for their career with the psychologist
                    at Tera Parichay. She was not only incredibly knowledgeable
                    and helpful but also ethical. While we had tried services of
                    other "career
                  </Typography>
                  <Button variant="contained" component={Link} href="/">
                    Source Now
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box
              className="marketplaceCard colorSecondary"
              sx={{ flex: 1, width: { xs: "100%", md: "50%", lg: "50%" } }}
            >
              <Box className="marketplaceCardInner">
                <Box className="marketplaceCardHeader">
                  <Box className="marketplaceCardHeaderContent">
                    <Typography variant="body1" component="p">
                      2.2K Products
                    </Typography>
                    <Typography variant="h3" component="h3">
                      Electronics Items And More
                    </Typography>
                    <Button variant="contained" component={Link} href="/">
                      Source Now
                    </Button>
                  </Box>
                  <Box className="marketplaceCardHeaderImage">
                    <Image src={marketplaceImage2} alt="marketplace-image" />
                  </Box>
                </Box>
                <Box className="marketplaceCardBody">
                  <Typography variant="body1" component="p">
                    We have had perhaps the best experience of getting our
                    children counselled for their career with the psychologist
                    at Tera Parichay. She was not only incredibly knowledgeable
                    and helpful but also ethical. While we had tried services of
                    other "career
                  </Typography>
                  <Button variant="contained" component={Link} href="/">
                    Source Now
                  </Button>
                </Box>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
      {/* marketplace-section */}
      {/* our-partners-section */}
      <Box component="section" className="ourPartnersWrapper">
        <Container>
          <Box className="sectionHeading" sx={{ textAlign: "center" }}>
            <Typography variant="h2" component="h2">
              Explore Our Partner Section
            </Typography>
            <Typography variant="body2" component="p">
              Make Passive Income Online
            </Typography>
          </Box>
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            justifyContent="space-between"
            spacing={4}
          >
            <Box
              className="ourPartnersCol"
              sx={{ flex: 1, width: { xs: "100%", md: "50%", lg: "50%" } }}
            >
              <Box className="ourPartnersContentCard">
                <Typography variant="h3" component="h3">
                  <span> For Partners,</span> and the ones
                </Typography>
                <Typography variant="h4" component="h4">
                  who become experts.
                </Typography>
                <Typography variant="body1" component="p">
                  Whether you're a solo designer or part of a team, a junior or
                  a senior, at an agency or a large organization, Prime has you
                  covered.
                </Typography>
                <Typography variant="body1" component="p">
                  It’s not about number of components. With top Figma tricks &
                  techniques, battle-tested design system approach
                </Typography>
                <Button variant="contained" component={Link} href="/">
                  Know More
                </Button>
              </Box>
            </Box>
            <Box
              className="ourPartnersCol"
              sx={{ flex: 1, width: { xs: "100%", md: "50%", lg: "50%" } }}
            >
              <Box className="ourPartnersImageCard">
                <Image src={ourPartnersAvatar} alt="our-partners-image" />
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
      {/* our-partners-section */}
      {/* our-clients-section */}
      <Box component="section" className="ourClientsWrapper secPadd">
        <Container>
          <Box className="sectionHeading" sx={{ textAlign: "center" }}>
            <Typography variant="h2" component="h2">
              Our Valuable Clients
            </Typography>
            <Typography variant="body2" component="p">
              Supported By
            </Typography>
            {/* Left to Right Marquee */}
            <Box
              sx={{
                mt: 4,
                mb: 2,
                overflow: "hidden",
                position: "relative",
                "&:hover .marquee-track": {
                  animationPlayState: "paused",
                },
              }}
              className="marquee-container"
            >
              <Box className="marquee-track marquee-track--ltr">
                {[
                  ourClientsLogo1,
                  ourClientsLogo2,
                  ourClientsLogo3,
                  ourClientsLogo4,
                  ourClientsLogo1,
                  ourClientsLogo2,
                  ourClientsLogo3,
                  ourClientsLogo4,
                ].map((logo, index) => (
                  <Box
                    key={`ltr-${index}`}
                    className="ourClientsLogo"
                    sx={{
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 20px",
                      opacity: 0.7,
                      height: "70px",
                      transition: "opacity 0.3s ease",
                      "&:hover": {
                        opacity: 1,
                      },
                    }}
                  >
                    <Image
                      src={logo}
                      alt="our-clients-logo"
                      width={150}
                      height={80}
                    />
                  </Box>
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  ourClientsLogo1,
                  ourClientsLogo2,
                  ourClientsLogo3,
                  ourClientsLogo4,
                  ourClientsLogo1,
                  ourClientsLogo2,
                  ourClientsLogo3,
                  ourClientsLogo4,
                ].map((logo, index) => (
                  <Box
                    key={`ltr-duplicate-${index}`}
                    className="ourClientsLogo"
                    sx={{
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 20px",
                      opacity: 0.7,
                      transition: "opacity 0.3s ease",
                      "&:hover": {
                        opacity: 1,
                      },
                    }}
                  >
                    <Image
                      src={logo}
                      alt="our-clients-logo"
                      width={150}
                      height={80}
                    />
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Right to Left Marquee */}
            <Box
              sx={{
                mt: 2,
                overflow: "hidden",
                position: "relative",
                "&:hover .marquee-track": {
                  animationPlayState: "paused",
                },
              }}
              className="marquee-container"
            >
              <Box className="marquee-track marquee-track--rtl">
                {[
                  ourClientsLogo1,
                  ourClientsLogo2,
                  ourClientsLogo3,
                  ourClientsLogo4,
                  ourClientsLogo1,
                  ourClientsLogo2,
                  ourClientsLogo3,
                  ourClientsLogo4,
                ].map((logo, index) => (
                  <Box
                    key={`rtl-${index}`}
                    className="ourClientsLogo"
                    sx={{
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 20px",
                      opacity: 0.7,
                      transition: "opacity 0.3s ease",
                      "&:hover": {
                        opacity: 1,
                      },
                    }}
                  >
                    <Image
                      src={logo}
                      alt="our-clients-logo"
                      width={150}
                      height={80}
                    />
                  </Box>
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  ourClientsLogo1,
                  ourClientsLogo2,
                  ourClientsLogo3,
                  ourClientsLogo4,
                  ourClientsLogo1,
                  ourClientsLogo2,
                  ourClientsLogo3,
                  ourClientsLogo4,
                ].map((logo, index) => (
                  <Box
                    key={`rtl-duplicate-${index}`}
                    className="ourClientsLogo"
                    sx={{
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 20px",
                      opacity: 0.7,
                      transition: "opacity 0.3s ease",
                      "&:hover": {
                        opacity: 1,
                      },
                    }}
                  >
                    <Image
                      src={logo}
                      alt="our-clients-logo"
                      width={150}
                      height={80}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* our-clients-section */}
      {/* perfect-vendor-section */}
      <Box component="section" className="perfectVendorWrapper">
        <Box className="perfectVendorBg">
          <Image src={perfectVendorBg} alt="perfect-vendor-bg" />
        </Box>
        <Container>
          <Box className="sectionHeading">
            <Typography variant="h2" component="h2">
              <span>Worried about finding</span> The Perfect Vendor
            </Typography>
            <Typography variant="body1" component="p">
              Avail Fully Interactive Remote <strong> Counselling </strong>
              from the Comfort of Your Home
            </Typography>
            <Button variant="contained" component={Link} href="/">
              Source Now
            </Button>
          </Box>
        </Container>
      </Box>
      {/* perfect-vendor-section */}
      {/* our-blog */}
      <Box component="section" className="ourBlogWrapper secPadd">
        <Container>
          <Box className="sectionHeading" sx={{ textAlign: "center" }}>
            <Typography variant="h2" component="h2">
              Blog Section
            </Typography>
            <Typography variant="body1" component="p">
              Desctiprion of blog
            </Typography>
          </Box>
          <Box className="blogSliderOuter" sx={{ mt: 4 }}>
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              navigation
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
              {[
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
              ].map((blog) => (
                <SwiperSlide key={blog.id}>
                  <Box className="blogCard">
                    <Box className="blogCardImage">
                      <Image src={blog.image} alt="blog-image" />
                    </Box>
                    <Box className="blogCardContent">
                      <Typography variant="h3" component="h3">
                        {blog.title}
                      </Typography>
                      <Button variant="text" component={Link} href={blog.link}>
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
      {/* our-blog */}
      {/* testimonials-section */}
      <Box component="section" className="testimonialsWrapper secPadd pt-0">
        <Container>
          <Box className="sectionHeading" sx={{ textAlign: "center" }}>
            <Typography variant="h2" component="h2">
              Testimonials By Our Clients
            </Typography>
            <Typography variant="body1" component="p">
              Begin planning your child’s career at the right time with
              internationally recognised career psychologists
            </Typography>
          </Box>
          <Box className="testimonialsSliderOuter" sx={{ mt: 4 }}>
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              navigation
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
                  slidesPerView: 1,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
              className="testimonials-swiper"
            >
              {[
                {
                  id: 1,
                  avatar: clientAvatar1,
                  name: "Priti Varma Sarin",
                  role: "Student",
                  text: 'We have had perhaps the best experience of getting our children counselled for their career with the psychologist at Tera Parichay. She was not only incredibly knowledgeable and helpful but also ethical. While we had tried services of other "career counsellors", we found that for them it was just another business, they weren\'t qualified for it, they had not studied for the field.',
                  link: "/",
                  colorScheme: "secondary",
                },
                {
                  id: 2,
                  avatar: clientAvatar2,
                  name: "Kavya Sethi",
                  role: "Student",
                  text: "My experience with counsellors at Tera Parichay, has been absolutely phenomenal. During the final years of my schooling, life had a lot of tough decision thrown my way, with respect to making big career choices. For a 16-year-old student, making these decisions, while having the pressure of excelling in my board examination was extremely stressful and overwhelming. ​However, through adequate guidance from the counsellors at Tera Parichay, this journey did not seem as tough or as overwhelming.",
                  link: "/",
                  colorScheme: "primary",
                },
              ].map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <Box
                    className={`testimonialsSliderCard testimonialsSliderCard--${testimonial.colorScheme}`}
                    data-color-scheme={testimonial.colorScheme}
                  >
                    <Box
                      className="cardHeader"
                      sx={{ display: "flex", alignItems: "end", gap: 2 }}
                    >
                      <Box className="clientAvatar">
                        <Image src={testimonial.avatar} alt="client-avatar" />
                      </Box>
                      <Box className="rating">
                        <Icon name="star" />
                        <Icon name="star" />
                        <Icon name="star" />
                        <Icon name="star" />
                        <Icon name="star" />
                      </Box>
                    </Box>
                    <Box className="cardContent">
                      <Typography variant="body1" component="p">
                        {testimonial.text}
                      </Typography>
                      <Button
                        variant="text"
                        component={Link}
                        href={testimonial.link}
                      >
                        Read More
                      </Button>
                    </Box>
                    <Box
                      className="cardFooter"
                      sx={{ display: "flex", gap: 2 }}
                    >
                      <Box className="clientName">
                        <Typography variant="h3" component="h3">
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body1" component="p">
                          {testimonial.role}
                        </Typography>
                      </Box>
                      <Box className="testimnonialLogo">
                        <Image src={testimonialLogo} alt="testimonial-logo" />
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Container>
      </Box>
      {/* testimonials-section */}
      <Footer />
    </>
  )
}
