// "use client"
// import React from "react"
// import Image from "next/image"
// import {
//     Box,
//     Container,
//     Typography,
//     Stack,
//     IconButton,
//     Breadcrumbs,
//     Link,
// } from "@mui/material"
// import Icon from "@/components/ui/icon/Icon"
// import "swiper/css"
// import "swiper/css/navigation"
// import "swiper/css/pagination"
// import "../../../product.scss"
// import homeIcon from "@/public/home-icon.svg"

// import productFeaturedImage from "@/public/product/single-product-featured-pic.png"




// import { useSliderNavigation } from "@/hooks/useSliderNavigation"
// import SupplierInfo from "@/components/sections/supplier/SupplierInfo"
// import SimilarProduct from "@/components/sections/product/SimilarProduct"
// import ProductDetailsInfo from "@/components/sections/product/ProductDetailsInfo"
// import SupplierWithProducts from "@/components/sections/product/SupplierWithProducts"
// import TrendingProducts from "@/components/sections/product/TrendingProducts"
// import { fetchProductDetails } from "@/lib/fetchProductDetails"
// import { Metadata } from "next"
// import { notFound } from "next/navigation"

// interface PageProps {
//     params: Promise<{
//         slug: string;
//         locale: string;
//     }>;
// }

// /**
//  * Generate metadata for SEO using product title and short description.
//  */
// export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
//     const { slug } = await params;
//     const result = await fetchProductDetails(slug);
//     const product = result?.data;

//     if (!product) {
//         return {
//             title: 'Product Not Found | Global Supplier Portal',
//         };
//     }

//     return {
//         title: `${product.title} | Global Supplier Portal`,
//         description: product.short_desc,
//         openGraph: {
//             title: product.title,
//             description: product.short_desc,
//             images: product.images?.[0]?.image ? [product.images[0].image] : [],
//         },
//     };
// }

// export default async function ProductDetails({ params }: PageProps) {

//     const { slug, locale } = await params;
//     const result = await fetchProductDetails(slug);

//     if (!result?.success || !result.data) {
//         notFound();
//     }

//     const product = result.data;
//     const supplier = result.data.supplier;
//     const [sidebarOpen, setSidebarOpen] = React.useState(false)
//     const toggleSideBar = () => setSidebarOpen((prev) => !prev)
//     const productImages = [productFeaturedImage, productFeaturedImage, productFeaturedImage, productFeaturedImage, productFeaturedImage, productFeaturedImage]

//     const { showNavigation } = useSliderNavigation(
//         productImages.length,
//         1, // default slidesPerView
//     )
//     return (
//         <>
//             <Box
//                 component="section"
//                 className="collectionListingProductWrapper"
//             >
//                 <Container>
//                     {/* Breadcums */}
//                     <Stack
//                         direction="row"
//                         className="productBreadcrumbSearchWrapper"
//                         spacing={2}
//                         justifyContent="space-between"
//                         alignItems="center"
//                         flexWrap="wrap"
//                     >
//                         <Breadcrumbs aria-label="breadcrumb">
//                             <Link underline="hover" color="inherit" href="/">
//                                 <Image src={homeIcon} alt="home" width={36} height={36} />
//                             </Link>
//                             <Link underline="hover" color="inherit" href="/products&searvices">
//                                 <Typography sx={{ color: "text.primary" }}>
//                                     Product And services
//                                 </Typography>
//                             </Link>
//                             <Link underline="hover" color="inherit" href="/products&searvices/packaging-material">
//                                 <Typography sx={{ color: "text.primary" }}>
//                                     packaging material
//                                 </Typography>
//                             </Link>
//                             <Typography sx={{ color: "text.primary" }}>
//                                 Product
//                             </Typography>
//                         </Breadcrumbs>

//                     </Stack>

//                     <Stack
//                         direction="row"
//                         className="listingProductRow"
//                         spacing={2}
//                         flexWrap="wrap"
//                     >
//                         <Box
//                             component="aside"
//                             className={`sidebar ${sidebarOpen ? "sidebarToggled" : ""}`}
//                             sx={{
//                                 flex: {
//                                     xs: "1 1 100%",
//                                     sm: "1 1 calc(100% - 0px)",
//                                     md: "1 1 calc(25% - 32px)",
//                                     lg: "1 1 calc(25% - 24px)",
//                                 },
//                                 minWidth: 0,
//                             }}
//                         >
//                             <Box className="sidebarContent">
//                                 <Typography
//                                     variant="h3"
//                                     className="sidebarTitle"
//                                     onClick={toggleSideBar}
//                                 >
//                                     Filters
//                                     <Icon
//                                         name="filter"
//                                         width={24}
//                                         height={24}
//                                         style={{ marginBottom: "0" }}
//                                     />
//                                 </Typography>
//                                 <Box className="siderBarListHolder">
//                                     <IconButton
//                                         className="closeButton"
//                                         onClick={() => setSidebarOpen(false)}
//                                     >
//                                         <Icon
//                                             name="close"
//                                             width={35}
//                                             height={35}
//                                             style={{ marginBottom: "0" }}
//                                         />
//                                     </IconButton>
//                                     {/* SuplierInfo */}
//                                     <SupplierInfo supplier={supplier} />

//                                     {/* Similar products slider */}
//                                     <SimilarProduct />

//                                 </Box>

//                             </Box>
//                         </Box>

//                         <Box
//                             className="mainContent"
//                             sx={{
//                                 flex: {
//                                     xs: "1 1 100%",
//                                     sm: "1 1 calc(100% - 0px)",
//                                     md: "1 1 calc(75% - 32px)",
//                                     lg: "1 1 calc(75% - 24px)",
//                                 },
//                                 minWidth: 0,
//                             }}
//                         >
//                             <ProductDetailsInfo product={product} />

//                             <SupplierWithProducts />
//                         </Box>
//                     </Stack>
//                 </Container>
//             </Box>
//             <TrendingProducts />
//         </>
//     )
// }
// app/(website)/[locale]/product-details/[slug]/page.tsx
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { fetchProductDetails } from "@/lib/fetchProductDetails"
import ProductClientView from "@/components/sections/product/ProductClientView";

interface PageProps {
    params: Promise<{
        slug: string;
        locale: string;
    }>;
}

/**
 * Generate metadata for SEO using product title and short description.
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const result = await fetchProductDetails(slug);
    const product = result?.data;

    if (!product) {
        return {
            title: 'Product Not Found | Global Supplier Portal',
        };
    }

    return {
        title: `${product.title} | Global Supplier Portal`,
        description: product.short_desc,
        openGraph: {
            title: product.title,
            description: product.short_desc,
            images: product.images?.[0]?.image ? [product.images[0].image] : [],
        },
    };
}

import { fetchProductsBySupplier } from "@/lib/fetchProductsBySupplier";

export default async function ProductDetailsPage({ params }: PageProps) {
    const { slug } = await params;
    
    // Fetch data on the server side for SEO
    const result = await fetchProductDetails(slug);

    if (!result?.success || !result.data) {
        notFound();
    }

    const supplierSlug = result.data.supplier.slug;
    const supplierProductsResult = await fetchProductsBySupplier(supplierSlug, 1, 4);
    const supplierProducts = supplierProductsResult?.data || [];

    // Pass the fetched data down to the interactive client component
    return (
        <ProductClientView 
            product={result.data} 
            supplier={result.data.supplier} 
            supplierProducts={supplierProducts}
        />
    );
}