import React from 'react'
import type { Metadata } from "next"
import Image from "next/image"
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Card,
    Stack,
    Divider
} from '@mui/material'

// Hand-tailored SVG Icons
const GlobeIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
        <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
    </svg>
);

const TargetIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" opacity="0.4" />
        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
    </svg>
);

const HandshakeIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
    </svg>
);

const CartIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3H5L5.4 5M5.4 5H21L19 14H7M5.4 5L7 14M7 14L5 16C4.44772 16.5523 4.83939 17.5 5.61803 17.5H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="20" r="1" stroke="currentColor" strokeWidth="2"/>
        <circle cx="18" cy="20" r="1" stroke="currentColor" strokeWidth="2"/>
    </svg>
);

const FactoryIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 20H22M4 20V8L9 11V8L14 11V8L19 11V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 4H6V8H4V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const SearchIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 20L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

import { getTranslations } from "next-intl/server"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("about.meta");

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
  };
}

export default async function AboutPage() {
    const t = await getTranslations("about");
    return (
        <Box sx={{ bgcolor: '#F9FAF9', minHeight: '100vh', pb: 0 }}>
            {/* Header / Hero Section */}
            <Box sx={{ bgcolor: '#014B35', color: 'white', pt: { xs: 8, md: 12 }, pb: { xs: 12, md: 16 }, position: 'relative', overflow: 'hidden' }}>
                <Box sx={{ position: 'absolute', width: '800px', height: '800px', borderRadius: '50%', background: 'linear-gradient(180deg, rgba(127,175,13,0.1) 0%, rgba(1,75,53,0) 100%)', top: '-40%', left: '-10%', zIndex: 0 }} />
                <Box sx={{ position: 'absolute', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(127,175,13,0.15) 0%, rgba(1,75,53,0) 70%)', bottom: '-10%', right: '-5%', zIndex: 0 }} />

                <Container disableGutters sx={{ position: 'relative', zIndex: 1, maxWidth: '1040px !important', px: { xs: 2, lg: 0 } }}>
                    <Grid container spacing={6} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography sx={{ color: '#7FAF0D', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', mb: 2 }}>
                                {t('hero.label')}
                            </Typography>
                            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '36px', md: '52px' }, mb: 3, lineHeight: 1.1 }}>
                                {t('hero.title')}
                            </Typography>
                            <Typography sx={{ fontSize: '18px', opacity: 0.9, lineHeight: 1.6, mb: 4, color: 'white' }}>
                                {t('hero.description')}
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    bgcolor: '#7FAF0D',
                                    color: 'white',
                                    px: 5,
                                    py: 1.5,
                                    borderRadius: '8px',
                                    fontWeight: 700,
                                    textTransform: 'none',
                                    fontSize: '16px',
                                    boxShadow: 'none',
                                    '&:hover': { bgcolor: '#6e980c', boxShadow: 'none' }
                                }}
                            >
                                {t('hero.contactUs')}
                            </Button>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
                            <Box sx={{
                                position: 'relative',
                                height: '400px',
                                width: '100%',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                border: '4px solid rgba(255,255,255,0.1)',
                                boxShadow: '0 24px 48px rgba(0,0,0,0.2)'
                            }}>
                                <Image 
                                    src="/about-hero-illustration.png" 
                                    alt="About Global Source Expo" 
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Stats Section Overlay */}
            <Container disableGutters sx={{ mt: { xs: -6, md: -8 }, position: 'relative', zIndex: 2, maxWidth: '1040px !important', px: { xs: 2, lg: 0 } }}>
                <Card sx={{ p: { xs: 3, md: 5 }, borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', border: '1px solid #E5E7EB', bgcolor: 'white' }}>
                    <Grid container spacing={3} sx={{
                        '& .MuiGrid-root:not(:last-child)': {
                            borderRight: { md: '1px solid #E5E7EB' },
                            borderBottom: { xs: '1px solid #E5E7EB', md: 'none' }
                        }
                    }}>
                        {[
                            { value: '2.2M+', label: t('stats.suppliers') },
                            { value: '470K+', label: t('stats.products') },
                            { value: '150+', label: t('stats.countries') },
                            { value: '24/7', label: t('stats.support') },
                        ].map((stat, i) => (
                            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i} sx={{ textAlign: 'center', py: { xs: 2, md: 0 } }}>
                                <Typography sx={{ fontWeight: 800, fontSize: { xs: '28px', md: '36px' }, color: '#1C1B1F', lineHeight: 1, mb: 1 }}>
                                    {stat.value}
                                </Typography>
                                <Typography sx={{ fontSize: '14px', color: '#6B7280', fontWeight: 600 }}>
                                    {stat.label}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Card>
            </Container>

            {/* Mission & Vision Section */}
            <Container disableGutters sx={{ py: { xs: 10, md: 14 }, maxWidth: '1040px !important', px: { xs: 2, lg: 0 } }}>
                <Grid container spacing={8} alignItems="center">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography sx={{ color: '#7FAF0D', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', mb: 2 }}>
                            {t('mission.label')}
                        </Typography>
                        <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: '32px', md: '40px' }, color: '#1C1B1F', mb: 3 }}>
                            {t('mission.title')}
                        </Typography>
                        <Typography sx={{ fontSize: '17px', lineHeight: 1.7, color: '#4B5563', mb: 3 }}>
                            {t('mission.desc1')}
                        </Typography>
                        <Typography sx={{ fontSize: '17px', lineHeight: 1.7, color: '#4B5563' }}>
                            {t('mission.desc2')}
                        </Typography>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Stack spacing={4}>
                            <Box sx={{ display: 'flex', gap: 3 }}>
                                <Box sx={{ width: '64px', height: '64px', borderRadius: '16px', bgcolor: '#F5F8F2', color: '#014B35', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <TargetIcon />
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#1F2937' }}>{t('mission.feature1Title')}</Typography>
                                    <Typography sx={{ color: '#6B7280', lineHeight: 1.6 }}>{t('mission.feature1Desc')}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 3 }}>
                                <Box sx={{ width: '64px', height: '64px', borderRadius: '16px', bgcolor: '#F5F8F2', color: '#014B35', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <GlobeIcon />
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#1F2937' }}>{t('mission.feature2Title')}</Typography>
                                    <Typography sx={{ color: '#6B7280', lineHeight: 1.6 }}>{t('mission.feature2Desc')}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 3 }}>
                                <Box sx={{ width: '64px', height: '64px', borderRadius: '16px', bgcolor: '#F5F8F2', color: '#014B35', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <HandshakeIcon />
                                </Box>
                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#1F2937' }}>{t('mission.feature3Title')}</Typography>
                                    <Typography sx={{ color: '#6B7280', lineHeight: 1.6 }}>{t('mission.feature3Desc')}</Typography>
                                </Box>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>

            {/* Who We Are Section */}
            <Box sx={{ bgcolor: 'white', py: { xs: 10, md: 14 } }}>
                <Container disableGutters sx={{ maxWidth: '1040px !important', px: { xs: 2, lg: 0 } }}>
                    <Grid container spacing={8} alignItems="center" flexDirection={{ xs: 'column-reverse', md: 'row' }}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box sx={{
                                width: '100%',
                                height: { xs: '300px', md: '460px' },
                                borderRadius: '24px',
                                position: 'relative',
                                overflow: 'hidden',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
                            }}>
                                <Image 
                                    src="/who-we-are-illustration.png" 
                                    alt="Who We Are" 
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography sx={{ color: '#7FAF0D', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', mb: 2 }}>
                                {t('whoWeAre.label')}
                            </Typography>
                            <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: '32px', md: '40px' }, color: '#1C1B1F', mb: 3 }}>
                                {t('whoWeAre.title')}
                            </Typography>
                            <Typography sx={{ fontSize: '17px', lineHeight: 1.7, color: '#4B5563', mb: 3 }}>
                                {t('whoWeAre.description')}
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Use Cases Section */}
            <Container disableGutters sx={{ py: { xs: 10, md: 14 }, maxWidth: '1040px !important', px: { xs: 2, lg: 0 } }}>
                <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 }, maxWidth: '700px', mx: 'auto' }}>
                    <Typography sx={{ color: '#7FAF0D', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', mb: 2 }}>
                        {t('useCases.label')}
                    </Typography>
                    <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: '32px', md: '40px' }, color: '#1C1B1F' }}>
                        {t('useCases.title')}
                    </Typography>
                </Box>
                
                <Grid container spacing={4}>
                    {[
                        { icon: <CartIcon />, title: t('useCases.case1Title'), desc: t('useCases.case1Desc') },
                        { icon: <FactoryIcon />, title: t('useCases.case2Title'), desc: t('useCases.case2Desc') },
                        { icon: <SearchIcon />, title: t('useCases.case3Title'), desc: t('useCases.case3Desc') },
                    ].map((useCase, i) => (
                        <Grid size={{ xs: 12, md: 4 }} key={i}>
                            <Card sx={{ 
                                p: 4, 
                                height: '100%', 
                                borderRadius: '24px', 
                                border: '1px solid #E5E7EB', 
                                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: '0 12px 30px rgba(0,0,0,0.08)'
                                }
                            }}>
                                <Box sx={{ width: '56px', height: '56px', borderRadius: '14px', bgcolor: 'rgba(127,175,13,0.1)', color: '#7FAF0D', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                                    {useCase.icon}
                                </Box>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#1F2937' }}>
                                    {useCase.title}
                                </Typography>
                                <Typography sx={{ color: '#6B7280', lineHeight: 1.6 }}>
                                    {useCase.desc}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* CTA Section */}
            <Box sx={{ bgcolor: '#014B35', py: { xs: 8, md: 10 }, textAlign: 'center' }}>
                <Container disableGutters sx={{ maxWidth: '1040px !important', px: { xs: 2, lg: 0 } }}>
                    <Typography variant="h2" sx={{ fontWeight: 800, color: 'white', mb: 3, fontSize: { xs: '28px', md: '36px' } }}>
                        {t('cta.title')}
                    </Typography>
                    <Typography sx={{ color: '#E5E7EB', fontSize: '18px', mb: 5, maxWidth: '600px', mx: 'auto' }}>
                        {t('cta.description')}
                    </Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: '#7FAF0D',
                                color: 'white',
                                px: 4,
                                py: '14px',
                                borderRadius: '8px',
                                fontWeight: 700,
                                fontSize: '16px',
                                textTransform: 'none',
                                boxShadow: 'none',
                                '&:hover': { bgcolor: '#6e980c', boxShadow: 'none' }
                            }}
                        >
                            {t('cta.createAccount')}
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{
                                borderColor: 'rgba(255,255,255,0.3)',
                                color: 'white',
                                px: 4,
                                py: '14px',
                                borderRadius: '8px',
                                fontWeight: 700,
                                fontSize: '16px',
                                textTransform: 'none',
                                '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.05)' }
                            }}
                        >
                            {t('cta.contactSales')}
                        </Button>
                    </Stack>
                </Container>
            </Box>
        </Box>
    )
}
