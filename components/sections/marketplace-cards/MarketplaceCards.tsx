import { AnimateOnScroll } from "@/components/animations"
import { Box, Button, Container, Stack, Typography } from "@mui/material"
import Image from "next/image"
// Top brands & marketplace images
import marketplaceImage1 from "@/public/home/market-place-icon-01.svg"
import marketplaceImage2 from "@/public/home/market-place-icon-02.svg"

export default function MarketplaceCards() {
  return (
    <Box component="section" className="marketplaceWrapper secPadd">
      <Container>
        <Box className="sectionHeading" sx={{ textAlign: "center" }}>
          <Typography variant="h2" component="h2">
            Access Verified Global Trade Network in One Place
          </Typography>
          <Typography variant="body2" component="p">
            Source with Confidence and Trade with Clarity.
          </Typography>
        </Box>
        <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
          <Box
            className="marketplaceCard colorPrimary"
            sx={{ flex: 1, width: { xs: "100%", md: "50%", lg: "50%" } }}
          >
            <AnimateOnScroll animation="fade-left" delay={0}>
              <Box className="marketplaceCardInner">
                <Box className="marketplaceCardHeader">
                  <Box className="marketplaceCardHeaderContent">
                    <Typography variant="body1" component="p">
                      2.2m+ Products
                    </Typography>
                    <Typography variant="h3" component="h3">
                      Across Multiple Export Categories
                    </Typography>
                    <Button variant="contained" color="secondary" href="/">
                      Source Now
                    </Button>
                  </Box>
                  <Box className="marketplaceCardHeaderImage">
                    <Image src={marketplaceImage1} alt="marketplace-image" />
                  </Box>
                </Box>
                <Box className="marketplaceCardBody">
                  <Typography variant="body1" component="p">
                    A diverse product portfolio across key export categories, aligned with real demand across global markets. Each product category is structured to ensure clarity, consistency, and relevance within international trade environments.
                  </Typography>
                  {/* <Button variant="contained" href="/">
                    Source Now
                  </Button> */}
                </Box>
              </Box>
            </AnimateOnScroll>
          </Box>
          <Box
            className="marketplaceCard colorSecondary"
            sx={{ flex: 1, width: { xs: "100%", md: "50%", lg: "50%" } }}
          >
            <AnimateOnScroll animation="fade-right" delay={0}>
              <Box className="marketplaceCardInner">
                <Box className="marketplaceCardHeader">
                  <Box className="marketplaceCardHeaderContent">
                    <Typography variant="body1" component="p">
                      20 K+ Global Partners
                    </Typography>
                    <Typography variant="h3" component="h3">
                      Verified and Export-Ready
                    </Typography>
                    {/* <Button variant="contained" href="/">
                      Source Now
                    </Button> */}
                  </Box>
                  <Box className="marketplaceCardHeaderImage">
                    <Image src={marketplaceImage2} alt="marketplace-image" />
                  </Box>
                </Box>
                <Box className="marketplaceCardBody">
                  <Typography variant="body1" component="p">
                    Engage with global partners evaluated for product quality, export readiness, and genuine demand across global markets. Our process ensures that every partner presented is positioned for relevance, consistency, and long-term trade viability.
                  </Typography>
                  {/* <Button variant="contained" href="/">
                    Source Now
                  </Button> */}
                </Box>
              </Box>
            </AnimateOnScroll>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
