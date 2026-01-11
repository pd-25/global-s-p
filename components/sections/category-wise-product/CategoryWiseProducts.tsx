import { AnimateOnScroll } from "@/components/animations";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";



export default function CategoryWiseProducts() {
  return (
    <Box component="section" className="categorySliderWrapper pb-0 secPadd">
      <Container>
        <AnimateOnScroll animation="fade-up">
          <Box className="sectionHeading" sx={{ textAlign: "center" }}>
            <Typography variant="h2" component="h2">
              Search by Product Category And get inspired
            </Typography>
            {/* <Typography variant="body1" component="p">
                Make Passive Income Online
              </Typography> */}
          </Box>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up" delay={0.5}>
          <Box className="productShowcaseRowOuter">
            <Box className="productShowcaseRowInner">

              <Box className="productShowcaseContent">
                <Container>
                  <Box
                    className="productShowcaseRow"
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      gap: 3,
                      justifyContent: "space-between",
                    }}
                  >
                    {/* Category Card */}
                    <Box className="productShowcaseColLeft">
                      <Box className="featuredProductCard">
                        <Box className="discountBadge">
                          <Typography variant="body1" component="p">
                            56% <span>OFF</span>
                          </Typography>
                        </Box>
                        <Box className="featuredProductCardImage">
                          <Image
                            src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=1000&auto=format&fit=crop"
                            alt="Electronics Category"
                            width={200}
                            height={200}
                          />
                        </Box>
                        <Box className="featuredProductCardContent">
                          <Typography
                            variant="body1"
                            component="p"
                            className="stockStatus"
                          >
                            2.2K Products
                          </Typography>
                          <Typography
                            variant="h3"
                            component="h4"
                            className="productCategory"
                          >
                            Electronics Items And More
                          </Typography>
                          <Typography
                            variant="body1"
                            component="p"
                            className="stockStatus"
                          >
                            2.2K Products
                          </Typography>
                          <Box className="actionBtn">
                            <Button
                              variant="contained"
                              href="/"
                            >
                              Source Now
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    {/* Category Card end */}
                    <Box className="productShowcaseColRight">
                      <Stack className="productShowcaseCardStack">
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=500&auto=format&fit=crop"
                                alt="Modern Smartphone"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=500&auto=format&fit=crop"
                                alt="Smart Watch"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500&auto=format&fit=crop"
                                alt="Wireless Headphones"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=500&auto=format&fit=crop"
                                alt="MacBook Pro"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500&auto=format&fit=crop"
                                alt="Professional Camera"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500&auto=format&fit=crop"
                                alt="Smart Watch White"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=500&auto=format&fit=crop"
                                alt="Polaroid Camera"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=500&auto=format&fit=crop"
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                      </Stack>
                    </Box>
                  </Box>
                </Container>
              </Box>
            </Box>
            <Box className="productShowcaseRowInner">
              {/* <Box className="shortTitle">
                  <Typography variant="h3" component="h3">
                    Product <span>Recommendation</span>
                  </Typography>
                </Box> */}
              <Box className="productShowcaseContent">
                <Container>
                  <Box
                    className="productShowcaseRow"
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      gap: 3,
                      justifyContent: "space-between",
                    }}
                  >
                    <Box className="productShowcaseColLeft">
                      <Box className="featuredProductCard">
                        <Box className="discountBadge">
                          <Typography variant="body1" component="p">
                            56% <span>OFF</span>
                          </Typography>
                        </Box>
                        <Box className="featuredProductCardImage">
                          <Image
                            src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=1000&auto=format&fit=crop"
                            alt="product-showcase-image"
                            width={200}
                            height={200}
                          />
                        </Box>
                        <Box className="featuredProductCardContent">
                          <Typography
                            variant="body1"
                            component="p"
                            className="stockStatus"
                          >
                            2.2K Products
                          </Typography>
                          <Typography
                            variant="h3"
                            component="h4"
                            className="productCategory"
                          >
                            Electronics Items And More
                          </Typography>
                          <Typography
                            variant="body1"
                            component="p"
                            className="stockStatus"
                          >
                            2.2K Products
                          </Typography>
                          <Box className="actionBtn">
                            <Button
                              variant="contained"
                              href="/"
                            >
                              Source Now
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="productShowcaseColRight">
                      <Stack className="productShowcaseCardStack">
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=500&auto=format&fit=crop"
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=500&auto=format&fit=crop"
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=500&auto=format&fit=crop"
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=500&auto=format&fit=crop"
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=500&auto=format&fit=crop"
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=500&auto=format&fit=crop"
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=500&auto=format&fit=crop"
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=500&auto=format&fit=crop"
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                      </Stack>
                    </Box>
                  </Box>
                </Container>
              </Box>
            </Box>
            <Box className="productShowcaseRowInner">

              <Box className="productShowcaseContent">
                <Container>
                  <Box
                    className="productShowcaseRow"
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      gap: 3,
                      justifyContent: "space-between",
                    }}
                  >
                    <Box className="productShowcaseColLeft">
                      <Box className="featuredProductCard">
                        <Box className="discountBadge">
                          <Typography variant="body1" component="p">
                            56% <span>OFF</span>
                          </Typography>
                        </Box>
                        <Box className="featuredProductCardImage">
                          <Image
                            src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=1000&auto=format&fit=crop"
                            alt="product-showcase-image"
                            width={200}
                            height={200}
                          />
                        </Box>
                        <Box className="featuredProductCardContent">
                          <Typography
                            variant="body1"
                            component="p"
                            className="stockStatus"
                          >
                            2.2K Products
                          </Typography>
                          <Typography
                            variant="h3"
                            component="h4"
                            className="productCategory"
                          >
                            Electronics Items And More
                          </Typography>
                          <Typography
                            variant="body1"
                            component="p"
                            className="stockStatus"
                          >
                            2.2K Products
                          </Typography>
                          <Box className="actionBtn">
                            <Button
                              variant="contained"
                              href="/"
                            >
                              Source Now
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="productShowcaseColRight">
                      <Stack className="productShowcaseCardStack">
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=500&auto=format&fit=crop"
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=500&auto=format&fit=crop"
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=500&auto=format&fit=crop"
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=500&auto=format&fit=crop"
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=500&auto=format&fit=crop"
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=500&auto=format&fit=crop"
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=500&auto=format&fit=crop"
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=500&auto=format&fit=crop"
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                      </Stack>
                    </Box>
                  </Box>
                </Container>
              </Box>
            </Box>
            <Box className="productShowcaseRowInner">

              <Box className="productShowcaseContent">
                <Container>
                  <Box
                    className="productShowcaseRow"
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      gap: 3,
                      justifyContent: "space-between",
                    }}
                  >
                    <Box className="productShowcaseColLeft">
                      <Box className="featuredProductCard">
                        <Box className="discountBadge">
                          <Typography variant="body1" component="p">
                            56% <span>OFF</span>
                          </Typography>
                        </Box>
                        <Box className="featuredProductCardImage">
                          <Image
                            src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=1000&auto=format&fit=crop"
                            alt="product-showcase-image"
                            width={200}
                            height={200}
                          />
                        </Box>
                        <Box className="featuredProductCardContent">
                          <Typography
                            variant="body1"
                            component="p"
                            className="stockStatus"
                          >
                            2.2K Products
                          </Typography>
                          <Typography
                            variant="h3"
                            component="h4"
                            className="productCategory"
                          >
                            Electronics Items And More
                          </Typography>
                          <Typography
                            variant="body1"
                            component="p"
                            className="stockStatus"
                          >
                            2.2K Products
                          </Typography>
                          <Box className="actionBtn">
                            <Button
                              variant="contained"
                              href="/"
                            >
                              Source Now
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="productShowcaseColRight">
                      <Stack className="productShowcaseCardStack">
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=500&auto=format&fit=crop"
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=500&auto=format&fit=crop"
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=500&auto=format&fit=crop"
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=500&auto=format&fit=crop"
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=500&auto=format&fit=crop"
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=500&auto=format&fit=crop"
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=500&auto=format&fit=crop"
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                        {/* product-showcase-card */}
                        <Box className="productShowcaseBox">
                          <Button
                            href="/"
                            className="innerLink"
                          ></Button>
                          <Box className="productShowcaseCard">
                            <Box className="discountBadge">
                              <Typography variant="body1" component="p">
                                56% <span>OFF</span>
                              </Typography>
                            </Box>
                            <Box className="productShowcaseCardImage">
                              <Image
                                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=500&auto=format&fit=crop"
                                alt="product-showcase-image"
                                width={200}
                                height={200}
                              />
                            </Box>
                            <Box className="productShowcaseCardContent">
                              <Typography
                                variant="h3"
                                component="h3"
                                className="productTitle"
                              >
                                Galaxy M13 (4GB)
                              </Typography>
                              <Box className="productShowcaseCardPrice">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      mb: 0.2,
                                      color: "#222222",
                                    }}
                                  >
                                    ₹10
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 4,
                                    alignItems: "flex-start",
                                    mt: 2,
                                  }}
                                >
                                  {/* Current Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: 700,
                                      lineHeight: 1,
                                      color: "#222222",
                                    }}
                                  >
                                    499
                                  </Typography>
                                  {/* Old Prices */}
                                  <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                      textDecoration: "line-through",
                                      fontSize: "16px",
                                      fontWeight: 400,
                                      lineHeight: 1,
                                      color: "#222222",
                                      mb: 0.2,
                                    }}
                                  >
                                    ₹14
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {/* product-showcase-card */}
                      </Stack>
                    </Box>
                  </Box>
                </Container>
              </Box>
            </Box>
          </Box>
        </AnimateOnScroll>
      </Container>
    </Box>
  )
}
