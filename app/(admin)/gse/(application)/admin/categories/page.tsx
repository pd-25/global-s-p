'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Avatar,
  Stack,
  InputBase,
  Icon
} from '@mui/material';
import type { Metadata } from "next";
import AddCategoryModal from '@/components/ui/modal/AddCategoryModal';

// export const metadata: Metadata = {
//   title: "Categories | Global Source Export",
//   description: "Manage your product categories and inventory organization.",
// };

// Mock Data for Categories
const categories = [
  { id: 1, name: 'Organic Spices', image: '', totalProducts: 120, status: 'Active' },
  { id: 2, name: 'Textiles & Fabrics', image: '', totalProducts: 85, status: 'Active' },
  { id: 3, name: 'Handmade Pottery', image: '', totalProducts: 42, status: 'Review' },
  { id: 4, name: 'Agricultural Tools', image: '', totalProducts: 15, status: 'Inactive' },
  { id: 5, name: 'Home Decor', image: '', totalProducts: 230, status: 'Active' },
  { id: 6, name: 'Jewelry', image: '', totalProducts: 64, status: 'Active' },
];

export default function CategoryPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleOpenAddModal = () => setIsAddModalOpen(true);
  const handleCloseAddModal = () => setIsAddModalOpen(false);

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header Section */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary', mb: 0.5 }}>
            Categories
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Manage your product categories and inventory organization.
          </Typography>
        </Box>
        <Stack direction="row" spacing={2} alignItems="center">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              bgcolor: 'background.paper',
              px: 2,
              py: 1,
              borderRadius: '8px',
              border: '1px solid',
              borderColor: 'divider',
              width: { xs: '100%', sm: '250px' }
            }}
          >
            <Icon sx={{ color: 'text.secondary', fontSize: '1.2rem !important' }}>search</Icon>
            <InputBase
              placeholder="Search categories..."
              sx={{ ml: 1, flex: 1, fontSize: '0.9rem' }}
            />
          </Box>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Icon>add</Icon>}
            onClick={handleOpenAddModal}
            sx={{
              textTransform: 'none',
              fontWeight: 600,
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          >
            Add Category
          </Button>
        </Stack>
      </Box>

      {/* Table Section */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: '16px',
          border: '1px solid',
          borderColor: 'divider',
          overflow: 'hidden',
          boxShadow: '0 4px 24px rgba(0,0,0,0.02)'
        }}
      >
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-label="categories table">
            <TableHead sx={{ bgcolor: 'grey.50' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 600, color: 'text.secondary', py: 2 }}>Sl No</TableCell>
                <TableCell sx={{ fontWeight: 600, color: 'text.secondary', py: 2 }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 600, color: 'text.secondary', py: 2 }}>Image</TableCell>
                <TableCell sx={{ fontWeight: 600, color: 'text.secondary', py: 2 }}>Total Products</TableCell>
                <TableCell sx={{ fontWeight: 600, color: 'text.secondary', py: 2 }}>Status</TableCell>
                <TableCell align="right" sx={{ fontWeight: 600, color: 'text.secondary', py: 2 }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((category, index) => (
                <TableRow
                  key={category.id}
                  hover
                  sx={{ '&:last-child td, &:last-child th': { border: 0 }, transition: 'background-color 0.2s' }}
                >
                  <TableCell sx={{ color: 'text.secondary', fontWeight: 500 }}>
                    #{String(index + 1).padStart(2, '0')}
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                      {category.name}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Avatar
                      variant="rounded"
                      sx={{
                        width: 40,
                        height: 40,
                        bgcolor: 'primary.light',
                        color: 'primary.main',
                        fontSize: '1rem',
                        fontWeight: 700
                      }}
                    >
                      {category.name.charAt(0)}
                    </Avatar>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {category.totalProducts} <Box component="span" sx={{ color: 'text.secondary', fontSize: '0.8rem' }}>items</Box>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={category.status}
                      size="small"
                      sx={{
                        fontWeight: 600,
                        fontSize: '0.75rem',
                        height: '24px',
                        bgcolor: category.status === 'Active' ? 'success.light' :
                          category.status === 'Inactive' ? 'error.light' : 'warning.light',
                        color: category.status === 'Active' ? 'success.dark' :
                          category.status === 'Inactive' ? 'error.dark' : 'warning.dark',
                      }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row" spacing={1} justifyContent="flex-end">
                      <IconButton size="small" sx={{ color: 'primary.main', bgcolor: 'primary.50', '&:hover': { bgcolor: 'primary.100' } }}>
                        <Icon fontSize="small">edit</Icon>
                      </IconButton>
                      <IconButton size="small" sx={{ color: 'error.main', bgcolor: 'error.50', '&:hover': { bgcolor: 'error.100' } }}>
                        <Icon fontSize="small">delete</Icon>
                      </IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <AddCategoryModal open={isAddModalOpen} onClose={handleCloseAddModal} />
    </Container>
  );
}
