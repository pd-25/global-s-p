'use client'
import { Box, Button, Container, Grid, Stack, Typography, TextField, MenuItem, CircularProgress, Snackbar, Alert } from "@mui/material"
import VerifiedIcon from '@mui/icons-material/Verified';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from './connect-with-us.module.scss';
import { useTranslations } from 'next-intl';
import { getCountries } from '@/lib/fetchCountries';

import { useEffect, useState } from 'react';
import { Country } from "@/interfaces/interface";
import { useCreateEnquiry } from '@/hooks/useCreateEnquiry';

export default function ConnectWithUsPage() {
  const t = useTranslations('registerCompany.connectWithUsPage');
  const [countries, setCountries] = useState<Country[]>([]);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [selectedCountry, setSelectedCountry] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successMsg, setSuccessMsg] = useState('');
  
  const { submitEnquiry, loading, error: submitError } = useCreateEnquiry();

  useEffect(() => {
    getCountries().then(setCountries);
  }, []);

  const handleInputChange = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!selectedCountry) newErrors.country = 'Country is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('country_id', selectedCountry);
    data.append('message', formData.message);
    data.append('is_quote_form', '1');

    try {
      await submitEnquiry(data);
      setSuccessMsg('Your message has been sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSelectedCountry('');
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Box className={styles.connectWithUsContainer}>
      <Box className={styles.bannerContainer}>
        <Container className={styles.bannerWrapper}>
          <Typography variant="h1" className={styles.bannerTitle}>
            {t('bannerTitle')}
          </Typography>
          <Typography variant="body1" className={styles.bannerSubtitle}>
            {t('bannerSubtitle')}
          </Typography>
          <Box className={styles.badgeContainer}>
            <Stack direction="row" spacing={1}>
              <VerifiedIcon />
              <Typography variant="caption" fontWeight="bold">
                {t('badgeLabel')}
              </Typography>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl" className={styles.contentContainer}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Stack spacing={4}>
              <Box className={styles.contactFormSection}>
                <Typography variant="h4" gutterBottom className={styles.sectionTitle}>
                  {t('contactFormTitle')}
                </Typography>
                <Typography variant="body2" color="text.secondary" className={styles.formDescription}>
                  {t('formDescription')}
                </Typography>

                <Stack spacing={3} mt={3}>
                  {/* Name Field */}
                  <Box>
                    <Typography variant="subtitle2" className={styles.inputLabel}>
                      {t('nameField')} <span className={styles.required}>*</span>
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder={t('namePlaceholder')}
                      variant="outlined"
                      value={formData.name}
                      onChange={handleInputChange('name')}
                      error={!!errors.name}
                      helperText={errors.name}
                      slotProps={{
                        input: {
                          sx: {
                            borderRadius: '10px',
                            backgroundColor: 'white',
                            '& .MuiOutlinedInput-notchedOutline': {
                              borderColor: 'rgba(0, 0, 0, 0.1)',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                              borderColor: '#7FAF0D',
                            },
                          },
                        }
                      }}
                    />
                  </Box>

                  {/* Email Field */}
                  <Box>
                    <Typography variant="subtitle2" className={styles.inputLabel}>
                      {t('emailField')} <span className={styles.required}>*</span>
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder={t('emailPlaceholder')}
                      type="email"
                      variant="outlined"
                      value={formData.email}
                      onChange={handleInputChange('email')}
                      error={!!errors.email}
                      helperText={errors.email}
                      slotProps={{
                        input: {
                          sx: {
                            borderRadius: '10px',
                            backgroundColor: 'white',
                            '& .MuiOutlinedInput-notchedOutline': {
                              borderColor: 'rgba(0, 0, 0, 0.1)',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                              borderColor: '#7FAF0D',
                            },
                          },
                        }
                      }}
                    />
                  </Box>

                  {/* Phone Field */}
                  <Box>
                    <Typography variant="subtitle2" className={styles.inputLabel}>
                      {t('phoneField')} <span className={styles.required}>*</span>
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder={t('phonePlaceholder')}
                      variant="outlined"
                      value={formData.phone}
                      onChange={handleInputChange('phone')}
                      error={!!errors.phone}
                      helperText={errors.phone}
                      slotProps={{
                        input: {
                          sx: {
                            borderRadius: '10px',
                            backgroundColor: 'white',
                            '& .MuiOutlinedInput-notchedOutline': {
                              borderColor: 'rgba(0, 0, 0, 0.1)',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                              borderColor: '#7FAF0D',
                            },
                          },
                        }
                      }}
                    />
                  </Box>

                  {/* Country Field */}
                  <Box>
                    <Typography variant="subtitle2" className={styles.inputLabel}>
                      {t('countryField')} <span className={styles.required}>*</span>
                    </Typography>
                    <TextField
                      select
                      fullWidth
                      value={selectedCountry}
                      onChange={(e) => {
                        setSelectedCountry(e.target.value);
                        if (errors.country) setErrors(prev => ({ ...prev, country: '' }));
                      }}
                      variant="outlined"
                      error={!!errors.country}
                      helperText={errors.country}
                      slotProps={{
                        input: {
                          sx: {
                            borderRadius: '10px',
                            backgroundColor: 'white',
                            '& .MuiOutlinedInput-notchedOutline': {
                              borderColor: 'rgba(0, 0, 0, 0.1)',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                              borderColor: '#7FAF0D',
                            },
                          },
                        }
                      }}
                    >
                      <MenuItem value="" disabled>
                        <em>{t('countryPlaceholder')}</em>
                      </MenuItem>
                      {countries.map((country) => (
                        <MenuItem key={country.id} value={country.id}>
                          {country.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Box>

                  {/* Message Field */}
                  <Box>
                    <Typography variant="subtitle2" className={styles.inputLabel}>
                      {t('messageField')} <span className={styles.required}>*</span>
                    </Typography>
                    <TextField
                      fullWidth
                      multiline
                      rows={5}
                      placeholder={t('messagePlaceholder')}
                      variant="outlined"
                      value={formData.message}
                      onChange={handleInputChange('message')}
                      error={!!errors.message}
                      helperText={errors.message}
                      slotProps={{
                        input: {
                          sx: {
                            borderRadius: '10px',
                            backgroundColor: 'white',
                            '& .MuiOutlinedInput-notchedOutline': {
                              borderColor: 'rgba(0, 0, 0, 0.1)',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                              borderColor: '#7FAF0D',
                            },
                          },
                        }
                      }}
                    />
                  </Box>

                  {/* Submit Button */}
                  <Button
                    variant="contained"
                    className={styles.submitButton}
                    onClick={handleSubmit}
                    disabled={loading}
                    endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <ArrowForwardIcon />}
                  >
                    {loading ? 'Submitting...' : t('submitButton')}
                  </Button>
                </Stack>
              </Box>

              <Box className={styles.trustIndicatorsSection}>
                <Typography variant="h4" gutterBottom className={styles.sectionTitle}>
                  {t('trustIndicatorsTitle')}
                </Typography>
                <Grid container spacing={2}>
                  {/* ISO Certification */}
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Stack direction="row" spacing={2} alignItems="center" className={styles.trustCard}>
                      <Box className={styles.trustIconCircle}>
                        <VerifiedIcon />
                      </Box>
                      <Box>
                        <Typography variant="h6" className={styles.trustTitle}>
                          ISO 9001:2015
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {t('isoDescription')}
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>

                  {/* Verified Supplier */}
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Stack direction="row" spacing={2} alignItems="center" className={styles.trustCard}>
                      <Box className={styles.trustIconCircle}>
                        <VerifiedIcon />
                      </Box>
                      <Box>
                        <Typography variant="h6" className={styles.trustTitle}>
                          {t('verifiedSupplierTitle')}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {t('verifiedSupplierDescription')}
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box className={styles.quickLinksCard}>
              <Typography variant="h6" className={styles.cardTitle}>
                {t('whyChooseUsTitle')}
              </Typography>
              <Stack spacing={2} mt={2}>
                {[1, 2, 3, 4].map((item) => (
                  <Box key={item} className={styles.quickLinkItem}>
                    <VerifiedIcon className={styles.checkIcon} />
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {t(`whyChooseUs${item}` as any)}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
      
      <Snackbar open={!!successMsg} autoHideDuration={6000} onClose={() => setSuccessMsg('')} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={() => setSuccessMsg('')} severity="success" sx={{ width: '100%' }}>
          {successMsg}
        </Alert>
      </Snackbar>
      <Snackbar open={!!submitError} autoHideDuration={6000} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert severity="error" sx={{ width: '100%' }}>
          {submitError}
        </Alert>
      </Snackbar>
    </Box>
  )
}
