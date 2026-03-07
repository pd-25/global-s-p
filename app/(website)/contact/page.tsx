"use client";

import React from 'react';
import { Box, Container, Typography, Grid, Stack, Button } from '@mui/material';
import ContactForm from '@/components/forms/ContactForm/ContactForm';
import Icon from '@/components/ui/icon/Icon';
import Link from 'next/link';

export default function Contact() {
    return (
        <Box component="main" sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 8, md: 12 }, bgcolor: '#f9f9f9' }}>
            <Container maxWidth="lg">
                {/* Header Section */}
                <Box textAlign="center" mb={8}>
                    <Typography variant="h2" component="h1" fontWeight={800} gutterBottom>
                        Contact <span style={{ color: '#7FAF0D' }}>Us</span>
                    </Typography>
                    <Typography variant="body1" color="text.secondary" maxWidth="600px" mx="auto" fontSize="1.1rem">
                        Have questions about sourcing products, selling on Global Source Export, or anything else? Our team is here to help!
                    </Typography>
                </Box>

                <Grid container spacing={6}>
                    {/* Left Column: Contact Info */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Box mb={6}>
                            <Typography variant="h4" fontWeight={700} mb={4}>
                                Get In Touch
                            </Typography>
                            <Typography variant="body1" color="text.secondary" mb={4}>
                                Fill out the form and our experienced team will get back to you within 24 hours to address your B2B sourcing needs.
                            </Typography>

                            <Stack spacing={4}>
                                {/* Email Info */}
                                <Stack direction="row" spacing={3} alignItems="flex-start">
                                    <Box sx={{ bgcolor: 'rgba(127, 175, 13, 0.1)', p: 2, borderRadius: '12px' }}>
                                        <Icon name="mail" width={24} height={24} style={{ color: '#7FAF0D' }} />
                                    </Box>
                                    <Box>
                                        <Typography variant="h6" fontWeight={600} gutterBottom>
                                            Email Us
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" mb={1}>
                                            For direct inquiries and support
                                        </Typography>
                                        <Link href="mailto:support@globalsourceexport.com" style={{ textDecoration: 'none', color: '#7FAF0D', fontWeight: 600 }}>
                                            support@globalsourceexport.com
                                        </Link>
                                    </Box>
                                </Stack>

                                {/* Phone Info */}
                                <Stack direction="row" spacing={3} alignItems="flex-start">
                                    <Box sx={{ bgcolor: 'rgba(0, 96, 223, 0.1)', p: 2, borderRadius: '12px' }}>
                                        <Icon name="phone" width={24} height={24} style={{ color: '#0060DF' }} />
                                    </Box>
                                    <Box>
                                        <Typography variant="h6" fontWeight={600} gutterBottom>
                                            Call Us
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" mb={1}>
                                            Mon-Fri from 9am to 6pm
                                        </Typography>
                                        <Link href="tel:+1234567890" style={{ textDecoration: 'none', color: '#0060DF', fontWeight: 600 }}>
                                            +1 (234) 567-890
                                        </Link>
                                    </Box>
                                </Stack>

                                {/* Office Info */}
                                <Stack direction="row" spacing={3} alignItems="flex-start">
                                    <Box sx={{ bgcolor: 'rgba(228, 22, 72, 0.1)', p: 2, borderRadius: '12px' }}>
                                        <Icon name="location" width={24} height={24} style={{ color: '#E41648' }} />
                                    </Box>
                                    <Box>
                                        <Typography variant="h6" fontWeight={600} gutterBottom>
                                            Our Office
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" mb={1}>
                                            Come visit our headquarters at
                                        </Typography>
                                        <Typography variant="body1" fontWeight={500}>
                                            123 Business Avenue, Suite 100<br />
                                            New York, NY 10001, USA
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Stack>
                        </Box>

                    </Grid>

                    {/* Right Column: Contact Form */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        <ContactForm />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
