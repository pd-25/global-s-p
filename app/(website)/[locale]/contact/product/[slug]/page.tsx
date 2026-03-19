import React from 'react'
import { Container, Box, Typography, Paper, Stack, Divider, Chip, Avatar } from '@mui/material'
import ContactForm from '@/components/forms/contactform/ContactForm'
import { fetchContactFormData } from '@/lib/fetchContactFormData'
import Image from 'next/image'
import VerifiedIcon from '@mui/icons-material/Verified';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import GroupsIcon from '@mui/icons-material/Groups';
import EventIcon from '@mui/icons-material/Event';
import StoreIcon from '@mui/icons-material/Store';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default async function ProductContactSuppliePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const result = await fetchContactFormData(slug)
  const data = result?.data

  const supplier = data?.supplier
  const product = data?.product

  return (
    <Box sx={{ backgroundColor: '#F4F7F9', minHeight: '100vh', py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          {/* Left Sidebar (Supplier info) */}
          <Box sx={{ width: { xs: '100%', md: '300px', lg: '360px' }, flexShrink: 0 }}>
            <Paper
              elevation={0}
              sx={{
                p: 0,
                borderRadius: '16px',
                border: '1px solid #E1E4E8',
                overflow: 'hidden',
                backgroundColor: '#fff',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
              }}
            >
              {/* Header with Logo background */}
              <Box sx={{
                height: '100px',
                backgroundColor: '#EBF4D3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <Box sx={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 1,
                  position: 'absolute',
                  bottom: '-40px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  border: '1px solid #E1E4E8'
                }}>
                  {supplier?.logo ? (
                    <Image
                      src={supplier.logo}
                      alt={supplier.name}
                      width={60}
                      height={60}
                      style={{ objectFit: 'contain' }}
                    />
                  ) : (
                    <StoreIcon sx={{ fontSize: 40, color: '#7FAF0D' }} />
                  )}
                </Box>
              </Box>

              <Box sx={{ p: 3, pt: 7 }}>
                <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} sx={{ mb: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#002540', textAlign: 'center' }}>
                    {supplier?.name || "Supplier Name"}
                  </Typography>
                  {supplier?.is_verified && (
                    <VerifiedIcon sx={{ color: '#7FAF0D', fontSize: 22 }} />
                  )}
                </Stack>

                {supplier?.supplier_type && (
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                    <Chip
                      label={supplier.supplier_type.name}
                      size="small"
                      sx={{
                        backgroundColor: '#7FAF0D',
                        color: '#fff',
                        fontWeight: 600,
                        fontSize: '12px',
                        height: '24px'
                      }}
                    />
                  </Box>
                )}

                <Divider sx={{ mb: 3 }} />

                <Stack spacing={2.5}>
                  <InfoRow
                    icon={<LocationOnIcon sx={{ color: '#7FAF0D' }} />}
                    label="Headquarters"
                    value={`${supplier?.address}, ${supplier?.city} ${supplier?.zipcode}`}
                  />

                  <InfoRow
                    icon={<TravelExploreIcon sx={{ color: '#7FAF0D' }} />}
                    label="Delivery Area"
                    value={supplier?.delivery_area || "Not specified"}
                  />

                  <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mt: 1 }}>
                    <InfoBox
                      icon={<EventIcon sx={{ fontSize: 20 }} />}
                      label="Founded"
                      value={supplier?.founded_year?.toString() || "-"}
                    />
                    <InfoBox
                      icon={<GroupsIcon sx={{ fontSize: 20 }} />}
                      label="Employees"
                      value={supplier?.employee_strength?.toString() || "-"}
                    />
                  </Box>
                </Stack>

                <Box sx={{ mt: 4 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5, color: '#002540' }}>
                    About the Company
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#5F6D7E', lineHeight: 1.6 }}>
                    {supplier?.about || "No description available for this supplier."}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Box>

          {/* Main Contact Form */}
          <Box sx={{ flexGrow: 1, minWidth: 0 }}>
            <ContactForm
              supplierId={supplier?.id}
              supplierName={supplier?.name || "Supplier"}
              productId={product?.id}
              product={product ? {
                title: product.title,
                image: product.preview_image
              } : undefined}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <Stack direction="row" spacing={2} alignItems="flex-start">
      <Box sx={{
        width: 36,
        height: 36,
        borderRadius: '8px',
        backgroundColor: '#F8F9FA',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}>
        {icon}
      </Box>
      <Box>
        <Typography variant="caption" sx={{ color: '#888', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {label}
        </Typography>
        <Typography variant="body2" sx={{ color: '#333', fontWeight: 500 }}>
          {value}
        </Typography>
      </Box>
    </Stack>
  )
}

function InfoBox({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <Box sx={{
      p: 1.5,
      backgroundColor: '#F8F9FA',
      borderRadius: '12px',
      textAlign: 'center',
      border: '1px solid #E1E4E8'
    }}>
      <Box sx={{ color: '#7FAF0D', mb: 0.5, display: 'flex', justifyContent: 'center' }}>
        {icon}
      </Box>
      <Typography variant="caption" sx={{ color: '#888', display: 'block', mb: 0.2 }}>
        {label}
      </Typography>
      <Typography variant="body2" sx={{ fontWeight: 700, color: '#002540' }}>
        {value}
      </Typography>
    </Box>
  )
}
