import React from 'react'
import { Container, Box, Typography, Paper } from '@mui/material'
import ContactForm from '@/components/forms/contactform/ContactForm'

export default function ProductContactSuppliePage({ params }: { params: { slug: string } }) {
  // Decode the slug to use as a placeholder product title
  const productTitleWrapper = decodeURIComponent(params.slug).replace(/-/g, ' ')
  const displayProductTitle = productTitleWrapper || "Children's and baby clothing - wholesale manufacturers"

  return (
    <Box sx={{ backgroundColor: '#F8F9FA', minHeight: '100vh', py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          {/* Left Sidebar Placeholder (matching screenshot) */}
          <Box sx={{ width: { xs: '100%', md: '300px', lg: '350px' }, flexShrink: 0 }}>
            <Paper elevation={0} sx={{ p: 3, borderRadius: '8px', border: '1px solid #EAEBED' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>TUMODAKIDS S.L.</Typography>
                <Typography variant="body2" sx={{ color: '#555', mb: 3 }}>
                   Supplier information will be displayed here.
                </Typography>
                {/* Additional sidebar details like Delivery, Founded, Employees could go here */}
            </Paper>
          </Box>
          
          {/* Main Contact Form */}
          <Box sx={{ flexGrow: 1, minWidth: 0 }}>
            <ContactForm 
                supplierName="TUMODAKIDS S.L." 
                product={{
                    title: displayProductTitle,
                    image: 'https://placehold.co/60x60/e0e0e0/555555?text=Img' // Placeholder image
                }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
