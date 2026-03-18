

// ... (imports omitted)
// SSR layout — shared shell for all product-listing routes
import Image from 'next/image'
import {
    Box,
    Container,
    Typography,
    Stack,
    Button,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@mui/material'
import Icon from '@/components/ui/icon/Icon'
import FilterArea from '@/components/sections/filterarea/FilterArea'
import LearnMore from '@/components/sections/static/LearnMore'
import RelatedKeywords from '@/components/sections/keywords/RelatedKeywords'
import SearchBar from '@/components/sections/products/SearchBar'
import ProductBreadcrumbs from '@/components/sections/products/ProductBreadcrumbs'

import startQuoteImage from '@/public/product/start-quote.png'
import '@/app/(website)/product.scss'

type Props = {
    children: React.ReactNode
}

export default function ProductListingLayout({ children }: Props) {
    return (
        <Box component="section" className="collectionListingProductWrapper">
            <Container>

                {/* ── Top bar: Breadcrumb + Search ─────────────────────────── */}
                <Stack
                    direction="row"
                    className="productBreadcrumbSearchWrapper"
                    spacing={2}
                    justifyContent="space-between"
                    alignItems="center"
                    flexWrap="wrap"
                >
                    {/* Dynamic Client Sidebar Breadcrumbs */}
                    <ProductBreadcrumbs />

                    {/* Search bar is a client component (handles input state) */}
                    <SearchBar />
                </Stack>

                {/* ── Sidebar + Product Grid area ───────────────────────────── */}
                <Stack
                    direction="row"
                    className="listingProductRow"
                    spacing={2}
                    flexWrap="wrap"
                >
                    <FilterArea />

                    {/* Each page injects its own <ProductListing> here */}
                    {children}
                </Stack>

                {/* ── Bottom sections ───────────────────────────────────────── */}
                <LearnMore />
                <RelatedKeywords />

                <Box className="startRequestOuter">
                    <Grid
                        container
                        spacing={4}
                        alignItems="center"
                        className="startRequestBox"
                    >
                        <Grid size={{ xs: 12, md: 6, lg: 6 }} className="startRequestBoxLeft">
                            <Image src={startQuoteImage} alt="" />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6, lg: 6 }} className="startRequestBoxRight">
                            <Box className="startRequestBoxRightContent">
                                <Typography variant="h3" className="startRequestBoxRightTitle">
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
                                    <Button variant="contained">Get Multiple Quotes</Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

            </Container>
        </Box>
    )
}
