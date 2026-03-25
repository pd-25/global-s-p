'use client';

import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    InputBase,
    Paper,
    IconButton
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';

const faqCategories = [
    {
        title: "For Buyers",
        faqs: [
            {
                q: "How do I create a buyer account?",
                a: "Creating an account is simple and completely free for buyers. Just click the 'Sign Up' button on the top right corner, select 'Register as Buyer', and fill in your basic contact details to start browsing our premium suppliers."
            },
            {
                q: "Are the suppliers on Global Source Expo verified?",
                a: "Yes! All verified suppliers undergo a strict vetting process. We check their business registration, financial standing, and operational history to ensure you are dealing with legitimate, high-quality businesses."
            },
            {
                q: "How does the Request for Quotation (RFQ) process work?",
                a: "Navigate to the Request Hub, fill out the detailed form specifying your product requirements, quantity, and delivery timeline. Your RFQ will be sent to matched suppliers who will respond with customized quotes directly to your inbox."
            }
        ]
    },
    {
        title: "For Suppliers",
        faqs: [
            {
                q: "What is required to list my company?",
                a: "To list your company, you will need to provide your official company name, VAT or registration number, and contact details. We highly recommend adding comprehensive details about your business sector and capacities to attract the right buyers."
            },
            {
                q: "How much does it cost to list my business?",
                a: "We offer multiple tiers ranging from a free basic listing to premium featured placements. Premium members get priority visibility, higher placement in search results, and dedicated support."
            },
            {
                q: "How are incoming buyer inquiries managed?",
                a: "All buyer inquiries are centralized within your Seller Dashboard. You will also receive an email notification for every new request, allowing you to respond instantly with pricing and documentation."
            }
        ]
    },
    {
        title: "General & Billing",
        faqs: [
            {
                q: "Can I manage different user roles within my account?",
                a: "Yes. Our platform allows master account holders to invite team members and assign them specific roles, such as 'Sales Manager' or 'Procurement Officer', limiting their access as necessary."
            },
            {
                q: "What payment methods are supported for premium memberships?",
                a: "We accept all major credit cards, PayPal, and standard wire transfers for annual premium subscription billing."
            }
        ]
    }
];

