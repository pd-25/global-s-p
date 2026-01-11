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
              Become Our Partner 
            </Typography>
            <Typography variant="body2" component="p">
              Make Passive Income Online
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
                  <span> For Partners,</span> and the ones
                </Typography>
                <Typography variant="h4" component="h4">
                  who become experts.
                </Typography>
                <Typography variant="body1" component="p">
                  Whether you're a solo designer or part of a team, a junior or
                  a senior, at an agency or a large organization, Prime has you
                  covered.
                </Typography>
                <Typography variant="body1" component="p">
                  It’s not about number of components. With top Figma tricks &
                  techniques, battle-tested design system approach
                </Typography>
                <Button variant="contained" href="/">
                  Know More
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
