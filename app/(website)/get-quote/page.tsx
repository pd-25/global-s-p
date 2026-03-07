"use client";

import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import QuoteForm from '@/components/forms/QuoteForm/QuoteForm';

export default function GetQuotePage() {
    return (
        <Box component="main" sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 8, md: 12 }, bgcolor: '#f4f6f8' }}>
            <Container maxWidth="md">
                <Box textAlign="center" mb={6}>
                    <Typography variant="h2" component="h1" fontWeight={800} gutterBottom>
                        Get a <span style={{ color: '#7FAF0D' }}>Quote</span>
                    </Typography>
                    <Typography variant="body1" color="text.secondary" fontSize="1.1rem">
                        Tell us exactly what you need. Our team will connect you with the best global suppliers.
                    </Typography>
                </Box>

                <Grid container justifyContent="center">
                    <Grid size={{ xs: 12 }}>
                        <Box sx={{ bgcolor: 'white', p: { xs: 3, md: 5 }, borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
                            <QuoteForm />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
