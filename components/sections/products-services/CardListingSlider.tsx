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
import Image from "next/image"
import productCategoryImage1 from "@/public/product/spice-product-slider-thumb-01.png"
import productCategoryImage2 from "@/public/product/spice-product-slider-thumb-02.png"
import productCategoryImage3 from "@/public/product/spice-product-slider-thumb-03.png"

export default function CardListingSlider({title}: {title: string}) {
    return (
        <>
            <Box className="productListingSliderOuter">
                <Box className="productListingSliderHeader">
                    <Typography variant="h3" className="productListingSliderTitleMain">
                        {title} <span>SPICES & HERBS</span>
                    </Typography>
                </Box>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={false}
                    // autoplay={false}
                    speed={1500}
                    autoplay={{ delay: 4000, disableOnInteraction: true }}
                    spaceBetween={24}
                    slidesPerView={2}
                    loop={false}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 12,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        960: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 24,
                        },
                        1536: {
                            slidesPerView: 5,
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
                                {/* <Box className="discountBadge">
                                <Typography variant="body1" component="p">
                                  56% <span>OFF</span>
                                </Typography>
                              </Box> */}
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
                                    <Button variant="contained" size="small">View Products</Button>
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
                                {/* <Box className="discountBadge">
                                <Typography variant="body1" component="p">
                                  56% <span>OFF</span>
                                </Typography>
                              </Box> */}
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
                                    <Button variant="contained" size="small">View Products</Button>
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
                                {/* <Box className="discountBadge">
                                <Typography variant="body1" component="p">
                                  56% <span>OFF</span>
                                </Typography>
                              </Box> */}
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
                                    <Button variant="contained" size="small">View Products</Button>
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
                                {/* <Box className="discountBadge">
                                <Typography variant="body1" component="p">
                                  56% <span>OFF</span>
                                </Typography>
                              </Box> */}
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
                                    <Button variant="contained" size="small">View Products</Button>
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
                                {/* <Box className="discountBadge">
                                <Typography variant="body1" component="p">
                                  56% <span>OFF</span>
                                </Typography>
                              </Box> */}
                            </Box>
                            <Box className="productListingSliderContent">
                                <Typography
                                    variant="h3"
                                    className="productListingSliderTitle"
                                >
                                    Ground Spices:33
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
                                    <Button variant="contained" size="small">View Products</Button>
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
                                {/* <Box className="discountBadge">
                                <Typography variant="body1" component="p">
                                  56% <span>OFF</span>
                                </Typography>
                              </Box> */}
                            </Box>
                            <Box className="productListingSliderContent">
                                <Typography
                                    variant="h3"
                                    className="productListingSliderTitle"
                                >
                                    Ground Spices:44
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
                                    <Button variant="contained" size="small">View Products</Button>
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
                                {/* <Box className="discountBadge">
                                <Typography variant="body1" component="p">
                                  56% <span>OFF</span>
                                </Typography>
                              </Box> */}
                            </Box>
                            <Box className="productListingSliderContent">
                                <Typography
                                    variant="h3"
                                    className="productListingSliderTitle"
                                >
                                    Ground Spices55:
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
                                    <Button variant="contained" size="small">View Products</Button>
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
                                {/* <Box className="discountBadge">
                                <Typography variant="body1" component="p">
                                  56% <span>OFF</span>
                                </Typography>
                              </Box> */}
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
                                    <Button variant="contained" size="small">View Products</Button>
                                </Box>
                            </Box>
                        </Box>
                    </SwiperSlide>
                </Swiper>
            </Box>
        </>
    )
}
