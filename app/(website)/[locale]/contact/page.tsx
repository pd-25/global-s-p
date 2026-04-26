'use client';

import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
    TextField,
    Button,
    Stack,
    IconButton,
    Snackbar,
    Alert,
    InputAdornment
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import SendIcon from '@mui/icons-material/Send';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import SubjectIcon from '@mui/icons-material/Subject';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
    const t = useTranslations('contactPage');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        }, 1500);
    };

    return (
        <Box sx={{ backgroundColor: '#F4F7F6', minHeight: '100vh', pb: 12, position: 'relative' }}>

            {/* Header Banner - Cleaned up to be simple and eye-catching */}
            <Box
                sx={{
                    background: 'linear-gradient(135deg, #014B35 0%, #056847 100%)',
                    pt: { xs: 8, md: 12 },
                    pb: { xs: 20, md: 24 },
                    px: 3,
                    textAlign: 'center',
                    color: 'white',
                    position: 'relative',
                    zIndex: 1,
                    borderBottomLeftRadius: { xs: '30px', md: '50px' },
                    borderBottomRightRadius: { xs: '30px', md: '50px' },
                    boxShadow: '0 8px 30px rgba(1, 75, 53, 0.15)'
                }}
            >
                <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
                    <Typography variant="h1" sx={{ fontSize: { xs: '40px', md: '64px' }, fontWeight: 900, mb: 2, letterSpacing: '-1px', textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                        {t('heroTitle')}
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: { xs: '18px', md: '20px' }, opacity: 0.9, maxWidth: '600px', mx: 'auto', lineHeight: 1.6, fontWeight: 300 }}>
                        {t('heroSubtitle')}
                    </Typography>
                </Container>
            </Box>

            {/* Main Content Section - Split Card Layout */}
            <Container maxWidth="lg" sx={{ mt: { xs: -12, md: -16 }, position: 'relative', zIndex: 3 }}>
                <Paper
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 24px 80px rgba(0,0,0,0.1)',
                        border: '1px solid rgba(255,255,255,0.8)'
                    }}
                >

                    {/* Left Column: Contact Form */}
                    <Box sx={{ flex: 1, p: { xs: 4, md: 6, lg: 8 }, backgroundColor: '#ffffff' }}>
                        <Typography variant="h3" sx={{ fontWeight: 800, color: '#014B35', mb: 1, fontSize: { xs: '28px', md: '36px' }, letterSpacing: '-0.5px' }}>
                            {t('formTitle')}
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#666', mb: 5, fontSize: '16px' }}>
                            {t('formSubtitle')}
                        </Typography>

                        <Box component="form" onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField
                                        fullWidth
                                        placeholder={t('firstName')}
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        variant="filled"
                                        InputProps={{
                                            disableUnderline: true,
                                            startAdornment: <InputAdornment position="start"><PersonOutlineIcon sx={{ color: '#999' }} /></InputAdornment>,
                                            sx: { borderRadius: '12px', backgroundColor: '#F4F7F6', '&:hover, &.Mui-focused': { backgroundColor: '#e9efec' }, transition: '0.3s' }
                                        }}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField
                                        fullWidth
                                        placeholder={t('lastName')}
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        variant="filled"
                                        InputProps={{
                                            disableUnderline: true,
                                            startAdornment: <InputAdornment position="start"><PersonOutlineIcon sx={{ color: '#999' }} /></InputAdornment>,
                                            sx: { borderRadius: '12px', backgroundColor: '#F4F7F6', '&:hover, &.Mui-focused': { backgroundColor: '#e9efec' }, transition: '0.3s' }
                                        }}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField
                                        fullWidth
                                        placeholder={t('email')}
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        variant="filled"
                                        InputProps={{
                                            disableUnderline: true,
                                            startAdornment: <InputAdornment position="start"><MailOutlineIcon sx={{ color: '#999' }} /></InputAdornment>,
                                            sx: { borderRadius: '12px', backgroundColor: '#F4F7F6', '&:hover, &.Mui-focused': { backgroundColor: '#e9efec' }, transition: '0.3s' }
                                        }}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField
                                        fullWidth
                                        placeholder={t('phone')}
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        variant="filled"
                                        InputProps={{
                                            disableUnderline: true,
                                            startAdornment: <InputAdornment position="start"><PhoneOutlinedIcon sx={{ color: '#999' }} /></InputAdornment>,
                                            sx: { borderRadius: '12px', backgroundColor: '#F4F7F6', '&:hover, &.Mui-focused': { backgroundColor: '#e9efec' }, transition: '0.3s' }
                                        }}
                                    />
                                </Grid>
                                <Grid size={12}>
                                    <TextField
                                        fullWidth
                                        placeholder={t('subject')}
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        variant="filled"
                                        InputProps={{
                                            disableUnderline: true,
                                            startAdornment: <InputAdornment position="start"><SubjectIcon sx={{ color: '#999' }} /></InputAdornment>,
                                            sx: { borderRadius: '12px', backgroundColor: '#F4F7F6', '&:hover, &.Mui-focused': { backgroundColor: '#e9efec' }, transition: '0.3s' }
                                        }}
                                    />
                                </Grid>
                                <Grid size={12}>
                                    <TextField
                                        fullWidth
                                        placeholder={t('messagePlaceholder')}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        multiline
                                        rows={5}
                                        variant="filled"
                                        InputProps={{
                                            disableUnderline: true,
                                            sx: { borderRadius: '12px', backgroundColor: '#F4F7F6', '&:hover, &.Mui-focused': { backgroundColor: '#e9efec' }, transition: '0.3s', p: 2 }
                                        }}
                                    />
                                </Grid>
                                <Grid size={12} sx={{ mt: 2 }}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        disabled={loading}
                                        fullWidth
                                        endIcon={!loading && <SendIcon />}
                                        sx={{
                                            py: 2,
                                            borderRadius: '12px',
                                            fontSize: '18px',
                                            fontWeight: 700,
                                            letterSpacing: '0.5px',
                                            backgroundColor: '#7FAF0D',
                                            textTransform: 'none',
                                            boxShadow: '0 10px 25px rgba(127, 175, 13, 0.4)',
                                            '&:hover': {
                                                backgroundColor: '#6A920B',
                                                transform: 'translateY(-2px)',
                                                boxShadow: '0 12px 30px rgba(127, 175, 13, 0.5)',
                                            },
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                        }}
                                    >
                                        {loading ? t('sending') : t('sendButton')}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>

                    {/* Right Column: Contact Info Panel - Cleaned up background */}
                    <Box
                        sx={{
                            width: { xs: '100%', md: '400px', lg: '450px' },
                            background: 'linear-gradient(135deg, #014B35 0%, #033927 100%)',
                            color: 'white',
                            p: { xs: 4, md: 6 },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            position: 'relative'
                        }}
                    >
                        <Box sx={{ position: 'relative', zIndex: 1 }}>
                            <Typography variant="h4" sx={{ fontWeight: 800, mb: 5, fontSize: '28px' }}>
                                {t('contactInfoTitle')}
                            </Typography>

                            <Stack spacing={5}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                    <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', p: 1.5, borderRadius: '50%', mr: 3, display: 'flex' }}>
                                        <LocationOnIcon sx={{ color: '#7FAF0D', fontSize: '28px' }} />
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>{t('locationLabel')}</Typography>
                                        <Typography variant="body1" sx={{ mt: 0.5, lineHeight: 1.6, fontSize: '18px', fontWeight: 500 }}>{t('locationLine1')}<br />{t('locationLine2')}</Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                    <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', p: 1.5, borderRadius: '50%', mr: 3, display: 'flex' }}>
                                        <EmailIcon sx={{ color: '#7FAF0D', fontSize: '28px' }} />
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>{t('emailLabel')}</Typography>
                                        <Typography variant="body1" sx={{ mt: 0.5, fontSize: '18px', fontWeight: 500 }}>{t('email1')}</Typography>
                                        <Typography variant="body1" sx={{ fontSize: '18px', fontWeight: 500 }}>{t('email2')}</Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                    <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', p: 1.5, borderRadius: '50%', mr: 3, display: 'flex' }}>
                                        <PhoneIcon sx={{ color: '#7FAF0D', fontSize: '28px' }} />
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>{t('phoneLabel')}</Typography>
                                        <Typography variant="body1" sx={{ mt: 0.5, fontSize: '18px', fontWeight: 500 }}>{t('phoneValue')}</Typography>
                                    </Box>
                                </Box>
                            </Stack>
                        </Box>

                        <Box sx={{ position: 'relative', zIndex: 1, mt: { xs: 8, md: 0 } }}>
                            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>
                                {t('connectWithUsLabel')}
                            </Typography>
                            <Stack direction="row" spacing={2}>
                                <IconButton sx={{ backgroundColor: '#ffffff', color: '#014B35', '&:hover': { backgroundColor: '#7FAF0D', color: '#fff', transform: 'translateY(-3px)' }, transition: 'all 0.3s', width: '48px', height: '48px' }}>
                                    <LinkedInIcon />
                                </IconButton>
                                <IconButton sx={{ backgroundColor: '#ffffff', color: '#014B35', '&:hover': { backgroundColor: '#7FAF0D', color: '#fff', transform: 'translateY(-3px)' }, transition: 'all 0.3s', width: '48px', height: '48px' }}>
                                    <TwitterIcon />
                                </IconButton>
                                <IconButton sx={{ backgroundColor: '#ffffff', color: '#014B35', '&:hover': { backgroundColor: '#7FAF0D', color: '#fff', transform: 'translateY(-3px)' }, transition: 'all 0.3s', width: '48px', height: '48px' }}>
                                    <FacebookIcon />
                                </IconButton>
                            </Stack>
                        </Box>

                    </Box>

                </Paper>
            </Container>

            <Snackbar
                open={success}
                autoHideDuration={6000}
                onClose={() => setSuccess(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%', borderRadius: '12px', fontSize: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                    {t('successMessage')}
                </Alert>
            </Snackbar>
        </Box>
    );
}
