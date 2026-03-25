'use client';

import React, { useState } from 'react';
import { Box, Container, Typography, Paper, Grid, Link as MuiLink } from '@mui/material';

export default function PrivacyPolicyPage() {
    const lastUpdated = "October 20, 2026";
    const [activeSection, setActiveSection] = useState('section1');

    const sections = [
        { id: 'section1', title: '1. Information We Collect' },
        { id: 'section2', title: '2. How We Use Your Information' },
        { id: 'section3', title: '3. Data Sharing & Disclosure' },
        { id: 'section4', title: '4. Cookies and Tracking' },
        { id: 'section5', title: '5. Data Security' },
        { id: 'section6', title: '6. Your Privacy Rights' },
        { id: 'section7', title: '7. Contact Us' },
    ];

    const scrollToSection = (id: string) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Account for any fixed headers if present
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Box sx={{ backgroundColor: '#F8FAFC', pb: 12, minHeight: '100vh' }}>
            {/* Header Banner */}
            <Box 
                sx={{ 
                    background: 'linear-gradient(135deg, #014B35 0%, #056847 100%)', 
                    pt: { xs: 8, md: 12 }, 
                    pb: { xs: 12, md: 16 },
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

                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'left' }}>
                    <Typography variant="h1" sx={{ fontSize: { xs: '32px', md: '56px' }, fontWeight: 900, mb: 2, letterSpacing: '-1px' }}>
                        Privacy Policy
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '18px', opacity: 0.9, maxWidth: '600px', lineHeight: 1.6 }}>
                        At Global Source Expo, we care deeply about privacy. We strive to be transparent about our privacy practices, including how we treat your personal information.
                    </Typography>
                    <Typography variant="caption" sx={{ display: 'block', mt: 3, opacity: 0.8, fontSize: '14px', fontWeight: 600, color: '#7FAF0D' }}>
                        LAST UPDATED: {lastUpdated}
                    </Typography>
                </Container>
            </Box>

            {/* Content Section */}
            <Container maxWidth="lg" sx={{ py: 8, position: 'relative', zIndex: 2 }}>
                <Grid container spacing={5} alignItems="flex-start">
                    
                    {/* Sidebar Table of Contents */}
                    <Grid size={{ xs: 12, sm: 4, md: 3 }} sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Box sx={{ position: 'sticky', top: '120px' }}>
                            <Paper sx={{ p: 3, borderRadius: '16px', boxShadow: '0 12px 30px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.05)' }}>
                                <Typography variant="h6" sx={{ fontWeight: 800, color: '#014B35', mb: 3, fontSize: '18px' }}>
                                    Table of Contents
                                </Typography>
                                <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                                    {sections.map((section) => (
                                        <Box component="li" key={section.id} sx={{ mb: 1.5 }}>
                                            <MuiLink 
                                                component="button"
                                                onClick={() => scrollToSection(section.id)}
                                                sx={{ 
                                                    textAlign: 'left',
                                                    color: activeSection === section.id ? '#7FAF0D' : '#666', 
                                                    fontWeight: activeSection === section.id ? 700 : 500,
                                                    fontSize: '15px',
                                                    textDecoration: 'none',
                                                    transition: 'all 0.2s ease',
                                                    '&:hover': {
                                                        color: '#7FAF0D'
                                                    }
                                                }}
                                            >
                                                {section.title}
                                            </MuiLink>
                                        </Box>
                                    ))}
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>

                    {/* Main Content */}
                    <Grid size={{ xs: 12, sm: 8, md: 9 }}>
                        <Paper elevation={0} sx={{ p: { xs: 4, md: 6 }, borderRadius: '20px', boxShadow: '0 12px 40px rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.05)' }}>
                            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, mb: 5, fontSize: '17px' }}>
                                This Privacy Policy explains how Global Source Expo ("we", "us", or "our") collects, uses, discloses, and protects your personal information when you use our B2B marketplace application, website, and related services. By accessing or using our services, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Policy.
                            </Typography>

                            {/* Section 1 */}
                            <Box id="section1" sx={{ mb: 6, scrollMarginTop: '100px' }}>
                                <Typography variant="h4" sx={{ fontWeight: 800, color: '#014B35', mb: 3, fontSize: '24px' }}>
                                    1. Information We Collect
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, mb: 2, fontSize: '16px' }}>
                                    We collect information that you manually provide to us. For example, we collect information when you register for an account, subscribe to a newsletter, request a quotation, fill out a form, request customer support, or otherwise communicate with us.
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, mb: 2, fontSize: '16px' }}>
                                    The types of information we may collect include:
                                </Typography>
                                <Box component="ul" sx={{ color: '#444', pl: 3, '& li': { mb: 1.5, lineHeight: 1.8, fontSize: '16px' } }}>
                                    <li><strong>Account Information:</strong> Name, email address, phone number, physical address, and company details.</li>
                                    <li><strong>Commercial Information:</strong> Products sourced, RFQ details, purchasing habits, and interactions with suppliers.</li>
                                    <li><strong>Financial Information:</strong> Payment details, billing address, and transaction history.</li>
                                </Box>
                            </Box>

                            {/* Section 2 */}
                            <Box id="section2" sx={{ mb: 6, scrollMarginTop: '100px' }}>
                                <Typography variant="h4" sx={{ fontWeight: 800, color: '#014B35', mb: 3, fontSize: '24px' }}>
                                    2. How We Use Your Information
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, mb: 2, fontSize: '16px' }}>
                                    We use the information we collect to provide, maintain, and improve our services. Specifically, we use the information to:
                                </Typography>
                                <Box component="ul" sx={{ color: '#444', pl: 3, '& li': { mb: 1.5, lineHeight: 1.8, fontSize: '16px' } }}>
                                    <li>Facilitate connections between buyers and suppliers globally.</li>
                                    <li>Process transactions and send related information, including confirmations and invoices.</li>
                                    <li>Send technical notices, updates, security alerts, and administrative messages.</li>
                                    <li>Respond to your comments, questions, and customer service requests.</li>
                                    <li>Perform analytics and measure the performance of our platform.</li>
                                </Box>
                            </Box>

                            {/* Section 3 */}
                            <Box id="section3" sx={{ mb: 6, scrollMarginTop: '100px' }}>
                                <Typography variant="h4" sx={{ fontWeight: 800, color: '#014B35', mb: 3, fontSize: '24px' }}>
                                    3. Data Sharing & Disclosure
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, fontSize: '16px' }}>
                                    We do not sell or rent your personal information to third parties. We may share your information with participating suppliers when you initiate a Request for Quotation (RFQ) or direct inquiry. Additionally, we may share data with authorized third-party service providers performing services on our behalf, such as payment processing, data analysis, email delivery, and hosting services. All such third parties are bound by strict confidentiality agreements.
                                </Typography>
                            </Box>

                            {/* Section 4 */}
                            <Box id="section4" sx={{ mb: 6, scrollMarginTop: '100px' }}>
                                <Typography variant="h4" sx={{ fontWeight: 800, color: '#014B35', mb: 3, fontSize: '24px' }}>
                                    4. Cookies and Tracking Mechanisms
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, fontSize: '16px' }}>
                                    We and our partners use cookies or similar technologies to analyze trends, administer the website, track users’ movements around the website, and to gather demographic information about our user base as a whole. You can control the use of cookies at the individual browser level, but if you choose to disable cookies, it may limit your use of certain features or functions on our website.
                                </Typography>
                            </Box>

                            {/* Section 5 */}
                            <Box id="section5" sx={{ mb: 6, scrollMarginTop: '100px' }}>
                                <Typography variant="h4" sx={{ fontWeight: 800, color: '#014B35', mb: 3, fontSize: '24px' }}>
                                    5. Data Security
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, fontSize: '16px' }}>
                                    We have implemented commercially reasonable and appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
                                </Typography>
                            </Box>

                            {/* Section 6 */}
                            <Box id="section6" sx={{ mb: 6, scrollMarginTop: '100px' }}>
                                <Typography variant="h4" sx={{ fontWeight: 800, color: '#014B35', mb: 3, fontSize: '24px' }}>
                                    6. Your Privacy Rights
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, fontSize: '16px' }}>
                                    Depending on your location, you may have certain rights regarding your personal information, including the right to request access to the personal information we hold about you, request that we update or correct your information, request that we delete your information, or object to certain processing of your data. To exercise any of these rights, please contact our data compliance team.
                                </Typography>
                            </Box>

                            {/* Section 7 */}
                            <Box id="section7" sx={{ scrollMarginTop: '100px' }}>
                                <Typography variant="h4" sx={{ fontWeight: 800, color: '#014B35', mb: 3, fontSize: '24px' }}>
                                    7. Contact Us
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, fontSize: '16px' }}>
                                    If you have questions or comments about this Privacy Policy, please contact us at:
                                </Typography>
                                <Box sx={{ backgroundColor: 'rgba(127, 175, 13, 0.05)', p: 3, borderRadius: '12px', mt: 3, borderLeft: '4px solid #7FAF0D' }}>
                                    <Typography variant="body1" sx={{ fontWeight: 600, color: '#014B35', mb: 0.5 }}>Global Source Expo Data Protection Office</Typography>
                                    <Typography variant="body2" sx={{ color: '#555', mb: 0.5 }}>123 Global Trade Avenue, Suite 400, NY 10001</Typography>
                                    <Typography variant="body2" sx={{ color: '#555' }}>Email: privacy@globalsourceexpo.com</Typography>
                                </Box>
                            </Box>
                            
                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}
