// app/(website)/[locale]/product-details/[slug]/ProductClientView.tsx
"use client"

import React from "react"
import Image from "next/image"
import {
    Box,
    Container,
    Typography,
    Stack,
    IconButton,
    Breadcrumbs,
    Link,
} from "@mui/material"
import Icon from "@/components/ui/icon/Icon"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "@/app/(website)/product.scss"
import homeIcon from "@/public/home-icon.svg"
import productFeaturedImage from "@/public/product/single-product-featured-pic.png"

import { useSliderNavigation } from "@/hooks/useSliderNavigation"
import SupplierInfo from "@/components/sections/supplier/SupplierInfo"
import SimilarProduct from "@/components/sections/product/SimilarProduct"
import ProductDetailsInfo from "@/components/sections/product/ProductDetailsInfo"
import SupplierWithProducts from "@/components/sections/product/SupplierWithProducts"
import TrendingProducts from "@/components/sections/product/TrendingProducts"
import { routes } from "@/config/routes"

// Define the props coming from the Server Component
interface ProductClientViewProps {
    product: any; // Replace 'any' with your actual Product type if you have one
    supplier: any; // Replace 'any' with your actual Supplier type
    supplierProducts: any[];
}

export default function ProductClientView({ product, supplier, supplierProducts }: ProductClientViewProps) {
    const [sidebarOpen, setSidebarOpen] = React.useState(false)
    const toggleSideBar = () => setSidebarOpen((prev) => !prev)

    const productImages = [
        productFeaturedImage, productFeaturedImage, productFeaturedImage,
        productFeaturedImage, productFeaturedImage, productFeaturedImage
    ]

    const { showNavigation } = useSliderNavigation(
        productImages.length,
        1, // default slidesPerView
    )
    console.log('roduct, supplier', product, supplier);


    return (
        <>
            <Box
                component="section"
                className="collectionListingProductWrapper"
            >
                <Container>
                    {/* Breadcrumbs */}
                    <Stack
                        direction="row"
                        className="productBreadcrumbSearchWrapper"
                        spacing={2}
                        justifyContent="space-between"
                        alignItems="center"
                        flexWrap="wrap"
                    >
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" color="inherit" href="/">
                                <Image src={homeIcon} alt="home" width={36} height={36} />
                            </Link>
                            <Link underline="hover" color="inherit" href="/products&searvices">
                                <Typography sx={{ color: "text.primary" }}>
                                    Product And services
                                </Typography>
                            </Link>
                            <Link underline="hover" color="inherit" href={routes.serviceProductListPage.replace("[categoryId]", product.category.slug)}>
                                <Typography sx={{ color: "text.primary" }}>
                                    {product.category.name}
                                </Typography>
                            </Link>
                            <Typography sx={{ color: "text.primary" }}>
                                {product.title}
                            </Typography>
                        </Breadcrumbs>
                    </Stack>

                    <Stack
                        direction="row"
                        className="listingProductRow"
                        spacing={2}
                        flexWrap="wrap"
                    >
                        {/* Sidebar */}
                        <Box
                            component="aside"
                            className={`sidebar ${sidebarOpen ? "sidebarToggled" : ""}`}
                            sx={{
                                flex: {
                                    xs: "1 1 100%",
                                    sm: "1 1 calc(100% - 0px)",
                                    md: "1 1 calc(25% - 32px)",
                                    lg: "1 1 calc(25% - 24px)",
                                },
                                minWidth: 0,
                            }}
                        >
                            <Box className="sidebarContent">
                                {/* Sidebar toggle — mobile only, shows supplier context so users know what's inside */}
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    className="sidebarTitle"
                                    onClick={toggleSideBar}
                                    sx={{
                                        display: { xs: "flex", md: "none" },
                                        cursor: "pointer",
                                        p: 1.5,
                                        borderRadius: "12px",
                                        border: "1px solid rgba(127,175,13,0.3)",
                                        background: sidebarOpen
                                            ? "linear-gradient(135deg, rgba(127,175,13,0.18) 0%, rgba(127,175,13,0.08) 100%)"
                                            : "linear-gradient(135deg, rgba(127,175,13,0.10) 0%, rgba(127,175,13,0.04) 100%)",
                                        transition: "all 0.25s ease",
                                        userSelect: "none",
                                        "&:hover": {
                                            background: "linear-gradient(135deg, rgba(127,175,13,0.2) 0%, rgba(127,175,13,0.10) 100%)",
                                            borderColor: "rgba(127,175,13,0.55)",
                                        },
                                    }}
                                >
                                    {/* Left: supplier logo + label */}
                                    <Stack direction="row" spacing={1.5} alignItems="center">
                                        <Image
                                            src={supplier.logo}
                                            alt={supplier.name}
                                            width={38}
                                            height={38}
                                            style={{ borderRadius: "8px", objectFit: "cover", flexShrink: 0 }}
                                        />
                                        <Box>
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    display: "block",
                                                    fontSize: "10px",
                                                    fontWeight: 700,
                                                    letterSpacing: "0.1em",
                                                    textTransform: "uppercase",
                                                    color: "#7FAF0D",
                                                    lineHeight: 1,
                                                    mb: 0.4,
                                                }}
                                            >
                                                Supplier Info
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ fontWeight: 700, color: "#000", fontSize: "13px", lineHeight: 1.2 }}
                                            >
                                                {supplier.name}
                                            </Typography>
                                        </Box>
                                    </Stack>

                                    {/* Right: chevron indicator */}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            width: 28,
                                            height: 28,
                                            borderRadius: "6px",
                                            background: "rgba(127,175,13,0.15)",
                                            border: "1px solid rgba(127,175,13,0.3)",
                                            transition: "transform 0.25s ease",
                                            transform: sidebarOpen ? "rotate(180deg)" : "rotate(0deg)",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <Icon
                                            name="filter"
                                            width={16}
                                            height={16}
                                            style={{ marginBottom: "0" }}
                                        />
                                    </Box>
                                </Stack>
                                <Box className="siderBarListHolder">
                                    <IconButton
                                        className="closeButton"
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <Icon
                                            name="close"
                                            width={35}
                                            height={35}
                                            style={{ marginBottom: "0" }}
                                        />
                                    </IconButton>

                                    {/* SupplierInfo */}
                                    <SupplierInfo supplier={supplier} />

                                    {/* Similar products slider */}
                                    <SimilarProduct />
                                </Box>
                            </Box>
                        </Box>

                        {/* Main Content */}
                        <Box
                            className="mainContent"
                            sx={{
                                flex: {
                                    xs: "1 1 100%",
                                    sm: "1 1 calc(100% - 0px)",
                                    md: "1 1 calc(75% - 32px)",
                                    lg: "1 1 calc(75% - 24px)",
                                },
                                minWidth: 0,
                            }}
                        >
                            <ProductDetailsInfo product={product} />
                            <SupplierWithProducts 
                                supplierAbout={supplier.about} 
                                supplierSlug={supplier.slug} 
                                supplierName={supplier.name}
                                supplierProducts={supplierProducts}
                            />
                        </Box>
                    </Stack>
                </Container>
            </Box>
            <TrendingProducts />
        </>
    )
}