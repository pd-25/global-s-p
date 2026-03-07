"use client";

import React from 'react';
import { Box, Container, Typography, Grid, Paper, Stack, Button } from '@mui/material';
import Icon from '@/components/ui/icon/Icon';
import Link from 'next/link';

export default function RequstHubPage() {
    const requests = [
        { id: 1, title: 'Need 50,000 meters of packing tape', date: '2 hours ago', status: 'Open', quotes: 5 },
        { id: 2, title: 'Looking for organic cotton suppliers', date: '5 hours ago', status: 'In Progress', quotes: 12 },
        { id: 3, title: 'Bulk order of corrugated boxes', date: '1 day ago', status: 'Open', quotes: 3 },
    ];

    return (
        <Box component="main" sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 8, md: 12 }, bgcolor: '#f9f9f9', minHeight: '80vh' }}>
            <Container maxWidth="lg">
                <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }} mb={6} spacing={2}>
                    <Box>
                        <Typography variant="h2" component="h1" fontWeight={800} gutterBottom>
                            Request <span style={{ color: '#0060DF' }}>Hub</span>
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Browse the latest sourcing requests from global buyers and submit a quote.
                        </Typography>
                    </Box>
                    <Button variant="contained" component={Link} href="/get-quote" size="large" sx={{ bgcolor: '#0060DF', '&:hover': { bgcolor: '#0050B3' } }}>
                        Post a Request
                    </Button>
                </Stack>

                <Stack spacing={3}>
                    {requests.map((req) => (
                        <Paper key={req.id} sx={{ p: 4, borderRadius: '12px', transition: 'all 0.2s', '&:hover': { boxShadow: '0 8px 24px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' } }}>
                            <Grid container alignItems="center" spacing={3}>
                                <Grid size={{ xs: 12, md: 7 }}>
                                    <Stack direction="row" spacing={2} alignItems="center" mb={1}>
                                        <Typography variant="h5" fontWeight={700}>
                                            {req.title}
                                        </Typography>
                                        <Box sx={{ bgcolor: req.status === 'Open' ? 'rgba(127, 175, 13, 0.1)' : 'rgba(0, 96, 223, 0.1)', color: req.status === 'Open' ? '#7FAF0D' : '#0060DF', px: 1.5, py: 0.5, borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600 }}>
                                            {req.status}
                                        </Box>
                                    </Stack>
                                    <Typography variant="body2" color="text.secondary">
                                        Posted • {req.date}
                                    </Typography>
                                </Grid>

                                <Grid size={{ xs: 12, md: 3 }} sx={{ textAlign: { xs: 'left', md: 'center' } }}>
                                    <Typography variant="h6" fontWeight={700}>{req.quotes}</Typography>
                                    <Typography variant="body2" color="text.secondary">Quotes Received</Typography>
                                </Grid>

                                <Grid size={{ xs: 12, md: 2 }} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                                    <Button variant="outlined" color="primary" fullWidth>
                                        View Details
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}
