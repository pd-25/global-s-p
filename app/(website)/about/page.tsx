"use client";

import React from 'react';
import { Box, Container, Typography, Grid, Stack, Button } from '@mui/material';
import Image from 'next/image';
import perfectVendorBg from '@/public/home/perfect-vendor-pic.webp';
import TopBrands from '@/components/sections/top-brands/TopBrands';
import Statistics from '@/components/sections/statistics/Statistics';

export default function About() {
    return (
        <Box component="main">
            {/* Hero Section */}
            <Box sx={{ bgcolor: '#054934', color: 'white', pt: { xs: 8, md: 15 }, pb: { xs: 8, md: 15 }, textAlign: 'center' }}>
                <Container maxWidth="md">
                    <Typography variant="h1" fontWeight={800} mb={3} sx={{ fontSize: { xs: '2.5rem', md: '4rem' } }}>
                        About <span style={{ color: '#7FAF0D' }}>Global Source Export</span>
                    </Typography>
                    <Typography variant="h6" fontWeight={400} sx={{ opacity: 0.9, lineHeight: 1.8 }}>
                        We're building the world's most trusted and comprehensive B2B marketplace. Connecting verified global suppliers with buyers efficiently, securely, and seamlessly.
                    </Typography>
                </Container>
            </Box>

            {/* Statistics Section */}
            <Box sx={{ py: 8 }}>
                <Statistics />
            </Box>

            {/* Mission Section */}
            <Box sx={{ py: 10, bgcolor: '#f9f9f9' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={8} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box sx={{ position: 'relative', height: '400px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                                <Image
                                    src={perfectVendorBg}
                                    alt="Our Mission"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="overline" color="primary" fontWeight={700} sx={{ letterSpacing: 2 }}>
                                OUR MISSION
                            </Typography>
                            <Typography variant="h3" fontWeight={800} mt={1} mb={4}>
                                Empowering Global Trade
                            </Typography>
                            <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                At Global Source Export, we believe that international trade should be accessible, transparent, and secure for businesses of all sizes.
                            </Typography>
                            <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                Our platform leverages cutting-edge technology to verify suppliers, streamline communication, handle secure payments, and manage logistics across borders. We eliminate the friction traditionally associated with sourcing internationally.
                            </Typography>

                            <Stack direction="row" spacing={3} mt={6}>
                                <Box>
                                    <Typography variant="h4" color="primary" fontWeight={800}>150+</Typography>
                                    <Typography variant="body2" color="text.secondary" fontWeight={600}>Countries Served</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h4" color="primary" fontWeight={800}>2M+</Typography>
                                    <Typography variant="body2" color="text.secondary" fontWeight={600}>Verified Products</Typography>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Trusted Brands */}
            <TopBrands />
        </Box>
    );
}
