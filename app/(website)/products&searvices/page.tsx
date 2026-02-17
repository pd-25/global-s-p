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
} from "@mui/material"
import Icon from "@/components/ui/icon/Icon"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/autoplay"
import "../product.scss"
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

import childProductCategoryImage1 from "@/public/product/child-category-thumbnail-01.png"
import childProductCategoryImage2 from "@/public/product/child-category-thumbnail-02.png"
import childProductCategoryImage3 from "@/public/product/child-category-thumbnail-03.png"
import flagUsaIcon from "@/public/flag/usa.svg"
import verifiedIcon from "@/public/product/verified-badge.svg"


export default function ProductsServices() {
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
                  <Box className="widget categoryWidget">
                    <Typography variant="h3" className="widgetTitle">
                      Categories
                    </Typography>
                    <Box className="widgetContent">
                      <Box className="categoryItem">
                        <Typography variant="h4" className="categoryItemTitle">
                          SPICES & HERBS
                        </Typography>
                        <List className="categoryItemList">
                          <ListItem>
                            <ListItemText primary="Whole Spices" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Ground Spices" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Exotic and Premium Spices" />
                          </ListItem>
                        </List>
                      </Box>
                      <Box className="categoryItem">
                        <Typography variant="h4" className="categoryItemTitle">
                          CLOTHING Section
                        </Typography>
                        <List className="categoryItemList">
                          <ListItem>
                            <ListItemText primary="Whole Spices" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Ground Spices" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Exotic and Premium Spices" />
                          </ListItem>
                        </List>
                      </Box>
                    </Box>
                    <Box className="bottomIcon">
                      <Image
                        src={arrowDownIcon}
                        alt="arrow-down"
                        width={28}
                        height={28}
                      />
                    </Box>
                  </Box>
                  <Box className="widget supplierWidget">
                    <Typography variant="h3" className="widgetTitle">
                      Supplier
                    </Typography>
                    <Box className="widgetContent">
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox />}
                          label={
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              <span>Packaging Products (648)</span>
                            </Stack>
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox />}
                          label={
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              <span>Packaging Aids (74)</span>
                            </Stack>
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox />}
                          label={
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              <span>Packaging Machinery (Other) (44)</span>
                            </Stack>
                          }
                        />
                      </FormGroup>
                    </Box>

                    <Box className="bottomIcon">
                      <Image
                        src={arrowDownIcon}
                        alt="arrow-down"
                        width={28}
                        height={28}
                      />
                    </Box>
                  </Box>
                  <Box className="widget supplierWidget">
                    <Typography variant="h3" className="widgetTitle">
                      Supplier country
                    </Typography>
                    <Box className="widgetContent">
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox />}
                          label={
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              <Image
                                src={flagGermanyIcon}
                                alt="Printable"
                                width={24}
                                height={24}
                              />
                              <span>Germany (506)</span>
                            </Stack>
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox />}
                          label={
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              <Image
                                src={flagTurkeyIcon}
                                alt="Printable"
                                width={24}
                                height={24}
                              />
                              <span>Türkiye (200)</span>
                            </Stack>
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox />}
                          label={
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              <Image
                                src={flagSpainIcon}
                                alt="Printable"
                                width={24}
                                height={24}
                              />
                              <span>Spain (93)</span>
                            </Stack>
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox />}
                          label={
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              <Image
                                src={flagFranceIcon}
                                alt="Printable"
                                width={24}
                                height={24}
                              />
                              <span>France (89)</span>
                            </Stack>
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox />}
                          label={
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              <Image
                                src={flagItalyIcon}
                                alt="Printable"
                                width={24}
                                height={24}
                              />
                              <span>Italy (66)</span>
                            </Stack>
                          }
                        />
                      </FormGroup>
                    </Box>
                    <Box className="nearMeWidget">
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ marginBottom: "16px" }}
                      >
                        <Typography variant="h3" className="widgetTitle" sx={{ marginBottom: "0 !important" }}>
                          Near me
                        </Typography>
                        <Button
                          variant="text"
                          sx={{
                            color: "#7FAF0D",
                            fontSize: "14px",
                            textTransform: "none",
                            minWidth: "auto",
                            padding: "0",
                            height: "auto",
                          }}
                          onClick={() => {
                            setLocation("")
                            setRadius(50)
                          }}
                        >
                          Reset
                        </Button>
                      </Stack>
                      <Box className="widgetContent">
                        <TextField
                          placeholder="City or postal code"
                          fullWidth
                          label="Enter your location"
                          sx={{
                            marginBottom: "16px",
                            "& .MuiOutlinedInput-root": {
                              fontSize: "18px",
                              padding: "12px",
                              borderRadius: "8px",
                              height: "48px",
                              backgroundColor: "rgba(255,255,255,0.4)",
                              "& fieldset": {
                                borderColor: "#ddd",
                                borderRadius: "8px",
                              },
                              "&:hover fieldset": {
                                borderColor: "#bbb",
                              },
                              "& input": {
                                color: "#000000",
                                padding: "8px",
                                "&::placeholder": {
                                  color: "#999",
                                  opacity: 1,
                                },
                              },
                            },
                          }}
                        />
                        <Button
                          variant="text"
                          className="useMyLocationButton"
                          sx={{
                            color: "#7FAF0D",
                            fontSize: "14px",
                            textTransform: "none",
                            marginBottom: "24px",
                            padding: "0",
                            justifyContent: "flex-start",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            height: "auto",

                          }}
                        >
                          <Icon
                            name="location"
                            width={18}
                            height={18}
                            style={{ marginBottom: "0" }}
                          />
                          Use my location
                        </Button>
                        <Typography
                          variant="body2"
                          sx={{
                            marginBottom: "12px",
                            fontWeight: "500",
                            color: "#333",
                          }}
                        >
                          Radius(km):
                        </Typography>
                        <Slider
                          value={radius}
                          onChange={(e, newValue) =>
                            setRadius(newValue as number)
                          }
                          min={10}
                          max={100}
                          step={15}
                          marks={[
                            { value: 10, label: "10" },
                            { value: 25, label: "25" },
                            { value: 50, label: "50" },
                            { value: 75, label: "75" },
                            { value: 100, label: "100" },
                          ]}
                          valueLabelDisplay="auto"
                          sx={{
                            "& .MuiSlider-rail": {
                              backgroundColor: "#ddd",
                              height: "4px",
                            },
                            "& .MuiSlider-track": {
                              backgroundColor: "#7FAF0D",
                              height: "4px",
                            },
                            "& .MuiSlider-thumb": {
                              backgroundColor: "#7FAF0D",
                              width: "18px",
                              height: "18px",
                              "&:hover": {
                                boxShadow: "0 0 0 8px rgba(127, 175, 13, 0.16)",
                              },
                            },
                            "& .MuiSlider-mark": {
                              backgroundColor: "#bbb",
                              width: "8px",
                              height: "8px",
                              borderRadius: "50%",
                            },
                            "& .MuiSlider-markLabel": {
                              fontSize: "12px",
                              marginTop: "8px",
                            },
                          }}
                        />
                      </Box>
                    </Box>
                    <Box className="bottomIcon">
                      <Image
                        src={arrowDownIcon}
                        alt="arrow-down"
                        width={28}
                        height={28}
                      />
                    </Box>
                  </Box>
                  <Box className="widget priceRangeWidget">


                    <Box className="priceRangeWidgetContent">
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ marginBottom: "16px" }}
                      >
                        <Typography variant="h3" className="widgetTitle" sx={{ marginBottom: "0 !important" }}>
                          Price range (EUR)
                        </Typography>
                        <Button
                          variant="text"
                          sx={{
                            color: "#7FAF0D",
                            fontSize: "14px",
                            textTransform: "none",
                            minWidth: "auto",
                            padding: "0",
                            height: "auto",
                          }}
                        >
                          Reset
                        </Button>
                      </Stack>

                      <Box className="priceRangeWidgetContentInner">
                        <FormControl className="priceRangeRadioGroup">
                          <RadioGroup
                            aria-labelledby="price-range-group-label"
                            name="price-range-group"
                          >
                            <FormControlLabel
                              value="lt5"
                              control={<Radio />}
                              sx={{ width: "100%", alignItems: "center", py: 1 }}
                              label={
                                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ width: "100%" }}>
                                  <Stack direction="row" spacing={1} alignItems="center">
                                    <span>{"< 5"}</span>
                                    <Box component="span" sx={{ color: "#777" }}>(81)</Box>
                                  </Stack>
                                  <Box className="priceRangeProgress">
                                    <LinearProgress
                                      variant="determinate"
                                      value={20}
                                      sx={{
                                        height: 10,
                                        borderRadius: 8,
                                        bgcolor: "#eee",
                                        "& .MuiLinearProgress-bar": {
                                          backgroundColor: "#7FAF0D",
                                        },
                                      }}
                                    />
                                  </Box>
                                </Stack>
                              }
                            />

                            <FormControlLabel
                              value="5-40"
                              control={<Radio />}
                              sx={{ width: "100%", alignItems: "center", py: 1 }}
                              label={
                                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ width: "100%" }}>
                                  <Stack direction="row" spacing={1} alignItems="center">
                                    <span>5 - 40</span>
                                    <Box component="span" sx={{ color: "#777" }}>(58)</Box>
                                  </Stack>
                                  <Box className="priceRangeProgress" >
                                    <LinearProgress
                                      variant="determinate"
                                      value={50}
                                      sx={{
                                        height: 10,
                                        borderRadius: 8,
                                        bgcolor: "#eee",
                                        "& .MuiLinearProgress-bar": {
                                          backgroundColor: "#7FAF0D",
                                        },
                                      }}
                                    />
                                  </Box>
                                </Stack>
                              }
                            />

                            <FormControlLabel
                              value="gte40"
                              control={<Radio />}
                              sx={{ width: "100%", alignItems: "center", py: 1 }}
                              label={
                                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ width: "100%" }}>
                                  <Stack direction="row" spacing={1} alignItems="center">
                                    <span>{"\u2265 40"}</span>
                                    <Box component="span" sx={{ color: "#777" }}>(72)</Box>
                                  </Stack>
                                  <Box className="priceRangeProgress" >
                                    <LinearProgress
                                      variant="determinate"
                                      value={70}
                                      sx={{
                                        height: 10,
                                        borderRadius: 8,
                                        bgcolor: "#eee",
                                        "& .MuiLinearProgress-bar": {
                                          backgroundColor: "#7FAF0D",
                                        },
                                      }}
                                    />
                                  </Box>
                                </Stack>
                              }
                            />
                          </RadioGroup>
                        </FormControl>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                          gap={2}
                          sx={{ marginBottom: "16px" }}
                          className="priceRangeWidgetContentInnerInputs"
                        >
                          <TextField
                            placeholder="0"
                            fullWidth
                            label="Minimum"
                            sx={{
                              marginBottom: "16px",
                              "& .MuiOutlinedInput-root": {
                                fontSize: "18px",
                                padding: "12px",
                                borderRadius: "8px",
                                height: "48px",
                                backgroundColor: "rgba(255,255,255,0.4)",
                                "& fieldset": {
                                  borderColor: "#ddd",
                                  borderRadius: "8px",
                                },
                                "&:hover fieldset": {
                                  borderColor: "#bbb",
                                },
                                "& input": {
                                  color: "#000000",
                                  padding: "8px",
                                  "&::placeholder": {
                                    color: "#999",
                                    opacity: 1,
                                  },
                                },
                              },
                            }}
                          />
                          <span>-</span>
                          <TextField
                            placeholder="10000"
                            fullWidth
                            label="Maximum"
                            sx={{
                              marginBottom: "16px",
                              "& .MuiOutlinedInput-root": {
                                fontSize: "18px",
                                padding: "12px",
                                borderRadius: "8px",
                                height: "48px",
                                backgroundColor: "rgba(255,255,255,0.4)",
                                "& fieldset": {
                                  borderColor: "#ddd",
                                  borderRadius: "8px",
                                },
                                "&:hover fieldset": {
                                  borderColor: "#bbb",
                                },
                                "& input": {
                                  color: "#000000",
                                  padding: "8px",
                                  "&::placeholder": {
                                    color: "#999",
                                    opacity: 1,
                                  },
                                },
                              },
                            }}
                          />
                        </Stack>
                      </Box>
                    </Box>
                    <Box className="bottomIcon">
                      <Image
                        src={arrowDownIcon}
                        alt="arrow-down"
                        width={28}
                        height={28}
                      />
                    </Box>
                  </Box>
                  <Box className="sidebarFooter">
                    <Button variant="contained" className="resetFiltersButton">
                      Reset Filters
                    </Button>
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
                    SPICES & HERBS
                  </Typography>
                  <Typography variant="h3" className="productSubTitle">
                    28824 Suppliers
                  </Typography>
                </Box>
                <Grid container spacing={2} className="productFeaturedBox">
                  <Grid
                    size={{ xs: 6, md: 8 }}
                    className="productFeaturedBoxLeft"
                  >
                    <Image
                      src={productFeaturedImage}
                      alt="product-featured-image"
                    />
                  </Grid>
                  <Grid
                    size={{ xs: 6, md: 4 }}
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
                    autoplay={{ delay: 3000 }}
                    spaceBetween={24}
                    slidesPerView={1}
                    speed={1500}
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
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 2,
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
              <Box className="childCategoryLisitngOuter">
                <Grid container spacing={2} className="childCategoryLisitngRow">
                  <Grid
                    size={{ xs: 6, md: 6, lg: 4 }}
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
                    size={{ xs: 6, md: 6, lg: 4 }}
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
                  <Grid
                    size={{ xs: 6, md: 6, lg: 4 }}
                    className="childCategoryLisitngCol"
                  >
                    <Box className="lisitngCard">
                      <Box className="lisitngCardImage">
                        <Image src={childProductCategoryImage3} alt="product-featured-image" />
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
                size={{ xs: 6, md: 6, lg: 6 }}
                className="startRequestBoxLeft"
              >
                <Image
                  src={startQuoteImage}
                  alt=""
                />
              </Grid>
              <Grid
                size={{ xs: 6, md: 6, lg: 6 }}
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
