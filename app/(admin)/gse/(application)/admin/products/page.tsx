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

import ProductsKPI from './ProductsKPI';
import ProductsTable from './ProductsTable';

export default function ProductPage() {
  const theme = useTheme();

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
    </Container>
  );
}
