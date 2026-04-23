'use client';

import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  InputAdornment,
  IconButton,
  Chip,
  Avatar,
  TablePagination,
  Button,
  Stack,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Tooltip,
  useTheme,
  LinearProgress,
  Grid,
  Icon,
} from '@mui/material';

import ProductsKPI from '../../../../../../components/sections/product/ProductsKPI';
import ProductsTable from '../../../../../../components/sections/product/ProductsTable';
import AddProductModal from '../../../../../../components/sections/product/AddProductModal';

export default function ProductPage() {
  const theme = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4" fontWeight="700" color="text.primary">
          Products
        </Typography>
        <Button
          variant="contained"
          startIcon={<Icon>add</Icon>}
          onClick={() => setIsModalOpen(true)}
          sx={{
            textTransform: 'none',
            borderRadius: 2,
            px: 3,
            py: 1,
            boxShadow: theme.shadows[4]
          }}
        >
          Add Product
        </Button>
      </Box>

      {/* KPI Section */}
      <ProductsKPI />

      {/* Product List Section */}
      <ProductsTable />

      {/* Add Product Modal */}
      <AddProductModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Container>
  );
}
