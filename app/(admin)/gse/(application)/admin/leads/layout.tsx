import React from 'react';
import type { Metadata } from 'next';
import { Box, Container, Typography, Button, Icon } from '@mui/material';
import LeadsTabs from '@/components/sections/admin/leads/LeadsTabs';

export const metadata: Metadata = {
  title: 'Leads | Global Source Export',
  description: 'Manage leads and inquiries from potential customers.',
};

export default function LeadsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Page Header */}
      <Box
        sx={{
          mb: 4,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary' }}>
            Leads
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Manage inquiries and quote requests from potential customers.
          </Typography>
        </Box>
        <Button variant="contained" color="secondary" startIcon={<Icon>download</Icon>}>
          Export Data
        </Button>
      </Box>

      {/* Tabs + Content */}
      <Box
        sx={{
          borderRadius: '12px',
          border: '1px solid',
          borderColor: 'divider',
          overflow: 'hidden',
          bgcolor: 'background.paper',
        }}
      >
        <LeadsTabs />
        {children}
      </Box>
    </Container>
  );
}
