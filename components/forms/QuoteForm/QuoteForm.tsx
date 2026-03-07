import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import styles from './QuoteForm.module.css';

export default function QuoteForm() {
    return (
        <Box component="form" className={styles.formContainer}>
            <Typography variant="h5" component="h2" mb={2}>
                Request a Quote
            </Typography>
            <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
            />
            <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                type="email"
            />
            <TextField
                fullWidth
                label="Details"
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
            />
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Submit Request
            </Button>
        </Box>
    );
}
