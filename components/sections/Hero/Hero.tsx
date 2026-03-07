import React from 'react';
import { Box, Button, Typography, Container, Stack } from '@mui/material';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <Box component="section" className={styles.heroSection}>
            <Container maxWidth="lg">
                <Box className={styles.heroContent}>
                    <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 800 }}>
                        Global Source Export Platform
                    </Typography>
                    <Typography variant="h5" component="p" gutterBottom sx={{ mb: 4 }}>
                        Your premium B2B marketplace to discover top-quality products.
                    </Typography>
                    <Stack direction="row" spacing={2} justifyContent="center">
                        <Button variant="contained" color="primary" size="large">
                            Explore Products
                        </Button>
                        <Button variant="outlined" color="primary" size="large">
                            Join as Supplier
                        </Button>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}
