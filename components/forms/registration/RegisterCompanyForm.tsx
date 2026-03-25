'use client';

import React, { useState } from 'react';
import {
    Box,
    Card,
    Typography,
    Stack,
    MenuItem,
    Select,
    FormControl,
    TextField,
    Button,
    InputLabel,
    Grid,
    Container,
    Avatar,
    InputAdornment,
    Tooltip
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useTranslations } from 'next-intl';

export default function RegisterCompanyForm() {
    const t = useTranslations('registerCompany');
    
    // State
    const [formData, setFormData] = useState({
        companyName: '',
        country: '',
        vatNumber: '',
        street: '',
        address2: '',
        postalCode: '',
        city: '',
        email: '',
        website: '',
        countryCode: '',
        phone: '',
        employees: '',
        deliveryArea: '',
        companyType: '',
        businessSector: '',
    });

    const handleChange = (field: string) => (e: any) => {
        setFormData({ ...formData, [field]: e.target.value });
    };

    const inputStyles = {
        '& .MuiOutlinedInput-root': {
            borderRadius: '10px',
            backgroundColor: '#fff',
            transition: 'all 0.3s ease',
            '&:hover fieldset': {
                borderColor: '#7FAF0D',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#7FAF0D',
                borderWidth: '2px',
            },
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: '#7FAF0D',
        }
    };

    return (
        <Box sx={{ backgroundColor: '#F8FAFC', minHeight: '100vh', pb: 10 }}>
            {/* Header Section */}
            <Box 
                sx={{ 
                    background: 'linear-gradient(135deg, #014B35 0%, #056847 100%)', 
                    pt: { xs: 8, md: 10 }, 
                    pb: { xs: 12, md: 16 },
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Decorative shapes */}
                <Box sx={{ position: 'absolute', top: -50, right: -50, width: 300, height: 300, borderRadius: '50%', backgroundColor: 'rgba(127, 175, 13, 0.15)', filter: 'blur(40px)' }} />
                <Box sx={{ position: 'absolute', bottom: -100, left: 50, width: 350, height: 350, borderRadius: '50%', backgroundColor: 'rgba(127, 175, 13, 0.1)', filter: 'blur(50px)' }} />
                
                <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography variant="h1" align="center" sx={{ color: '#fff', mb: 3, fontSize: { xs: '32px', md: '48px' }, fontWeight: 800, textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                        {t('title')}
                    </Typography>
                    <Typography align="center" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px', maxWidth: '650px', mx: 'auto', lineHeight: 1.6 }}>
                        Join thousands of verified suppliers on the leading B2B marketplace. Complete your profile below to start connecting with global buyers today.
                    </Typography>
                </Container>
            </Box>

            <Container maxWidth="md" sx={{ mt: { xs: -6, md: -10 }, position: 'relative', zIndex: 2 }}>
                <Stack spacing={4}>
                    {/* Section 1: Company Information */}
                    <Card sx={{ p: { xs: 3, md: 5 }, borderRadius: '24px', boxShadow: '0 12px 40px rgba(0,0,0,0.06)', border: '1px solid rgba(255,255,255,0.8)' }}>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems={{ xs: 'flex-start', sm: 'center' }} mb={4}>
                            <Avatar sx={{ bgcolor: '#EBF4D3', color: '#7FAF0D', width: 64, height: 64, boxShadow: '0 8px 16px rgba(127, 175, 13, 0.2)' }}>
                                <StorefrontIcon fontSize="large" />
                            </Avatar>
                            <Box>
                                <Typography variant="h4" sx={{ fontWeight: 700, color: '#014B35', mb: 0.5, fontSize: '24px' }}>
                                    {t('sections.companyInfo.title')}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#666', fontSize: '15px' }}>
                                    {t('sections.companyInfo.subtitle')}
                                </Typography>
                            </Box>
                        </Stack>

                        <Grid container spacing={3}>
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    fullWidth
                                    label={t('sections.companyInfo.fields.companyName')}
                                    value={formData.companyName}
                                    onChange={handleChange('companyName')}
                                    sx={inputStyles}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Tooltip title="Enter your official registered company name">
                                                    <InfoOutlinedIcon sx={{ color: '#999', fontSize: 20 }} />
                                                </Tooltip>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <FormControl fullWidth sx={inputStyles}>
                                    <InputLabel>{t('sections.companyInfo.fields.country')}</InputLabel>
                                    <Select
                                        value={formData.country}
                                        onChange={handleChange('country')}
                                        label={t('sections.companyInfo.fields.country')}
                                        IconComponent={KeyboardArrowDownIcon}
                                    >
                                        <MenuItem value="US">United States</MenuItem>
                                        <MenuItem value="GB">United Kingdom</MenuItem>
                                        <MenuItem value="DE">Germany</MenuItem>
                                        <MenuItem value="FR">France</MenuItem>
                                        <MenuItem value="IN">India</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label={t('sections.companyInfo.fields.vat')}
                                    value={formData.vatNumber}
                                    onChange={handleChange('vatNumber')}
                                    sx={inputStyles}
                                />
                            </Grid>
                        </Grid>
                    </Card>

                    {/* Section 2: Company Address */}
                    <Card sx={{ p: { xs: 3, md: 5 }, borderRadius: '24px', boxShadow: '0 12px 40px rgba(0,0,0,0.06)', border: '1px solid rgba(255,255,255,0.8)' }}>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems={{ xs: 'flex-start', sm: 'center' }} mb={4}>
                            <Avatar sx={{ bgcolor: '#EBF4D3', color: '#7FAF0D', width: 64, height: 64, boxShadow: '0 8px 16px rgba(127, 175, 13, 0.2)' }}>
                                <LocationCityIcon fontSize="large" />
                            </Avatar>
                            <Typography variant="h4" sx={{ fontWeight: 700, color: '#014B35', mb: 0, fontSize: '24px' }}>
                                {t('sections.address.title')}
                            </Typography>
                        </Stack>

                        <Grid container spacing={3}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label={t('sections.address.fields.street')}
                                    value={formData.street}
                                    onChange={handleChange('street')}
                                    sx={inputStyles}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label={t('sections.address.fields.address2')}
                                    value={formData.address2}
                                    onChange={handleChange('address2')}
                                    sx={inputStyles}
                                    placeholder="Suite, Building, Floor (optional)"
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label={t('sections.address.fields.postalCode')}
                                    value={formData.postalCode}
                                    onChange={handleChange('postalCode')}
                                    sx={inputStyles}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label={t('sections.address.fields.city')}
                                    value={formData.city}
                                    onChange={handleChange('city')}
                                    sx={inputStyles}
                                />
                            </Grid>
                        </Grid>
                    </Card>

                    {/* Section 3: Company Contact */}
                    <Card sx={{ p: { xs: 3, md: 5 }, borderRadius: '24px', boxShadow: '0 12px 40px rgba(0,0,0,0.06)', border: '1px solid rgba(255,255,255,0.8)' }}>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems={{ xs: 'flex-start', sm: 'center' }} mb={4}>
                            <Avatar sx={{ bgcolor: '#EBF4D3', color: '#7FAF0D', width: 64, height: 64, boxShadow: '0 8px 16px rgba(127, 175, 13, 0.2)' }}>
                                <ContactMailIcon fontSize="large" />
                            </Avatar>
                            <Box>
                                <Typography variant="h4" sx={{ fontWeight: 700, color: '#014B35', mb: 0.5, fontSize: '24px' }}>
                                    {t('sections.contact.title')}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#666', fontSize: '15px' }}>
                                    {t('sections.contact.subtitle')}
                                </Typography>
                            </Box>
                        </Stack>

                        <Grid container spacing={3}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label={t('sections.contact.fields.email')}
                                    value={formData.email}
                                    onChange={handleChange('email')}
                                    sx={inputStyles}
                                    type="email"
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label={t('sections.contact.fields.website')}
                                    placeholder="e.g. www.company.com"
                                    value={formData.website}
                                    onChange={handleChange('website')}
                                    sx={inputStyles}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 4, md: 4 }}>
                                <FormControl fullWidth sx={inputStyles}>
                                    <InputLabel>{t('sections.contact.fields.countryCode')}</InputLabel>
                                    <Select
                                        value={formData.countryCode}
                                        onChange={handleChange('countryCode')}
                                        label={t('sections.contact.fields.countryCode')}
                                        IconComponent={KeyboardArrowDownIcon}
                                    >
                                        <MenuItem value="+1">+1 (US)</MenuItem>
                                        <MenuItem value="+44">+44 (UK)</MenuItem>
                                        <MenuItem value="+49">+49 (DE)</MenuItem>
                                        <MenuItem value="+91">+91 (IN)</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 8, md: 8 }}>
                                <TextField
                                    fullWidth
                                    label={t('sections.contact.fields.phone')}
                                    value={formData.phone}
                                    onChange={handleChange('phone')}
                                    sx={inputStyles}
                                />
                            </Grid>
                        </Grid>
                    </Card>

                    {/* Section 4: Business Details */}
                    <Card sx={{ p: { xs: 3, md: 5 }, borderRadius: '24px', boxShadow: '0 12px 40px rgba(0,0,0,0.06)', border: '1px solid rgba(255,255,255,0.8)' }}>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems={{ xs: 'flex-start', sm: 'center' }} mb={4}>
                            <Avatar sx={{ bgcolor: '#EBF4D3', color: '#7FAF0D', width: 64, height: 64, boxShadow: '0 8px 16px rgba(127, 175, 13, 0.2)' }}>
                                <BusinessCenterIcon fontSize="large" />
                            </Avatar>
                            <Box>
                                <Typography variant="h4" sx={{ fontWeight: 700, color: '#014B35', mb: 0.5, fontSize: '24px' }}>
                                    {t('sections.business.title')}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#666', fontSize: '15px' }}>
                                    Help buyers understand your capabilities and operations better.
                                </Typography>
                            </Box>
                        </Stack>

                        <Grid container spacing={3}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <FormControl fullWidth sx={inputStyles}>
                                    <InputLabel>{t('sections.business.fields.employees')}</InputLabel>
                                    <Select
                                        value={formData.employees}
                                        onChange={handleChange('employees')}
                                        label={t('sections.business.fields.employees')}
                                        IconComponent={KeyboardArrowDownIcon}
                                    >
                                        <MenuItem value="1-10">1-10 Employees</MenuItem>
                                        <MenuItem value="11-50">11-50 Employees</MenuItem>
                                        <MenuItem value="51-200">51-200 Employees</MenuItem>
                                        <MenuItem value="200+">200+ Employees</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <FormControl fullWidth sx={inputStyles}>
                                    <InputLabel>{t('sections.business.fields.deliveryArea')}</InputLabel>
                                    <Select
                                        value={formData.deliveryArea}
                                        onChange={handleChange('deliveryArea')}
                                        label={t('sections.business.fields.deliveryArea')}
                                        IconComponent={KeyboardArrowDownIcon}
                                    >
                                        <MenuItem value="Local">Local</MenuItem>
                                        <MenuItem value="National">National</MenuItem>
                                        <MenuItem value="International">International</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <FormControl fullWidth sx={inputStyles}>
                                    <InputLabel>{t('sections.business.fields.companyType')}</InputLabel>
                                    <Select
                                        value={formData.companyType}
                                        onChange={handleChange('companyType')}
                                        label={t('sections.business.fields.companyType')}
                                        IconComponent={KeyboardArrowDownIcon}
                                    >
                                        <MenuItem value="Manufacturer">Manufacturer</MenuItem>
                                        <MenuItem value="Wholesaler">Wholesaler</MenuItem>
                                        <MenuItem value="Distributor">Distributor</MenuItem>
                                        <MenuItem value="Service Provider">Service Provider</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <FormControl fullWidth sx={inputStyles}>
                                    <InputLabel>{t('sections.business.fields.businessSector')}</InputLabel>
                                    <Select
                                        value={formData.businessSector}
                                        onChange={handleChange('businessSector')}
                                        label={t('sections.business.fields.businessSector')}
                                        IconComponent={KeyboardArrowDownIcon}
                                    >
                                        <MenuItem value="Agriculture & Food">Agriculture & Food</MenuItem>
                                        <MenuItem value="Apparel & Textiles">Apparel & Textiles</MenuItem>
                                        <MenuItem value="Electronics & Technology">Electronics & Technology</MenuItem>
                                        <MenuItem value="Construction & Real Estate">Construction & Real Estate</MenuItem>
                                        <MenuItem value="Health & Medical">Health & Medical</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Card>

                    {/* Submit Area */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 6 }}>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                backgroundColor: '#7FAF0D',
                                color: '#fff',
                                py: 2,
                                px: 8,
                                fontSize: '18px',
                                fontWeight: 700,
                                borderRadius: '14px',
                                textTransform: 'none',
                                boxShadow: '0 8px 24px rgba(127, 175, 13, 0.4)',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                '&:hover': {
                                    backgroundColor: '#6A920B',
                                    transform: 'translateY(-3px)',
                                    boxShadow: '0 12px 32px rgba(127, 175, 13, 0.5)',
                                }
                            }}
                        >
                            {t('submit')}
                        </Button>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}
