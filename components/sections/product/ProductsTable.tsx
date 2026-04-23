'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
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
  Stack,
  Tooltip,
  Typography,
  Icon,
  CircularProgress,
  Grid
} from '@mui/material';
import apiService from '@/service/apiService';
import { endpoints } from '@/config/adminEndpoints';
import AddProductModal from './AddProductModal';

interface ProductData {
  id: number;
  slug: string;
  title: string;
  price: string;
  currency: string;
  min_order: number;
  category: {
    id: number;
    name: string;
    slug: string;
  };
  supplier: {
    id: number;
    name: string;
    slug: string;
  };
  country: {
    id: number;
    name: string;
    country_flag: string;
  };
  images: Array<{
    id: number;
    image: string;
    is_preview: boolean;
  }>;
  created_at: string;
}

interface Meta {
  count: number;
  total: number;
  page: number;
  per_page: number;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data: ProductData[];
  meta: Meta;
}

export default function ProductsTable() {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState(0); // MUI table is 0-indexed
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [totalCount, setTotalCount] = useState(0);
  const [editSlug, setEditSlug] = useState<string | null>(null);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await apiService.get<ApiResponse>(endpoints.products.list, {
          page: page + 1, // API is 1-indexed
          per_page: rowsPerPage,
          search_string: searchQuery,
          sort_order: 'desc'
        });
        
        if (response?.success) {
          setProducts(response.data || []);
          setTotalCount(response.meta?.total || 0);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(() => {
      fetchProducts();
    }, 500); // Debounce search

    return () => clearTimeout(debounceTimer);
  }, [page, rowsPerPage, searchQuery]);

  const handlePageChange = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEditClick = (slug: string) => {
    setEditSlug(slug);
    setEditModalOpen(true);
  };

  const handleEditClose = () => {
    setEditModalOpen(false);
    setEditSlug(null);
  };

  const handleEditSuccess = () => {
    // Re-fetch products after successful edit
    setPage(0); // Reset to first page to trigger useEffect refetch
  };

  return (
    <>
    <Paper
      elevation={0}
      sx={{
        border: 1,
        borderColor: 'divider',
        borderRadius: 3,
        overflow: 'hidden'
      }}
    >
      {/* Toolbar */}
      <Box sx={{ p: 3, borderBottom: 1, borderColor: 'divider' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6" fontWeight="600">
              All Products
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack direction="row" spacing={2} justifyContent={{ xs: 'flex-start', md: 'flex-end' }}>
              <TextField
                placeholder="Search products..."
                size="small"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setPage(0);
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon fontSize="small">search</Icon>
                    </InputAdornment>
                  ),
                }}
                sx={{ width: 250 }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Box>

      {/* Table */}
      <TableContainer>
        <Table>
          <TableHead sx={{ bgcolor: 'grey.50' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Product Name</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Category</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Price</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Min Order</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Supplier</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Country</TableCell>
              <TableCell align="right" sx={{ fontWeight: 600 }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={7} align="center" sx={{ py: 6 }}>
                  <CircularProgress />
                </TableCell>
              </TableRow>
            ) : products.length > 0 ? (
              products.map((product) => (
                <TableRow hover key={product.id}>
                  <TableCell>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Avatar
                        variant="rounded"
                        src={product.images?.[0]?.image || ''}
                        sx={{ width: 40, height: 40, bgcolor: 'grey.100' }}
                      >
                        <Icon color="disabled">inventory_2</Icon>
                      </Avatar>
                      <Box>
                        <Typography variant="body2" fontWeight="600" sx={{ maxWidth: 250 }} noWrap title={product.title}>
                          {product.title}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          ID: {product.id}
                        </Typography>
                      </Box>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={product.category?.name || 'N/A'}
                      size="small"
                      sx={{ bgcolor: 'grey.100', width: 'fit-content', maxWidth: 150 }}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" fontWeight="500">
                      {product.currency} {product.price}
                    </Typography>
                  </TableCell>
                  <TableCell>{product.min_order}</TableCell>
                  <TableCell>
                    <Typography variant="body2">{product.supplier?.name || 'N/A'}</Typography>
                  </TableCell>
                  <TableCell>
                    {product.country && (
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <img src={product.country.country_flag} alt={product.country.name} width={20} />
                        <Typography variant="body2">{product.country.name}</Typography>
                      </Stack>
                    )}
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title="View">
                      <IconButton size="small">
                        <Icon fontSize="small">visibility</Icon>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit">
                      <IconButton size="small" onClick={() => handleEditClick(product.slug)}>
                        <Icon fontSize="small">edit</Icon>
                      </IconButton>
                    </Tooltip>
                    {/* <Tooltip title="More">
                      <IconButton size="small">
                        <Icon fontSize="small">more_vert</Icon>
                      </IconButton>
                    </Tooltip> */}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} align="center" sx={{ py: 6 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Icon sx={{ fontSize: 48, color: 'text.disabled', mb: 2 }}>inventory_2</Icon>
                    <Typography variant="h6" color="text.secondary">
                      No products found
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Try adjusting your search
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={totalCount}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </Paper>

    {/* Edit Product Modal */}
    <AddProductModal
      open={editModalOpen}
      onClose={handleEditClose}
      onSuccess={handleEditSuccess}
      editSlug={editSlug}
    />
    </>
  );
}
