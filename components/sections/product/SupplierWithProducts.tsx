import React from 'react'
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
import SearchIcon from "@/public/search.png"
import childProductCategoryImage1 from "@/public/product/child-category-thumbnail-01.png"
import flagUsaIcon from "@/public/flag/usa.svg"
import verifiedIcon from "@/public/product/verified-badge.svg"
import childProductCategoryImage2 from "@/public/product/child-category-thumbnail-02.png"
import SingleProductCard from "./../products/SingleProductCard"

interface SupplierWithProductsProps {
    supplierAbout: string;
    supplierSlug: string;
    supplierName: string;
    supplierProducts: any[];
}

export default function SupplierWithProducts({ supplierAbout, supplierSlug, supplierName, supplierProducts }: SupplierWithProductsProps) {
    return (
        <>
            <Box className="productResultsOuter">
                <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" className="searchHeader">
                    <Typography variant="h3">{supplierProducts?.length || 0} Product{(supplierProducts?.length || 0) !== 1 ? 's' : ''} and services from this supplier</Typography>
                    {/* <Stack
                        direction="row"
                        spacing={2}
                        className="searchForm"
                        sx={{ alignItems: "flex-end", display: { xs: 'none', md: 'flex' } }}
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
                    </Stack> */}
                </Stack>

                {supplierProducts && supplierProducts.length > 0 ? (
                    <Box className="childCategoryLisitngOuter">
                        <Grid container spacing={{ xs: 2, md: 2, lg: 3 }} className="childCategoryLisitngRow">
                            {supplierProducts.map((product) => (
                                <Grid
                                    key={product.slug}
                                    size={{ xs: 12, sm: 6, md: 6, lg: 3 }}
                                    className="childCategoryLisitngCol"
                                >
                                    <SingleProductCard
                                        imageUrl={product.primary_image?.image || ""}
                                        supplierFlagUrl={product.country?.country_flag || ""}
                                        supplierName={supplierName}
                                        title={product.title}
                                        slug={product.slug}
                                        verified={true} // Supplier is typically verified here
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                ) : (
                    <Typography variant="body1" sx={{ mt: 3, mb: 3, opacity: 0.7 }}>
                        No products listed for this supplier.
                    </Typography>
                )}
            </Box>

            <Box className="aboutSupplierOuter">
                <Typography variant="h3">About Supplier</Typography>
                <Typography variant="body1">
                    {supplierAbout}
                </Typography>
            </Box>
        </>
    )
}

