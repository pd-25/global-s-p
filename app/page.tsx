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

import CategorySlider from "@/components/sections/category/CategorySlider"
import Icon from "@/components/icon/Icon"
import { AnimateOnScroll } from "@/components/animations"

import Link from "next/link"
import Image from "next/image"









// Partners/Clients/Vendor images


import perfectVendorBg from "@/public/home/perfect-vendor-pic.webp"




import Banner from "@/components/sections/banner/Banner"
import Statistics from "@/components/sections/statistics/Statistics"
import CategoryWiseProducts from "@/components/sections/category-wise-product/CategoryWiseProducts"
import TopBrands from "@/components/sections/top-brands/TopBrands"
import MarketplaceCards from "@/components/sections/marketplace-cards/MarketplaceCards"
import PartnerInfo from "@/components/sections/partners/PartnerInfo"
import PartnerSlider from "@/components/sections/partners/PartnerSlider"
import BlogList from "@/components/sections/blog/BlogList"
import Testimonials from "@/components/sections/testimonials/Testimonials"

// Image paths - add your images to the public folder
const ukFlag = "/home/flag-uk.svg"
const pakistanFlag = "/home/flag-pk.svg"
const uaeFlag = "/home/flag-uae.svg"
const bangladeshFlag = "/home/flag-bd.svg"



export default function Home() {
  // Counter hooks for all statistics

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

      {/* banner-section */}
      <Banner />
      {/* banner-section */}
      {/* statistics-section */}
      <Statistics />
      {/* statistics-section */}
      {/* product-category-slider-section */}
      <AnimateOnScroll animation="fade-up">
        <CategorySlider categories={categories} />
      </AnimateOnScroll>
      {/* product-category-slider-section */}
      {/* product-showcase-section */}

      <CategoryWiseProducts />

      {/* product-showcase-section */}
      {/* top-brands-section */}
      <TopBrands />
      {/* top-brands-section */}
      {/* marketplace-section */}
      <MarketplaceCards />
      {/* marketplace-section */}
      {/* our-partners-section */}
      <PartnerInfo />
      {/* our-partners-section */}
      {/* our-partners-slider-section */}
      <PartnerSlider />
      {/* our-partner-slider-section */}
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
      {/* our-latest-blog */}
    <BlogList />
      {/* our-latest-blog */}
      {/* testimonials-section */}
      <Testimonials />
      {/* testimonials-section */}

    </>
  )
}
