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


// --- Types ---
interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  sold: number;
  views: number;
  quotesCount: number; // Number of quotes requested for this product
  status: 'Active' | 'Draft' | 'Archived';
  imageUrl: string;
}

// --- Mock Data ---
const MOCK_PRODUCTS: Product[] = Array.from({ length: 25 }, (_, i) => ({
  id: `GSE-${1000 + i}`,
  name: `Global Source Product ${i + 1}`,
  category: i % 3 === 0 ? 'Electronics' : i % 3 === 1 ? 'Home & Garden' : 'Industrial',
  price: Math.floor(Math.random() * 500) + 50,
  stock: Math.floor(Math.random() * 100),
  sold: Math.floor(Math.random() * 500),
  views: Math.floor(Math.random() * 5000),
  quotesCount: Math.floor(Math.random() * 50),
  status: i % 5 === 0 ? 'Draft' : 'Active', // Some varied status
  imageUrl: `https://source.unsplash.com/random/100x100?product,${i}`,
}));

// Mock KPI Data
const KPI_DATA = {
  totalSold: MOCK_PRODUCTS.reduce((acc, curr) => acc + curr.sold, 0),
  top5MostVisited: [...MOCK_PRODUCTS].sort((a, b) => b.views - a.views).slice(0, 5),
  top5HighQuotes: [...MOCK_PRODUCTS].sort((a, b) => b.quotesCount - a.quotesCount).slice(0, 5),
};

