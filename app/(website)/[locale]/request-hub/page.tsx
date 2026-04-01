"use client"

import FilterAreaSearch from "@/components/sections/request-hub/FilterAreaSearch"
import { useEffect, useState } from "react"
import apiService from "@/service/apiService"
import { websiteEndpoints } from "@/config/websiteEndpoints"
import {
  TrendingProduct,
  TrendingProductsResponse,
} from "@/interfaces/interface"
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  Stack,
  CircularProgress,
  Alert,
} from "@mui/material"
import Image from "next/image"
import { Link } from "@/i18n/navigation"
import { routes } from "@/config/routes"

const SearchIconSvg = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ContactIconSvg = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function RequestHubPage() {
  // State to toggle between logged-in and guest view (mocking login functionality)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [products, setProducts] = useState<TrendingProduct[]>([])
  const [loading, setLoading] = useState(true)

  const fetchProducts = async (params: any = {}) => {
    setLoading(true)
    try {
      const queryParams = new URLSearchParams()
      queryParams.append("page", "1")
      queryParams.append("perPage", "20")

      if (params.category_id)
        queryParams.append("category_id", params.category_id.toString())
      if (params.subcategory_id)
        queryParams.append("subcategory_id", params.subcategory_id.toString())
      if (params.search_string)
        queryParams.append("search_string", params.search_string)
      if (params.location)
        queryParams.append("location", params.location.toString())

      const res = await apiService.get<TrendingProductsResponse>(
        `${websiteEndpoints.trendingProducts}?${queryParams.toString()}`,
      )
      if (res.success) {
        setProducts(res.data)
      }
    } catch (error) {
      console.error("Error fetching trending products:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <Box sx={{ bgcolor: "#F9FAF9", minHeight: "100vh", pb: 10 }}>
      {/* Header / Hero Section */}
      <Box
        sx={{
          bgcolor: "#014B35",
          color: "white",
          pt: { xs: 4, md: 5 },
          pb: { xs: 8, md: 9 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "linear-gradient(180deg, rgba(127,175,13,0.1) 0%, rgba(1,75,53,0) 100%)",
            top: "-20%",
            left: "-10%",
            zIndex: 0,
          }}
        />

        <Container
          disableGutters
          sx={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1040px !important",
            px: { xs: 2, lg: 0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "24px", md: "28px" },
                  mb: 1,
                }}
              >
                Request Hub - Find new orders
              </Typography>
              <Typography sx={{ fontSize: "15px", color: "#E5E7EB" }}>
                Find fitting buyer requests and respond to make an offer
              </Typography>
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Box
                sx={{
                  position: "relative",
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid #7FAF0D",
                }}
              >
                <Image
                  src="/images/get_quote_hero.png" // using existing image from hero
                  alt="Professional"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Filter / Search Bar */}
      <FilterAreaSearch onSearch={(params) => fetchProducts(params)} />

      {/* Main Content (Requests List & Sign in Overlay) */}
      <Container
        disableGutters
        sx={{
          mt: 2,
          position: "relative",
          maxWidth: "1040px !important",
          px: { xs: 2, lg: 0 },
        }}
      >
        {/* List Container */}
        <Box
          sx={{
            position: "relative",
          }}
        >
          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
              <CircularProgress sx={{ color: "#7FAF0D" }} />
            </Box>
          ) : (
            <Stack spacing={2}>
              {products.length === 0 ? (
                <Box sx={{ py: 8, textAlign: "center" }}>
                  {/* <Typography color="text.secondary"></Typography> */}
                  <Alert
                    severity="error"
                    sx={{ justifyContent: "center", py: 4 }}
                  >
                    {" "}
                    No requests found matching your criteria
                  </Alert>
                </Box>
              ) : (
                products.map((req, i) => (
                  <Card
                    key={i}
                    sx={{
                      p: { xs: 2, md: 3 },
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderRadius: "8px",
                      border: "1px solid #E5E7EB",
                      boxShadow: "none",
                      bgcolor: "white",
                    }}
                  >
                    <Box sx={{ flex: 1 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          mb: 1,
                        }}
                      >
                        {req.country?.country_flag && (
                          <Box
                            sx={{ position: "relative", width: 20, height: 14 }}
                          >
                            <Image
                              src={req.country.country_flag}
                              alt="Country Flag"
                              fill
                              style={{ objectFit: "contain" }}
                            />
                          </Box>
                        )}
                        <Typography
                          variant="caption"
                          sx={{ color: "#9CA3AF", fontSize: "12px" }}
                        >
                          Supplier: {req.supplier?.name}{" "}
                          {req.supplier?.is_verified && "(Verified)"}
                        </Typography>
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: "#1F2937",
                          mb: 1,
                          fontSize: "16px",
                        }}
                      >
                        {req.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#4B5563",
                          mb: 0.5,
                          fontSize: "13px",
                          lineClamp: 2,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {req.short_desc}
                      </Typography>
                    </Box>
                    <Box sx={{ ml: 2 }}>
                      <Button
                        component={Link}
                        href={routes.productContactPage.replace(
                          "[slug]",
                          req.slug,
                        )}
                        variant="contained"
                        endIcon={<ContactIconSvg />}
                        sx={{
                          bgcolor: "#7FAF0D",
                          "&:hover": { bgcolor: "#6e980c" },
                          color: "white",
                          borderRadius: "6px",
                          textTransform: "none",
                          fontWeight: 600,
                          px: 3,
                          boxShadow: "none",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Contact Supplier
                      </Button>
                    </Box>
                  </Card>
                ))
              )}
            </Stack>
          )}
        </Box>

        {/* Login Overlay UI */}
        {/* {!isLoggedIn && (
                    <Box sx={{
                        position: 'absolute',
                        top: 50,
                        left: 0,
                        right: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        zIndex: 10
                    }}>
                        <Card sx={{
                            width: '100%',
                            maxWidth: '450px',
                            p: { xs: 4, md: 5 },
                            borderRadius: '16px',
                            boxShadow: '0 25px 60px rgba(0,0,0,0.15)',
                            border: '1px solid #F3F4F6'
                        }}>
                            <Typography variant="h5" sx={{ fontWeight: 800, mb: 1.5, color: '#1F2937', fontSize: '24px' }}>
                                Please sign in
                            </Typography>
                            <Typography sx={{ color: '#4B5563', mb: 4, lineHeight: 1.6, fontSize: '15px' }}>
                                Buyer requests are only visible to listed suppliers on our platform. Please sign in to see all requests.
                            </Typography>
                            <Button
                                variant="contained"
                                onClick={() => setIsLoggedIn(true)} // Click to mock login
                                sx={{
                                    bgcolor: '#7FAF0D',
                                    color: 'white',
                                    px: 5,
                                    py: 1.2,
                                    borderRadius: '6px',
                                    fontWeight: 700,
                                    textTransform: 'none',
                                    fontSize: '16px',
                                    boxShadow: 'none',
                                    minWidth: '120px',
                                    '&:hover': {
                                        bgcolor: '#6e980c',
                                        boxShadow: 'none'
                                    }
                                }}
                            >
                                Sign in
                            </Button>

                            <Typography variant="caption" sx={{ display: 'block', mt: 3, color: '#9CA3AF', fontStyle: 'italic', fontSize: '12px' }}>
                                (Mock feature: Click "Sign in" to reveal requests)
                            </Typography>
                        </Card>
                    </Box>
                )} */}
      </Container>
    </Box>
  )
}
