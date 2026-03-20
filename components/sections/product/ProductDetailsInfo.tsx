"use client"

import {
    Box,
    Typography,
    Stack,
    Button,
    Grid,
} from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Thumbs } from "swiper/modules"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { routes } from "@/config/routes"

// ─── Types ────────────────────────────────────────────────────────────────────

interface ProductImage {
    id: number;
    image: string;
    is_preview: boolean;
    created_at: string;
}

interface ProductCountry {
    id: number;
    name: string;
    country_flag: string;
}

interface ProductSupplier {
    id: number;
    slug: string;
    name: string;
    logo: string;
}

interface ProductType {
    id: number;
    name: string;
}

interface ProductCategory {
    id: number;
    name: string;
    slug: string;
}

interface Product {
    id: number;
    slug: string;
    title: string;
    description: string;
    short_desc: string;
    currency: string;
    price: string;
    price_per_measurement: string;
    min_order: number;
    country: ProductCountry;
    supplier: ProductSupplier;
    product_type: ProductType;
    category: ProductCategory;
    images: ProductImage[];
    created_at: string;
    updated_at: string;
}

interface ProductDetailsInfoProps {
    product: Product;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ProductDetailsInfo({ product }: ProductDetailsInfoProps) {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

    // Use API images; fall back gracefully if empty
    const productImages: string[] = product.images.map((img) => img.image)

    // Find the preview image (or first image as fallback)
    const previewImage =
        product.images.find((img) => img.is_preview)?.image ?? productImages[0]

    return (
        <>
            <Box className="categoryLoopListing">
                <Grid container spacing={3} className="singleProductFeatureRow">

                    {/* ── Left: Image Slider ─────────────────────────────────── */}
                    <Grid size={{ xs: 12, md: 12, lg: 8 }} className="singleProductFeatureColLeft">
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            background: 'rgba(255, 255, 255, 0.7)',
                            backdropFilter: 'blur(16px)',
                            border: '1px solid rgba(255, 255, 255, 0.5)',
                            borderRadius: '24px',
                            padding: { xs: 2, md: 3 },
                            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.04)'
                        }}>
                            {/* Main Swiper */}
                            <Box sx={{
                                width: '100%',
                                aspectRatio: { xs: '4/3', md: '16/9' },
                                position: 'relative',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                backgroundColor: '#f7f9fa',
                                '& .swiper': { width: '100%', height: '100%' },
                                '& .swiper-slide': { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                                '& .swiper-button-next, & .swiper-button-prev': {
                                    color: '#333',
                                    backgroundColor: 'rgba(255,255,255,0.85)',
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '50%',
                                    backdropFilter: 'blur(8px)',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                    transform: 'scale(0.9)',
                                    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                                    '&:after': {
                                        fontSize: '18px',
                                        fontWeight: '900'
                                    },
                                    '&:hover': {
                                        backgroundColor: '#fff',
                                        transform: 'scale(1)',
                                        boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
                                    }
                                }
                            }}>
                                <Swiper
                                    modules={[Navigation, Thumbs, Autoplay]}
                                    navigation
                                    speed={1200}
                                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                    grabCursor={true}
                                    className="mainSwiper"
                                >
                                    {productImages.map((imgUrl, idx) => (
                                        <SwiperSlide key={idx}>
                                            <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
                                                <Image
                                                    src={imgUrl}
                                                    alt={`${product.title} image ${idx + 1}`}
                                                    fill
                                                    style={{ objectFit: "cover" }}
                                                    priority={idx === 0}
                                                />
                                                {/* Gentle dark gradient at the bottom to give it depth */}
                                                <Box sx={{
                                                    position: 'absolute',
                                                    bottom: 0, left: 0, right: 0,
                                                    height: '25%',
                                                    background: 'linear-gradient(to top, rgba(0,0,0,0.08) 0%, transparent 100%)',
                                                    pointerEvents: 'none'
                                                }} />
                                            </Box>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </Box>

                            {/* Thumbnail Swiper */}
                            <Box sx={{
                                width: '100%',
                                '& .swiper-slide': {
                                    opacity: 0.45,
                                    transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                                    cursor: 'pointer',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    border: '2px solid transparent',
                                    transform: 'scale(0.95)'
                                },
                                '& .swiper-slide-thumb-active': {
                                    opacity: 1,
                                    transform: 'scale(1)',
                                    borderColor: '#7FAF0D', // Premium green theme color
                                    boxShadow: '0 6px 16px rgba(127, 175, 13, 0.25)'
                                },
                                '& .swiper-slide:hover:not(.swiper-slide-thumb-active)': {
                                    opacity: 0.8,
                                    transform: 'scale(0.98)'
                                }
                            }}>
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    modules={[Thumbs]}
                                    spaceBetween={12}
                                    watchSlidesProgress
                                    className="thumbsSwiper"
                                    slideToClickedSlide={true}
                                    breakpoints={{
                                        0: { slidesPerView: 3 },
                                        768: { slidesPerView: 4 },
                                        1024: { slidesPerView: 5 },
                                        1440: { slidesPerView: 6 },
                                    }}
                                >
                                    {productImages.map((imgUrl, idx) => (
                                        <SwiperSlide key={`thumb-${idx}`}>
                                            <Box sx={{ 
                                                position: 'relative', 
                                                aspectRatio: '4/3', 
                                                width: '100%',
                                                backgroundColor: '#fff'
                                            }}>
                                                <Image
                                                    src={imgUrl}
                                                    alt={`${product.title} thumb ${idx + 1}`}
                                                    fill
                                                    style={{ objectFit: "cover", borderRadius: '10px' }}
                                                />
                                            </Box>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </Box>
                        </Box>
                    </Grid>

                    {/* ── Right: Product Info ────────────────────────────────── */}
                    <Grid size={{ xs: 12, md: 12, lg: 4 }} className="singleProductFeatureColRight">
                        <Box
                            className="productFeaturedBoxRightContent"
                            sx={{
                                background: "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
                                border: "1px solid rgba(127,175,13,0.25)",
                                borderRadius: "16px",
                                backdropFilter: "blur(12px)",
                                p: { xs: 2.5, md: 3 },
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                gap: 0,
                                boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
                            }}
                        >
                            {/* ── Category Chip ── */}
                            <Box sx={{ mb: 1.5 }}>
                                <Box
                                    component="span"
                                    sx={{
                                        display: "inline-block",
                                        background: "rgba(127,175,13,0.15)",
                                        border: "1px solid rgba(127,175,13,0.4)",
                                        color: "#7FAF0D",
                                        fontSize: "11px",
                                        fontWeight: 600,
                                        letterSpacing: "0.08em",
                                        textTransform: "uppercase",
                                        px: 1.5,
                                        py: 0.4,
                                        borderRadius: "20px",
                                    }}
                                >
                                    {product.category.name}
                                </Box>
                            </Box>

                            {/* ── Title ── */}
                            <Typography
                                variant="h3"
                                className="productFeaturedBoxRightTitle"
                                sx={{
                                    fontSize: { xs: "18px", md: "20px" },
                                    fontWeight: 700,
                                    lineHeight: 1.35,
                                    color: "#fff",
                                    mb: 2,
                                }}
                            >
                                {product.title}
                            </Typography>

                            {/* ── Price Block ── */}
                            <Box
                                sx={{
                                    background: "linear-gradient(135deg, rgba(127,175,13,0.18) 0%, rgba(88,122,9,0.10) 100%)",
                                    border: "1px solid rgba(127,175,13,0.3)",
                                    borderRadius: "12px",
                                    px: 2.5,
                                    py: 2,
                                    mb: 2.5,
                                    position: "relative",
                                    overflow: "hidden",
                                    "&::before": {
                                        content: '""',
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: "2px",
                                        background: "linear-gradient(90deg, #7FAF0D, #a8d40f, #7FAF0D)",
                                    }
                                }}
                            >
                                <Typography
                                    variant="caption"
                                    sx={{ color: "rgba(255,255,255,0.5)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", mb: 0.5 }}
                                >
                                    Starting Price
                                </Typography>
                                <Stack direction="row" alignItems="baseline" spacing={1}>
                                    <Typography
                                        sx={{
                                            fontSize: "28px",
                                            fontWeight: 800,
                                            background: "linear-gradient(135deg, #a8d40f 0%, #7FAF0D 100%)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            lineHeight: 1,
                                        }}
                                    >
                                        {product.currency} {parseFloat(product.price).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.45)", fontSize: "12px" }}>
                                        / {product.price_per_measurement}
                                    </Typography>
                                </Stack>
                            </Box>

                            {/* ── Info Rows ── */}
                            <Stack
                                spacing={0}
                                sx={{
                                    background: "rgba(255,255,255,0.03)",
                                    border: "1px solid rgba(255,255,255,0.07)",
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    mb: 2.5,
                                }}
                            >
                                {/* Min Order */}
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    sx={{
                                        px: 2,
                                        py: 1.4,
                                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                                    }}
                                >
                                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.45)", fontSize: "12px", fontWeight: 500 }}>
                                        Min. Order
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "#fff", fontWeight: 600, fontSize: "13px" }}>
                                        {product.min_order} unit{product.min_order !== 1 ? "s" : ""}
                                    </Typography>
                                </Stack>

                                {/* Product Type */}
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    sx={{
                                        px: 2,
                                        py: 1.4,
                                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                                    }}
                                >
                                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.45)", fontSize: "12px", fontWeight: 500 }}>
                                        Product Type
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "#fff", fontWeight: 600, fontSize: "13px" }}>
                                        {product.product_type.name}
                                    </Typography>
                                </Stack>

                                {/* Country of Origin */}
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    sx={{ px: 2, py: 1.4 }}
                                >
                                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.45)", fontSize: "12px", fontWeight: 500 }}>
                                        Origin
                                    </Typography>
                                    <Stack direction="row" spacing={0.8} alignItems="center">
                                        <Image
                                            src={product.country.country_flag}
                                            alt={product.country.name}
                                            width={20}
                                            height={13}
                                            style={{ objectFit: "cover", borderRadius: "2px" }}
                                        />
                                        <Typography variant="body2" sx={{ color: "#fff", fontWeight: 600, fontSize: "13px" }}>
                                            {product.country.name}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>

                            {/* ── Short Description ── */}
                            <Box
                                className="productFeaturedBoxRightContentList"
                                sx={{
                                    mb: 2.5,
                                    pb: 2.5,
                                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                                }}
                            >
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "rgba(255,255,255,0.6)",
                                        lineHeight: 1.7,
                                        fontSize: "13px",
                                    }}
                                >
                                    {product.short_desc}
                                </Typography>
                            </Box>

                            {/* ── Supplier Row ── */}
                            <Stack
                                direction="row"
                                spacing={1.5}
                                alignItems="center"
                                sx={{
                                    mb: 2.5,
                                    p: 1.5,
                                    background: "rgba(255,255,255,0.04)",
                                    borderRadius: "10px",
                                    border: "1px solid rgba(255,255,255,0.07)",
                                }}
                            >
                                <Image
                                    src={product.supplier.logo}
                                    alt={product.supplier.name}
                                    width={38}
                                    height={38}
                                    style={{ borderRadius: "8px", objectFit: "cover", flexShrink: 0 }}
                                />
                                <Box sx={{ minWidth: 0 }}>
                                    <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.4)", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.08em", display: "block" }}>
                                        Supplied by
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "#fff", fontWeight: 700, fontSize: "13px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                        {product.supplier.name}
                                    </Typography>
                                </Box>
                            </Stack>

                            {/* ── CTA Buttons ── */}
                            <Box className="productFeaturedBoxRightContentButton">
                                <Link href={routes.productContactPage.replace("[slug]", product.slug)} style={{ textDecoration: "none", display: "block" }}>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        sx={{
                                            background: "linear-gradient(135deg, #7FAF0D 0%, #a0d40f 100%)",
                                            color: "#fff",
                                            fontWeight: 700,
                                            fontSize: "14px",
                                            py: 1.4,
                                            borderRadius: "10px",
                                            textTransform: "none",
                                            letterSpacing: "0.02em",
                                            boxShadow: "0 4px 20px rgba(127,175,13,0.35)",
                                            transition: "all 0.25s ease",
                                            "&:hover": {
                                                background: "linear-gradient(135deg, #8fc210 0%, #b0e015 100%)",
                                                boxShadow: "0 6px 28px rgba(127,175,13,0.5)",
                                                transform: "translateY(-1px)",
                                            },
                                        }}
                                    >
                                        Contact Supplier
                                    </Button>
                                </Link>
                                <Button
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        mt: 1.5,
                                        borderColor: "rgba(255,255,255,0.2)",
                                        color: "rgba(255,255,255,0.75)",
                                        fontWeight: 600,
                                        fontSize: "13px",
                                        py: 1.2,
                                        borderRadius: "10px",
                                        textTransform: "none",
                                        transition: "all 0.25s ease",
                                        "&:hover": {
                                            borderColor: "rgba(127,175,13,0.6)",
                                            color: "#7FAF0D",
                                            background: "rgba(127,175,13,0.06)",
                                        },
                                    }}
                                >
                                    🔔 Notify Me
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* ── Full Description ─────────────────────────────────────────── */}
            <Box className="productShortInfoBox">
                <Typography variant="h3">Product Description</Typography>
                <Typography variant="body1">
                    {product.description}
                </Typography>
            </Box>

            {/* ── Keywords / Tags placeholder ──────────────────────────────── */}
            <Box className="productKeywordsBox">
                <Stack direction="row" spacing={2}>
                    <Typography variant="h3">Keywords</Typography>
                    <Box className="relatedKeyWordsContentList">
                        <Button variant="outlined">{product.category.name}</Button>
                        <Button variant="outlined">{product.product_type.name}</Button>
                        <Button variant="outlined">{product.supplier.name}</Button>
                        <Button variant="outlined">{product.country.name}</Button>
                    </Box>
                </Stack>
            </Box>
        </>
    )
}
