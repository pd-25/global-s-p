'use client'

import React, { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  useTheme,
  CircularProgress,
  Snackbar,
  Alert,
  Chip,
  Stack
} from '@mui/material'
import { useCreateEnquiry } from '@/hooks/useCreateEnquiry'

import FactoryIcon from '@mui/icons-material/Factory'
import SettingsIcon from '@mui/icons-material/Settings'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import StorefrontIcon from '@mui/icons-material/Storefront'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined'
import { websiteEndpoints } from '@/config/websiteEndpoints'
import apiService from '@/service/apiService'
import type { SupplierType, SupplierTypesResponse } from '@/interfaces/interface'

const inputStyles = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    bgcolor: '#F8FAFC',
    transition: 'all 0.3s ease',
    '& fieldset': {
      borderColor: '#E2E8F0',
      borderWidth: '2px',
    },
    '&:hover fieldset': {
      borderColor: '#CBD5E1',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'primary.main',
      borderWidth: '2px',
    },
    '&.Mui-focused': {
      bgcolor: '#FFFFFF',
      boxShadow: '0 4px 20px rgba(127,175,13,0.1)'
    }
  }
}

const FormField = ({ label, required, placeholder, ...props }: any) => (
  <Box>
    <Typography variant="subtitle2" fontWeight="700" color="secondary.main" mb={1} sx={{ fontSize: '14px' }}>
      {label} {required && <span style={{ color: '#E11D48' }}>*</span>}
    </Typography>
    <TextField
      fullWidth
      hiddenLabel
      placeholder={placeholder}
      variant="outlined"
      sx={inputStyles}
      {...props}
    />
  </Box>
)

