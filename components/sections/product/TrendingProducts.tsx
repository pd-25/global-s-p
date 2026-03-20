"use client"
import {
    Box,
    Container,
    Typography,
    Stack,
    IconButton,
    Popover,
    CircularProgress,
} from "@mui/material"
import Icon from "@/components/ui/icon/Icon"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { useSliderNavigation } from "@/hooks/useSliderNavigation"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import apiService from "@/service/apiService"
import { websiteEndpoints } from "@/config/websiteEndpoints"
import { routes } from "@/config/routes"

interface TrendingProduct {
    slug: string;
    title: string;
    short_desc: string;
    primary_image: { image: string } | null;
    country: { country_flag: string } | null;
    supplier: {
        name: string;
        is_verified: boolean;
    } | null;
}

export default function TrendingProducts() {
    const [trendingProducts, setTrendingProducts] = useState<TrendingProduct[]>([]);
    const [loading, setLoading] = useState(true);

    const [activeProductId, setActiveProductId] = useState<string | null>(null);
    const [trendingProductInfoAnchorEl, setTrendingProductInfoAnchorEl] = useState<HTMLElement | null>(null);
    const trendingProductInfoOpen = Boolean(trendingProductInfoAnchorEl);
    const trendingProductInfoId = trendingProductInfoOpen ? "trending-product-info-popover" : undefined;
    
    const [supplierInfoAnchorEl, setSupplierInfoAnchorEl] = useState<HTMLElement | null>(null);
    const supplierInfoOpen = Boolean(supplierInfoAnchorEl);
    const supplierInfoId = supplierInfoOpen ? "supplier-info-popover" : undefined;

    useEffect(() => {
        const fetchTrendingProducts = async () => {
            try {
                setLoading(true);
                const response = await apiService.get<any>(websiteEndpoints.trendingProducts);
                if (response?.success && response?.data) {
                    setTrendingProducts(response.data);
                }
            } catch (error) {
                console.error("Error fetching trending products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTrendingProducts();
    }, []);

    const { showNavigation } = useSliderNavigation(
        trendingProducts.length,
        1, // default slidesPerView
    )

    const handleTrendingProductInfoClick = (event: React.MouseEvent<HTMLElement>, slug: string) => {
        setActiveProductId(slug);
        setTrendingProductInfoAnchorEl(event.currentTarget)
    }
    const handleTrendingProductInfoClose = () => {
        setTrendingProductInfoAnchorEl(null)
    }
    const handleSupplierInfoClick = (event: React.MouseEvent<HTMLElement>, slug: string) => {
        setActiveProductId(slug);
        setSupplierInfoAnchorEl(event.currentTarget)
    }
    const handleSupplierInfoClose = () => {
        setSupplierInfoAnchorEl(null)
    }

    if (loading) {
        return (
            <Box className="trendingProductsOuter" sx={{ py: 8, display: 'flex', justifyContent: 'center' }}>
                <CircularProgress color="success" />
            </Box>
        );
    }

    if (!trendingProducts || trendingProducts.length === 0) {
        return null;
    }

    return (
        <Box className="trendingProductsOuter">
            <Container>
                <Box className="trendingProductsSliderOuter">
                    <Typography variant="h2">Trending Products</Typography>
                    {showNavigation && (
                        <Box className="sliderNavigation">
                            <Box className="swiper-button-prev"></Box>
                            <Box className="swiper-button-next"></Box>
                        </Box>
                    )}
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation={
                            showNavigation
                                ? {
                                    nextEl: ".sliderNavigation .swiper-button-next",
                                    prevEl: ".sliderNavigation .swiper-button-prev",
                                }
                                : false
                        }
                        pagination={{ clickable: true }}
                        speed={1500}
                        autoplay={{ delay: 4000, disableOnInteraction: true }}
                        spaceBetween={16}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1440: { slidesPerView: 4 },
                        }}
                        className="trendingProductsSwiper"
                    >
                        {trendingProducts.map((product) => (
                            <SwiperSlide key={product.slug}>
                                <Box className="trendingProductBox">
                                    <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                                        <Box className="trendingProductImage">
                                            <Link href={routes.productDetails.replace("[slug]", product.slug)}>
                                                {product.primary_image?.image ? (
                                                    <img 
                                                        src={product.primary_image.image} 
                                                        alt={product.title} 
                                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                    />
                                                ) : (
                                                    <Box sx={{ width: '100%', height: '100%', background: '#eee' }} />
                                                )}
                                            </Link>
                                        </Box>
                                        <Box className="trendingProductContent">
                                            <Link href={routes.productDetails.replace("[slug]", product.slug)}>
                                                {product.title}
                                            </Link>
                                            <Typography variant="body1" sx={{
                                                display: '-webkit-box',
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden'
                                            }}>
                                                {product.short_desc}
                                            </Typography>
                                            <Stack direction="row" spacing={1} mt={1} alignItems="center" justifyContent="space-between">
                                                <Box className="leftData">
                                                    <Stack direction="row" spacing={2} alignItems="center">
                                                        <Box className="metaDataInfo">
                                                            <IconButton aria-label="info" onClick={(e) => handleTrendingProductInfoClick(e, product.slug)}>
                                                                <Icon name="verified" width={20} height={20} />
                                                            </IconButton>
                                                            <Popover
                                                                id={trendingProductInfoId}
                                                                open={trendingProductInfoOpen && activeProductId === product.slug}
                                                                anchorEl={trendingProductInfoAnchorEl}
                                                                onClose={handleTrendingProductInfoClose}
                                                                anchorOrigin={{
                                                                    vertical: "bottom",
                                                                    horizontal: "left",
                                                                }}
                                                                transformOrigin={{
                                                                    vertical: "top",
                                                                    horizontal: "left",
                                                                }}
                                                            >
                                                                <Box sx={{ p: 2, maxWidth: 300 }}>
                                                                    <Stack spacing={1}>
                                                                        <Stack direction="row" spacing={1} alignItems="center">
                                                                            <Icon name="verified" width={20} height={20} />
                                                                            <Typography variant="body2" sx={{ fontSize: "14px" }}>
                                                                                <strong>{product.supplier?.is_verified ? "Verified by Global SP" : "Not Verified"}</strong>
                                                                            </Typography>
                                                                        </Stack>
                                                                        <Stack direction="row" spacing={1} alignItems="center">
                                                                            <Icon name="delivery" width={20} height={20} />
                                                                            <Typography variant="body2" sx={{ fontSize: "14px" }}>Delivery: <span style={{ fontWeight: "600" }}>Worldwide</span> </Typography>
                                                                        </Stack>
                                                                    </Stack>
                                                                </Box>
                                                            </Popover>
                                                        </Box>
                                                        <Box className="supplierInfo">
                                                            <IconButton aria-label="info" onClick={(e) => handleSupplierInfoClick(e, product.slug)}>
                                                                <Icon name="chat" width={22} height={22} />
                                                            </IconButton>
                                                            <Popover
                                                                id={supplierInfoId}
                                                                open={supplierInfoOpen && activeProductId === product.slug}
                                                                anchorEl={supplierInfoAnchorEl}
                                                                onClose={handleSupplierInfoClose}
                                                                anchorOrigin={{
                                                                    vertical: "bottom",
                                                                    horizontal: "left",
                                                                }}
                                                                transformOrigin={{
                                                                    vertical: "top",
                                                                    horizontal: "left",
                                                                }}
                                                            >
                                                                <Box sx={{ p: 2, maxWidth: 300 }}>
                                                                    <Stack spacing={1}>
                                                                        <Stack direction="row" spacing={1} alignItems="center">
                                                                            <Icon name="chat" width={20} height={20} />
                                                                            <Typography variant="body2"><strong> Responds reliably</strong></Typography>
                                                                        </Stack>
                                                                        <Stack direction="column" spacing={1} alignItems="start">
                                                                            <Typography variant="body2" sx={{ fontSize: "14px", color: "#000" }}>   Average response time: less than <strong> 24 hrs</strong></Typography>
                                                                            <Typography variant="body2" sx={{ fontSize: "14px", color: "#000" }}> Average response rate: <strong> 83%</strong></Typography>
                                                                        </Stack>
                                                                    </Stack>
                                                                </Box>
                                                            </Popover>
                                                        </Box>
                                                    </Stack>

                                                </Box>
                                                <Box className="rightData">
                                                    {product.country?.country_flag && (
                                                        <img src={product.country.country_flag} alt="country-flag" width={20} height={20} style={{ objectFit: 'cover' }} />
                                                    )}
                                                </Box>
                                            </Stack>
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
