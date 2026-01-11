import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Icon from "@/components/ui/icon/Icon"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
// Top brands & marketplace images
import topBrandImage from "@/public/home/top-brand-thumbnail.png"
import appleLogo from "@/public/home/apple-logo.png"
import Image from "next/image";
export default function TopBrands() {
  return (
     <Box component="section" className="topBrandsWrapper secPadd pb-0">
        <Container>
          <Box
            className="shortTitle"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h3" component="h3">
              Top <span>Electronics Brands</span>
            </Typography>

            <Button variant="text"  href="/">
              View All
              <Icon name="arrowRight" width={10} height={10} />
            </Button>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 16,
                },
              }}
              className="top-brands-swiper"
            >
              {[
                {
                  id: 1,
                  name: "IPHONE",
                  logo: appleLogo,
                  image: topBrandImage,
                  offer: "UP to 80% OFF",
                  brandType: "apple",
                },
                {
                  id: 2,
                  name: "IPHONE",
                  logo: appleLogo,
                  image: topBrandImage,
                  offer: "UP to 80% OFF",
                  brandType: "realme",
                },
                {
                  id: 3,
                  name: "IPHONE",
                  logo: appleLogo,
                  image: topBrandImage,
                  offer: "UP to 80% OFF",
                  brandType: "xiaomi",
                },
              ].map((brand) => (
                <SwiperSlide key={brand.id}>
                  <Box
                    className={`topBrandsCard topBrandsCard--${brand.brandType}`}
                    data-brand-type={brand.brandType}
                  >
                    <Stack
                      direction="row"
                      spacing={2}
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Box className="brandContent">
                        <Typography
                          variant="body1"
                          component="p"
                          className="brandName"
                        >
                          {brand.name}
                        </Typography>
                        <Box className="brandLogo">
                          <Image src={brand.logo} alt="brand-logo" />
                        </Box>
                        <Typography
                          variant="h3"
                          component="h3"
                          className="brandOffer"
                        >
                          {brand.offer}
                        </Typography>
                      </Box>
                      <Box className="brandImage">
                        <Image src={brand.image} alt="brand-image" />
                      </Box>
                    </Stack>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Container>
      </Box>
  )
}
