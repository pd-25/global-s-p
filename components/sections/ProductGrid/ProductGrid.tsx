import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import Card from '@/components/ui/Card/Card';
import styles from './ProductGrid.module.css';

// Using grid v2 API with standard Grid
export default function ProductGrid() {
    const products = [1, 2, 3, 4, 5, 6];

    return (
        <Box className={styles.gridContainer} sx={{ py: 6 }}>
            <Typography variant="h3" mb={4} textAlign="center">
                Featured Products
            </Typography>
            <Grid container spacing={4}>
                {products.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item}>
                        <Card className={styles.productCard}>
                            <Box p={3}>
                                <Typography variant="h6">Product Item {item}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Premium packaging component
                                </Typography>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
