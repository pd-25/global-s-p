"use client"

import Link from "next/link"
import Image from "next/image"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Icon from "@/components/ui/icon/Icon"
import styles from "./Footer.module.css"
import storeIcon from "@/public/store.svg"
import appStoreIcon from "@/public/app-store.svg"
import googlePlayIcon from "@/public/google-play.svg"
import logo from "@/public/global-sp-logo.svg"

export default function Footer() {
  const categories = [
    "(SPICES & HERBS)",
    "(CLOTHING Section)",
    "(SEAFOOD)",
    "JUTE SECTION",
    "NATURAL AND AYURBEDIC MEDICINE",
    "Vegetables & Fruits",
    "HANDICRAFTS SECTION",
    "Food & Beverage",
    "Tea & Coffee",
    "SEEDS WITH AGRI DRONE & ROBOTS",
    "Kids Toys...",
    "ECO COOKWARE & UTENSILS",
  ]

  const customerServices = [
    { name: "About Us", link: "/about" },
    { name: "Terms & Conditions", link: "/terms" },
    { name: "FAQ", link: "/faq" },
    { name: "Privacy Policy", link: "/privacy" },
    { name: "E-waste Policy", link: "/e-waste" },
    { name: "Cancellation & Return Policy", link: "/cancellation" },
  ]

  const phoneNumber = "+1 202-918-2132"

  return (
    <Box
      component="footer"
      className={styles.footer}
      sx={{
        backgroundColor: "#054934",
        color: "#ffffff",
        py: 6,
      }}
    >
      <Container>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 4,
            mb: 4,
          }}
        >
          {/* Left Column: Global Source Expo */}
          <Box>
            <Box sx={{ mb: 3 }}>
              <Box sx={{ mb: 3 }}>
                <Image src={logo} alt="logo" width={300} height={40} />
              </Box>

              <Stack direction="column" alignItems="start" spacing={2}>
                <Button variant="contained" component={Link} href="/connect">
                  Connect with us
                </Button>
                <Button variant="outlined" component={Link} href="/store" sx={{ borderColor: "#ffffff", color: "#ffffff", display: "flex", alignItems: "center", gap: 1, transition: "all 0.3s ease" }}>
                  <Image src={storeIcon} alt="store-icon" />
                  Visit Our Store
                </Button>
              </Stack>
            </Box>

            {/* Contact Us */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  fontSize: "18px",
                  fontWeight: 700,
                  mb: 2,
                  color: "#ffffff",
                }}
              >
                Contact Us
              </Typography>
              <Stack direction="column" spacing={2}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Icon name="whatsapp" width={20} height={20} />
                  <Box>
                    <Typography
                      variant="body1"
                      component="p"
                      sx={{
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "#ffffff",
                      }}
                    >
                      Whats App
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      sx={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#ffffff",
                      }}
                    >
                      {phoneNumber}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Icon name="phone" width={20} height={20} />
                  <Box>
                    <Typography
                      variant="body1"
                      component="p"
                      sx={{
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "#ffffff",
                      }}
                    >
                      Call Us
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      sx={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#ffffff",
                      }}
                    >
                      {phoneNumber}
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Box>

            {/* Download App */}
            <Box>
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  fontSize: "16px",
                  fontWeight: 700,
                  mb: 2,
                  color: "#ffffff",
                }}
              >
                Download App
              </Typography>
              <Stack direction="row" spacing={2}>
                <Link href="/">
                  <Image src={appStoreIcon} alt="apple-icon" />
                </Link>
                <Link href="/">
                  <Image src={googlePlayIcon} alt="apple-icon" />
                </Link>
              </Stack>
            </Box>
          </Box>

          {/* Middle Column: Most Popular Categories */}
          <Box>
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                mb: 2,
                color: "#ffffff",
                borderBottom: "2px solid #ffffff",
                pb: 1,
              }}
            >
              Most Popular Categories
            </Typography>
            <Stack
              component="ul"
              direction="column"
              spacing={1}
              sx={{
                listStyle: "none",
                pl: 0,
                mb: 3,
              }}
            >
              {categories.map((category, index) => (
                <Box
                  key={index}
                  component="li"
                  className="footerLinks"
                  sx={{
                    color: "#ffffff",
                    fontSize: "14px",
                    lineHeight: 1.6,
                  }}
                >
                  <Link
                    href={`/category/${index + 1}`}
                    className={styles.categoryLink}
                    style={{
                      color: "#ffffff",
                      fontSize: "16px",
                      fontWeight: 500,
                      lineHeight: 1.6,
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {category}
                  </Link>
                </Box>
              ))}
            </Stack>
            <Button variant="contained" component={Link} href="/categories">
              View More
            </Button>
          </Box>

          {/* Right Column: Customer Services */}
          <Box>
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                mb: 2,
                color: "#ffffff",
                borderBottom: "2px solid #ffffff",
                pb: 1,
              }}
            >
              Customer Services
            </Typography>
            <Stack
              component="ul"
              direction="column"
              spacing={1}
              className="footerLinks"
              sx={{
                listStyle: "none",
                pl: 0,
              }}
            >
              {customerServices.map((service) => (
                <Box
                  key={service.name}
                  component="li"
                  sx={{
                    color: "#ffffff",
                    fontSize: "14px",
                    lineHeight: 1.6,
                  }}
                >
                  <Link
                    href={service.link}
                    className={styles.serviceLink}
                    style={{
                      color: "#ffffff",
                      fontSize: "16px",
                      fontWeight: 500,
                      lineHeight: 1.6,
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {service.name}
                  </Link>
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>

        {/* Bottom Section: Copyright */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            pt: 3,
            mt: 4,
            textAlign: "center",
          }}
        >
          <Typography
            variant="body2"
            component="p"
            sx={{
              color: "#ffffff",
              fontSize: "14px",
            }}
          >
            © 2026 All rights reserved. Global Source Expo
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
