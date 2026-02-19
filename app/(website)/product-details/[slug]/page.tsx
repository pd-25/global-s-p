"use client"
import React from "react"
import Image from "next/image"
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
} from "@mui/material"
import Icon from "@/components/ui/icon/Icon"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Thumbs, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/thumbs"
// import "swiper/css/autoplay"
import "../../product.scss"
import homeIcon from "@/public/home-icon.svg"
import SearchIcon from "@/public/search.png"
import flagUsaIcon from "@/public/flag/usa.svg"
import verifiedIcon from "@/public/product/verified-badge.svg"
import productFeaturedImage from "@/public/product/single-product-featured-pic.png"


import supplierAvatar from "@/public/product/supplier-avatar.png"
import badReviewImage from "@/public/product/bad-review.svg"
import okayReviewImage from "@/public/product/okay-review.svg"
import goodReviewImage from "@/public/product/good-review.svg"
import childProductCategoryImage1 from "@/public/product/child-category-thumbnail-01.png"
import childProductCategoryImage2 from "@/public/product/child-category-thumbnail-02.png"
import childProductCategoryImage3 from "@/public/product/child-category-thumbnail-03.png"
import { useSliderNavigation } from "@/hooks/useSliderNavigation"



export default function ProductDetails() {

    const [sidebarOpen, setSidebarOpen] = React.useState(false)
    const toggleSideBar = () => setSidebarOpen((prev) => !prev)
    const [infoAnchorEl, setInfoAnchorEl] = React.useState<HTMLElement | null>(null)
    const handleInfoClick = (event: React.MouseEvent<HTMLElement>) => {
        setInfoAnchorEl(event.currentTarget)
    }
    const handleInfoClose = () => {
        setInfoAnchorEl(null)
    }
    const infoOpen = Boolean(infoAnchorEl)
    const infoId = infoOpen ? "supplier-info-popover" : undefined
    const [thumbsSwiper, setThumbsSwiper] = React.useState<any>(null)
    const productImages = [productFeaturedImage, productFeaturedImage, productFeaturedImage, productFeaturedImage, productFeaturedImage, productFeaturedImage]
    const [trendingProductInfoAnchorEl, setTrendingProductInfoAnchorEl] = React.useState<HTMLElement | null>(null)
    const handleTrendingProductInfoClick = (event: React.MouseEvent<HTMLElement>) => {
        setTrendingProductInfoAnchorEl(event.currentTarget)
    }
    const handleTrendingProductInfoClose = () => {
        setTrendingProductInfoAnchorEl(null)
    }
    const trendingProductInfoOpen = Boolean(trendingProductInfoAnchorEl)
    const trendingProductInfoId = trendingProductInfoOpen ? "trending-product-info-popover" : undefined
    const [supplierInfoAnchorEl, setSupplierInfoAnchorEl] = React.useState<HTMLElement | null>(null)
    const handleSupplierInfoClick = (event: React.MouseEvent<HTMLElement>) => {
        setSupplierInfoAnchorEl(event.currentTarget)
    }
    const handleSupplierInfoClose = () => {
        setSupplierInfoAnchorEl(null)
    }
    const supplierInfoOpen = Boolean(supplierInfoAnchorEl)
    const supplierInfoId = supplierInfoOpen ? "supplier-info-popover" : undefined
    const { showNavigation } = useSliderNavigation(
        productImages.length,
        1, // default slidesPerView
    )
    return (
        <>
            <Box
                component="section"
                className="collectionListingProductWrapper"
            >
                <Container>
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
                            <Link underline="hover" color="inherit" href="/products&searvices/packaging-material">
                                <Typography sx={{ color: "text.primary" }}>
                                    packaging material
                                </Typography>
                            </Link>
                            <Typography sx={{ color: "text.primary" }}>
                                Product
                            </Typography>
                        </Breadcrumbs>

                    </Stack>

                    <Stack
                        direction="row"
                        className="listingProductRow"
                        spacing={2}
                        flexWrap="wrap"
                    >
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
                                <Typography
                                    variant="h3"
                                    className="sidebarTitle"
                                    onClick={toggleSideBar}
                                >
                                    Filters
                                    <Icon
                                        name="filter"
                                        width={24}
                                        height={24}
                                        style={{ marginBottom: "0" }}
                                    />
                                </Typography>
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

                                    <Box className="widget supplierCardWidget">
                                        <Box className="supplierCardWidgetContent">
                                            <Box className="supplierHeader">
                                                <Box className="supplierAvatar" mb={1}>
                                                    <Image src={supplierAvatar} alt="supplier-avatar" width={80} height={80} />
                                                </Box>
                                                <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                                                    <Typography variant="h3" className="supplierName" sx={{ fontSize: "16px !important", fontWeight: 700, textTransform: "uppercase", color: "#000" }}>
                                                        KLÖTER VERPACKUNGEN GMBH
                                                    </Typography>
                                                    <Image src={verifiedIcon} alt="verified-icon" width={22} height={22} />
                                                </Stack>

                                                <Typography variant="body2" sx={{ color: "#000000", mt: 0.5 }}>
                                                    Fürther Berg 21, Grevenbroich
                                                    41515
                                                </Typography>
                                                <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 2 }}>
                                                    <Image src={flagUsaIcon} alt="country" width={27} height={27} />
                                                    <Typography variant="body2" sx={{ color: "#000000", fontSize: "14px !important", fontWeight: 400 }}>
                                                        America
                                                    </Typography>
                                                </Stack>
                                                <Box sx={{ height: "1px", background: "#000", width: "100%", mx: "auto", mt: 2 }} />
                                                <Button variant="contained" sx={{ backgroundColor: "#7FAF0D", mt: 2, textTransform: "none", width: "100%", }}>
                                                    Contact Supplier
                                                </Button>
                                                <Button variant="outlined" sx={{ mt: 3, textTransform: "none", width: "100%", }}>
                                                    Notify Me
                                                </Button>
                                                <Box sx={{ height: "1px", background: "#000", width: "100%", mx: "auto", mt: 3 }} />
                                            </Box>

                                            <Box className="supplierLinks" sx={{ pt: 3 }}>
                                                <Stack spacing={2}>
                                                    <Button variant="text" startIcon={<Icon name="link" width={18} height={18} />} sx={{ color: "#7FAF0D", textTransform: "none", justifyContent: "flex-start" }}>
                                                        Visit website
                                                    </Button>
                                                    <Button variant="text" startIcon={<Icon name="phoneGreen" width={18} height={18} />} sx={{ color: "#7FAF0D", textTransform: "none", justifyContent: "flex-start" }}>
                                                        Phone number
                                                    </Button>
                                                    <Button variant="text" startIcon={<Icon name="vat" width={18} height={18} />} sx={{ color: "#7FAF0D", textTransform: "none", justifyContent: "flex-start" }}>
                                                        Show VAT number
                                                    </Button>
                                                </Stack>
                                            </Box>
                                            <Box sx={{ height: "1px", background: "#000", width: "100%", mx: "auto", mt: 3 }} />

                                            <Box className="supplierMeta" sx={{ pt: 3 }}>
                                                <Stack spacing={1}>
                                                    <Stack direction="row" spacing={1} alignItems="center">
                                                        <Icon name="delivery" width={24} height={24} />
                                                        <Typography variant="body2">Delivery: <strong style={{ fontWeight: 600 }}>National</strong> </Typography>
                                                    </Stack>
                                                    <Stack direction="row" spacing={1} alignItems="center">
                                                        <Icon name="foundedYear" width={24} height={24} />
                                                        <Typography variant="body2">Founded: <strong style={{ fontWeight: 600 }}>1971</strong> </Typography>
                                                    </Stack>
                                                    <Stack direction="row" spacing={1} alignItems="center">
                                                        <Icon name="employees" width={24} height={24} />
                                                        <Typography variant="body2">Employees: <strong style={{ fontWeight: 600 }}>5-9</strong> </Typography>
                                                    </Stack>
                                                </Stack>
                                            </Box>

                                            <Box sx={{ height: "1px", background: "#000", width: "100%", mx: "auto", mt: 3 }} />

                                            <Box className="supplierType" sx={{ pt: 3 }}>
                                                <Stack direction="row" spacing={1} mb={1.5} alignItems="center" justifyContent="space-between">
                                                    <Typography variant="h4" sx={{ fontSize: "16px", fontWeight: 700 }}>Supplier type</Typography>
                                                    <IconButton aria-label="info" onClick={handleInfoClick}>
                                                        <Icon name="info" width={24} height={24} />
                                                    </IconButton>
                                                    <Popover
                                                        id={infoId}
                                                        open={infoOpen}
                                                        anchorEl={infoAnchorEl}
                                                        onClose={handleInfoClose}
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
                                                            <Typography variant="h4" sx={{ color: "#000000", fontWeight: 700, marginBottom: "10px" }}>
                                                                Supplier type
                                                            </Typography>
                                                            <Typography variant="body2" sx={{ color: "#000000" }}>
                                                                These are the general business activities for this supplier.
                                                            </Typography>
                                                        </Box>
                                                    </Popover>
                                                </Stack>

                                                <Stack direction="row" spacing={1} alignItems="center">
                                                    <Icon name="supplierType" width={24} height={24} />
                                                    <Typography variant="body2">Wholesaler</Typography>
                                                </Stack>
                                            </Box>

                                            <Box sx={{ height: "1px", background: "#000", width: "100%", mx: "auto", mt: 3 }} />

                                            <Box className="supplierRating" sx={{ pt: 2, textAlign: "center" }}>
                                                <Typography variant="body1" sx={{ mb: 2, fontWeight: 700, color: "#587a09", fontSize: "14px !important" }}>
                                                    How would you rate the company and product information?
                                                </Typography>
                                                <Stack direction="row" spacing={3} justifyContent="center" alignItems="center" className="supplierRatingButtons">
                                                    <IconButton aria-label="bad-review" sx={{ color: "#E41648" }}>
                                                        <Image src={badReviewImage} alt="bad-review" width={31} height={31} />
                                                        Bad
                                                    </IconButton>
                                                    <IconButton aria-label="okay-review" sx={{ color: "#0060DF" }}>
                                                        <Image src={okayReviewImage} alt="bad-review" width={31} height={31} />
                                                        Okay
                                                    </IconButton>
                                                    <IconButton aria-label="good-review" sx={{ color: "#71A300" }}>
                                                        <Image src={goodReviewImage} alt="bad-review" width={31} height={31} />
                                                        Good
                                                    </IconButton>
                                                </Stack>
                                            </Box>
                                        </Box>
                                    </Box>

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
                                                    {[
                                                        childProductCategoryImage1,
                                                        childProductCategoryImage2,
                                                        childProductCategoryImage3,
                                                    ].map((img, idx) => (
                                                        <SwiperSlide key={`similar-${idx}`}>
                                                            <Box className="similarProductSliderCardOuter">
                                                                <Box className="similarProductBox">
                                                                    <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                                                                        <Box className="similarProductImage">
                                                                            <Link href="/">
                                                                                <Image src={img} alt={`similar-${idx}`} />
                                                                            </Link>
                                                                        </Box>
                                                                        <Box className="similarProductContent">
                                                                            <Link href="/">
                                                                                Wholesale hygiene products
                                                                            </Link>
                                                                            <Typography variant="body1">
                                                                                Chemical appearance: Glutaraldehyde is usually a light yellow or clear liquid. It has a strong, pungent smell.
                                                                            </Typography>
                                                                            <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                                                                                <Icon name="mapPin" width={18} height={18} />
                                                                                <Typography variant="body1">FR-93300 Aubervilliers</Typography>
                                                                            </Stack>
                                                                        </Box>
                                                                    </Stack>
                                                                </Box>
                                                                <Box className="similarProductBox">
                                                                    <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                                                                        <Box className="similarProductImage">
                                                                            <Link href="/">
                                                                                <Image src={img} alt={`similar-${idx}`} />
                                                                            </Link>
                                                                        </Box>
                                                                        <Box className="similarProductContent">
                                                                            <Link href="/">
                                                                                Wholesale hygiene products
                                                                            </Link>
                                                                            <Typography variant="body1">
                                                                                Chemical appearance: Glutaraldehyde is usually a light yellow or clear liquid. It has a strong, pungent smell.
                                                                            </Typography>
                                                                            <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                                                                                <Icon name="mapPin" width={18} height={18} />
                                                                                <Typography variant="body1">FR-93300 Aubervilliers</Typography>
                                                                            </Stack>
                                                                        </Box>
                                                                    </Stack>
                                                                </Box>
                                                                <Box className="similarProductBox">
                                                                    <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                                                                        <Box className="similarProductImage">
                                                                            <Link href="/">
                                                                                <Image src={img} alt={`similar-${idx}`} />
                                                                            </Link>
                                                                        </Box>
                                                                        <Box className="similarProductContent">
                                                                            <Link href="/">
                                                                                Wholesale hygiene products
                                                                            </Link>
                                                                            <Typography variant="body1">
                                                                                Chemical appearance: Glutaraldehyde is usually a light yellow or clear liquid. It has a strong, pungent smell.
                                                                            </Typography>
                                                                            <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                                                                                <Icon name="mapPin" width={18} height={18} />
                                                                                <Typography variant="body1">FR-93300 Aubervilliers</Typography>
                                                                            </Stack>
                                                                        </Box>
                                                                    </Stack>
                                                                </Box>
                                                            </Box>

                                                        </SwiperSlide>
                                                    ))}
                                                </Swiper>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>

                            </Box>
                        </Box>

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
                            <Box className="categoryLoopListing">

                                <Box className="productTitleOuter">
                                    <Typography variant="h2" className="productTitle">
                                        1333 Products and services
                                    </Typography>
                                    <Typography variant="h3" className="productSubTitle">
                                        28824 Suppliers
                                    </Typography>
                                </Box>
                                <Grid container spacing={3} className="singleProductFeatureRow">
                                    <Grid
                                        size={{ xs: 12, md: 12, lg: 8 }}
                                        className="singleProductFeatureColLeft"
                                    >
                                        <Box className="singleProductFeaturedSliderOuter">
                                            <Box className="singleProductFeaturedMainSlider">
                                                <Swiper
                                                    modules={[Navigation, Thumbs, Autoplay]}
                                                    navigation
                                                    // autoplay={false}
                                                    speed={1500}
                                                    autoplay={{ delay: 4000, disableOnInteraction: true }}
                                                    thumbs={{ swiper: thumbsSwiper }}
                                                    grabCursor={true}
                                                    className="mainSwiper"
                                                >
                                                    {productImages.map((img, idx) => (
                                                        <SwiperSlide key={idx}>
                                                            <Box className="singleProductFeatureImage">
                                                                <Image src={img} alt={`product-featured-${idx}`} />
                                                            </Box>
                                                        </SwiperSlide>
                                                    ))}
                                                </Swiper>
                                            </Box>
                                            <Box className="singleProductFeaturedThumbnailSlider">
                                                <Swiper
                                                    onSwiper={setThumbsSwiper}
                                                    modules={[Thumbs]}
                                                    spaceBetween={8}
                                                    slidesPerView={4}
                                                    watchSlidesProgress
                                                    // freeMode
                                                    className="thumbsSwiper"
                                                    slideToClickedSlide={true}
                                                    breakpoints={{
                                                        0: {
                                                            slidesPerView: 2,
                                                            spaceBetween: 8,
                                                        },
                                                        768: {
                                                            slidesPerView: 4,
                                                        },
                                                        1024: {
                                                            slidesPerView: 4,
                                                        },
                                                        1440: {
                                                            slidesPerView: 4,
                                                        },
                                                        1800: {
                                                            slidesPerView: 6,
                                                        },
                                                    }}
                                                >
                                                    {productImages.map((img, idx) => (
                                                        <SwiperSlide key={`thumb-${idx}`}>
                                                            <Box className="singleProductFeatureThumbnailImage">
                                                                <Image src={img} alt={`thumb-${idx}`} />
                                                            </Box>
                                                        </SwiperSlide>
                                                    ))}
                                                </Swiper>
                                            </Box>
                                        </Box>


                                    </Grid>
                                    <Grid
                                        size={{ xs: 12, md: 12, lg: 4 }}
                                        className="singleProductFeatureColRight"
                                    >
                                        <Box className="productFeaturedBoxRightContent">
                                            <Typography
                                                variant="h3"
                                                className="productFeaturedBoxRightTitle"
                                            >
                                                (SPICES & HERBS)
                                            </Typography>
                                            <Box className="productFeaturedBoxRightContentList">
                                                <List>
                                                    <ListItem>
                                                        <ListItemText primary="Custom packaging solutions" />
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemText primary="Wide range of protective materials" />
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemText primary="Expert hazardous goods packaging" />
                                                    </ListItem>
                                                </List>
                                                <List>
                                                    <ListItem>
                                                        <ListItemText primary="Custom packaging solutions" />
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemText primary="Wide range of protective materials" />
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemText primary="Expert hazardous goods packaging" />
                                                    </ListItem>
                                                </List>
                                            </Box>
                                            <Box className="productFeaturedBoxRightContentButton">
                                                <Button variant="contained">Contact Supplier</Button>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box className="productShortInfoBox">
                                <Typography variant="h3">
                                    Packaging Material
                                </Typography>
                                <Typography variant="body1">
                                    Klöter Packaging GmbH offers the highest quality products currently available on the market.
                                </Typography>
                                <List className="defaultUl">
                                    <ListItem>
                                        <ListItemText primary=" Shipping tubes" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="PVC self-adhesive tape " />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary=" Paper self-adhesive tape" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Wet self-adhesive tape " />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="PE tubular film, bags, sacks, shrink hoods " />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="PE foam film • Stretch film " />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary=" Shipping tubes" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="PVC self-adhesive tape " />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary=" Paper self-adhesive tape" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Wet self-adhesive tape " />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="PE tubular film, bags, sacks, shrink hoods " />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="PE foam film • Stretch film " />
                                    </ListItem>
                                </List>
                            </Box>
                            <Box className="productKeywordsBox">
                                <Stack direction="row" spacing={2}>
                                    <Typography variant="h3">Keywords</Typography>
                                    <Box className="relatedKeyWordsContentList">
                                        <Button variant="outlined">prefabricated houses</Button>
                                        <Button variant="outlined">lingerie</Button>
                                        <Button variant="outlined">food wholesalers drinks</Button>
                                        <Button variant="outlined">asbestos removal contractors</Button>
                                    </Box>
                                </Stack>

                            </Box>
                            <Box className="productResultsOuter">
                                <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" className="searchHeader">
                                    <Typography variant="h3">4 Product and services from this supplier</Typography>
                                    <Stack
                                        direction="row"
                                        spacing={2}
                                        className="searchForm"
                                        sx={{ alignItems: "flex-end" }}
                                    >
                                        <TextField
                                            id="standard-basic"
                                            placeholder="Packaging Material.... "
                                            variant="outlined"
                                            fullWidth
                                            sx={{
                                                "& .MuiOutlinedInput-root": {
                                                    fontSize: "15px",
                                                    height: "48px",
                                                    backgroundColor: "#EAEBED",
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
                                                        padding: "0 60px 0 15px",
                                                        fontSize: "15px",
                                                        "&::placeholder": {
                                                            color: "#242424",
                                                            opacity: 1,
                                                            fontSize: "15px",
                                                        },
                                                        backgroundColor: "transparent",
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
                                                width={25}
                                                height={25}
                                            />
                                        </Button>
                                    </Stack>
                                </Stack>
                                <Box className="childCategoryLisitngOuter">
                                    <Grid container spacing={{ xs: 2, md: 2, lg: 7 }} className="childCategoryLisitngRow">
                                        <Grid
                                            size={{ xs: 12, md: 6, lg: 6 }}
                                            className="childCategoryLisitngCol"
                                        >
                                            <Box className="lisitngCard">
                                                <Box className="lisitngCardImage">
                                                    <Image src={childProductCategoryImage1} alt="product-featured-image" />
                                                </Box>
                                                <Stack direction="row" spacing={1} sx={{ padding: "15px" }} alignItems="center" justifyContent="space-between">
                                                    <Box className="locationInfo" sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                        <Image src={flagUsaIcon} alt="flag-icon" width={27} height={27} />
                                                        <Typography variant="body1" component="p" sx={{ fontSize: "11px", fontWeight: "400", color: "#000", textTransform: "uppercase" }}>
                                                            KLÖTER VERPACKUNGEN GMBH
                                                        </Typography>
                                                    </Box>
                                                    <Box className="verifiedBadge">
                                                        <Image src={verifiedIcon} alt="verified-icon" width={20} height={20} />
                                                    </Box>
                                                </Stack>
                                                <Box className="lisitngCardContent">
                                                    <Typography
                                                        variant="h3"
                                                        className="lisitngCardTitle"
                                                    >
                                                        Packaging Material
                                                    </Typography>
                                                    <List className="lisitngCardContentList">
                                                        <ListItem>
                                                            <ListItemText primary="Custom packaging solutions" />
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemText primary="Wide range of protective materials" />
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemText primary="Expert hazardous goods packaging" />
                                                        </ListItem>
                                                    </List>
                                                    <Box className="actionBtn">
                                                        <Button variant="contained">Contact Supplier</Button>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid
                                            size={{ xs: 12, md: 6, lg: 6 }}
                                            className="childCategoryLisitngCol"
                                        >
                                            <Box className="lisitngCard">
                                                <Box className="lisitngCardImage">
                                                    <Image src={childProductCategoryImage2} alt="product-featured-image" />
                                                </Box>
                                                <Stack direction="row" spacing={1} sx={{ padding: "15px" }} alignItems="center" justifyContent="space-between">
                                                    <Box className="locationInfo" sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                        <Image src={flagUsaIcon} alt="flag-icon" width={27} height={27} />
                                                        <Typography variant="body1" component="p" sx={{ fontSize: "11px", fontWeight: "400", color: "#000", textTransform: "uppercase" }}>
                                                            KLÖTER VERPACKUNGEN GMBH
                                                        </Typography>
                                                    </Box>
                                                    <Box className="verifiedBadge">
                                                        <Image src={verifiedIcon} alt="verified-icon" width={20} height={20} />
                                                    </Box>
                                                </Stack>
                                                <Box className="lisitngCardContent">
                                                    <Typography
                                                        variant="h3"
                                                        className="lisitngCardTitle"
                                                    >
                                                        Packaging Material
                                                    </Typography>
                                                    <List className="lisitngCardContentList">
                                                        <ListItem>
                                                            <ListItemText primary="Custom packaging solutions" />
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemText primary="Wide range of protective materials" />
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemText primary="Expert hazardous goods packaging" />
                                                        </ListItem>
                                                    </List>
                                                    <Box className="actionBtn">
                                                        <Button variant="contained">Contact Supplier</Button>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                            <Box className="aboutSupplierOuter">
                                <Typography variant="h3">About Supplier</Typography>
                                <Box className="aboutSupplierProductGallery">
                                    <Grid container spacing={{ xs: 2, md: 2, lg: 3 }}>
                                        <Grid size={{ xs: 6, md: 6, lg: 3 }}>
                                            <Box className="imageBox">
                                                <Image src={childProductCategoryImage1} alt="product-featured-image" />
                                            </Box>
                                        </Grid>
                                        <Grid size={{ xs: 6, md: 6, lg: 3 }}>
                                            <Box className="imageBox">
                                                <Image src={childProductCategoryImage1} alt="product-featured-image" />
                                            </Box>
                                        </Grid>
                                        <Grid size={{ xs: 6, md: 6, lg: 3 }}>
                                            <Box className="imageBox">
                                                <Image src={childProductCategoryImage1} alt="product-featured-image" />
                                            </Box>
                                        </Grid>
                                        <Grid size={{ xs: 6, md: 6, lg: 3 }}>
                                            <Box className="imageBox">
                                                <Image src={childProductCategoryImage1} alt="product-featured-image" />
                                            </Box>
                                        </Grid>
                                        <Grid size={{ xs: 6, md: 6, lg: 3 }}>
                                            <Box className="imageBox">
                                                <Image src={childProductCategoryImage1} alt="product-featured-image" />
                                            </Box>
                                        </Grid>
                                        <Grid size={{ xs: 6, md: 6, lg: 3 }}>
                                            <Box className="imageBox">
                                                <Image src={childProductCategoryImage1} alt="product-featured-image" />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Typography variant="body1">
                                    SOCADE, established in 1989, is a leading wholesaler in hygiene products, offering a diverse range of items to meet the needs of various markets. With over 30 years of experience, SOCADE has built a reputation for reliability and quality, ensuring that customers receive top-notch products. Our extensive inventory includes a wide array of hygiene products that cater to both individual and commercial needs, making us a trusted partner for businesses looking to maintain high standards of cleanliness and hygiene.

                                </Typography>
                            </Box>
                        </Box>
                    </Stack>
                </Container>
            </Box>
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
                            // autoplay={false}
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

                            {[
                                childProductCategoryImage1,
                                childProductCategoryImage2,
                                childProductCategoryImage3,
                                childProductCategoryImage1,
                                childProductCategoryImage2,
                            ].map((img, idx) => (
                                <SwiperSlide key={`trending-${idx}`}>
                                    <Box className="trendingProductBox">
                                        <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                                            <Box className="trendingProductImage">
                                                <Link href="/">
                                                    <Image src={img} alt={`trending-${idx}`} />
                                                </Link>
                                            </Box>
                                            <Box className="trendingProductContent">
                                                <Link href="/">
                                                    B2B Industrial Grade Glutaraldehyde 50% with Formaldehyde for Water Treatment and Disinfection
                                                </Link>
                                                <Typography variant="body1">
                                                    Chemical appearance: Glutaraldehyde is usually a light yellow or clear liquid. It has a strong, pungent smell.
                                                </Typography>
                                                <Stack direction="row" spacing={1} mt={1} alignItems="center" justifyContent="space-between">
                                                    <Box className="leftData">
                                                        <Stack direction="row" spacing={2} alignItems="center">
                                                            <Box className="metaDataInfo">
                                                                <IconButton aria-label="info" onClick={handleTrendingProductInfoClick}>
                                                                    <Icon name="verified" width={20} height={20} />
                                                                </IconButton>
                                                                <Popover
                                                                    id={trendingProductInfoId}
                                                                    open={trendingProductInfoOpen}
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
                                                                                <Typography variant="body2" sx={{ fontSize: "14px" }}><strong>Verified by Global SP</strong></Typography>
                                                                            </Stack>
                                                                            <Stack direction="row" spacing={1} alignItems="center">
                                                                                <Icon name="delivery" width={20} height={20} />
                                                                                <Typography variant="body2" sx={{ fontSize: "14px" }}>Delivery: <span style={{ fontWeight: "600" }}>Worldwide</span> </Typography>
                                                                            </Stack>
                                                                            <Stack direction="row" spacing={1} alignItems="center">
                                                                                <Icon name="foundedYear" width={20} height={20} />
                                                                                <Typography variant="body2" sx={{ fontSize: "14px" }}>Founded: <span style={{ fontWeight: "600" }}>1971</span></Typography>
                                                                            </Stack>
                                                                        </Stack>
                                                                    </Box>
                                                                </Popover>
                                                            </Box>
                                                            <Box className="supplierInfo">
                                                                <IconButton aria-label="info" onClick={handleSupplierInfoClick}>
                                                                    <Icon name="chat" width={22} height={22} />
                                                                </IconButton>
                                                                <Popover
                                                                    id={supplierInfoId}
                                                                    open={supplierInfoOpen}
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
                                                        <Image src={flagUsaIcon} alt="country-flag" width={20} height={20} />
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
        </>
    )
}
