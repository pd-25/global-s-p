import React from 'react';
import { Box, Button, TextField, Typography, Grid } from '@mui/material';
import styles from './ContactForm.module.css';

export default function ContactForm() {
    return (
        <Box component="form" className={styles.contactFormContainer}>
            <Typography variant="h4" component="h2" mb={3} fontWeight={700}>
                Get in Touch
            </Typography>
            <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                        fullWidth
                        label="First Name"
                        variant="outlined"
                        required
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                        fullWidth
                        label="Last Name"
                        variant="outlined"
                        required
                    />
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <TextField
                        fullWidth
                        label="Email Address"
                        variant="outlined"
                        type="email"
                        required
                    />
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <TextField
                        fullWidth
                        label="Subject"
                        variant="outlined"
                        required
                    />
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <TextField
                        fullWidth
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={6}
                        required
                    />
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <Button variant="contained" color="primary" size="large" type="submit" fullWidth>
                        Send Message
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}
