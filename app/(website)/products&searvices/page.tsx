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
  ListItemText,
  Slider,
} from "@mui/material"
import Icon from "@/components/ui/icon/Icon"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/autoplay"
import homeIcon from "@/public/home-icon.svg"
import SearchIcon from "@/public/search.png"
import arrowDownIcon from "@/public/chevron-bottom.svg"
import productFeaturedImage from "@/public/product/spices-featured-pic.png"
import flagGermanyIcon from "@/public/flag/germany.svg"
import flagTurkeyIcon from "@/public/flag/turkey.svg"
import flagSpainIcon from "@/public/flag/spain.svg"
import flagFranceIcon from "@/public/flag/france.svg"
import flagItalyIcon from "@/public/flag/italy.svg"

export default function ProductsServices() {
  const prevRef = React.useRef<any>(null)
  const nextRef = React.useRef<any>(null)
  const [readMoreOpen, setReadMoreOpen] = React.useState(false)
  const toggleReadMoreParent = () => setReadMoreOpen((prev) => !prev)
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  const toggleSideBar = () => setSidebarOpen((prev) => !prev)
  const [location, setLocation] = React.useState("")
  const [radius, setRadius] = React.useState(50)
  return (
    <>
      <Box
        component="section"
        className="collectionListingProductWrapper"
        sx={{
          padding: "80px 0",
        }}
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
                <Image src={homeIcon} alt="home" width={24} height={24} />
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/products&searvices"
              >
                Product and services
              </Link>
              <Typography sx={{ color: "text.primary" }}>
                packaging material
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
                      height: "61px",
                      backgroundColor: "rgba(255,255,255,1)",
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
                        padding: "0 70px 0 15px",
                        fontSize: "15px",
                        "&::placeholder": {
                          color: "#000",
                          opacity: 0.7,
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
                    width={32}
                    height={32}
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
                        <Box className="categoryItemList">
                          <Button variant="text" className="categoryItemButton">
                            Whole Spices
                          </Button>
                          <Button variant="text" className="categoryItemButton">
                            Ground Spices
                          </Button>
                          <Button variant="text" className="categoryItemButton">
                            Exotic and Premium Spices
                          </Button>
                        </Box>
                      </Box>
                      <Box className="categoryItem">
                        <Typography variant="h4" className="categoryItemTitle">
                          CLOTHING Section
                        </Typography>
                        <Box className="categoryItemList">
                          <Button variant="text" className="categoryItemButton">
                            Whole Spices
                          </Button>
                          <Button variant="text" className="categoryItemButton">
                            Ground Spices
                          </Button>
                          <Button variant="text" className="categoryItemButton">
                            Exotic and Premium Spices
                          </Button>
                        </Box>
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
                    <Box className="bottomIcon">
                      <Image
                        src={arrowDownIcon}
                        alt="arrow-down"
                        width={28}
                        height={28}
                      />
                    </Box>
                  </Box>
                  <Box className="widget nearMeWidget">
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ marginBottom: "16px" }}
                    >
                      <Typography variant="h3" className="widgetTitle">
                        Near me
                      </Typography>
                      <Button
                        variant="text"
                        sx={{
                          color: "#7FAF0D",
                          fontSize: "14px",
                          textTransform: "none",
                          padding: "0",
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
                            fontSize: "14px",
                            padding: "12px",
                            borderRadius: "8px",
                            backgroundColor: "rgba(255,255,255,1)",
                            "& fieldset": {
                              borderColor: "#ddd",
                              borderRadius: "8px",
                            },
                            "&:hover fieldset": {
                              borderColor: "#bbb",
                            },
                            "& input": {
                              color: "#333",
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
                  }}
                >
                  <SwiperSlide>
                    <Box className="productListingSliderBox">
                      <Image
                        src={productFeaturedImage}
                        alt="product-featured-image"
                      />
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
                      </Box>
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box className="productListingSliderBox">
                      <Image
                        src={productFeaturedImage}
                        alt="product-featured-image"
                      />
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
                      </Box>
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box className="productListingSliderBox">
                      <Image
                        src={productFeaturedImage}
                        alt="product-featured-image"
                      />
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
                      </Box>
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box className="productListingSliderBox">
                      <Image
                        src={productFeaturedImage}
                        alt="product-featured-image"
                      />
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
                      </Box>
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box className="productListingSliderBox">
                      <Image
                        src={productFeaturedImage}
                        alt="product-featured-image"
                      />
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
                      </Box>
                    </Box>
                  </SwiperSlide>
                </Swiper>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  )
}
