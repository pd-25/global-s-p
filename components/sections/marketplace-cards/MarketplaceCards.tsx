import { AnimateOnScroll } from '@/components/animations'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
// Top brands & marketplace images
import marketplaceImage1 from "@/public/home/market-place-icon-01.svg"
import marketplaceImage2 from "@/public/home/market-place-icon-02.svg"

export default function MarketplaceCards() {
    return (
        <Box component="section" className="marketplaceWrapper secPadd">
            <Container>
                <Box className="sectionHeading" sx={{ textAlign: "center" }}>
                    <Typography variant="h2" component="h2">
                        Become Part of the Marketplace Today
                    </Typography>
                    <Typography variant="body2" component="p">
                        Make Passive Income Online
                    </Typography>
                </Box>
                <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
                    <Box
                        className="marketplaceCard colorPrimary"
                        sx={{ flex: 1, width: { xs: "100%", md: "50%", lg: "50%" } }}
                    >
                        <AnimateOnScroll animation="fade-left" delay={0.3}>
                            <Box className="marketplaceCardInner">
                                <Box className="marketplaceCardHeader">
                                    <Box className="marketplaceCardHeaderContent">
                                        <Typography variant="body1" component="p">
                                            2.2K Products
                                        </Typography>
                                        <Typography variant="h3" component="h3">
                                            Electronics Items And More
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            href="/"
                                        >
                                            Source Now
                                        </Button>
                                    </Box>
                                    <Box className="marketplaceCardHeaderImage">
                                        <Image src={marketplaceImage1} alt="marketplace-image" />
                                    </Box>
                                </Box>
                                <Box className="marketplaceCardBody">
                                    <Typography variant="body1" component="p">
                                        We have had perhaps the best experience of getting our
                                        children counselled for their career with the psychologist
                                        at Tera Parichay. She was not only incredibly
                                        knowledgeable and helpful but also ethical. While we had
                                        tried services of other "career
                                    </Typography>
                                    <Button variant="contained"  href="/">
                                        Source Now
                                    </Button>
                                </Box>
                            </Box>
                        </AnimateOnScroll>
                    </Box>
                    <Box
                        className="marketplaceCard colorSecondary"
                        sx={{ flex: 1, width: { xs: "100%", md: "50%", lg: "50%" } }}
                    >
                        <AnimateOnScroll animation="fade-right" delay={0.3}>
                            <Box className="marketplaceCardInner">
                                <Box className="marketplaceCardHeader">
                                    <Box className="marketplaceCardHeaderContent">
                                        <Typography variant="body1" component="p">
                                            2.2K Products
                                        </Typography>
                                        <Typography variant="h3" component="h3">
                                            Electronics Items And More
                                        </Typography>
                                        <Button variant="contained" href="/">
                                            Source Now
                                        </Button>
                                    </Box>
                                    <Box className="marketplaceCardHeaderImage">
                                        <Image src={marketplaceImage2} alt="marketplace-image" />
                                    </Box>
                                </Box>
                                <Box className="marketplaceCardBody">
                                    <Typography variant="body1" component="p">
                                        We have had perhaps the best experience of getting our
                                        children counselled for their career with the psychologist
                                        at Tera Parichay. She was not only incredibly
                                        knowledgeable and helpful but also ethical. While we had
                                        tried services of other "career
                                    </Typography>
                                    <Button variant="contained" href="/">
                                        Source Now
                                    </Button>
                                </Box>
                            </Box>
                        </AnimateOnScroll>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}
