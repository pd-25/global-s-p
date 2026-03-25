'use client';

import React, { useState } from 'react';
import { Box, Container, Typography, Paper, Grid, Link as MuiLink } from '@mui/material';

export default function ReturnAndCancellationPolicyPage() {
    const lastUpdated = "October 24, 2026";
    const [activeSection, setActiveSection] = useState('section1');

    const sections = [
        { id: 'section1', title: '1. Order Cancellation' },
        { id: 'section2', title: '2. Return Eligibility' },
        { id: 'section3', title: '3. Damaged or Defective Goods' },
        { id: 'section4', title: '4. Refund Process' },
        { id: 'section5', title: '5. Non-returnable Items' },
        { id: 'section6', title: '6. Shipping Costs' },
        { id: 'section7', title: '7. How to Initiate a Request' },
    ];

    const scrollToSection = (id: string) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Account for any fixed headers
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
                        Return & Cancellation Policy
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '18px', opacity: 0.9, maxWidth: '600px', lineHeight: 1.6 }}>
                        We are committed to providing a seamless procurement experience. Please review our policies regarding order cancellations, returns, and refunds carefully.
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
                                This Return and Cancellation Policy outlines the procedures and guidelines for canceling orders and returning goods purchased through the Global Source Expo B2B Marketplace. As a business-to-business platform, our policies reflect industry-standard commercial procurement regulations.
                            </Typography>

                            {/* Section 1 */}
                            <Box id="section1" sx={{ mb: 6, scrollMarginTop: '100px' }}>
                                <Typography variant="h4" sx={{ fontWeight: 800, color: '#014B35', mb: 3, fontSize: '24px' }}>
                                    1. Order Cancellation
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, mb: 2, fontSize: '16px' }}>
                                    Buyers may cancel an order placed through the marketplace under the following conditions:
                                </Typography>
                                <Box component="ul" sx={{ color: '#444', pl: 3, '& li': { mb: 1.5, lineHeight: 1.8, fontSize: '16px' } }}>
                                    <li><strong>Before Shipment:</strong> Orders can be canceled without penalty if the request is submitted and approved before the supplier has prepared the items for freight/shipment.</li>
                                    <li><strong>Custom Orders:</strong> Orders involving customized or bespoke manufacturing cannot be canceled once production has commenced, regardless of shipment status.</li>
                                    <li><strong>Cancellation Fees:</strong> If an order is canceled after the supplier has begun processing the fulfillment but prior to shipping, a restocking fee of up to 15% of the total order value may apply.</li>
                                </Box>
                            </Box>

                            {/* Section 2 */}
                            <Box id="section2" sx={{ mb: 6, scrollMarginTop: '100px' }}>
                                <Typography variant="h4" sx={{ fontWeight: 800, color: '#014B35', mb: 3, fontSize: '24px' }}>
                                    2. Return Eligibility
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, mb: 2, fontSize: '16px' }}>
                                    Due to the B2B nature of our platform, return requests are generally only accepted in instances involving critical errors or defects. Goods are eligible for a return if they meet one of the following criteria:
                                </Typography>
                                <Box component="ul" sx={{ color: '#444', pl: 3, '& li': { mb: 1.5, lineHeight: 1.8, fontSize: '16px' } }}>
                                    <li>The goods received significantly deviate from the specifications outlined in the agreed-upon Purchase Order.</li>
                                    <li>The goods were damaged during transit (pending an investigation involving the freight forwarder).</li>
                                    <li>An incorrect quantity of goods was delivered, in which case a partial return or compensatory shipment may be arranged.</li>
                                </Box>
                                <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, mt: 2, fontSize: '16px' }}>
                                    All return requests must be filed within <strong>14 days</strong> of receiving the delivery.
                                </Typography>
                            </Box>

                            {/* Section 3 */}
                            <Box id="section3" sx={{ mb: 6, scrollMarginTop: '100px' }}>
                                <Typography variant="h4" sx={{ fontWeight: 800, color: '#014B35', mb: 3, fontSize: '24px' }}>
                                    3. Damaged or Defective Goods
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, fontSize: '16px' }}>
                                    If you receive defective or damaged merchandise, you must notify the supplier immediately and upload photographic evidence through the Global Source Expo Dispute Center. Failure to maintain the original packaging or immediately alert the supplier may void the eligibility for a replacement or refund.
                                </Typography>
                            </Box>

                            {/* Section 4 */}
                            <Box id="section4" sx={{ mb: 6, scrollMarginTop: '100px' }}>
                                <Typography variant="h4" sx={{ fontWeight: 800, color: '#014B35', mb: 3, fontSize: '24px' }}>
                                    4. Refund Process
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, fontSize: '16px' }}>
                                    If a return request is approved by the supplier or via our arbitration mechanism, the approved refund amount will be credited back to the original method of payment within 10-15 business days. In some B2B cases, the refund may be issued as credit for future purchases with the specific supplier, subject to agreement by both parties.
                                </Typography>
                            </Box>

                            {/* Section 5 */}
                            <Box id="section5" sx={{ mb: 6, scrollMarginTop: '100px' }}>
                                <Typography variant="h4" sx={{ fontWeight: 800, color: '#014B35', mb: 3, fontSize: '24px' }}>
                                    5. Non-returnable Items
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, mb: 2, fontSize: '16px' }}>
                                    Certain categories of commercial goods are strictly non-returnable unless demonstrably defective upon arrival:
                                </Typography>
                                <Box component="ul" sx={{ color: '#444', pl: 3, '& li': { mb: 1.5, lineHeight: 1.8, fontSize: '16px' } }}>
                                    <li>Perishable goods or goods with a limited shelf-life.</li>
                                    <li>Raw materials that have been removed from their original factory seals.</li>
                                    <li>Software, digital products, and licensing keys.</li>
                                    <li>White-labeled goods manufactured specifically to the buyer's requested branding.</li>
                                </Box>
                            </Box>

                            {/* Section 6 */}
                            <Box id="section6" sx={{ mb: 6, scrollMarginTop: '100px' }}>
                                <Typography variant="h4" sx={{ fontWeight: 800, color: '#014B35', mb: 3, fontSize: '24px' }}>
                                    6. Shipping Costs
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, fontSize: '16px' }}>
                                    The buyer is generally responsible for covering the return shipping and freight costs. Under circumstances where the return is necessitated entirely by a supplier error (e.g., shipping the wrong product SKU), the supplier will arrange and take responsibility for the return transport costs.
                                </Typography>
                            </Box>

                            {/* Section 7 */}
                            <Box id="section7" sx={{ scrollMarginTop: '100px' }}>
                                <Typography variant="h4" sx={{ fontWeight: 800, color: '#014B35', mb: 3, fontSize: '24px' }}>
                                    7. How to Initiate a Request
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, fontSize: '16px' }}>
                                    To initiate a cancellation or return, please access your Order Dashboard and select "Initiate Dispute/Return" next to the relevant Purchase Order.
                                </Typography>
                                <Box sx={{ backgroundColor: 'rgba(127, 175, 13, 0.05)', p: 3, borderRadius: '12px', mt: 3, borderLeft: '4px solid #7FAF0D' }}>
                                    <Typography variant="body1" sx={{ fontWeight: 600, color: '#014B35', mb: 0.5 }}>Need manual assistance?</Typography>
                                    <Typography variant="body2" sx={{ color: '#555', mb: 0.5 }}>Our Global Support Team is available to mediate complex returns.</Typography>
                                    <Typography variant="body2" sx={{ color: '#555' }}>Email: returns@globalsourceexpo.com</Typography>
                                </Box>
                            </Box>
                            
                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}
