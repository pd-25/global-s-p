import React from 'react';
import { Box, Button, TextField, Typography, Stack } from '@mui/material';
import styles from './NewsletterForm.module.css';

export default function NewsletterForm() {
    return (
        <Box component="form" className={styles.newsletterContainer}>
            <Typography variant="h6" component="h3" mb={2}>
                Subscribe to our Newsletter
            </Typography>
            <Stack direction="row" spacing={2}>
                <TextField
                    fullWidth
                    label="Email Address"
                    variant="outlined"
                    size="small"
                    type="email"
                />
                <Button variant="contained" color="secondary" type="submit">
                    Subscribe
                </Button>
            </Stack>
        </Box>
    );
}
