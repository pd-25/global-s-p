"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Icon from "@/components/ui/icon/Icon"
import styles from "./Footer.module.css"
import { adminRoutes, routes } from "@/config/routes"
import storeIcon from "@/public/store.svg"
import appStoreIcon from "@/public/app-store.svg"
import googlePlayIcon from "@/public/google-play.svg"
// import logo from "@/public/global-sp-logo.svg"
import logo from "@/public/gse-green-bg.svg"
// import logo from "@/public/logo_jpg.jpeg"

const brandWords = ["Global", "Source", "Expo", "Ltd"] as const
const WORD_DELAY = 500 // ms between each word appearing

// function AnimatedBrandText({
//   fontSize,
//   letterSpacing,
//   flexDirection = "column",
//   gap = 0,
// }: {
//   fontSize: string | Record<string, string>
//   letterSpacing: string | Record<string, string>
//   flexDirection?: "column" | "row" | Record<string, string>
//   gap?: number | string | Record<string, number | string>
// }) {
//   const [visibleCount, setVisibleCount] = useState(0)

//   useEffect(() => {
//     if (visibleCount < brandWords.length) {
//       const timer = setTimeout(() => {
//         setVisibleCount((prev) => prev + 1)
//       }, WORD_DELAY)
//       return () => clearTimeout(timer)
//     }
//   }, [visibleCount])

//   return (
//     <Typography
//       component="span"
//       sx={{
//         fontWeight: 700,
//         fontSize,
//         letterSpacing,
//         lineHeight: 1.1,
//         display: "flex",
//         flexDirection,
//         alignItems: { xs: "flex-start", md: "center" },
//         gap,
//       }}
//     >
//       <Box
//         component="span"
//         sx={{
//           color: "white",
//           opacity: 0 < visibleCount ? 1 : 0,
//           transform: 0 < visibleCount ? "translateY(0)" : "translateY(6px)",
//           transition: "opacity 0.4s ease, transform 0.4s ease",
//         }}
//       >
//         {brandWords[0]}
//       </Box>
//       <Box
//         component="span"
//         sx={{
//           color: "#7FAF0D",
//           opacity: 1 < visibleCount ? 1 : 0,
//           transform: 1 < visibleCount ? "translateY(0)" : "translateY(6px)",
//           transition: "opacity 0.4s ease, transform 0.4s ease",
//         }}
//       >
//         {brandWords[1]}
//       </Box>
//       <Box
//         component="span"
//         sx={{ display: "flex", flexDirection: "row", gap: "5px" }}
//       >
//         <Box
//           component="span"
//           sx={{
//             color: "white",
//             opacity: 2 < visibleCount ? 1 : 0,
//             transform: 2 < visibleCount ? "translateY(0)" : "translateY(6px)",
//             transition: "opacity 0.4s ease, transform 0.4s ease",
//           }}
//         >
//           {brandWords[2]}
//         </Box>
//         <Box
//           component="span"
//           sx={{
//             color: "#7FAF0D",
//             opacity: 3 < visibleCount ? 1 : 0,
//             transform: 3 < visibleCount ? "translateY(0)" : "translateY(6px)",
//             transition: "opacity 0.4s ease, transform 0.4s ease",
//           }}
//         >
//           {brandWords[3]}
//         </Box>
//       </Box>
//     </Typography>
//   )
// }

