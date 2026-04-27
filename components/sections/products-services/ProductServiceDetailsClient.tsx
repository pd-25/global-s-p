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




export default function ProductServiceDetailsClient() {
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
                  <Typography variant="h2" className="productTitle">
                    SPICES & HERBS
                  </Typography>
                  {/* <Typography variant="h3" className="productSubTitle">
                    28824 Suppliers
                  </Typography> */}
                </Box>
                <Grid container spacing={2} className="productFeaturedBox">
                  <Grid
                    size={{ xs: 12, md: 12, lg: 8 }}
                    className="productFeaturedBoxLeft"
                  >
                    <Image
                      src={productFeaturedImage}
                      alt="product-featured-image"
                    />
                  </Grid>
                  <Grid
                    size={{ xs: 12, md: 12, lg: 4 }}
                    className="productFeaturedBoxRight"
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
                <Box className="productListingSliderOuter">
                  <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={false}
                    // autoplay={false}
                    speed={1500}
                    autoplay={{ delay: 4000, disableOnInteraction: true }}
                    spaceBetween={24}
                    slidesPerView={1}
                    loop={false}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                      },
                      1800: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <Box className="productListingSliderBox">
                        <Box className="productListingSliderBoxImage">
                          <Image
                            src={productCategoryImage1}
                            alt="product-featured-image"
                          />
                          <Box className="discountBadge">
                            <Typography variant="body1" component="p">
                              56% <span>OFF</span>
                            </Typography>
                          </Box>
                        </Box>

                        <Box className="productListingSliderContent">
                          <Typography
                            variant="h3"
                            className="productListingSliderTitle"
                          >
                            Ground Spices:
                          </Typography>
                          <List>
                            <ListItem>
                              <ListItemText primary="Custom packaging solutions" />
                            </ListItem>
                            <ListItem>
                              <ListItemText primary="Wide range of protective materials" />
                            </ListItem>
                          </List>
                          <Box className="productListingSliderContentButton">
                            <Button variant="contained" size="small">View Details</Button>
                          </Box>
                        </Box>
                      </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Box className="productListingSliderBox">
                        <Box className="productListingSliderBoxImage">
                          <Image
                            src={productCategoryImage2}
                            alt="product-featured-image"
                          />
                          <Box className="discountBadge">
                            <Typography variant="body1" component="p">
                              56% <span>OFF</span>
                            </Typography>
                          </Box>
                        </Box>
                        <Box className="productListingSliderContent">
                          <Typography
                            variant="h3"
                            className="productListingSliderTitle"
                          >
                            Ground Spices:
                          </Typography>
                          <List>
                            <ListItem>
                              <ListItemText primary="Custom packaging solutions" />
                            </ListItem>
                            <ListItem>
                              <ListItemText primary="Wide range of protective materials" />
                            </ListItem>
                          </List>
                          <Box className="productListingSliderContentButton">
                            <Button variant="contained" size="small">View Details</Button>
                          </Box>
                        </Box>
                      </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Box className="productListingSliderBox">
                        <Box className="productListingSliderBoxImage">
                          <Image
                            src={productCategoryImage3}
                            alt="product-featured-image"
                          />
                          <Box className="discountBadge">
                            <Typography variant="body1" component="p">
                              56% <span>OFF</span>
                            </Typography>
                          </Box>
                        </Box>
                        <Box className="productListingSliderContent">
                          <Typography
                            variant="h3"
                            className="productListingSliderTitle"
                          >
                            Ground Spices:
                          </Typography>
                          <List>
                            <ListItem>
                              <ListItemText primary="Custom packaging solutions" />
                            </ListItem>
                            <ListItem>
                              <ListItemText primary="Wide range of protective materials" />
                            </ListItem>
                          </List>
                          <Box className="productListingSliderContentButton">
                            <Button variant="contained" size="small">View Details</Button>
                          </Box>
                        </Box>
                      </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Box className="productListingSliderBox">
                        <Box className="productListingSliderBoxImage">
                          <Image
                            src={productCategoryImage1}
                            alt="product-featured-image"
                          />
                          <Box className="discountBadge">
                            <Typography variant="body1" component="p">
                              56% <span>OFF</span>
                            </Typography>
                          </Box>
                        </Box>
                        <Box className="productListingSliderContent">
                          <Typography
                            variant="h3"
                            className="productListingSliderTitle"
                          >
                            Ground Spices:
                          </Typography>
                          <List>
                            <ListItem>
                              <ListItemText primary="Custom packaging solutions" />
                            </ListItem>
                            <ListItem>
                              <ListItemText primary="Wide range of protective materials" />
                            </ListItem>
                          </List>
                          <Box className="productListingSliderContentButton">
                            <Button variant="contained" size="small">View Details</Button>
                          </Box>
                        </Box>
                      </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Box className="productListingSliderBox">
                        <Box className="productListingSliderBoxImage">
                          <Image
                            src={productCategoryImage2}
                            alt="product-featured-image"
                          />
                          <Box className="discountBadge">
                            <Typography variant="body1" component="p">
                              56% <span>OFF</span>
                            </Typography>
                          </Box>
                        </Box>
                        <Box className="productListingSliderContent">
                          <Typography
                            variant="h3"
                            className="productListingSliderTitle"
                          >
                            Ground Spices:
                          </Typography>
                          <List>
                            <ListItem>
                              <ListItemText primary="Custom packaging solutions" />
                            </ListItem>
                            <ListItem>
                              <ListItemText primary="Wide range of protective materials" />
                            </ListItem>
                          </List>
                          <Box className="productListingSliderContentButton">
                            <Button variant="contained" size="small">View Details</Button>
                          </Box>
                        </Box>
                      </Box>
                    </SwiperSlide>
                  </Swiper>
                </Box>
                <Box className="childCategorySliderOuter">
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
                </Box>
              </Box>
              <Box className="paginationOuter">
                <Pagination count={10} color="primary" />
              </Box>

            </Box>
          </Stack>
          <Box className="learnMoreOuter">
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
          </Box>
          <Box className="relatedKeyWordsOuter">
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
          </Box>
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
