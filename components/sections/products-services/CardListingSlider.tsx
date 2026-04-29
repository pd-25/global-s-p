import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Grid,
  IconButton,
  Breadcrumbs,
  Link,
  TextField,
  FormControlLabel,
  FormGroup,
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Slider,
  LinearProgress,
  FormControl,
  RadioGroup,
  Radio,
  Pagination,
  Popover,
} from "@mui/material"
import Icon from "@/components/ui/icon/Icon"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import Image from "next/image"
import productCategoryImage1 from "@/public/product/spice-product-slider-thumb-01.png"
import productCategoryImage2 from "@/public/product/spice-product-slider-thumb-02.png"
import productCategoryImage3 from "@/public/product/spice-product-slider-thumb-03.png"
import { Subcategory } from "@/interfaces/interface"
import { routes } from "@/config/routes"
import NextLink from "next/link"

export default function CardListingSlider({title, categoryName, subcategories}: {title: string, categoryName?: string, subcategories?: Subcategory[]}) {
    if (!subcategories || subcategories.length === 0) return null;

    return (
        <>
            <Box className="productListingSliderOuter">
                <Box className="productListingSliderHeader">
                    <Typography variant="h3" className="productListingSliderTitleMain">
                        {title} <span>{categoryName}</span>
                    </Typography>
                </Box>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={false}
                    // autoplay={false}
                    speed={1500}
                    autoplay={{ delay: 4000, disableOnInteraction: true }}
                    spaceBetween={24}
                    slidesPerView={2}
                    loop={false}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 12,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        960: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 24,
                        },
                        1536: {
                            slidesPerView: 5,
                            spaceBetween: 24,
                        },
                    }}
                >
                    {subcategories.map((sub, index) => (
                        <SwiperSlide key={index}>
                            <Box className="productListingSliderBox">
                                <NextLink href={routes.productsServicesDetailsPage.replace("[slug]", sub.slug)}>
                                    <Box className="productListingSliderBoxImage" sx={{ position: 'relative', width: '100%', aspectRatio: '5/4' }}>
                                        <img
                                            src={sub.image || productCategoryImage1.src}
                                            alt={sub.name}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </Box>
                                </NextLink>
                                <Box className="productListingSliderContent">
                                    <Typography
                                        variant="h3"
                                        className="productListingSliderTitle"
                                    >
                                        {sub.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" sx={{ mb: 2, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                        {sub.description}
                                    </Typography>
                                    <Box className="productListingSliderContentButton">
                                        <Button variant="contained" size="small" href={`${routes.serviceProductListPage.replace("[categoryId]", sub?.slug)}`}>View Products</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </>
    )
}
