'use client';

import React from 'react';
import Image from 'next/image';
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
    Popover,
    ListItem,
    ListItemText,
    List,
    Chip,
    Divider,
} from '@mui/material';
import Icon from '@/components/ui/icon/Icon';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Thumbs, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import '@/app/(website)/product.scss';
import homeIcon from '@/public/home-icon.svg';
import SearchIcon from '@/public/search.png';
import flagUsaIcon from '@/public/flag/usa.svg';
import verifiedIcon from '@/public/product/verified-badge.svg';
import StoreIcon from '@mui/icons-material/Store';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import GroupsIcon from '@mui/icons-material/Groups';
import EventIcon from '@mui/icons-material/Event';
import LanguageIcon from '@mui/icons-material/Language';
import PhoneIcon from '@mui/icons-material/Phone';
import ReceiptIcon from '@mui/icons-material/Receipt';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

import badReviewImage from '@/public/product/bad-review.svg';
import okayReviewImage from '@/public/product/okay-review.svg';
import goodReviewImage from '@/public/product/good-review.svg';
import childProductCategoryImage1 from "@/public/product/child-category-thumbnail-01.png"
import childProductCategoryImage2 from "@/public/product/child-category-thumbnail-02.png"
import childProductCategoryImage3 from "@/public/product/child-category-thumbnail-03.png"
import { ProductDetail } from '@/interfaces/interface';
import { useRouter } from 'next/navigation';
import { useSliderNavigation } from "@/hooks/useSliderNavigation"

interface ProductDetailsContentProps {
    product: ProductDetail;
    locale: string;
}

