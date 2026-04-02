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
    Tooltip,
    FormHelperText,
    FormControlLabel,
    Checkbox
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useTranslations } from 'next-intl';
import { Country, SupplierType } from '@/interfaces/interface';
import { websiteEndpoints } from '@/config/websiteEndpoints';
import apiService from '@/service/apiService';
import Link from 'next/link';
import { routes } from '@/config/routes';

export default function RegisterCompanyForm({ countries, supplierTypes }: { countries: Country[], supplierTypes: SupplierType[] }) {
    const t = useTranslations('registerCompany');

    // State
    const [formData, setFormData] = useState({
        companyName: '',
        logo: null as File | null,
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
        isAcceptTerms: false,
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        const reqMsg = t('validation.required', { defaultValue: 'This field is required' });
        
        if (!formData.companyName) newErrors.companyName = reqMsg;
        if (!formData.logo) newErrors.logo = reqMsg;
        if (!formData.country) newErrors.country = reqMsg;
        if (!formData.vatNumber) newErrors.vatNumber = reqMsg;
        if (!formData.street) newErrors.street = reqMsg;
        if (!formData.postalCode) newErrors.postalCode = reqMsg;
        if (!formData.city) newErrors.city = reqMsg;
        
        if (!formData.email) {
            newErrors.email = reqMsg;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = t('validation.invalidEmail', { defaultValue: 'Invalid email format' });
        }
        
        if (formData.website && !/^https?:\/\/.*/.test(formData.website)) {
             newErrors.website = t('validation.invalidWebsite', { defaultValue: 'Start with http:// or https://' });
        }
        
        if (!formData.countryCode) newErrors.countryCode = reqMsg;
        if (!formData.phone) newErrors.phone = reqMsg;
        if (!formData.employees) newErrors.employees = reqMsg;
        if (!formData.deliveryArea) newErrors.deliveryArea = reqMsg;
        if (!formData.companyType) newErrors.companyType = reqMsg;
        if (!formData.businessSector) newErrors.businessSector = reqMsg;

        if (!formData.isAcceptTerms) {
            newErrors.isAcceptTerms = t('validation.acceptTerms', { defaultValue: 'You must accept the Terms and Conditions and Privacy Policy' });
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;
        
        setIsSubmitting(true);
        setSubmitError(null);
        
        try {
            const formDataObj = new FormData();
            formDataObj.append('name', formData.companyName);
            if (formData.logo) formDataObj.append('logo', formData.logo);
            formDataObj.append('country_id', String(formData.country));
            formDataObj.append('vat_number', formData.vatNumber);
            formDataObj.append('address', formData.street);
            if (formData.address2) formDataObj.append('address_two', formData.address2);
            formDataObj.append('zipcode', formData.postalCode);
            formDataObj.append('city', formData.city);
            formDataObj.append('company_email', formData.email);
            if (formData.website) formDataObj.append('company_site', formData.website);
            formDataObj.append('company_phone_number', `${formData.countryCode.replace('+', '')}${formData.phone}`);
            formDataObj.append('employee_strength', formData.employees);
            formDataObj.append('delivery_area', formData.deliveryArea);
            formDataObj.append('supplier_type_id', String(formData.companyType));
            formDataObj.append('business_sector', formData.businessSector);
            formDataObj.append('is_accept_terms', String(formData.isAcceptTerms));
            
            // Unmapped fields provided in curl standard payload
            formDataObj.append('about', 'Company registration context'); 
            formDataObj.append('founded_year', new Date().getFullYear().toString());
            formDataObj.append('is_verified', 'false');

            const response = await apiService.postFormData<{ success: boolean; message: string; data: any }>(
                websiteEndpoints.createSupplier,
                formDataObj
            );

            if (response?.success) {
                setSubmitSuccess(true);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                setSubmitError(response?.message || 'Failed to create supplier.');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } catch (error: any) {
             setSubmitError(error.message || 'An error occurred during submission.');
             if (error.fieldErrors) {
                 const newErrors = { ...errors };
                 for (const [key, val] of Object.entries(error.fieldErrors)) {
                     if (key === 'name') newErrors.companyName = val as string;
                     else if (key === 'company_email') newErrors.email = val as string;
                     else if (key === 'company_site') newErrors.website = val as string;
                     else if (key === 'company_phone_number') newErrors.phone = val as string;
                     else newErrors[key] = val as string;
                 }
                 setErrors(newErrors);
             }
             window.scrollTo({ top: 0, behavior: 'smooth' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (field: string) => (e: any) => {
        setFormData({ ...formData, [field]: e.target.value });
        if (errors[field]) setErrors({ ...errors, [field]: '' });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({ ...formData, logo: e.target.files[0] });
            if (errors.logo) setErrors({ ...errors, logo: '' });
        }
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
                        {t('description', { defaultValue: 'Join thousands of verified suppliers on the leading B2B marketplace. Complete your profile below to start connecting with global buyers today.' })}
                    </Typography>
                </Container>
            </Box>

            <Container maxWidth="md" sx={{ mt: { xs: -6, md: -10 }, position: 'relative', zIndex: 2 }}>
                {submitSuccess ? (
                    <Card sx={{ p: { xs: 4, md: 8 }, borderRadius: '24px', textAlign: 'center', boxShadow: '0 12px 40px rgba(0,0,0,0.06)' }}>
                        <Avatar sx={{ bgcolor: '#7FAF0D', color: '#fff', width: 80, height: 80, mx: 'auto', mb: 3 }}>
                            <StorefrontIcon fontSize="large" />
                        </Avatar>
                        <Typography variant="h3" sx={{ fontWeight: 700, color: '#014B35', mb: 2, fontSize: { xs: '28px', md: '36px' } }}>
                            {t('successTitle', { defaultValue: 'Company Registered Successfully!' })}
                        </Typography>
                        <Typography sx={{ color: '#666', fontSize: '18px', maxWidth: '500px', mx: 'auto', mb: 4 }}>
                            {t('successMessage', { defaultValue: 'Thank you for registering on our platform. Your company details have been submitted standard and are pending verification.' })}
                        </Typography>
                    </Card>
                ) : (
                <Stack spacing={4}>
                    {submitError && (
                        <Card sx={{ p: 3, borderRadius: '16px', bgcolor: 'rgba(211, 47, 47, 0.05)', border: '1px solid #d32f2f' }}>
                            <Typography color="error" fontWeight={600}>{submitError}</Typography>
                        </Card>
                    )}
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
                            <Grid size={{ xs: 12, md: 8 }}>
                                <TextField
                                    fullWidth
                                    label={t('sections.companyInfo.fields.companyName')}
                                    value={formData.companyName}
                                    onChange={handleChange('companyName')}
                                    sx={inputStyles}
                                    error={!!errors.companyName}
                                    helperText={errors.companyName}
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
                            <Grid size={{ xs: 12, md: 4 }}>
                                <Button
                                    component="label"
                                    variant="outlined"
                                    startIcon={<CloudUploadIcon />}
                                    sx={{
                                        height: '56px',
                                        width: '100%',
                                        borderRadius: '10px',
                                        borderColor: errors.logo ? '#d32f2f' : (formData.logo ? '#7FAF0D' : 'rgba(0, 0, 0, 0.23)'),
                                        color: errors.logo ? '#d32f2f' : (formData.logo ? '#7FAF0D' : 'text.secondary'),
                                        textTransform: 'none',
                                        justifyContent: 'flex-start',
                                        px: 2,
                                        '&:hover': {
                                            borderColor: errors.logo ? '#d32f2f' : '#7FAF0D',
                                            backgroundColor: 'rgba(127, 175, 13, 0.04)',
                                        }
                                    }}
                                >
                                    <Box sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                        {formData.logo ? formData.logo.name : t('sections.companyInfo.fields.uploadLogo', { defaultValue: 'Upload Logo' })}
                                    </Box>
                                    <input
                                        type="file"
                                        hidden
                                        accept="image/*"
                                        onChange={handleFileChange}
                                    />
                                </Button>
                                {errors.logo && <FormHelperText error sx={{ ml: 2 }}>{errors.logo}</FormHelperText>}
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <FormControl fullWidth sx={inputStyles} error={!!errors.country}>
                                    <InputLabel>{t('sections.companyInfo.fields.country')}</InputLabel>
                                    <Select
                                        value={formData.country}
                                        onChange={handleChange('country')}
                                        label={t('sections.companyInfo.fields.country')}
                                        IconComponent={KeyboardArrowDownIcon}
                                    >
                                        {(countries || []).map((country: Country) => (
                                            <MenuItem key={country.id} value={country.id}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <Box
                                                        component="img"
                                                        src={country.country_flag}
                                                        alt={country.country_code || country.name}
                                                        sx={{ width: 24, height: 16, objectFit: 'cover', borderRadius: '2px' }}
                                                    />
                                                    <span>{country.country_code || country.name}</span>
                                                </Box>
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    {errors.country && <FormHelperText>{errors.country}</FormHelperText>}
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label={t('sections.companyInfo.fields.vat')}
                                    value={formData.vatNumber}
                                    onChange={handleChange('vatNumber')}
                                    sx={inputStyles}
                                    error={!!errors.vatNumber}
                                    helperText={errors.vatNumber}
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
                                    error={!!errors.street}
                                    helperText={errors.street}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label={t('sections.address.fields.address2')}
                                    value={formData.address2}
                                    onChange={handleChange('address2')}
                                    sx={inputStyles}
                                    placeholder={t('sections.address.placeholders.address2', { defaultValue: 'Suite, Building, Floor (optional)' })}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label={t('sections.address.fields.postalCode')}
                                    value={formData.postalCode}
                                    onChange={handleChange('postalCode')}
                                    sx={inputStyles}
                                    error={!!errors.postalCode}
                                    helperText={errors.postalCode}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label={t('sections.address.fields.city')}
                                    value={formData.city}
                                    onChange={handleChange('city')}
                                    sx={inputStyles}
                                    error={!!errors.city}
                                    helperText={errors.city}
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
                                    error={!!errors.email}
                                    helperText={errors.email}
                                    type="email"
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label={t('sections.contact.fields.website')}
                                    placeholder={t('sections.contact.placeholders.website', { defaultValue: 'e.g. www.company.com' })}
                                    value={formData.website}
                                    onChange={handleChange('website')}
                                    sx={inputStyles}
                                    error={!!errors.website}
                                    helperText={errors.website}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 4, md: 4 }}>
                                <FormControl fullWidth sx={inputStyles} error={!!errors.countryCode}>
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
                                    {errors.countryCode && <FormHelperText>{errors.countryCode}</FormHelperText>}
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 8, md: 8 }}>
                                <TextField
                                    fullWidth
                                    label={t('sections.contact.fields.phone')}
                                    value={formData.phone}
                                    onChange={handleChange('phone')}
                                    sx={inputStyles}
                                    error={!!errors.phone}
                                    helperText={errors.phone}
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
                                <FormControl fullWidth sx={inputStyles} error={!!errors.employees}>
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
                                    {errors.employees && <FormHelperText>{errors.employees}</FormHelperText>}
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <FormControl fullWidth sx={inputStyles} error={!!errors.deliveryArea}>
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
                                    {errors.deliveryArea && <FormHelperText>{errors.deliveryArea}</FormHelperText>}
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <FormControl fullWidth sx={inputStyles} error={!!errors.companyType}>
                                    <InputLabel>{t('sections.business.fields.companyType')}</InputLabel>
                                    <Select
                                        value={formData.companyType}
                                        onChange={handleChange('companyType')}
                                        label={t('sections.business.fields.companyType')}
                                        IconComponent={KeyboardArrowDownIcon}
                                    >
                                        {(supplierTypes || []).map((type: SupplierType) => (
                                            <MenuItem key={type.id} value={type.id}>
                                                {type.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    {errors.companyType && <FormHelperText>{errors.companyType}</FormHelperText>}
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <FormControl fullWidth sx={inputStyles} error={!!errors.businessSector}>
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
                                    {errors.businessSector && <FormHelperText>{errors.businessSector}</FormHelperText>}
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Card>

                    {/* Terms and Conditions Checkbox */}
                    <Box sx={{ px: 1 }}>
                        <FormControl error={!!errors.isAcceptTerms} component="fieldset">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formData.isAcceptTerms}
                                        onChange={(e) => {
                                            setFormData({ ...formData, isAcceptTerms: e.target.checked });
                                            if (e.target.checked && errors.isAcceptTerms) {
                                                setErrors({ ...errors, isAcceptTerms: '' });
                                            }
                                        }}
                                        sx={{
                                            color: errors.isAcceptTerms ? '#d32f2f' : '#7FAF0D',
                                            '&.Mui-checked': {
                                                color: '#7FAF0D',
                                            },
                                        }}
                                    />
                                }
                                label={
                                    <Typography variant="body2" sx={{ color: errors.isAcceptTerms ? '#d32f2f' : 'text.secondary' }}>
                                        {t('terms.iAcceptThe', { defaultValue: 'I accept the ' })}
                                        <Link href={routes.termsAndConditionsPage} style={{ color: '#014B35', fontWeight: 600, textDecoration: 'none' }} target="_blank">
                                            {t('terms.termsAndConditions', { defaultValue: 'Terms and Conditions' })}
                                        </Link>
                                        {t('terms.and', { defaultValue: ' and ' })}
                                        <Link href={routes.privacyPolicyPage} style={{ color: '#014B35', fontWeight: 600, textDecoration: 'none' }} target="_blank">
                                            {t('terms.privacyPolicy', { defaultValue: 'Privacy Policy' })}
                                        </Link>
                                        {t('terms.acceptMsg', { defaultValue: '' })}
                                        *
                                    </Typography>
                                }
                            />
                            {errors.isAcceptTerms && (
                                <FormHelperText error sx={{ ml: 4 }}>{errors.isAcceptTerms}</FormHelperText>
                            )}
                        </FormControl>
                    </Box>

                    {/* Submit Area */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 6 }}>
                        <Button
                            variant="contained"
                            size="large"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
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
                            {isSubmitting ? t('submitting', { defaultValue: 'Submitting...' }) : t('submit')}
                        </Button>
                    </Box>
                </Stack>
                )}
            </Container>
        </Box>
    );
}