function AnimatedBrandText({
  fontSize,
  letterSpacing,
  flexDirection = 'column',
  gap = 0,
}: {
  fontSize: string | Record<string, string>
  letterSpacing: string | Record<string, string>
  flexDirection?: 'column' | 'row' | Record<string, string>
  gap?: number | string | Record<string, number | string>
}) {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    if (visibleCount < brandWords.length) {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1)
      }, WORD_DELAY)
      return () => clearTimeout(timer)
    }
  }, [visibleCount])

  return (
    <Typography
      component="span"
      sx={{
        fontWeight: 700,
        fontSize,
        lineHeight: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 0,
      }}
    >
      <Box
        component="span"
        sx={{
          color: '#7FAF0D',
          fontStyle: 'italic',
          textTransform: 'uppercase',
          fontWeight: 900,
          fontSize: { xs: '0.7em', md: '0.9em' },
          letterSpacing: { xs: '0.5px', md: '1px' },
          opacity: 0 < visibleCount ? 1 : 0,
          transform: 0 < visibleCount ? 'translateY(0)' : 'translateY(6px)',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
        }}
      >
        {brandWords[0]}
      </Box>
      <Box
        component="span"
        sx={{
          color: 'white',
          textTransform: 'uppercase',
          fontFamily: '"Times New Roman", Times, serif',
          fontWeight: 500,
          fontSize: { xs: '1.2em', md: '1.6em' },
          letterSpacing: { xs: '1px', md: '2px' },
          margin: '-2px 0px',
          opacity: 1 < visibleCount ? 1 : 0,
          transform: 1 < visibleCount ? 'translateY(0)' : 'translateY(6px)',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
        }}
      >
        {brandWords[1]}
      </Box>
      <Box component="span" sx={{ display: 'inline-flex', flexDirection: 'row', gap: { xs: '4px', md: '8px' }, margin: '0em' }}>
        <Box
          component="span"
          sx={{
            color: '#7FAF0D',
            fontStyle: 'italic',
            textTransform: 'uppercase',
            fontWeight: 800,
            fontSize: { xs: '0.55em', md: '0.65em' },
            letterSpacing: { xs: '0.15em', md: '0.25em' },
            opacity: 2 < visibleCount ? 1 : 0,
            transform: 2 < visibleCount ? 'translateY(0)' : 'translateY(6px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          {brandWords[2]}
        </Box>
        <Box
          component="span"
          sx={{
            color: '#7FAF0D',
            fontStyle: 'italic',
            textTransform: 'uppercase',
            fontWeight: 800,
            fontSize: { xs: '0.55em', md: '0.65em' },
            letterSpacing: { xs: '0.15em', md: '0.25em' },
            opacity: 3 < visibleCount ? 1 : 0,
            transform: 3 < visibleCount ? 'translateY(0)' : 'translateY(6px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          {brandWords[3]}
        </Box>
      </Box>
    </Typography>
  )
}

import type { CategoryWithSubcategories } from "@/interfaces/interface"
import { useTranslations } from "next-intl"

export default function Footer({
  categories = [],
}: {
  categories?: CategoryWithSubcategories[]
}) {
  const displayCategories =
    categories.length > 0
      ? categories
      : [
        { name: "(SPICES & HERBS)", slug: "spices-herbs" },
        { name: "(CLOTHING Section)", slug: "clothing" },
        { name: "(SEAFOOD)", slug: "seafood" },
        { name: "JUTE SECTION", slug: "jute" },
        { name: "NATURAL AND AYURBEDIC MEDICINE", slug: "ayurvedic" },
        { name: "Vegetables & Fruits", slug: "vegetables" },
        { name: "HANDICRAFTS SECTION", slug: "handicrafts" },
        { name: "Food & Beverage", slug: "food-beverage" },
        { name: "Tea & Coffee", slug: "tea-coffee" },
        { name: "SEEDS WITH AGRI DRONE & ROBOTS", slug: "seeds" },
        { name: "Kids Toys...", slug: "toys" },
        { name: "ECO COOKWARE & UTENSILS", slug: "cookware" },
      ]

  const customerServices = [
    { name: "About Us", link: routes.aboutPage },
    { name: "Terms & Conditions", link: routes.termsAndConditionsPage },
    { name: "FAQ", link: routes.faqPage },
    { name: "Privacy Policy", link: routes.privacyPolicyPage },
    // { name: "E-waste Policy", link: routes.eWastePolicyPage },
    {
      name: "Cancellation & Return Policy",
      link: routes.returnCancelPolicyPage,
    },
  ]

  const phoneNumber = "+447572758910"
  const emailAddress = "Info@globalsourceexpoltd.com"
  const t = useTranslations("footer")

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
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: { xs: 1.5, md: 0 },
                  }}
                >
                  {/* Logo */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      height: { xs: 65, md: 80 },
                      maxWidth: { xs: 260, md: 500 },
                    }}
                  >
                    <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", minWidth: 'max-content', height: '100%' }}>
                      {/* gap: '12px', */}
                      <Image
                        src={logo}
                        alt="logo"
                        width={220}
                        height={95}
                        className="logo"
                        style={{ objectFit: "contain", width: "auto", height: "100%", maxHeight: "100%" }}
                      />
                      {/* <Box sx={{ width: '2px', height: { xs: '36px', md: '60px' }, bgcolor: '#7FAF0D', borderRadius: '1px', opacity: 0.6 }} /> */}
                      <AnimatedBrandText
                        fontSize={{ xs: '14px', md: '20px' }}
                        letterSpacing={{ xs: '1.5px', md: '2.5px' }}
                        flexDirection={{ xs: 'column', md: 'row' }}
                        gap={{ xs: 0, md: '8px' }}
                      />
                    </Link>
                  </Box>
                  {/*<Image
                    src={logo}
                    alt="logo"
                    width={220}
                    height={95}
                    style={{ objectFit: "contain", width: "auto", height: "auto", maxHeight: "90px", maxWidth: "100%" }}
                  />
                  */}
                  {/* <Box
                    sx={{
                      width: "1px",
                      height: { xs: "48px", md: "52px" },
                      bgcolor: "#7FAF0D",
                      borderRadius: "1px",
                      opacity: 0.6,
                      ml: 1,
                      mr: 1,
                    }}
                  />
                  <AnimatedBrandText
                    fontSize={{ xs: "14px", md: "20px" }}
                    letterSpacing={{ xs: "1.5px", md: "2.5px" }}
                    flexDirection={{ xs: "column", md: "row" }}
                    gap={{ xs: 0, md: "8px" }}
                  /> */}
                </Box>
              </Box>

              <Stack direction="column" alignItems="start" spacing={2}>
                <Button
                  variant="contained"
                  component={Link}
                  href={routes.registerCompany}
                >
                  {t("connectWithUs")}

                </Button>
                {/* <Button
                  variant="outlined"
                  component={Link}
                  href={routes.store}
                  sx={{
                    borderColor: "#ffffff",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    transition: "all 0.3s ease",
                  }}
                >
                  <Image src={storeIcon} alt="store-icon" />
                  Visit Our Store
                </Button> */}
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
                  <Icon name="email" width={20} height={20} />
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
                      Email Us
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
                      {emailAddress}
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
            {/* <Box>
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
            </Box> */}
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
              Most Popular Product and Services
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
              {displayCategories.map((category: any, index: number) => (
                <Box
                  key={category.id || index}
                  component="li"
                  className="footerLinks"
                  sx={{
                    color: "#ffffff",
                    fontSize: "14px",
                    lineHeight: 1.6,
                  }}
                >
                  <Link
                    // href={`/products&searvices/products/${category.slug || category.id || index + 1}`}
                    href={`${routes.serviceProductListPage.replace("[categoryId]", category.slug)}`}

                    className={styles.categoryLink}
                    style={{
                      color: "#ffffff",
                      fontSize: "16px",
                      fontWeight: 500,
                      lineHeight: 1.6,
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = "#7FAF0D")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = "#ffffff")
                    }
                  >
                    {category.name} - ({category.total_products})
                  </Link>
                </Box>
              ))}
            </Stack>
            <Button
              variant="contained"
              component={Link}
              href={routes.productsServicesPage}
            >
              Explore More
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
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = "#7FAF0D")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = "#ffffff")
                    }
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
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
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
          <Button
            variant="text"
            component={Link}
            href={adminRoutes.login}
            sx={{
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: "13px",
              textTransform: "none",
              "&:hover": {
                color: "#ffffff",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            Admin Login
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