export default function QuoteSubmitForm() {
  const theme = useTheme();
  const [selectedSupplierIds, setSelectedSupplierIds] = useState<number[]>([])
  const [dynamicSupplierTypes, setDynamicSupplierTypes] = useState<{ id: number; name: string; icon: React.ReactNode }[]>([])

  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { submitEnquiry, loading } = useCreateEnquiry();
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({ open: false, message: '', severity: 'success' });

  useEffect(() => {
    const fetchSupplierTypes = async () => {
      try {
        const response = await apiService.get<SupplierTypesResponse>(websiteEndpoints.supplierTypes);
        if (response?.data) {
          const typesWithIcons = response.data.map((type: SupplierType) => ({
            id: type.id,
            name: type.name,
            icon: getIconForSupplier(type.name)
          }));
          setDynamicSupplierTypes(typesWithIcons);
        }
      } catch (error) {
        console.error("Failed to fetch supplier types:", error);
      }
    };
    fetchSupplierTypes();
  }, []);

  const getIconForSupplier = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes('custom') || n.includes('specific')) return <SettingsIcon />;
    if (n.includes('distributor') || n.includes('deliver')) return <LocalShippingIcon />;
    if (n.includes('service')) return <DesignServicesIcon />;
    if (n.includes('wholesale')) return <StorefrontIcon />;
    return <FactoryIcon />;
  }

  const toggleSupplier = (id: number) => {
    setSelectedSupplierIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      if (files.length + selectedFiles.length > 5) {
        setSnackbar({ open: true, message: 'Maximum 5 files allowed', severity: 'error' });
        return;
      }
      const totalSize = [...files, ...selectedFiles].reduce((acc, file) => acc + file.size, 0);
      if (totalSize > 25 * 1024 * 1024) {
        setSnackbar({ open: true, message: 'Total file size exceeds 25 MB', severity: 'error' });
        return;
      }
      setFiles(prev => [...prev, ...selectedFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    const newErrors: { [key: string]: string } = {};
    if (!title.trim()) newErrors.title = 'Product or service is required';
    if (!location.trim()) newErrors.location = 'Delivery location is required';
    if (!quantity.trim()) newErrors.quantity = 'Quantity is required';
    if (selectedSupplierIds.length === 0) newErrors.supplierTypes = 'Select at least one supplier type';
    if (!message.trim()) newErrors.message = 'Request details are required';
    if (!email.trim()) newErrors.email = 'Business email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Valid email is required';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      const formData = new FormData();
      // formData.append('reason_for_contacting', 'Get price / quote');
      formData.append('request_title', title);
      formData.append('delivery_location', location);
      formData.append('quantity', quantity);
      formData.append('request_type', isRecurring ? 'recurring' : 'one-time');
      formData.append('message', message);
      formData.append('business_email', email);
      if (companyName) formData.append('company_name', companyName);

      formData.append('supplier_type_ids', selectedSupplierIds.join(','));

      files.forEach(file => formData.append('files', file));

      await submitEnquiry(formData);
      setSnackbar({ open: true, message: 'Request sent successfully!', severity: 'success' });
      setTitle(''); setLocation(''); setQuantity(''); setMessage(''); setEmail(''); setCompanyName(''); setFiles([]); setSelectedSupplierIds([]); setIsRecurring(false);
    } catch (err: any) {
      setSnackbar({ open: true, message: err.message || 'Failed to submit request.', severity: 'error' });
    }
  };

  return (
    <Box sx={{ backgroundColor: '#F1F5F9', minHeight: '100vh', py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 4, md: 6 } }}>

        {/* Header Section */}
        <Box mb={6} textAlign={{ xs: 'center', lg: 'left' }}>
          <Typography variant="h3" fontWeight="800" color="secondary.main" gutterBottom sx={{ fontSize: { xs: '32px', md: '44px', lg: '50px' }, letterSpacing: '-1px' }}>
            Request for <Box component="span" sx={{ color: 'primary.main' }}>Quotes</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: '#64748B', maxWidth: '600px', mx: { xs: 'auto', lg: 0 }, fontSize: { xs: '16px', md: '18px' }, lineHeight: 1.6 }}>
            Describe your requirements and we'll instantly connect you with verified global suppliers to get the best offers.
          </Typography>
        </Box>

        {/* Main Layout using Flexbox instead of Grid for stability */}
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          gap: { xs: 4, lg: 6 },
          alignItems: 'flex-start'
        }}>

          {/* Left Column: Form */}
          <Box sx={{ flex: 1, width: '100%' }}>

            {/* Project Requirements Card */}
            <Paper elevation={0} sx={{
              p: { xs: 3, md: 5 },
              borderRadius: '24px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 10px 40px -10px rgba(0,0,0,0.05)',
              mb: 4
            }}>
              <Box mb={4}>
                <Typography variant="h5" fontWeight="800" color="secondary.main" gutterBottom>
                  Detailed Requirements
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748B' }}>
                  Provide as much detail as possible to get accurate quotes.
                </Typography>
              </Box>

              {/* CSS Grid strictly for form fields to prevent breaking completely */}
              <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 3
              }}>
                <Box sx={{ gridColumn: '1 / -1' }}>
                  <FormField label="Product or service" required placeholder="e.g. Precision CNC Machined Parts" value={title} onChange={(e: any) => setTitle(e.target.value)} error={!!errors.title} helperText={errors.title} />
                </Box>

                <FormField label="Delivery location" required placeholder="e.g. Berlin, Germany" value={location} onChange={(e: any) => setLocation(e.target.value)} error={!!errors.location} helperText={errors.location} />
                <FormField label="Quantity" required placeholder="e.g. 500 pieces, 200 kg" value={quantity} onChange={(e: any) => setQuantity(e.target.value)} error={!!errors.quantity} helperText={errors.quantity} />

                <Box sx={{ gridColumn: '1 / -1', mt: 2 }}>
                  <Typography variant="subtitle2" fontWeight="700" color="secondary.main" mb={2} sx={{ fontSize: '14px' }}>
                    What type of suppliers are you looking for? <span style={{ color: '#E11D48' }}>*</span>
                  </Typography>
                  {errors.supplierTypes && <Typography color="error" variant="caption" sx={{ display: 'block', mb: 1 }}>{errors.supplierTypes}</Typography>}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                    {dynamicSupplierTypes.map((type) => {
                      const isSelected = selectedSupplierIds.includes(type.id);
                      return (
                        <Button
                          key={type.id}
                          startIcon={type.icon}
                          onClick={() => toggleSupplier(type.id)}
                          disableElevation
                          sx={{
                            borderRadius: '12px',
                            px: 3,
                            py: 1.5,
                            fontWeight: 600,
                            textTransform: 'none',
                            border: '2px solid',
                            borderColor: isSelected ? 'primary.main' : '#E2E8F0',
                            bgcolor: isSelected ? 'rgba(127, 175, 13, 0.05)' : '#FFFFFF',
                            color: isSelected ? 'secondary.main' : '#64748B',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                              borderColor: isSelected ? 'primary.main' : '#CBD5E1',
                              bgcolor: isSelected ? 'rgba(127, 175, 13, 0.08)' : '#F8FAFC',
                              transform: 'translateY(-2px)'
                            }
                          }}
                        >
                          {type.name}
                        </Button>
                      )
                    })}
                  </Box>
                </Box>

                <Box sx={{ gridColumn: '1 / -1', mt: 2 }}>
                  <FormField
                    label="Request details"
                    required
                    multiline
                    minRows={5}
                    placeholder="Please specify materials, dimensions, certifications needed, packaging expectations..."
                    value={message}
                    onChange={(e: any) => setMessage(e.target.value)}
                    error={!!errors.message}
                    helperText={errors.message}
                  />
                </Box>

                <Box sx={{ gridColumn: '1 / -1' }}>
                  <Paper variant="outlined" sx={{
                    px: 2, py: 1,
                    borderRadius: '12px',
                    borderColor: '#E2E8F0',
                    bgcolor: '#F8FAFC',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <FormControlLabel
                      control={<Switch color="primary" checked={isRecurring} onChange={(e) => setIsRecurring(e.target.checked)} />}
                      label={<Typography fontWeight="600" color="secondary.main">This is a recurring, ongoing demand</Typography>}
                      sx={{ margin: 0, width: '100%' }}
                    />
                  </Paper>
                </Box>

                {/* Upload Section */}
                <Box sx={{ gridColumn: '1 / -1', mt: 2 }}>
                  <Box component="label" sx={{
                    border: '2px dashed',
                    borderColor: 'rgba(127, 175, 13, 0.3)',
                    bgcolor: 'rgba(127, 175, 13, 0.02)',
                    borderRadius: '20px',
                    p: { xs: 4, md: 6 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      borderColor: 'primary.main',
                      bgcolor: 'rgba(127, 175, 13, 0.06)'
                    }
                  }}>
                    <input type="file" hidden multiple onChange={handleFileChange} />
                    <Box sx={{
                      width: 64, height: 64,
                      borderRadius: '50%',
                      bgcolor: '#ffffff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                      mb: 2
                    }}>
                      <FileUploadOutlinedIcon sx={{ color: 'primary.main', fontSize: 32 }} />
                    </Box>
                    <Typography variant="h6" fontWeight="700" color="secondary.main" gutterBottom>
                      Click to upload or drag & drop files
                    </Typography>
                    <Typography variant="body2" color="text.secondary" textAlign="center" maxWidth="400px">
                      Max. 5 files up to 25 MB each. Supported: PDF, JPG, PNG, DOCX, XLSX, ZIP.
                    </Typography>
                  </Box>
                  {files.length > 0 && (
                    <Stack direction="row" spacing={1} flexWrap="wrap" mt={2}>
                      {files.map((file, index) => (
                        <Chip key={`${file.name}-${index}`} label={file.name} onDelete={() => removeFile(index)} />
                      ))}
                    </Stack>
                  )}
                </Box>

              </Box>
            </Paper>

            {/* Contact Details Card */}
            <Paper elevation={0} sx={{
              p: { xs: 3, md: 5 },
              borderRadius: '24px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 10px 40px -10px rgba(0,0,0,0.05)'
            }}>
              <Typography variant="h5" fontWeight="800" color="secondary.main" gutterBottom mb={4}>
                Contact Information
              </Typography>

              <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 3
              }}>
                <FormField label="Business email" required placeholder="john@company.com" value={email} onChange={(e: any) => setEmail(e.target.value)} error={!!errors.email} helperText={errors.email} />
                <FormField label="Company name" placeholder="Acme Corporation" value={companyName} onChange={(e: any) => setCompanyName(e.target.value)} />

                <Box sx={{ gridColumn: '1 / -1', mt: 3 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={handleSubmit}
                    disabled={loading}
                    sx={{
                      bgcolor: 'primary.main',
                      color: '#fff',
                      py: 2,
                      fontSize: '18px',
                      fontWeight: 700,
                      borderRadius: '16px',
                      boxShadow: '0 10px 30px rgba(127, 175, 13, 0.3)',
                      textTransform: 'none',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: '#6d960b',
                        boxShadow: '0 15px 40px rgba(127, 175, 13, 0.4)',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    {loading ? <CircularProgress size={24} sx={{ color: '#fff' }} /> : 'Send Request to Suppliers'}
                  </Button>
                </Box>

                <Box sx={{ gridColumn: '1 / -1', mt: 1 }}>
                  <Typography variant="body2" sx={{ color: '#94A3B8', textAlign: 'center', fontSize: '13px' }}>
                    By submitting the form, you accept our <a href="#" style={{ color: theme.palette.primary.main, fontWeight: 600, textDecoration: 'none' }}>Terms of Use</a> and <a href="#" style={{ color: theme.palette.primary.main, fontWeight: 600, textDecoration: 'none' }}>Privacy Policy</a>.
                    <br />An account will be created to track your requests.
                  </Typography>
                </Box>
              </Box>
            </Paper>

          </Box>

          {/* Right Column: How it works (Premium Dark Card) */}
          <Box sx={{
            width: { xs: '100%', lg: '380px' },
            position: { lg: 'sticky' },
            top: { lg: 32 }
          }}>
            <Paper sx={{
              bgcolor: 'secondary.main',
              color: 'white',
              borderRadius: '24px',
              p: 5,
              boxShadow: '0 20px 40px rgba(1, 75, 53, 0.15)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Decorative Blur */}
              <Box sx={{
                position: 'absolute', top: -100, right: -100, width: 250, height: 250,
                borderRadius: '50%', background: 'radial-gradient(circle, rgba(127,175,13,0.3) 0%, rgba(255,255,255,0) 70%)',
                zIndex: 0
              }} />

              <Box sx={{ position: 'relative', zIndex: 1, mb: 6 }}>
                <Typography variant="h5" fontWeight="800" mb={1.5} sx={{ letterSpacing: '-0.5px' }} color='#7FAF0D'>
                  How it Works
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: 1.6 }}>
                  Our AI technology does the heavy lifting to find the perfect manufacturing partners for you.
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1, gap: 5 }}>
                {/* Timeline Line */}
                <Box sx={{ position: 'absolute', left: 24, top: 24, bottom: 24, width: 2, bgcolor: 'rgba(255,255,255,0.1)' }} />

                {[
                  {
                    title: 'Submit your requirements',
                    desc: 'Share specs, quantities, and delivery details.',
                    icon: AssignmentOutlinedIcon
                  },
                  {
                    title: 'Smart matching',
                    desc: 'We analyze and post your request to verified, capable suppliers.',
                    icon: LanguageOutlinedIcon
                  },
                  {
                    title: 'Get contacted swiftly',
                    desc: 'Receive your first meaningful quotes within 1 working day.',
                    icon: DomainOutlinedIcon
                  }
                ].map((step, idx) => (
                  <Box key={idx} sx={{ display: 'flex', gap: 3, position: 'relative' }}>
                    <Box sx={{
                      width: 50, height: 50, borderRadius: '16px', bgcolor: 'primary.main',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      boxShadow: '0 8px 20px rgba(127,175,13,0.3)',
                      border: '2px solid rgba(255,255,255,0.2)'
                    }}>
                      <step.icon sx={{ color: '#ffffff' }} />
                    </Box>
                    <Box sx={{ pt: 0.5 }}>
                      <Typography variant="subtitle1" fontWeight="700" mb={0.5} sx={{ color: '#ffffff' }}>
                        {step.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
                        {step.desc}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Box>

        </Box>
        <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={() => setSnackbar(prev => ({ ...prev, open: false }))} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <Alert severity={snackbar.severity} onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}>{snackbar.message}</Alert>
        </Snackbar>
      </Container>
    </Box>
  )
}
