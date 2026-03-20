"use client"
import { Box, Stack, Typography, CircularProgress } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import Link from "next/link";
import Icon from "@/components/ui/icon/Icon"; // Make sure to use the correct icon path
import { useState, useEffect } from "react";
import apiService from "@/service/apiService";
import { websiteEndpoints } from "@/config/websiteEndpoints";
import { routes } from "@/config/routes";

interface SimilarProductData {
    slug: string;
    title: string;
    short_desc: string;
    primary_image: { image: string } | null;
    supplier: {
        name: string;
    } | null;
}

const chunkArray = (arr: any[], size: number) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
    );
};

export default function SimilarProduct() {
    const [similarProducts, setSimilarProducts] = useState<SimilarProductData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSimilarProducts = async () => {
            try {
                setLoading(true);
                // Hardcoding page/perPage per query requirements or leaving it to default if setup inside the URL endpoint config
                const response = await apiService.get<any>(`${websiteEndpoints.similerProducts}?perPage=12&page=1`);
                if (response?.success && response?.data) {
                    setSimilarProducts(response.data);
                }
            } catch (error) {
                console.error("Error fetching similar products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSimilarProducts();
    }, []);

    if (loading) {
        return (
            <Box className="widget supplierCardWidget" sx={{ backgroundColor: "#F3F4F5 !important", padding: "35px 8px !important", display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 200 }}>
                <CircularProgress color="success" />
            </Box>
        );
    }

    if (!similarProducts || similarProducts.length === 0) {
        return null;
    }

    const groupedProducts = chunkArray(similarProducts, 3);

    return (
        <Box className="widget supplierCardWidget" sx={{ backgroundColor: "#F3F4F5 !important", padding: "35px 8px !important" }}>
            <Box className="supplierCardWidgetContent">
                <Typography variant="h3" className="supplierCardWidgetTitle" sx={{ fontSize: "16px !important", fontWeight: 700, color: "#000", padding: "15px 10px", borderTop: "1px solid #cdd1cf", borderBottom: "1px solid #cdd1cf", marginBottom: "20px" }}>
                    Similar products
                </Typography>
                <Box className="similarProductsSliderOuter">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation={true}
                        pagination={{ clickable: true }}
                        spaceBetween={12}
                        slidesPerView={1}
                        breakpoints={{
                            768: { slidesPerView: 1 },
                            1024: { slidesPerView: 1 },
                        }}
                        className="similarProductsSwiper"
                    >
                        {groupedProducts.map((chunk, chunkIdx) => (
                            <SwiperSlide key={`similar-chunk-${chunkIdx}`}>
                                <Box className="similarProductSliderCardOuter">
                                    {chunk.map((product: SimilarProductData) => (
                                        <Box className="similarProductBox" key={product.slug}>
                                            <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                                                <Box className="similarProductImage">
                                                    <Link href={routes.productDetails.replace("[slug]", product.slug)}>
                                                        {product.primary_image?.image ? (
                                                            <img src={product.primary_image.image} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                        ) : (
                                                            <Box sx={{ width: '100%', height: '100%', background: '#eee' }} />
                                                        )}
                                                    </Link>
                                                </Box>
                                                <Box className="similarProductContent">
                                                    <Link href={routes.productDetails.replace("[slug]", product.slug)} style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                                        {product.title}
                                                    </Link>
                                                    <Typography variant="body1" sx={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                                        {product.short_desc}
                                                    </Typography>
                                                    <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between" mt={1}>
                                                        {product.supplier?.name && (
                                                            <>
                                                                <Icon name="userLine" width={18} height={18} />
                                                                <Typography variant="body1" sx={{ fontSize: '12px', fontWeight: 'bold' }}>{product.supplier.name}</Typography>
                                                            </>
                                                        )}
                                                    </Stack>
                                                </Box>
                                            </Stack>
                                        </Box>
                                    ))}
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </Box>
        </Box>
    )
}