export default function ProductPage() {
  const theme = useTheme();

  // State for Filters/Pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  // Filter Logic
  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  // Pagination Logic
  const paginatedProducts = filteredProducts.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handlePageChange = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const categories = ['All', ...Array.from(new Set(MOCK_PRODUCTS.map(p => p.category)))];

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
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {/* KPI 1: Total Sold Products */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card
            elevation={0}
            sx={{
              height: '100%',
              border: 1,
              borderColor: 'divider',
              borderRadius: 3,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}15, ${theme.palette.background.paper})`
            }}
          >
            <CardContent>
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: 2,
                    bgcolor: 'primary.light',
                    color: 'primary.dark'
                  }}
                >
                  <Icon>inventory_2</Icon>
                </Box>
                <Typography variant="overline" color="text.secondary" fontWeight="600">
                  Total Sold Products
                </Typography>
              </Stack>
              <Typography variant="h3" fontWeight="700" color="text.primary">
                {KPI_DATA.totalSold.toLocaleString()}
              </Typography>
              <Typography variant="body2" color="success.main" sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <Icon fontSize="small" sx={{ mr: 0.5 }}>trending_up</Icon>
                +12% from last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* KPI 2: Top 5 Visited Products */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card
            elevation={0}
            sx={{
              height: '100%',
              border: 1,
              borderColor: 'divider',
              borderRadius: 3
            }}
          >
            <CardContent>
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: 2,
                    bgcolor: 'info.light',
                    color: 'info.dark'
                  }}
                >
                  <Icon>visibility</Icon>
                </Box>
                <Typography variant="overline" color="text.secondary" fontWeight="600">
                  Top 5 Visited Products
                </Typography>
              </Stack>
              <Stack spacing={1.5}>
                {KPI_DATA.top5MostVisited.map((prod, idx) => (
                  <Stack key={prod.id} direction="row" alignItems="center" justifyContent="space-between">
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ overflow: 'hidden' }}>
                      <Typography variant="body2" color="text.secondary" sx={{ minWidth: 20 }}>
                        #{idx + 1}
                      </Typography>
                      <Typography variant="body2" fontWeight="500" noWrap sx={{ maxWidth: 160 }}>
                        {prod.name}
                      </Typography>
                    </Stack>
                    <Chip
                      label={`${prod.views.toLocaleString()} Views`}
                      size="small"
                      color="info" // Changed color to match the card theme
                      variant="outlined"
                      sx={{ height: 20, fontSize: '0.65rem' }}
                    />
                  </Stack>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* KPI 3: Top 5 Highest Quotes */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card
            elevation={0}
            sx={{
              height: '100%',
              border: 1,
              borderColor: 'divider',
              borderRadius: 3
            }}
          >
            <CardContent>
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: 2,
                    bgcolor: 'warning.light',
                    color: 'warning.dark'
                  }}
                >
                  <Icon>star</Icon>
                </Box>
                <Typography variant="overline" color="text.secondary" fontWeight="600">
                  Top 5 Quoted Products
                </Typography>
              </Stack>
              <Stack spacing={1.5}>
                {KPI_DATA.top5HighQuotes.map((prod, idx) => (
                  <Stack key={prod.id} direction="row" alignItems="center" justifyContent="space-between">
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ overflow: 'hidden' }}>
                      <Typography variant="body2" color="text.secondary" sx={{ minWidth: 20 }}>
                        #{idx + 1}
                      </Typography>
                      <Typography variant="body2" fontWeight="500" noWrap sx={{ maxWidth: 160 }}>
                        {prod.name}
                      </Typography>
                    </Stack>
                    <Chip
                      label={`${prod.quotesCount} Quotes`}
                      size="small"
                      color="warning"
                      variant="outlined"
                      sx={{ height: 20, fontSize: '0.65rem' }}
                    />
                  </Stack>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Product List Section */}
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
                  onChange={(e) => setSearchQuery(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Icon fontSize="small">search</Icon>
                      </InputAdornment>
                    ),
                  }}
                  sx={{ width: 250 }}
                />
                <FormControl size="small" sx={{ minWidth: 150 }}>
                  <InputLabel>Category</InputLabel>
                  <Select
                    value={categoryFilter}
                    label="Category"
                    onChange={(e) => setCategoryFilter(e.target.value)}
                  >
                    {categories.map((cat) => (
                      <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
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
                <TableCell sx={{ fontWeight: 600 }}>Stock</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Sold</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Views</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                <TableCell align="right" sx={{ fontWeight: 600 }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedProducts.length > 0 ? (
                paginatedProducts.map((product) => (
                  <TableRow hover key={product.id}>
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Avatar
                          variant="rounded"
                          src={product.imageUrl}
                          sx={{ width: 40, height: 40, bgcolor: 'grey.100' }}
                        >
                          <Icon color="disabled">inventory_2</Icon>
                        </Avatar>
                        <Box>
                          <Typography variant="body2" fontWeight="600">
                            {product.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {product.id}
                          </Typography>
                        </Box>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={product.category}
                        size="small"
                        sx={{ bgcolor: 'grey.100', width: 'fit-content' }}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" fontWeight="500">
                        ${product.price.toFixed(2)}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Stack spacing={0.5} sx={{ minWidth: 80 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2" color={product.stock < 10 ? 'error.main' : 'text.primary'}>
                            {product.stock}
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={Math.min((product.stock / 100) * 100, 100)}
                          color={product.stock < 10 ? 'error' : 'primary'}
                          sx={{ height: 4, borderRadius: 2 }}
                        />
                      </Stack>
                    </TableCell>
                    <TableCell>{product.sold}</TableCell>
                    <TableCell>{product.views}</TableCell>
                    <TableCell>
                      <Chip
                        label={product.status}
                        size="small"
                        color={product.status === 'Active' ? 'success' : product.status === 'Draft' ? 'warning' : 'default'}
                        variant={product.status === 'Active' ? 'filled' : 'outlined'}
                        sx={{ fontWeight: 500 }}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <Tooltip title="View">
                        <IconButton size="small">
                          <Icon fontSize="small">visibility</Icon>
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Edit">
                        <IconButton size="small">
                          <Icon fontSize="small">edit</Icon>
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="More">
                        <IconButton size="small">
                          <Icon fontSize="small">more_vert</Icon>
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} align="center" sx={{ py: 6 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <Icon sx={{ fontSize: 48, color: 'text.disabled', mb: 2 }}>inventory_2</Icon>
                      <Typography variant="h6" color="text.secondary">
                        No products found
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Try adjusting your search or filters
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
          count={filteredProducts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </Paper>
    </Container>
  );
}