export default function ProductDetailsContent({ product, locale }: ProductDetailsContentProps) {
    const router = useRouter();
    const [thumbsSwiper, setThumbsSwiper] = React.useState<any>(null);
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const toggleSideBar = () => setSidebarOpen((prev) => !prev);
    const [infoAnchorEl, setInfoAnchorEl] = React.useState<HTMLElement | null>(null);
    const [trendingProductInfoAnchorEl, setTrendingProductInfoAnchorEl] = React.useState<HTMLElement | null>(null);

    const handleInfoClick = (event: React.MouseEvent<HTMLElement>) => {
        setInfoAnchorEl(event.currentTarget);
    };

    const handleInfoClose = () => {
        setInfoAnchorEl(null);
    };

    const handleTrendingProductInfoClick = (event: React.MouseEvent<HTMLElement>) => {
        setTrendingProductInfoAnchorEl(event.currentTarget);
    };
    const handleTrendingProductInfoClose = () => {
        setTrendingProductInfoAnchorEl(null);
    };
    const trendingProductInfoOpen = Boolean(trendingProductInfoAnchorEl);
    const trendingProductInfoId = trendingProductInfoOpen ? "trending-product-info-popover" : undefined;

    const { showNavigation } = useSliderNavigation(6, 1);

    const supplier = product.supplier;
    const images = product.images.length > 0 ? product.images : [{ id: 0, image: '/placeholder-product.png', is_preview: true }];

    return (
        <Box component="section" className="collectionListingProductWrapper">
            <Container>
                {/* Breadcrumbs */}
                <Stack
                    direction="row"
                    className="productBreadcrumbSearchWrapper"
                    spacing={2}
                    justifyContent="space-between"
                    alignItems="center"
                    flexWrap="wrap"
                    mb={3}
                >
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href={`/${locale}`}>
                            <Image src={homeIcon} alt="home" width={24} height={24} />
                        </Link>
                        <Link underline="hover" color="inherit" href={`/${locale}/products&searvices`}>
                            <Typography sx={{ color: 'text.secondary', fontSize: '14px' }}>
                                Products and services
                            </Typography>
                        </Link>
                        {product.category && (
                            <Link underline="hover" color="inherit" href={`/${locale}/products&searvices/products/${product.category.slug}`}>
                                <Typography sx={{ color: 'text.secondary', fontSize: '14px' }}>
                                    {product.category.name}
                                </Typography>
                            </Link>
                        )}
                        <Typography sx={{ color: 'text.primary', fontSize: '14px', fontWeight: 600 }}>
                            {product.title}
                        </Typography>
                    </Breadcrumbs>
                </Stack>

                <Stack
                    direction="row"
                    className="listingProductRow"
                    spacing={4}
                    flexWrap="nowrap"
                    sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}
                >
                    {/* Left Sidebar (Supplier) */}
                    <Box
                        component="aside"
                        sx={{
                            width: { xs: '100%', md: '300px', lg: '350px' },
                            flexShrink: 0,
                        }}
                    >
                        <Box className="widget supplierCardWidget" sx={{ borderRadius: '12px', border: '1px solid #EAEBED', p: 3, backgroundColor: '#fff' }}>
                            <Box className="supplierHeader" textAlign="center">
                                <Box className="supplierAvatar" mb={2} display="flex" justifyContent="center">
                                    <Box sx={{ width: 100, height: 100, borderRadius: '50%', overflow: 'hidden', border: '1px solid #EAEBED', p: 1, backgroundColor: '#fff' }}>
                                        {supplier.logo ? (
                                            <Image src={supplier.logo} alt={supplier.name} width={80} height={80} style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
                                        ) : (
                                            <StoreIcon sx={{ fontSize: 60, color: '#7FAF0D' }} />
                                        )}
                                    </Box>
                                </Box>
                                <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" mb={1}>
                                    <Typography variant="h3" sx={{ fontSize: '18px', fontWeight: 700, color: '#002540' }}>
                                        {supplier.name}
                                    </Typography>
                                    {supplier.is_verified && (
                                        <Image src={verifiedIcon} alt="verified" width={20} height={20} />
                                    )}
                                </Stack>
                                <Typography variant="body2" sx={{ color: '#5F6D7E', mb: 2 }}>
                                    {supplier.address}, {supplier.city} {supplier.zipcode}
                                </Typography>

                                <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" mb={3}>
                                    {product.country && (
                                        <>
                                            <Image src={product.country.country_flag} alt={product.country.name} width={24} height={16} />
                                            <Typography variant="body2" sx={{ fontWeight: 500 }}>{product.country.name}</Typography>
                                        </>
                                    )}
                                </Stack>

                                <Button
                                    variant="contained"
                                    fullWidth
                                    onClick={() => router.push(`/${locale}/contact/product/${product.slug}`)}
                                    sx={{ backgroundColor: '#7FAF0D', color: '#fff', mb: 1, py: 1.5, '&:hover': { backgroundColor: '#6A920B' } }}
                                >
                                    Contact Supplier
                                </Button>
                                <Box sx={{ height: '1px', backgroundColor: '#EAEBED', my: 3 }} />
                            </Box>

                            <Stack spacing={2}>
                                {supplier.company_site && (
                                    <Button variant="text" startIcon={<LanguageIcon sx={{ color: '#7FAF0D' }} />} sx={{ color: '#5F6D7E', textTransform: 'none', justifyContent: 'flex-start' }}>
                                        Visit website
                                    </Button>
                                )}
                                {supplier.company_phone_number && (
                                    <Button variant="text" startIcon={<PhoneIcon sx={{ color: '#7FAF0D' }} />} sx={{ color: '#5F6D7E', textTransform: 'none', justifyContent: 'flex-start' }}>
                                        Phone number
                                    </Button>
                                )}
                                {supplier.vat_number && (
                                    <Button variant="text" startIcon={<ReceiptIcon sx={{ color: '#7FAF0D' }} />} sx={{ color: '#5F6D7E', textTransform: 'none', justifyContent: 'flex-start' }}>
                                        VAT: {supplier.vat_number}
                                    </Button>
                                )}
                            </Stack>

                            <Box sx={{ height: '1px', backgroundColor: '#EAEBED', my: 3 }} />

                            <Stack spacing={2}>
                                <Stack direction="row" spacing={1.5} alignItems="center">
                                    <TravelExploreIcon sx={{ color: '#7FAF0D', fontSize: 20 }} />
                                    <Typography variant="body2">Delivery: <strong>{supplier.delivery_area}</strong></Typography>
                                </Stack>
                                <Stack direction="row" spacing={1.5} alignItems="center">
                                    <EventIcon sx={{ color: '#7FAF0D', fontSize: 20 }} />
                                    <Typography variant="body2">Founded: <strong>{supplier.founded_year}</strong></Typography>
                                </Stack>
                                <Stack direction="row" spacing={1.5} alignItems="center">
                                    <GroupsIcon sx={{ color: '#7FAF0D', fontSize: 20 }} />
                                    <Typography variant="body2">Employees: <strong>{supplier.employee_strength}</strong></Typography>
                                </Stack>
                            </Stack>

                            <Box sx={{ height: '1px', backgroundColor: '#EAEBED', my: 3 }} />

                            <Box>
                                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>Supplier type</Typography>
                                    <IconButton size="small" onClick={handleInfoClick}>
                                        <Icon name="info" width={18} height={18} />
                                    </IconButton>
                                </Stack>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <VerifiedUserIcon sx={{ color: '#7FAF0D', fontSize: 20 }} />
                                    <Typography variant="body2">{supplier.supplier_type?.name}</Typography>
                                </Stack>
                            </Box>
                        </Box>
                    </Box>

                    {/* Main Content */}
                    <Box component="main" sx={{ flexGrow: 1, minWidth: 0 }}>
                        <Grid container spacing={4}>
                            {/* Images Gallery */}
                            <Grid size={{ xs: 12, lg: 7 }}>
                                <Box className="singleProductFeaturedSliderOuter">
                                    <Box className="singleProductFeaturedMainSlider" sx={{ mb: 2 }}>
                                        <Swiper
                                            modules={[Navigation, Thumbs, Autoplay]}
                                            navigation
                                            speed={1000}
                                            autoplay={{ delay: 5000 }}
                                            thumbs={{ swiper: thumbsSwiper }}
                                            className="mainSwiper"
                                            style={{ borderRadius: '12px', border: '1px solid #EAEBED' }}
                                        >
                                            {images.map((img) => (
                                                <SwiperSlide key={img.id}>
                                                    <Box sx={{ height: { xs: 300, md: 450 }, position: 'relative' }}>
                                                        <Image src={img.image} alt={product.title} fill style={{ objectFit: 'contain' }} />
                                                    </Box>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </Box>
                                    <Box className="singleProductFeaturedThumbnailSlider">
                                        <Swiper
                                            onSwiper={setThumbsSwiper}
                                            modules={[Thumbs]}
                                            spaceBetween={10}
                                            slidesPerView={4}
                                            watchSlidesProgress
                                            className="thumbsSwiper"
                                        >
                                            {images.map((img) => (
                                                <SwiperSlide key={`thumb-${img.id}`}>
                                                    <Box sx={{
                                                        height: 80,
                                                        position: 'relative',
                                                        borderRadius: '8px',
                                                        overflow: 'hidden',
                                                        border: '2px solid #EAEBED',
                                                        cursor: 'pointer',
                                                        '&.swiper-slide-thumb-active': { borderColor: '#7FAF0D' }
                                                    }}>
                                                        <Image src={img.image} alt="thumb" fill style={{ objectFit: 'cover' }} />
                                                    </Box>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </Box>
                                </Box>
                            </Grid>

                            {/* Product Info Summary */}
                            <Grid size={{ xs: 12, lg: 5 }}>
                                <Stack spacing={3}>
                                    <Box>
                                        <Typography variant="h4" sx={{ fontWeight: 700, color: '#002540', fontSize: '28px', mb: 1 }}>
                                            {product.title}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary">
                                            {product.short_desc}
                                        </Typography>
                                    </Box>

                                    <Box sx={{ p: 3, backgroundColor: '#F8F9FA', borderRadius: '12px' }}>
                                        <Stack spacing={2}>
                                            <Box>
                                                <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', fontWeight: 600 }}>Price</Typography>
                                                <Typography variant="h5" sx={{ color: '#7FAF0D', fontWeight: 700 }}>
                                                    {product.currency} {product.price} <Typography component="span" variant="body1" color="text.secondary">/{product.price_per_measurement}</Typography>
                                                </Typography>
                                            </Box>
                                            <Divider />
                                            <Box>
                                                <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', fontWeight: 600 }}>Minimum Order</Typography>
                                                <Typography variant="body1" sx={{ fontWeight: 600 }}>{product.min_order} Unit(s)</Typography>
                                            </Box>
                                        </Stack>
                                    </Box>

                                    <Button
                                        variant="contained"
                                        size="large"
                                        fullWidth
                                        onClick={() => router.push(`/${locale}/contact/product/${product.slug}`)}
                                        sx={{ backgroundColor: '#7FAF0D', py: 2, fontSize: '18px', fontWeight: 700 }}
                                    >
                                        Contact Supplier
                                    </Button>

                                    <Box>
                                        <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>Category</Typography>
                                        <Chip label={product.category.name} sx={{ borderRadius: '6px', fontWeight: 500 }} />
                                    </Box>
                                </Stack>
                            </Grid>

                            {/* Long Description and About */}
                            <Grid size={{ xs: 12 }}>
                                <Box sx={{ mt: 4 }}>
                                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, borderBottom: '2px solid #7FAF0D', display: 'inline-block', pb: 1 }}>
                                        Product Description
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#5F6D7E', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                                        {product.description}
                                    </Typography>
                                </Box>

                                <Box sx={{ mt: 6, p: 4, backgroundColor: '#EBF4D3', borderRadius: '16px' }}>
                                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>About the Supplier</Typography>
                                    <Typography variant="body1" sx={{ color: '#2C3E50', lineHeight: 1.8 }}>
                                        {supplier.about}
                                    </Typography>
                                </Box>

                                {/* Keywords */}
                                <Box className="productKeywordsBox" sx={{ mt: 6 }}>
                                    <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
                                        <Typography variant="h3" sx={{ fontSize: '18px', fontWeight: 700 }}>Keywords</Typography>
                                        <Box className="relatedKeyWordsContentList" sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                            <Button variant="outlined" size="small" sx={{ color: '#5F6D7E', borderColor: '#EAEBED', borderRadius: '18px', textTransform: 'none' }}>prefabricated houses</Button>
                                            <Button variant="outlined" size="small" sx={{ color: '#5F6D7E', borderColor: '#EAEBED', borderRadius: '18px', textTransform: 'none' }}>lingerie</Button>
                                            <Button variant="outlined" size="small" sx={{ color: '#5F6D7E', borderColor: '#EAEBED', borderRadius: '18px', textTransform: 'none' }}>food wholesalers drinks</Button>
                                            <Button variant="outlined" size="small" sx={{ color: '#5F6D7E', borderColor: '#EAEBED', borderRadius: '18px', textTransform: 'none' }}>asbestos removal contractors</Button>
                                        </Box>
                                    </Stack>
                                </Box>

                                {/* Other Products from this Supplier */}
                                <Box className="productResultsOuter" sx={{ mt: 8 }}>
                                    <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" className="searchHeader" mb={4}>
                                        <Typography variant="h3" sx={{ fontSize: '20px', fontWeight: 700 }}>4 Product and services from this supplier</Typography>
                                        <Stack direction="row" spacing={2} className="searchForm">
                                            <TextField
                                                placeholder="Packaging Material.... "
                                                variant="outlined"
                                                size="small"
                                                sx={{
                                                    "& .MuiOutlinedInput-root": {
                                                        borderRadius: "18px",
                                                        backgroundColor: "#EAEBED",
                                                        width: { xs: '150px', md: '250px' }
                                                    }
                                                }}
                                            />
                                            <Button variant="contained" sx={{ minWidth: '48px', p: 0, borderRadius: '18px', backgroundColor: '#7FAF0D' }}>
                                                <Image src={SearchIcon} alt="search" width={20} height={20} />
                                            </Button>
                                        </Stack>
                                    </Stack>

                                    <Grid container spacing={4}>
                                        {[childProductCategoryImage1, childProductCategoryImage2].map((img, idx) => (
                                            <Grid key={idx} size={{ xs: 12, md: 6 }}>
                                                <Box className="lisitngCard" sx={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #EAEBED' }}>
                                                    <Box sx={{ height: 200, position: 'relative' }}>
                                                        <Image src={img} alt="product" fill style={{ objectFit: 'cover' }} />
                                                    </Box>
                                                    <Stack direction="row" spacing={1} sx={{ p: 2, backgroundColor: '#fff' }} alignItems="center" justifyContent="space-between">
                                                        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                            {product.country && <Image src={product.country.country_flag} alt="flag" width={24} height={16} />}
                                                            <Typography variant="body2" sx={{ fontSize: "11px", fontWeight: 700, color: "#000", textTransform: "uppercase" }}>
                                                                {supplier.name}
                                                            </Typography>
                                                        </Box>
                                                        {supplier.is_verified && <VerifiedUserIcon sx={{ color: '#7FAF0D', fontSize: 18 }} />}
                                                    </Stack>
                                                    <Box sx={{ p: 3, pt: 0, backgroundColor: '#fff' }}>
                                                        <Typography variant="h4" sx={{ fontSize: '18px', fontWeight: 700, mb: 1 }}>{product.title}</Typography>
                                                        <List sx={{ p: 0, mb: 2 }}>
                                                            <ListItem sx={{ px: 0, py: 0.5 }}><ListItemText primary="Custom packaging solutions" sx={{ '& span': { fontSize: '14px', color: '#5F6D7E' } }} /></ListItem>
                                                            <ListItem sx={{ px: 0, py: 0.5 }}><ListItemText primary="Wide range of protective materials" sx={{ '& span': { fontSize: '14px', color: '#5F6D7E' } }} /></ListItem>
                                                        </List>
                                                        <Button variant="contained" fullWidth sx={{ backgroundColor: '#7FAF0D', color: '#fff', textTransform: 'none' }}>Contact Supplier</Button>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>

                                {/* About Supplier / Gallery */}
                                <Box className="aboutSupplierOuter" sx={{ mt: 8 }}>
                                    <Typography variant="h3" sx={{ fontSize: '24px', fontWeight: 700, mb: 4 }}>About Supplier</Typography>
                                    <Box className="aboutSupplierProductGallery" sx={{ mb: 4 }}>
                                        <Grid container spacing={2}>
                                            {[...Array(6)].map((_, idx) => (
                                                <Grid key={idx} size={{ xs: 6, md: 4, lg: 2 }}>
                                                    <Box sx={{
                                                        height: 120,
                                                        position: 'relative',
                                                        borderRadius: '8px',
                                                        overflow: 'hidden',
                                                        border: '1px solid #EAEBED',
                                                        transition: 'transform 0.3s ease',
                                                        '&:hover': { transform: 'scale(1.05)', zIndex: 1 }
                                                    }}>
                                                        <Image src={childProductCategoryImage1} alt="gallery" fill style={{ objectFit: 'cover' }} />
                                                    </Box>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Box>
                                    <Typography variant="body1" sx={{ color: '#5F6D7E', lineHeight: 1.8 }}>
                                        {supplier.about}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Stack>
            </Container>

            {/* Trending Products - Outside layout container for full width appeal if needed */}
            <Box className="trendingProductsOuter" sx={{ py: 10, backgroundColor: '#fff', mt: 10 }}>
                <Container>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
                        <Typography variant="h2" sx={{ fontSize: '32px', fontWeight: 700, color: '#002540' }}>Trending Products</Typography>
                        {showNavigation && (
                            <Stack direction="row" spacing={1} className="sliderNavigation">
                                <IconButton className="swiper-button-prev" sx={{ border: '1px solid #EAEBED' }}><Icon name="back" width={20} height={20} /></IconButton>
                                <IconButton className="swiper-button-next" sx={{ border: '1px solid #EAEBED' }}><Icon name="next" width={20} height={20} /></IconButton>
                            </Stack>
                        )}
                    </Stack>

                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        pagination={{ clickable: true }}
                        spaceBetween={24}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}
                    >
                        {[...Array(6)].map((_, idx) => (
                            <SwiperSlide key={idx}>
                                <Box sx={{ backgroundColor: '#F8F9FA', borderRadius: '16px', overflow: 'hidden', border: '1px solid #EAEBED' }}>
                                    <Box sx={{ height: 200, position: 'relative' }}>
                                        <Image src={childProductCategoryImage1} alt="trending" fill style={{ objectFit: 'cover' }} />
                                        <IconButton
                                            onClick={handleTrendingProductInfoClick}
                                            sx={{ position: 'absolute', top: 12, right: 12, backgroundColor: 'rgba(255,255,255,0.8)', '&:hover': { backgroundColor: '#fff' } }}
                                        >
                                            <Icon name="info" width={18} height={18} />
                                        </IconButton>
                                    </Box>
                                    <Box sx={{ p: 2 }}>
                                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                                            <Box>
                                                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#002540' }}>Popular Product {idx + 1}</Typography>
                                                <Typography variant="body2" color="text.secondary">Starting at $99.99</Typography>
                                            </Box>
                                            <Image src={flagUsaIcon} alt="flag" width={20} height={14} />
                                        </Stack>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Container>
            </Box>

            {/* Trending Product Info Popover */}
            <Popover
                id={trendingProductInfoId}
                open={trendingProductInfoOpen}
                anchorEl={trendingProductInfoAnchorEl}
                onClose={handleTrendingProductInfoClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Box sx={{ p: 2, maxWidth: 300 }}>
                    <Typography variant="h6" gutterBottom>Product Info</Typography>
                    <Typography variant="body2">Detailed specifications and compliance certificates for this trending item.</Typography>
                </Box>
            </Popover>

            {/* Popover for Supplier Type info */}
            <Popover
                open={Boolean(infoAnchorEl)}
                anchorEl={infoAnchorEl}
                onClose={handleInfoClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            >
                <Box sx={{ p: 2, maxWidth: 250 }}>
                    <Typography variant="body2">These are the primary business activities for this supplier.</Typography>
                </Box>
            </Popover>
        </Box>
    );
}
