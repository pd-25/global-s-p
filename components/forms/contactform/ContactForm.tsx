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
    RadioGroup,
    FormControlLabel,
    Radio,
    Checkbox,
    Button,
    InputLabel,
    Divider,
    IconButton,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { contactFormReason } from '@/lib/constants';
import apiService from '@/service/apiService';
import { websiteEndpoints } from '@/config/websiteEndpoints';
import { CircularProgress, Snackbar, Alert, Chip } from '@mui/material';

export interface ContactFormProps {
    supplierId?: number;
    supplierName?: string;
    productId?: number;
    product?: {
        image: string;
        title: string;
    };
}

export default function ContactForm({
    supplierId,
    supplierName = 'Supplier',
    productId,
    product,
}: ContactFormProps) {
    const router = useRouter();

    // State
    const [reason, setReason] = useState('Get price / quote');
    const [requestType, setRequestType] = useState('one-time');
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [quantity, setQuantity] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [forwardRequest, setForwardRequest] = useState(true);
    const [files, setFiles] = useState<File[]>([]);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({
        open: false,
        message: '',
        severity: 'success',
    });

    const isQuoteRequest = reason === 'Get price / quote' || reason === 'Get products / services details';

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (isQuoteRequest) {
            if (!title.trim()) newErrors.title = 'Request title is required';
            if (!location.trim()) newErrors.location = 'Delivery location is required';
            if (!quantity.trim()) newErrors.quantity = 'Quantity is required';
        }

        if (!message.trim()) newErrors.message = 'Message is required';

        if (!email.trim()) {
            newErrors.email = 'Business email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const selectedFiles = Array.from(e.target.files);
            if (files.length + selectedFiles.length > 5) {
                setSnackbar({
                    open: true,
                    message: 'Maximum 5 files allowed',
                    severity: 'error',
                });
                return;
            }
            const totalSize = [...files, ...selectedFiles].reduce((acc, file) => acc + file.size, 0);
            if (totalSize > 25 * 1024 * 1024) {
                setSnackbar({
                    open: true,
                    message: 'Total file size exceeds 25 MB',
                    severity: 'error',
                });
                return;
            }
            setFiles((prev) => [...prev, ...selectedFiles]);
        }
    };

    const removeFile = (index: number) => {
        setFiles((prev) => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            setLoading(true);
            try {
                const formData = new FormData();
                formData.append('reason_for_contacting', reason);

                if (isQuoteRequest) {
                    formData.append('request_title', title);
                    formData.append('delivery_location', location);
                    formData.append('quantity', quantity);
                    formData.append('request_type', requestType);
                    formData.append('forward_to_other', String(forwardRequest));
                    if (companyName) formData.append('company_name', companyName);
                }

                formData.append('message', message);
                formData.append('business_email', email);

                if (supplierId) formData.append('supplier_id', String(supplierId));
                if (productId) formData.append('product_id', String(productId));

                files.forEach((file) => {
                    formData.append('files', file);
                });

                await apiService.postFormData(websiteEndpoints.createEnquiry, formData);

                setSnackbar({
                    open: true,
                    message: 'Request sent successfully!',
                    severity: 'success',
                });

                // Clear form
                setFiles([]);
                setTitle('');
                setLocation('');
                setQuantity('');
                setMessage('');
                setEmail('');
                setCompanyName('');
                setForwardRequest(true);
                setErrors({});

                // Optional: redirect back after success
                // setTimeout(() => {
                //     router.back();
                // }, 2000);
            } catch (error: any) {
                setSnackbar({
                    open: true,
                    message: error.message || 'Failed to send request. Please try again.',
                    severity: 'error',
                });
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <Card
            elevation={0}
            sx={{
                p: { xs: 2, md: 4 },
                borderRadius: '8px',
                border: '1px solid #EAEBED',
                backgroundColor: '#fff',
                width: '100%',
            }}
        >
            {/* Header */}
            <Stack direction="row" alignItems="center" spacing={1} mb={3}>
                <IconButton onClick={() => router.back()} sx={{ color: '#000' }}>
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="h5" sx={{ fontWeight: 600, color: '#002540', fontSize: '20px' }}>
                    Contact supplier
                </Typography>
            </Stack>

            {/* To line */}
            <Stack direction="row" alignItems="center" spacing={2} mb={3}>
                <Typography sx={{ fontWeight: 600, color: '#000' }}>To</Typography>
                <Box
                    sx={{
                        backgroundColor: '#EBF4D3',
                        color: '#7FAF0D',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: '4px',
                        fontWeight: 600,
                        fontSize: '14px',
                    }}
                >
                    {supplierName}
                </Box>
            </Stack>

            {/* Product context (if applicable) */}
            {product && isQuoteRequest && (
                <Stack direction="row" alignItems="center" spacing={2} mb={3}>
                    <Box
                        sx={{
                            width: 60,
                            height: 60,
                            borderRadius: '8px',
                            overflow: 'hidden',
                            position: 'relative',
                            border: '1px solid #EAEBED'
                        }}
                    >
                        <Image src={product.image} alt={product.title} fill style={{ objectFit: 'cover' }} />
                    </Box>
                    <Typography sx={{ color: '#555', fontSize: '14px', flex: 1 }}>
                        {product.title}
                    </Typography>
                </Stack>
            )}

            {/* Form Fields */}
            <Stack spacing={3}>
                {/* Reason for contacting */}
                <FormControl fullWidth size="small">
                    <Typography sx={{ fontSize: '12px', color: '#555', mb: 0.5 }}>
                        Reason for contacting
                    </Typography>
                    <Select
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        sx={{
                            borderRadius: '6px',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#ccc',
                            },
                        }}
                    >
                        {contactFormReason.map((reason) => (
                            <MenuItem key={reason.name} value={reason.name}>
                                {reason.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {/* Request title */}
                {isQuoteRequest && (
                    <Box>
                        <TextField
                            fullWidth
                            size="small"
                            placeholder="Please add a short title or subject for your request"
                            label="Request title*"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            error={!!errors.title}
                            helperText={errors.title}
                            sx={{
                                '& .MuiOutlinedInput-root': { borderRadius: '6px' },
                            }}
                        />
                    </Box>
                )}

                {/* Delivery Location & Quantity */}
                {isQuoteRequest && (
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <TextField
                            fullWidth
                            size="small"
                            placeholder="Please enter a city name"
                            label="Delivery location*"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            error={!!errors.location}
                            helperText={errors.location}
                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '6px' } }}
                        />
                        <TextField
                            fullWidth
                            size="small"
                            placeholder="E.g. 200 kg, 500 pieces, 10 litres"
                            label="Quantity*"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            error={!!errors.quantity}
                            helperText={errors.quantity}
                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '6px' } }}
                        />
                    </Stack>
                )}

                {/* One time / Recurring */}
                {isQuoteRequest && (
                    <RadioGroup
                        row
                        value={requestType}
                        onChange={(e) => setRequestType(e.target.value)}
                    >
                        <FormControlLabel
                            value="one-time"
                            control={<Radio sx={{ color: '#7FAF0D', '&.Mui-checked': { color: '#7FAF0D' } }} />}
                            label={<Typography sx={{ fontSize: '14px' }}>One-time request</Typography>}
                        />
                        <FormControlLabel
                            value="recurring"
                            control={<Radio sx={{ color: '#7FAF0D', '&.Mui-checked': { color: '#7FAF0D' } }} />}
                            label={<Typography sx={{ fontSize: '14px' }}>Recurring request</Typography>}
                        />
                    </RadioGroup>
                )}

                {/* Message */}
                <Box>
                    <TextField
                        fullWidth
                        multiline
                        rows={4}
                        label="Message*"
                        placeholder="Please provide detailed specifications, including colour, material, size, weight, packaging, certificates, and any other relevant information for a prompt and accurate quote"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        error={!!errors.message}
                        helperText={errors.message}
                        inputProps={{ maxLength: 3000 }}
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: '6px' } }}
                    />
                    <Typography sx={{ textAlign: 'right', fontSize: '12px', color: '#888', mt: 0.5 }}>
                        {message.length} / 3000
                    </Typography>
                </Box>

                {/* File Upload */}
                {isQuoteRequest && (
                    <Box>
                        <Button
                            variant="outlined"
                            component="label"
                            fullWidth
                            startIcon={<AttachFileIcon />}
                            sx={{
                                justifyContent: 'flex-start',
                                color: '#555',
                                borderColor: '#ccc',
                                textTransform: 'none',
                                py: 1.5,
                                borderRadius: '6px',
                                fontWeight: 400,
                                '&:hover': {
                                    borderColor: '#999',
                                    backgroundColor: '#f9f9f9',
                                },
                            }}
                        >
                            Upload images or files
                            <input
                                type="file"
                                hidden
                                multiple
                                onChange={handleFileChange}
                            />
                        </Button>
                        <Stack direction="row" justifyContent="space-between" mt={0.5}>
                            <Typography sx={{ fontSize: '12px', color: '#888' }}>
                                Maximum size 25 MB
                            </Typography>
                            <Typography sx={{ fontSize: '12px', color: '#888' }}>
                                {files.length}/5
                            </Typography>
                        </Stack>

                        {/* Selected Files List */}
                        {files.length > 0 && (
                            <Stack direction="row" spacing={1} flexWrap="wrap" mt={1}>
                                {files.map((file, index) => (
                                    <Chip
                                        key={`${file.name}-${index}`}
                                        label={file.name}
                                        onDelete={() => removeFile(index)}
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            borderRadius: '6px',
                                            maxWidth: '200px',
                                            '& .MuiChip-label': {
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                            }
                                        }}
                                    />
                                ))}
                            </Stack>
                        )}
                    </Box>
                )}

                {/* Forward checkbox */}
                {isQuoteRequest && (
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={forwardRequest}
                                onChange={(e) => setForwardRequest(e.target.checked)}
                                sx={{ color: '#7FAF0D', '&.Mui-checked': { color: '#7FAF0D' } }}
                            />
                        }
                        label={<Typography sx={{ fontSize: '14px', fontWeight: 500 }}>Forward this request to other suppliers if the company doesn't respond within 48 hours</Typography>}
                        sx={{ alignItems: 'flex-start', pt: 0.5 }}
                    />
                )}

                <Divider sx={{ my: 1 }} />

                {/* Email and Company */}
                <TextField
                    fullWidth
                    size="small"
                    placeholder="Please enter your email"
                    label="Business email*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!errors.email}
                    helperText={errors.email}
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: '6px' } }}
                />

                {isQuoteRequest && (
                    <TextField
                        fullWidth
                        size="small"
                        placeholder="Please enter your company name"
                        label="Company name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: '6px' } }}
                    />
                )}

                {/* Submit button */}
                <Button
                    variant="contained"
                    fullWidth
                    onClick={handleSubmit}
                    disabled={loading}
                    sx={{
                        backgroundColor: '#7FAF0D',
                        color: '#fff',
                        py: 1.5,
                        textTransform: 'none',
                        fontSize: '16px',
                        fontWeight: 600,
                        borderRadius: '6px',
                        '&:hover': {
                            backgroundColor: '#6A920B',
                        },
                        '&.Mui-disabled': {
                            backgroundColor: '#A2C05E',
                            color: '#fff',
                        }
                    }}
                >
                    {loading ? <CircularProgress size={24} sx={{ color: '#fff' }} /> : 'Send request'}
                </Button>

                {/* Terms text */}
                <Typography sx={{ fontSize: '12px', color: '#555', textAlign: 'center', lineHeight: 1.6 }}>
                    By submitting the form, I accept the{' '}
                    <Box component="span" sx={{ color: '#7FAF0D', cursor: 'pointer', textDecoration: 'underline' }}>
                        Terms of use
                    </Box>{' '}
                    and the{' '}
                    <Box component="span" sx={{ color: '#7FAF0D', cursor: 'pointer', textDecoration: 'underline' }}>
                        GTC
                    </Box>
                    . I have acknowledged the{' '}
                    <Box component="span" sx={{ color: '#7FAF0D', cursor: 'pointer', textDecoration: 'underline' }}>
                        privacy policy
                    </Box>
                    . An account on our platform is required to access responses from your communication partners.
                </Typography>
            </Stack>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={2000}
                onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert
                    onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
                    severity={snackbar.severity}
                    sx={{ width: '100%', borderRadius: '8px' }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Card>
    );
}
