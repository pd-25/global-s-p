"use client"
import React, { useEffect, useMemo, useState } from "react"
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
  Skeleton,
} from "@mui/material"
import Icon from "@/components/ui/icon/Icon"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
// import "swiper/css/autoplay"

import homeIcon from "@/public/home-icon.svg"
import SearchIcon from "@/public/search.png"
import arrowDownIcon from "@/public/chevron-bottom.svg"
import productFeaturedImage from "@/public/product/spices-featured-pic.png"
import flagGermanyIcon from "@/public/flag/germany.svg"
import flagTurkeyIcon from "@/public/flag/turkey.svg"
import flagSpainIcon from "@/public/flag/spain.svg"
import flagFranceIcon from "@/public/flag/france.svg"
import flagItalyIcon from "@/public/flag/italy.svg"
import productCategoryImage1 from "@/public/product/spice-product-slider-thumb-01.png"
import productCategoryImage2 from "@/public/product/spice-product-slider-thumb-02.png"
import productCategoryImage3 from "@/public/product/spice-product-slider-thumb-03.png"
import startQuoteImage from "@/public/product/start-quote.png"
import { routes } from "@/config/routes"
import CardListingSlider from "./CardListingSlider"
import { getCategories } from "@/lib/common"
import CategoryAccordionCard from "./CategoryAccordionCard"
import ProductListing from "../products/ProductListing"
import { fetchProducts } from "@/lib/fetchProducts"
import { CategoryWithSubcategories } from "@/interfaces/interface"




