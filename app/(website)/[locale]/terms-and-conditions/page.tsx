import React from 'react';
import { Box, Container, Typography, Paper, Divider } from '@mui/material';

export default function TermsAndConditionsPage() {
    const lastUpdated = "August 15, 2026";

    return (
        <Box sx={{ backgroundColor: '#F8FAFC', pb: 10 }}>
            {/* Header Banner */}
            <Box 
                sx={{ 
                    background: 'linear-gradient(135deg, #014B35 0%, #056847 100%)', 
                    pt: { xs: 8, md: 10 }, 
                    pb: { xs: 12, md: 14 },
                    px: 3,
                    textAlign: 'center',
                    color: 'white',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Decorative shapes */}
                <Box sx={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, borderRadius: '50%', backgroundColor: 'rgba(127, 175, 13, 0.15)', filter: 'blur(30px)' }} />
                <Box sx={{ position: 'absolute', bottom: -50, left: 50, width: 250, height: 250, borderRadius: '50%', backgroundColor: 'rgba(127, 175, 13, 0.1)', filter: 'blur(40px)' }} />

                <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography variant="h1" sx={{ fontSize: { xs: '32px', md: '48px' }, fontWeight: 800, mb: 2, textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                        Terms and Conditions
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '18px', opacity: 0.9, maxWidth: '600px', mx: 'auto', lineHeight: 1.6 }}>
                        Please read these terms and conditions carefully before using our service.
                    </Typography>
                    <Typography variant="caption" sx={{ display: 'block', mt: 3, opacity: 0.8, fontSize: '14px' }}>
                        Last Updated: {lastUpdated}
                    </Typography>
                </Container>
            </Box>

            {/* Content Section */}
            <Container maxWidth="md" sx={{ mt: -6, position: 'relative', zIndex: 2 }}>
                <Paper sx={{ p: { xs: 4, md: 6 }, borderRadius: '20px', boxShadow: '0 12px 40px rgba(0,0,0,0.06)', border: '1px solid rgba(255,255,255,0.8)' }}>
                    
                    <Box mb={5}>
                        <Typography variant="h4" sx={{ fontWeight: 700, color: '#014B35', mb: 2, fontSize: '24px' }}>
                            1. Introduction
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, mb: 2, fontSize: '16px' }}>
                            Welcome to Global Source Expo. These Terms and Conditions govern your use of our website located at globalsourceexpo.com, and form a legally binding contract between you, the user, and Global Source Expo.
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, fontSize: '16px' }}>
                            By accessing or using our platform, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.
                        </Typography>
                    </Box>

                    <Divider sx={{ mb: 5, backgroundColor: '#EAEBED' }} />

                    <Box mb={5}>
                        <Typography variant="h4" sx={{ fontWeight: 700, color: '#014B35', mb: 2, fontSize: '24px' }}>
                            2. Use of Our Service
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, mb: 2, fontSize: '16px' }}>
                            Our service acts as a premium B2B marketplace to facilitate connections between verified suppliers and buyers globally. You agree to use the service only for lawful purposes in a way that does not infringe the rights or restrict anyone else's use and enjoyment of the website.
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, fontSize: '16px' }}>
                            You are explicitly prohibited from violating or attempting to violate the security of the website, including, without limitation:
                        </Typography>
                        <Box component="ul" sx={{ color: '#444', pl: 3, mt: 2, '& li': { mb: 1.5, lineHeight: 1.8, fontSize: '16px' } }}>
                            <li>Accessing data not intended for such user or logging onto a server or an account which the user is not authorized to access.</li>
                            <li>Attempting to probe, scan or test the vulnerability of a system or network.</li>
                            <li>Interfering with service to any user, host or network, including via means of submitting a virus, overloading, or spamming.</li>
                        </Box>
                    </Box>

                    <Divider sx={{ mb: 5, backgroundColor: '#EAEBED' }} />

                    <Box mb={5}>
                        <Typography variant="h4" sx={{ fontWeight: 700, color: '#014B35', mb: 2, fontSize: '24px' }}>
                            3. User Accounts & Responsibilities
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, mb: 2, fontSize: '16px' }}>
                            When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, fontSize: '16px' }}>
                            You are responsible for safeguarding the password and multi-factor authentication methods that you use to access the Service and for any activities or actions occurring under your account.
                        </Typography>
                    </Box>

                    <Divider sx={{ mb: 5, backgroundColor: '#EAEBED' }} />

                    <Box mb={5}>
                        <Typography variant="h4" sx={{ fontWeight: 700, color: '#014B35', mb: 2, fontSize: '24px' }}>
                            4. Intellectual Property
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, fontSize: '16px' }}>
                            The Service and its original content, brand assets, proprietary software, features, and functionality are and will remain the exclusive property of Global Source Expo and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Global Source Expo.
                        </Typography>
                    </Box>

                    <Divider sx={{ mb: 5, backgroundColor: '#EAEBED' }} />

                    <Box mb={5}>
                        <Typography variant="h4" sx={{ fontWeight: 700, color: '#014B35', mb: 2, fontSize: '24px' }}>
                            5. Disclaimer, Liability, and Indemnity
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, mb: 2, fontSize: '16px' }}>
                            Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We do not warrant that the Service will function uninterrupted, secure, or available at any particular time or location.
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, fontSize: '16px' }}>
                            In no event shall Global Source Expo, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of the marketplace.
                        </Typography>
                    </Box>

                    <Divider sx={{ mb: 5, backgroundColor: '#EAEBED' }} />

                    <Box>
                        <Typography variant="h4" sx={{ fontWeight: 700, color: '#014B35', mb: 2, fontSize: '24px' }}>
                            6. Contact Information
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, fontSize: '16px' }}>
                            If you have any questions about these Terms, including requests for account deletion or legal inquiries, please contact us at <strong>legal@globalsourceexpo.com</strong> or our dedicated support hotline.
                        </Typography>
                    </Box>

                </Paper>
            </Container>
        </Box>
    );
}