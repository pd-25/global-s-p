'use client'

import Link from "next/link"
import { Montserrat } from "next/font/google"
import { Box, Typography, Button, Container, Stack } from "@mui/material"
import { useRouter } from "next/navigation"
import "./(website)/globals.css"

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export default function NotFound() {
    const router = useRouter()

    return (
        <html lang="en">
            <body className={`${montserrat.variable} ${montserrat.className}`}>
                <Container component="main" maxWidth="md">
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            minHeight: "100vh",
                            textAlign: "center",
                        }}
                    >
                        <Typography variant="h1" component="h1" gutterBottom sx={{ fontWeight: 700, fontSize: { xs: "6rem", md: "10rem" }, color: "primary.main" }}>
                            404
                        </Typography>
                        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4, fontWeight: 500 }}>
                            Page Not Found
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 6, maxWidth: "600px" }}>
                            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                        </Typography>

                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                            <Button
                                variant="outlined"
                                size="large"
                                onClick={() => router.back()}
                                sx={{
                                    borderRadius: "50px",
                                    px: 5,
                                    py: 1.5,
                                    fontSize: "1.1rem",
                                    textTransform: "none",
                                    borderWidth: '2px',
                                    '&:hover': { borderWidth: '2px' }
                                }}
                            >
                                Previous Page
                            </Button>
                            <Link href="/" passHref legacyBehavior>
                                <Button variant="contained" size="large" sx={{ borderRadius: "50px", px: 5, py: 1.5, fontSize: "1.1rem", textTransform: "none" }}>
                                    Go Home
                                </Button>
                            </Link>
                        </Stack>
                    </Box>
                </Container>
            </body>
        </html>
    )
}
