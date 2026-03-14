// SSR page — no "use client" directive
import Image from "next/image"
import {
    Box,
    Container,
    Typography,
    Stack,
    Button,
    Grid,
    Breadcrumbs,
    Link,
    TextField,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material"
import Icon from "@/components/ui/icon/Icon"
import FilterArea from "@/components/sections/filterarea/FilterArea"
import ProductListing from "@/components/sections/products/ProductListing"
import "../../../product.scss"

import homeIcon from "@/public/home-icon.svg"
import SearchIcon from "@/public/search.png"
import startQuoteImage from "@/public/product/start-quote.png"
import LearnMore from "@/components/sections/static/LearnMore"
import RelatedKeywords from "@/components/sections/keywords/RelatedKeywords"

import { websiteEndpoints } from "@/config/websiteEndpoints"
import type {
    ProductListingItem,
    ProductListingResponse,
} from "@/interfaces/interface"
import apiService from "@/service/apiService"

// ─── SSR Data Fetcher ─────────────────────────────────────────────────────────

async function getProducts(
    categorySlug: string,
    page = 1,
    perPage = 30
): Promise<{ products: ProductListingItem[]; totalCount: number }> {
    try {
        const endpoint = websiteEndpoints.productListing.replace(
            "{categorySlug}",
            categorySlug
        )
        const json = await apiService.get<ProductListingResponse>(endpoint, {
            per_page: perPage,
            page,
        })
        return {
            products: json?.data ?? [],
            totalCount: json?.meta?.total_count ?? 0,
        }
    } catch {
        return { products: [], totalCount: 0 }
    }
}

// ─── Page (async SSR) ─────────────────────────────────────────────────────────

interface PageProps {
    params: Promise<{ locale: string; categoryId: string }>
    searchParams?: Promise<{ page?: string }>
}

export default async function ProductsByCategory({
    params,
    searchParams,
}: PageProps) {
    const { categoryId } = await params
    const resolvedSearch = await searchParams
    const currentPage = Number(resolvedSearch?.page ?? 1)

    const { products, totalCount } = await getProducts(categoryId, currentPage)

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
                                Products and services
                            </Link>
                            <Typography sx={{ color: "text.primary", textTransform: "capitalize" }}>
                                {categoryId.replace(/-/g, " ")}
                            </Typography>
                        </Breadcrumbs>
                        <Box>
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
                        </Box>
                    </Stack>

                    <Stack
                        direction="row"
                        className="listingProductRow"
                        spacing={2}
                        flexWrap="wrap"
                    >
                        {/* Sidebar filters area */}
                        <FilterArea />
                        {/* Product List area — SSR data injected */}
                        <ProductListing products={products} />
                    </Stack>
                    <LearnMore />
                    <RelatedKeywords />
                    <Box className="startRequestOuter">
                        <Grid container spacing={4} alignItems="center" className="startRequestBox">
                            <Grid
                                size={{ xs: 12, md: 6, lg: 6 }}
                                className="startRequestBoxLeft"
                            >
                                <Image
                                    src={startQuoteImage}
                                    alt=""
                                />
                            </Grid>
                            <Grid
                                size={{ xs: 12, md: 6, lg: 6 }}
                                className="startRequestBoxRight"
                            >
                                <Box className="startRequestBoxRightContent">
                                    <Typography
                                        variant="h3"
                                        className="startRequestBoxRightTitle"
                                    >
                                        Start a request for quotes - Easy and 100% free.
                                    </Typography>
                                    <Box className="startRequestBoxRightContentList">
                                        <List>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <Icon name="check" width={30} height={30} />
                                                </ListItemIcon>
                                                <ListItemText primary="Present your request to all verified suppliers in your industry" />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <Icon name="check" width={30} height={30} />
                                                </ListItemIcon>
                                                <ListItemText primary="Top relevant suppliers will be notified by us" />
                                            </ListItem>
                                        </List>
                                    </Box>
                                    <Box className="actionBtn">
                                        <Button variant="contained">Get Multiple Quotes </Button>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    )
}
