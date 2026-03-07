'use client'

import React, { useState } from 'react'
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Card,
    Stack,
    MenuItem,
    Select,
    InputBase,
    Paper
} from '@mui/material'
import Image from 'next/image'

const SearchIconSvg = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const EyeIconSvg = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const mockRequests = [
    { title: 'Labore Dolore', time: '14 hours ago', delivery: '1000m', qty: '1205h' },
    { title: 'Dolore Consectetur', time: '2 hours ago', delivery: '5829l', qty: '10000r' },
    { title: 'Labore Tempor', time: '8 hours ago', delivery: '960rm', qty: '750cm' },
    { title: 'Tempor Incididunt', time: '1 day ago', delivery: '45km', qty: '600kg' },
    { title: 'Consectetur Adipiscing', time: '1 day ago', delivery: '100m', qty: '400l' },
    { title: 'Tempor Incididunt', time: '1 day ago', delivery: '8km', qty: '500g' },
    { title: 'Consectetur Adipiscing', time: '5 hours ago', delivery: '10km', qty: '1000l' },
    { title: 'Consectetur Adipiscing', time: '1 day ago', delivery: '10m', qty: '500r' },
    { title: 'Consectetur Adipiscing', time: '4 hours ago', delivery: '10km', qty: '100g' },
    { title: 'Tempor Incididunt', time: '1 day ago', delivery: '100km', qty: '4m' },
];

export default function RequestHubPage() {
    // State to toggle between logged-in and guest view (mocking login functionality)
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Box sx={{ bgcolor: '#F9FAF9', minHeight: '100vh', pb: 10 }}>
            {/* Header / Hero Section */}
            <Box sx={{ bgcolor: '#014B35', color: 'white', pt: { xs: 4, md: 5 }, pb: { xs: 8, md: 9 }, position: 'relative', overflow: 'hidden' }}>
                <Box sx={{ position: 'absolute', width: '600px', height: '600px', borderRadius: '50%', background: 'linear-gradient(180deg, rgba(127,175,13,0.1) 0%, rgba(1,75,53,0) 100%)', top: '-20%', left: '-10%', zIndex: 0 }} />

                <Container disableGutters sx={{ position: 'relative', zIndex: 1, maxWidth: '1040px !important', px: { xs: 2, lg: 0 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box>
                            <Typography variant="h1" sx={{ fontWeight: 700, fontSize: { xs: '24px', md: '28px' }, mb: 1 }}>
                                Request Hub - Find new orders
                            </Typography>
                            <Typography sx={{ fontSize: '15px', color: '#E5E7EB' }}>
                                Find fitting buyer requests and respond to make an offer
                            </Typography>
                        </Box>

                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Box sx={{
                                position: 'relative',
                                width: '72px',
                                height: '72px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: '2px solid #7FAF0D'
                            }}>
                                <Image
                                    src="/images/get_quote_hero.png" // using existing image from hero
                                    alt="Professional"
                                    fill
                                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Filter / Search Bar */}
            <Container disableGutters sx={{ mt: { xs: -6, md: -4 }, position: 'relative', zIndex: 2, maxWidth: '1040px !important', px: { xs: 2, lg: 0 } }}>
                <Paper elevation={0} sx={{ p: '12px', borderRadius: '8px', bgcolor: 'white', border: '1px solid #E5E7EB', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <Select
                                fullWidth
                                displayEmpty
                                defaultValue=""
                                sx={{ bgcolor: '#F3F4F6', borderRadius: '6px', '& fieldset': { border: 'none' }, height: '48px', color: '#6B7280' }}
                            >
                                <MenuItem value="" disabled>Select categories</MenuItem>
                                <MenuItem value="cat1">Category 1</MenuItem>
                                <MenuItem value="cat2">Category 2</MenuItem>
                            </Select>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <Select
                                fullWidth
                                displayEmpty
                                defaultValue=""
                                sx={{ bgcolor: '#F3F4F6', borderRadius: '6px', '& fieldset': { border: 'none' }, height: '48px', color: '#6B7280' }}
                            >
                                <MenuItem value="" disabled>Buyer location</MenuItem>
                                <MenuItem value="loc1">Location 1</MenuItem>
                                <MenuItem value="loc2">Location 2</MenuItem>
                            </Select>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#F3F4F6', borderRadius: '6px', px: 2, height: '48px' }}>
                                <InputBase
                                    placeholder="Search by any keyword"
                                    sx={{ ml: 1, flex: 1, color: '#6B7280' }}
                                />
                                <Box sx={{ color: '#9CA3AF', display: 'flex', alignItems: 'center' }}>
                                    <SearchIconSvg />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 2 }}>
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{
                                    bgcolor: '#9CA3AF',
                                    color: 'white',
                                    height: '48px',
                                    borderRadius: '6px',
                                    textTransform: 'none',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    boxShadow: 'none',
                                    '&:hover': { bgcolor: '#6B7280', boxShadow: 'none' }
                                }}
                            >
                                Find requests
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>

            {/* Main Content (Requests List & Sign in Overlay) */}
            <Container disableGutters sx={{ mt: 2, position: 'relative', maxWidth: '1040px !important', px: { xs: 2, lg: 0 } }}>

                {/* List Container */}
                <Box sx={{
                    position: 'relative',
                    // Add blur and lock interactions if logged out
                    ...(!isLoggedIn ? {
                        filter: 'blur(5px)',
                        pointerEvents: 'none',
                        userSelect: 'none',
                        opacity: 0.8
                    } : {})
                }}>
                    <Stack spacing={2}>
                        {mockRequests.map((req, i) => (
                            <Card key={i} sx={{ p: { xs: 2, md: 3 }, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '8px', border: '1px solid #E5E7EB', boxShadow: 'none', bgcolor: 'white' }}>
                                <Box>
                                    <Typography variant="caption" sx={{ color: '#9CA3AF', mb: 1, display: 'block', fontSize: '12px' }}>
                                        Posted: {req.time}
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#1F2937', mb: 1, fontSize: '16px' }}>
                                        {req.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#4B5563', mb: 0.5, fontSize: '13px' }}>
                                        <strong>Delivery to:</strong> {req.delivery}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#4B5563', fontSize: '13px' }}>
                                        <strong>Quantity:</strong> {req.qty}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Button
                                        variant="outlined"
                                        endIcon={<EyeIconSvg />}
                                        sx={{
                                            borderRadius: '6px',
                                            textTransform: 'none',
                                            borderColor: '#E5E7EB',
                                            color: '#6B7280',
                                            fontWeight: 600,
                                            px: 3,
                                            '&:hover': {
                                                borderColor: '#D1D5DB',
                                                bgcolor: '#F9FAFB'
                                            }
                                        }}
                                    >
                                        View
                                    </Button>
                                </Box>
                            </Card>
                        ))}
                    </Stack>
                </Box>

                {/* Login Overlay UI */}
                {!isLoggedIn && (
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
                )}

            </Container>
        </Box>
    )
}

