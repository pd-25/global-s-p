import { AnimateOnScroll } from "@/components/animations";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
// Featured & Product section images
import featuredProductImage from "@/public/home/featured-product-thumbnail.webp"
import productThumbnail1 from "@/public/home/product-thumbnail-01.webp"
import productThumbnail2 from "@/public/home/product-thumbnail-01.webp"

export default function CategoryWiseProducts() {
  return (
   <Box component="section" className="categorySliderWrapper pb-0 secPadd">
        <Container>
          <AnimateOnScroll animation="fade-up">
            <Box className="sectionHeading" sx={{ textAlign: "center" }}>
              <Typography variant="h2" component="h2">
                Search by Product Category And get inspired
              </Typography>
              <Typography variant="body1" component="p">
                Make Passive Income Online
              </Typography>
            </Box>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={0.5}>
            <Box className="productShowcaseRowOuter">
              <Box className="productShowcaseRowInner">
                <Box className="shortTitle">
                  <Typography variant="h3" component="h3">
                    Product <span>Recommendation</span>
                  </Typography>
                </Box>
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
                              src={featuredProductImage}
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
                                  src={productThumbnail1}
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
                                  src={productThumbnail2}
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
                                  src={productThumbnail1}
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
                                  src={productThumbnail2}
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
                                  src={productThumbnail1}
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
                                  src={productThumbnail2}
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
                                  src={productThumbnail1}
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
                                  src={productThumbnail2}
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
                <Box className="shortTitle">
                  <Typography variant="h3" component="h3">
                    Product <span>Recommendation</span>
                  </Typography>
                </Box>
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
                              src={featuredProductImage}
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
                                  src={productThumbnail1}
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
                                  src={productThumbnail2}
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
                                  src={productThumbnail1}
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
                                  src={productThumbnail2}
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
                                  src={productThumbnail1}
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
                                  src={productThumbnail2}
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
                                  src={productThumbnail1}
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
                                  src={productThumbnail2}
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