export default function ProductServiceDetailsClient({ slug, categoryData }: { slug: string, categoryData?: CategoryWithSubcategories | null }) {
  const prevRef = React.useRef<any>(null)
  const nextRef = React.useRef<any>(null)
  const [readMoreOpen, setReadMoreOpen] = React.useState(false)
  const toggleReadMoreParent = () => setReadMoreOpen((prev) => !prev)
  const [readMoreOpenKeywords, setReadMoreOpenKeywords] = React.useState(false)
  const toggleReadMoreKeywords = () => setReadMoreOpenKeywords((prev) => !prev)
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  const toggleSideBar = () => setSidebarOpen((prev) => !prev)
  const [location, setLocation] = React.useState("")
  const [radius, setRadius] = React.useState(50)
  const [categories, setCategories] = useState<any[]>([])
  const [isLoadingCategories, setIsLoadingCategories] = useState(true)

  const [products, setProducts] = useState<any[]>([])
  const [meta, setMeta] = useState<any>({ total_count: 0, total_pages: 1, page: 1, per_page: 30 })
  const [isLoadingProducts, setIsLoadingProducts] = useState(true)

  const hasFetched = React.useRef(false)

  useEffect(() => {
    if (hasFetched.current) return
    hasFetched.current = true

    async function load() {
      try {
        const fetchcategories = await getCategories()
        const cats = Array.isArray(fetchcategories) ? [...fetchcategories] : []
        cats.push({
          id: 0,
          slug: "others",
          name: "Others",
          image: "/images/others_category.jpeg",
          total_products: 0,
          subcategories: [],
        })
        setCategories(cats)
      } catch (err) {
        console.error("Failed to load categories", err)
      } finally {
        setIsLoadingCategories(false)
      }

      try {
        const { products: fetchedProducts, meta: fetchedMeta } = await fetchProducts(slug, 1, 6, undefined, {})
        setProducts(fetchedProducts || [])
        setMeta(fetchedMeta || { total_count: 0, total_pages: 1, page: 1, per_page: 6 })
      } catch (err) {
        console.error("Failed to load products", err)
      } finally {
        setIsLoadingProducts(false)
      }
    }
    load()
  }, [slug])

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
              <Typography sx={{ color: "text.primary" }}>
                Product and services
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
                  <Typography variant="h2" className="productTitle" sx={{ textTransform: 'uppercase' }}>
                    {categoryData?.name || slug}
                  </Typography>
                </Box>
                <Grid container spacing={2} className="productFeaturedBox">
                  <Grid
                    size={{ xs: 12, md: 12, lg: 8 }}
                    className="productFeaturedBoxLeft"
                  >
                    <Image
                      src={categoryData?.image || "/no-image.png"}
                      alt="product-featured-image"
                      width={385}
                      height={385}
                      unoptimized
                    />
                    {/* <img src={categoryData?.image || "/no-image.png"} alt="product-featured-image" /> */}
                  </Grid>
                  <Grid
                    size={{ xs: 12, md: 12, lg: 4 }}
                    className="productFeaturedBoxRight"
                  >
                    <Box className="productFeaturedBoxRightContent">
                      <Typography
                        variant="h3"
                        className="productFeaturedBoxRightTitle"
                        sx={{ textTransform: 'uppercase' }}
                      >
                        ({categoryData?.name || slug})
                      </Typography>
                      <Box className="productFeaturedBoxRightContentList">
                        <Typography
                          variant="body1"
                          sx={{
                            color: "rgba(255, 255, 255, 0.8)",
                            fontSize: "0.95rem",
                            lineHeight: 1.6,
                            mb: 2
                          }}
                        >
                          {categoryData?.description}
                        </Typography>
                      </Box>
                      <Box className="productFeaturedBoxRightContentButton">
                        <Button variant="contained" href={`${routes.serviceProductListPage.replace("[categoryId]", categoryData?.slug || slug)}`}>View Products</Button>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>

                {categoryData?.subcategories && categoryData.subcategories.length > 0 && (
                  <CardListingSlider
                    title="Popular subcategories under "
                    categoryName={categoryData?.name || slug}
                    subcategories={categoryData.subcategories}
                  />
                )}
                {/* <CardListingSlider title="Popular products under " /> */}

                {isLoadingProducts ? (
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}>
                    {[...Array(4)].map((_, i) => (
                      <Skeleton key={i} variant="rounded" height={80} sx={{ borderRadius: "16px" }} />
                    ))}
                  </Box>
                ) : (
                  <Box className="productListingSliderOuter">
                    <Box className="productListingSliderHeader">
                      <Typography variant="h3" className="productListingSliderTitleMain">
                        Popular products under <span>{slug}</span>
                      </Typography>
                    </Box>
                    <Box sx={{ "& > .mainContent": { flex: "1 1 100%" } }}>
                      <ProductListing products={products} meta={meta} fromServicePage={true} />
                    </Box>
                  </Box>
                )}


                <Box className="productListingSliderHeader" sx={{ mt: 6, mb: 3 }}>
                  <Typography variant="h3" className="productListingSliderTitleMain">
                    Explore more <span>categories</span>
                  </Typography>
                </Box>

                {isLoadingCategories ? (
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {[...Array(4)].map((_, i) => (
                      <Skeleton key={i} variant="rounded" height={80} sx={{ borderRadius: "16px" }} />
                    ))}
                  </Box>
                ) : categories.length > 0 ? (
                  <Box>
                    {/* {categories.map((cat, idx) => (
                      <CategoryAccordionCard key={cat.id} category={cat} index={idx} />
                    ))} */}
                    {categories
                      .filter(cat => cat.slug !== slug)
                      .map((cat, idx) => (
                        <CategoryAccordionCard
                          key={cat.id}
                          category={cat}
                          index={idx}
                        />
                      ))}
                  </Box>
                ) : (
                  <Box
                    sx={{
                      textAlign: "center",
                      py: 10,
                      color: "#aaa",
                      fontSize: 15,
                    }}
                  >
                    No categories available at the moment.
                  </Box>
                )}

                {/* <Box className="childCategorySliderOuter">
                  <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={false}
                    // autoplay={false}
                    autoplay={{ delay: 3000 }}
                    spaceBetween={24}
                    slidesPerView={1}
                    speed={1500}
                    loop={false}
                    breakpoints={{
                      0: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                      },
                      1024: {
                        slidesPerView: 4,
                      },
                      1440: {
                        slidesPerView: 5,
                      },
                      1800: {
                        slidesPerView: 6,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <Box className="childCategorySliderBox">
                        <Box className="childCategorySliderBoxImage">
                          <Image
                            src={productCategoryImage1}
                            alt="product-featured-image"
                          />
                        </Box>
                      </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Box className="childCategorySliderBox">
                        <Box className="childCategorySliderBoxImage">
                          <Image
                            src={productCategoryImage2}
                            alt="product-featured-image"
                          />
                        </Box>
                      </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Box className="childCategorySliderBox">
                        <Box className="childCategorySliderBoxImage">
                          <Image
                            src={productCategoryImage3}
                            alt="product-featured-image"
                          />
                        </Box>
                      </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Box className="childCategorySliderBox">
                        <Box className="childCategorySliderBoxImage">
                          <Image
                            src={productCategoryImage1}
                            alt="product-featured-image"
                          />
                        </Box>
                      </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Box className="childCategorySliderBox">
                        <Box className="childCategorySliderBoxImage">
                          <Image
                            src={productCategoryImage2}
                            alt="product-featured-image"
                          />
                        </Box>
                      </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Box className="childCategorySliderBox">
                        <Box className="childCategorySliderBoxImage">
                          <Image
                            src={productCategoryImage3}
                            alt="product-featured-image"
                          />
                        </Box>
                      </Box>
                    </SwiperSlide>
                  </Swiper>
                </Box> */}
              </Box>
              {/* <Box className="paginationOuter">
                <Pagination count={10} color="primary" />
              </Box> */}

            </Box>
          </Stack>
          {/* <Box className="learnMoreOuter">
            <Typography variant="h2" className="learnMoreTitle">
              Learn More
            </Typography>
            <Box className="learnMoreContent">
              <Typography variant="body1" className={`learnMoreContentText ${readMoreOpen ? "readMoreOpen" : ""}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </Typography>
            </Box>
            <Box className="learnMoreButton">
              <Button variant="contained" onClick={toggleReadMoreParent}>{readMoreOpen ? "See Less" : "See More"}</Button>
            </Box>
          </Box> */}
          {/* <Box className="relatedKeyWordsOuter">
            <Typography variant="h2" className="relatedKeyWordsTitle">
              Related Keywords
            </Typography>
            <Box className={`relatedKeyWordsContent ${readMoreOpenKeywords ? "readMoreOpenKeywords" : ""}`}>
              <Box className="relatedKeyWordsContentList">
                <Button variant="outlined">prefabricated houses</Button>
                <Button variant="outlined">lingerie</Button>
                <Button variant="outlined">food wholesalers drinks</Button>
                <Button variant="outlined">asbestos removal contractors</Button>
                <Button variant="outlined">foöd importer</Button>
                <Button variant="outlined">solar panel</Button>
                <Button variant="outlined">furniture wholesaler</Button>
                <Button variant="outlined">food packaging distributors</Button>
                <Button variant="outlined">prefabricated houses</Button>
                <Button variant="outlined">lingerie</Button>
                <Button variant="outlined">food wholesalers drinks</Button>
                <Button variant="outlined">asbestos removal contractors</Button>
                <Button variant="outlined">foöd importer</Button>
                <Button variant="outlined">solar panel</Button>
                <Button variant="outlined">furniture wholesaler</Button>
                <Button variant="outlined">food packaging distributors</Button>
                <Button variant="outlined">prefabricated houses</Button>
                <Button variant="outlined">lingerie</Button>
                <Button variant="outlined">food wholesalers drinks</Button>
                <Button variant="outlined">asbestos removal contractors</Button>
                <Button variant="outlined">foöd importer</Button>
                <Button variant="outlined">solar panel</Button>
                <Button variant="outlined">furniture wholesaler</Button>
                <Button variant="outlined">food packaging distributors</Button>
                <Button variant="outlined">prefabricated houses</Button>
                <Button variant="outlined">lingerie</Button>
                <Button variant="outlined">food wholesalers drinks</Button>
                <Button variant="outlined">asbestos removal contractors</Button>
                <Button variant="outlined">foöd importer</Button>
                <Button variant="outlined">solar panel</Button>
                <Button variant="outlined">furniture wholesaler</Button>
                <Button variant="outlined">food packaging distributors</Button>
                <Button variant="outlined">prefabricated houses</Button>
                <Button variant="outlined">lingerie</Button>
                <Button variant="outlined">food wholesalers drinks</Button>
                <Button variant="outlined">asbestos removal contractors</Button>
                <Button variant="outlined">foöd importer</Button>
                <Button variant="outlined">solar panel</Button>
                <Button variant="outlined">furniture wholesaler</Button>
                <Button variant="outlined">food packaging distributors</Button>
              </Box>
            </Box>
            <Box className="learnMoreButton">
              <Button variant="contained" onClick={toggleReadMoreKeywords}>{readMoreOpenKeywords ? "See Less" : "See More"}</Button>
            </Box>
          </Box> */}
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
                    <Button variant="contained" href={routes.getQuoteForm}>Get Multiple Quotes </Button>
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
