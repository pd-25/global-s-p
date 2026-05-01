import { AnimateOnScroll } from '@/components/animations'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import ourPartnersAvatar from "@/public/home/partners-avatar.webp"

export default function PartnerInfo() {
  return (
          <Box component="section" className="ourPartnersWrapper">
        <Container>
          <Box className="sectionHeading" sx={{ textAlign: "center" }}>
            <Typography variant="h2" component="h2">
              Become Global Partner
            </Typography>
            <Typography variant="body2" component="p">
              Grow Together, Win Together
            </Typography>
          </Box>
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            justifyContent="space-between"
            spacing={4}
          >
            <Box
              className="ourPartnersCol"
              sx={{ flex: 1, width: { xs: "100%", md: "50%", lg: "50%" } }}
            >
              <Box className="ourPartnersContentCard">
                <Typography variant="h3" component="h3">
                  <span> Become Part </span> of
                </Typography>
                <Typography variant="h4" component="h4">
                   Something Bigger Than Trade.
                </Typography>
                <Typography variant="body1" component="p">
                  Trade today is more than transactions- it’s about building a long-standing relationship. We bring together global buyers and trusted partners on a platform built around transparency, credibility, and shared success.

                </Typography>
                <Typography variant="body1" component="p">
                  Join a growing network where collaboration drives growth and every connection creates new opportunities. Together, we scale smarter, build stronger partnerships, and win as one.
                </Typography>
                <Button variant="contained" href="/">
                  Explore More
                </Button>
              </Box>
            </Box>
            <Box
              className="ourPartnersCol"
              sx={{ flex: 1, width: { xs: "100%", md: "50%", lg: "50%" } }}
            >
              <AnimateOnScroll animation="fade-right" delay={0.3}>
                <Box className="ourPartnersImageCard">
                  <Image src={ourPartnersAvatar} alt="our-partners-image" />
                </Box>
              </AnimateOnScroll>
            </Box>
          </Stack>
        </Container>
      </Box>
  )
}