export default function FaqPage() {
    const [expanded, setExpanded] = useState<string | false>(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box sx={{ backgroundColor: '#F8FAFC', minHeight: '100vh', pb: 10 }}>
            {/* Header Banner */}
            <Box
                sx={{
                    background: 'linear-gradient(135deg, #014B35 0%, #056847 100%)',
                    pt: { xs: 8, md: 10 },
                    pb: { xs: 14, md: 16 },
                    px: 3,
                    textAlign: 'center',
                    color: 'white',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Decorative shapes */}
                <Box sx={{ position: 'absolute', top: -50, right: -50, width: 250, height: 250, borderRadius: '50%', backgroundColor: 'rgba(127, 175, 13, 0.15)', filter: 'blur(30px)' }} />
                <Box sx={{ position: 'absolute', bottom: -50, left: 100, width: 200, height: 200, borderRadius: '50%', backgroundColor: 'rgba(127, 175, 13, 0.1)', filter: 'blur(40px)' }} />

                <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography variant="h1" sx={{ fontSize: { xs: '36px', md: '52px' }, fontWeight: 800, mb: 3, textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                        How can we help you?
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '18px', opacity: 0.9, maxWidth: '600px', mx: 'auto', lineHeight: 1.6, mb: 5 }}>
                        Search our knowledge base or browse frequently asked questions below to find the answers you need.
                    </Typography>

                    {/* Search Bar */}
                    <Paper
                        elevation={0}
                        sx={{
                            p: '2px 4px',
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                            maxWidth: '600px',
                            mx: 'auto',
                            borderRadius: '30px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                            height: '60px'
                        }}
                    >
                        <IconButton sx={{ p: '15px', color: '#7FAF0D' }} aria-label="search">
                            <SearchIcon fontSize="large" />
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1, fontSize: '18px' }}
                            placeholder="Search questions, keywords..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Box sx={{ pr: 1 }}>
                            <Box
                                component="button"
                                sx={{
                                    backgroundColor: '#7FAF0D',
                                    border: 'none',
                                    color: 'white',
                                    px: 3,
                                    py: 1.5,
                                    borderRadius: '24px',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    fontSize: '16px',
                                    transition: 'background 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: '#6A920B'
                                    }
                                }}
                            >
                                Search
                            </Box>
                        </Box>
                    </Paper>
                </Container>
            </Box>

            {/* FAQ Content Section */}
            <Container maxWidth="md" sx={{ mt: { xs: -6, md: -8 }, position: 'relative', zIndex: 2, marginTop: '78px' }}>

                {faqCategories.map((category, catIndex) => {
                    // Filter based on query
                    const filteredFaqs = category.faqs.filter(faq =>
                        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        faq.a.toLowerCase().includes(searchQuery.toLowerCase())
                    );

                    // If searching and no results in this category, don't show the category header
                    if (searchQuery && filteredFaqs.length === 0) return null;

                    return (
                        <Box key={catIndex} sx={{ mb: 6 }}>
                            <Typography variant="h4" sx={{ fontWeight: 800, color: '#014B35', mb: 3, fontSize: '26px', pl: 1 }}>
                                {category.title}
                            </Typography>

                            <Box sx={{
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                                backgroundColor: 'white',
                                border: '1px solid rgba(0,0,0,0.05)'
                            }}>
                                {filteredFaqs.map((faq, index) => {
                                    const panelId = `panel-${catIndex}-${index}`;
                                    return (
                                        <Accordion
                                            key={index}
                                            expanded={expanded === panelId}
                                            onChange={handleChange(panelId)}
                                            elevation={0}
                                            disableGutters
                                            sx={{
                                                '&:before': { display: 'none' }, // removes default divider
                                                borderBottom: index !== filteredFaqs.length - 1 ? '1px solid #EAEBED' : 'none',
                                            }}
                                        >
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon sx={{ color: expanded === panelId ? '#7FAF0D' : '#999', fontSize: '28px' }} />}
                                                sx={{
                                                    p: { xs: 2, md: 3 },
                                                    '& .MuiAccordionSummary-content': { my: 0 },
                                                    '&.Mui-expanded': { minHeight: 'auto' }
                                                }}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        fontWeight: 600,
                                                        fontSize: '18px',
                                                        color: expanded === panelId ? '#7FAF0D' : '#333',
                                                        transition: 'color 0.3s ease'
                                                    }}
                                                >
                                                    {faq.q}
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails sx={{ px: { xs: 2, md: 3 }, pb: 3, pt: 0 }}>
                                                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.8, fontSize: '16px' }}>
                                                    {faq.a}
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    );
                                })}
                            </Box>
                        </Box>
                    );
                })}

                {/* Show if no search results at all */}
                {searchQuery && !faqCategories.some(cat =>
                    cat.faqs.some(faq =>
                        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        faq.a.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                ) && (
                        <Box sx={{ textAlign: 'center', py: 8 }}>
                            <Typography variant="h5" sx={{ color: '#014B35', mb: 2 }}>
                                No results found for "{searchQuery}"
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Try adjusting your search query or look at the full list of FAQs.
                            </Typography>
                        </Box>
                    )}

                {/* Still Need Help Box */}
                <Box
                    sx={{
                        mt: 8,
                        p: { xs: 3, md: 5 },
                        borderRadius: '20px',
                        backgroundColor: '#EBF4D3',
                        textAlign: 'center',
                        border: '1px solid rgba(127, 175, 13, 0.2)'
                    }}
                >
                    <Typography variant="h5" sx={{ fontWeight: 800, color: '#014B35', mb: 2 }}>
                        Still have questions?
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#444', mb: 4, maxWidth: '500px', mx: 'auto', fontSize: '16px', lineHeight: 1.6 }}>
                        Can't find the answer you're looking for? Please contact our friendly team.
                    </Typography>
                    <Box
                        component="a"
                        href="/contact"
                        sx={{
                            display: 'inline-block',
                            backgroundColor: '#7FAF0D',
                            color: 'white',
                            px: 5,
                            py: 1.5,
                            borderRadius: '12px',
                            fontWeight: 700,
                            textDecoration: 'none',
                            fontSize: '16px',
                            boxShadow: '0 8px 24px rgba(127, 175, 13, 0.3)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: '#6A920B',
                                transform: 'translateY(-2px)'
                            }
                        }}
                    >
                        Contact Us
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
