'use client'

import React from 'react'
import {
    Box,
    Container,
    Typography,
    Button,
    TextField,
    Grid,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Card,
    CardContent,
    Stack,
    useTheme
} from '@mui/material'
import Image from 'next/image'

// SVG Icons
const CheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const ExpandMoreIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

export default function GetQuotePage() {
    const theme = useTheme()

    const faqs = [
        "What is Request for Quotes?",
        "Is the service free of charge?",
        "How do I write a request?",
        "How many providers will receive my request?",
        "Why do I have to register for the service?",
        "Why can't I send offers via Request for Quotes?",
        "How can I change my request after sending?"
    ]

    return (
        <Box sx={{ bgcolor: 'white' }}>
            {/* Hero Section */}
            <Box sx={{ bgcolor: '#014B35', color: 'white', py: { xs: 8, md: 10 }, overflow: 'hidden', position: 'relative' }}>
                {/* Decorative Background Elements */}
                <Box sx={{ position: 'absolute', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(127,175,13,0.12) 0%, rgba(1,61,43,0) 70%)', top: '-10%', left: '-10%', zIndex: 0 }} />
                <Box sx={{ position: 'absolute', width: '800px', height: '800px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(127,175,13,0.08) 0%, rgba(1,61,43,0) 70%)', bottom: '-20%', right: '-10%', zIndex: 0 }} />

                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                    <Grid container spacing={8} alignItems="center">
                        {/* Left Image */}
                        <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box sx={{
                                position: 'relative',
                                width: '100%',
                                maxWidth: '500px',
                                display: 'flex',
                                alignItems: 'flex-end',
                                justifyContent: 'center',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: '15%',
                                    left: '10%',
                                    right: '10%',
                                    bottom: '0%',
                                    background: 'linear-gradient(135deg, rgba(127,175,13,0.9) 0%, rgba(105,145,10,0.9) 100%)',
                                    borderRadius: '50% 50% 0 0',
                                    zIndex: -1,
                                }
                            }}>
                                <Image
                                    src="/images/get_quote_hero.png"
                                    alt="Professional Request"
                                    width={500}
                                    height={500}
                                    style={{ objectFit: 'contain', width: '100%', height: 'auto', display: 'block' }}
                                />
                            </Box>
                        </Grid>

                        {/* Right Content */}
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Box sx={{ maxWidth: '650px' }}>
                                <Typography variant="h1" sx={{ color: 'white', fontSize: { xs: '36px', sm: '42px', md: '52px' }, fontWeight: 800, mb: 3, lineHeight: 1.15 }}>
                                    Share your request - get multiple quotes fast
                                </Typography>
                                <Typography sx={{ fontSize: { xs: '16px', md: '20px' }, mb: 4, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
                                    Post your request on our new Request Hub for maximum reach to all relevant suppliers on our platform.
                                </Typography>

                                <Stack spacing={2.5} sx={{ mb: 5 }}>
                                    {[
                                        'Present your request to all verified suppliers in your industry',
                                        'Top relevant suppliers will be notified directly',
                                        '100% free and data privacy compliant'
                                    ].map((text, idx) => (
                                        <Stack direction="row" spacing={2} key={idx} alignItems="center">
                                            <Box sx={{ minWidth: '24px', height: '24px', borderRadius: '50%', border: '2px solid #7FAF0D', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20 6L9 17L4 12" stroke="#7FAF0D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Box>
                                            <Typography sx={{ fontSize: '18px', fontWeight: 500, color: 'white' }}>{text}</Typography>
                                        </Stack>
                                    ))}
                                </Stack>

                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    gap: 1.5,
                                    bgcolor: 'white',
                                    borderRadius: '10px',
                                    p: 1,
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
                                }}>
                                    <TextField
                                        placeholder="What do you need?"
                                        variant="outlined"
                                        fullWidth
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                bgcolor: 'white',
                                                height: '56px',
                                                '& fieldset': { border: 'none' },
                                                '& input': { px: 2, fontSize: '16px', color: '#333' }
                                            }
                                        }}
                                    />
                                    <Button
                                        variant="contained"
                                        sx={{
                                            bgcolor: '#7FAF0D',
                                            color: 'white',
                                            px: 4,
                                            height: '56px',
                                            borderRadius: '6px',
                                            minWidth: { sm: '240px' },
                                            fontSize: '16px',
                                            textTransform: 'none',
                                            fontWeight: 700,
                                            boxShadow: 'none',
                                            '&:hover': { bgcolor: '#69910A', boxShadow: '0 4px 12px rgba(127,175,13,0.3)' }
                                        }}
                                    >
                                        Get multiple quotes
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Stats Bar */}
            <Box sx={{ bgcolor: '#013D2B', color: 'white', py: 3, borderBottom: '6px solid #7FAF0D' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4} justifyContent="space-between">
                        {[{ v: '2.2M', lbl: 'Registered suppliers' }, { v: '78,000', lbl: 'Requests answered' }, { v: 'up to 10 responses', lbl: 'Per request' }].map((stat, i) => (
                            <Grid size={{ xs: 12, sm: 4 }} key={i}>
                                <Typography sx={{ color: '#7FAF0D', fontSize: '24px', fontWeight: 700 }}>{stat.v}</Typography>
                                <Typography sx={{ fontSize: '14px', opacity: 0.9, color: 'white' }}>{stat.lbl}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Info Section */}
            <Container maxWidth="lg" sx={{ py: { xs: 8, md: 14 } }}>
                <Grid container spacing={8} alignItems="center">
                    {/* Left Side */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Typography sx={{ color: '#7FAF0D', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', mb: 2 }}>
                            Procurement Service
                        </Typography>
                        <Typography variant="h2" sx={{ fontWeight: 800, color: '#1C1B1F', mb: 3, lineHeight: 1.25, fontSize: { xs: '32px', md: '44px' } }}>
                            Find suppliers, compare offers
                        </Typography>
                        <Typography sx={{ color: '#4A4A4A', lineHeight: 1.7, fontSize: '18px' }}>
                            Free e-procurement service from global-s-p: You only write one request to reach a whole group of companies.
                            An easy way to quickly receive feedback from suppliers that are interested to work with you.
                        </Typography>
                    </Grid>

                    {/* Right Side */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Box sx={{ position: 'relative' }}>
                            {/* Decorative accent behind the card */}
                            <Box sx={{ position: 'absolute', top: '-15px', right: '-15px', width: '100px', height: '100px', bgcolor: '#E1EDC5', borderRadius: '16px', zIndex: 0 }} />

                            <Card sx={{
                                position: 'relative',
                                zIndex: 1,
                                p: { xs: 4, md: 5 },
                                boxShadow: '0 20px 60px rgba(0,0,0,0.06)',
                                borderRadius: '24px',
                                border: '1px solid #F0F0F0',
                                bgcolor: 'white'
                            }}>
                                <Typography sx={{ color: '#7FAF0D', fontSize: '64px', fontFamily: 'serif', lineHeight: 0.5, mb: 1, mt: 2 }}>"</Typography>
                                <Typography sx={{ fontWeight: 500, mb: 4, fontSize: '20px', lineHeight: 1.6, color: '#1C1B1F' }}>
                                    We were able to find perfect B2B partners. Shortly after completing the search request, we received responses to our requests for proposals.
                                </Typography>
                                <Stack direction="row" spacing={2.5} alignItems="center">
                                    <Box sx={{
                                        width: '56px',
                                        height: '56px',
                                        bgcolor: '#F5F8F2',
                                        color: '#014B35',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '2px solid #E1EDC5'
                                    }}>
                                        <Typography sx={{ fontWeight: 800, fontSize: '18px' }}>UT</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#1C1B1F', lineHeight: 1.2, mb: 0.5 }}>Ulrich Tehl</Typography>
                                        <Typography variant="body2" sx={{ color: '#777777', fontWeight: 500 }}>Drei, Stahl- und Treuhand GmbH</Typography>
                                    </Box>
                                </Stack>
                            </Card>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* How it works */}
            <Box sx={{ bgcolor: '#F9FCF5', py: 10 }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="h2" sx={{ fontWeight: 700, color: 'black', mb: 2 }}>How it works</Typography>
                        <Typography sx={{ color: '#666' }}>Save time and effort by letting our technology do the work for you.</Typography>
                    </Box>
                    <Grid container spacing={4} sx={{ position: 'relative' }}>
                        {/* Steps line */}
                        <Box sx={{ position: 'absolute', top: '24px', left: '15%', right: '15%', height: '2px', bgcolor: '#7FAF0D', zIndex: 0, display: { xs: 'none', md: 'block' } }} />

                        {[
                            { title: 'Submit your requirements', sub: 'Be as detailed as possible.' },
                            { title: 'We post your request to verified suppliers', sub: 'AI-based matching based on your content.' },
                            { title: 'Get contacted by interested companies', sub: 'Receive first results within 1 working day.' }
                        ].map((step, i) => (
                            <Grid size={{ xs: 12, md: 4 }} key={i} sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                                <Box sx={{ width: '48px', height: '48px', bgcolor: '#E1EDC5', color: '#014B35', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', border: '5px solid #F9FCF5', fontSize: '20px', fontWeight: 700 }}>
                                    {i + 1}
                                </Box>
                                <Typography sx={{ fontWeight: 700, mb: 1 }}>{step.title}</Typography>
                                <Typography sx={{ color: '#666', fontSize: '14px' }}>{step.sub}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* At a glance */}
            <Container maxWidth="lg" sx={{ py: { xs: 10, md: 14 } }}>
                <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}>
                    <Typography sx={{ color: '#7FAF0D', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', mb: 2 }}>
                        Platform Statistics
                    </Typography>
                    <Typography variant="h2" sx={{ fontWeight: 800, color: '#1C1B1F', mb: 3, fontSize: { xs: '32px', md: '44px' } }}>
                        global-s-p at a glance
                    </Typography>
                    <Typography sx={{ color: '#4A4A4A', fontSize: '18px', maxWidth: '600px', mx: 'auto' }}>
                        The leading B2B marketplace connecting verified suppliers with global buyers through extensive marketing services.
                    </Typography>
                </Box>
                <Grid container spacing={4} sx={{ mb: 6 }}>
                    {[
                        {
                            value: '2.2M+',
                            label: 'Verified Suppliers',
                            desc: 'Find the right partner from our extensive global network.',
                            icon: (
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 14c4.418 0 8 3.582 8 8H4c0-4.418 3.582-8 8-8zM12 2a5 5 0 110 10 5 5 0 010-10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M17 4h4v16h-4M3 4h4M7 4V2M7 20v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
                                </svg>
                            )
                        },
                        {
                            value: '470K+',
                            label: 'Products & Services',
                            desc: 'Discover a vast catalog of B2B offerings across industries.',
                            icon: (
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
                                </svg>
                            )
                        },
                        {
                            value: '1M+',
                            label: 'Monthly Buyers',
                            desc: 'Reach an active audience of purchasing professionals.',
                            icon: (
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
                                    <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
                                </svg>
                            )
                        }
                    ].map((stat, i) => (
                        <Grid size={{ xs: 12, md: 4 }} key={i}>
                            <Card sx={{
                                height: '100%',
                                p: 5,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                borderRadius: '24px',
                                border: '1px solid #F0F0F0',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.03)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                                    transform: 'translateY(-10px)',
                                    borderColor: '#E1EDC5'
                                },
                                '&:hover .stat-icon-box': {
                                    bgcolor: '#014B35',
                                    color: 'white',
                                    transform: 'scale(1.1)'
                                }
                            }}>
                                <Box className="stat-icon-box" sx={{
                                    width: '80px',
                                    height: '80px',
                                    bgcolor: '#F5F8F2',
                                    color: '#014B35',
                                    borderRadius: '24px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mb: 4,
                                    transition: 'all 0.3s ease'
                                }}>
                                    {stat.icon}
                                </Box>
                                <Typography sx={{ fontWeight: 800, fontSize: '40px', color: '#1C1B1F', mb: 1, lineHeight: 1 }}>{stat.value}</Typography>
                                <Typography sx={{ fontWeight: 700, fontSize: '18px', color: '#7FAF0D', mb: 2 }}>{stat.label}</Typography>
                                <Typography sx={{ color: '#666', fontSize: '15px', lineHeight: 1.6 }}>{stat.desc}</Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{ textAlign: 'center' }}>
                    <Button variant="contained" sx={{ bgcolor: '#7FAF0D', color: 'white', px: 6, '&:hover': { bgcolor: '#6e980c' } }}>
                        Get multiple quotes
                    </Button>
                </Box>
            </Container>

            {/* FAQ */}
            <Container maxWidth="md" sx={{ py: { xs: 10, md: 14 } }}>
                <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
                    <Typography sx={{ color: '#7FAF0D', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', mb: 2 }}>
                        Support & Resources
                    </Typography>
                    <Typography variant="h2" sx={{ fontWeight: 800, color: '#1C1B1F', fontSize: { xs: '32px', md: '44px' } }}>
                        Frequently asked questions
                    </Typography>
                </Box>
                <Box sx={{
                    bgcolor: 'white',
                    borderRadius: '24px',
                    p: { xs: 3, md: 5 },
                    border: '1px solid #F0F0F0',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.03)'
                }}>
                    {faqs.map((faq, i) => (
                        <Accordion
                            key={i}
                            disableGutters
                            elevation={0}
                            sx={{
                                bgcolor: 'transparent',
                                borderBottom: i === faqs.length - 1 ? 'none' : '1px solid #F0F0F0',
                                '&:before': { display: 'none' },
                                '&.Mui-expanded': { m: 0 }
                            }}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <Box sx={{
                                        width: '32px', height: '32px',
                                        borderRadius: '50%',
                                        bgcolor: '#F5F8F2',
                                        color: '#014B35',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <ExpandMoreIcon />
                                    </Box>
                                }
                                sx={{
                                    py: { xs: 1, md: 2 },
                                    px: { xs: 1, md: 3 },
                                    '&.Mui-expanded': { minHeight: 'auto' },
                                    '& .MuiAccordionSummary-content.Mui-expanded': { margin: '12px 0' },
                                    '&:hover .MuiBox-root': { bgcolor: '#014B35', color: 'white' }
                                }}
                            >
                                <Typography sx={{ fontWeight: 700, fontSize: '18px', color: '#1C1B1F' }}>{faq}</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ px: { xs: 1, md: 3 }, pb: { xs: 3, md: 4 }, pt: 0, color: '#4A4A4A' }}>
                                <Typography sx={{ fontSize: '16px', lineHeight: 1.7 }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Container>
        </Box>
    )
}
