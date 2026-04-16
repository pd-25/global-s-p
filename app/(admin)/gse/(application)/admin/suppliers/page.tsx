'use client';

import React, { useState, useEffect, useCallback } from 'react';
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
  IconButton,
  Avatar,
  Stack,
  InputBase,
  Icon,
  TablePagination,
  CircularProgress,
  Alert,
  Chip,
} from '@mui/material';
import apiService from '@/service/apiService';
import { endpoints } from '@/config/adminEndpoints';
import AddSuppliersModal from '@/components/ui/modal/AddSuppliersModal';

// ─── Types matching API response (aligned with admin list pattern) ───────────

interface Supplier {
  id: number;
  name: string;
  slug: string;
  logo?: string | null;
  email?: string | null;
  city?: string | null;
  created_at?: string;
  is_verified?: boolean;
  supplier_type?: { id?: number; name: string } | null;
}

interface PaginationMeta {
  count: number;
  total: number;
  page: number;
  per_page: number;
}

interface SupplierListResponse {
  success: boolean;
  message: string;
  data: Supplier[];
  meta: PaginationMeta;
}

function getLogoUrl(path: string) {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
  return `${baseUrl.replace(/\/api\/?$/, '')}/${path.replace(/^\//, '')}`;
}

export default function SupplierPage() {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [editSupplierKey, setEditSupplierKey] = useState<string | null>(null);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalCount, setTotalCount] = useState(0);

  const [searchQuery, setSearchQuery] = useState('');
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(null);

  const fetchSuppliers = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const params: Record<string, string | number | boolean> = {
        page: page + 1,
        per_page: rowsPerPage,
        order_by_column: 'id',
        sort_order: 'desc',
      };

      if (searchQuery.trim()) {
        params.search_string = searchQuery.trim();
      }

      const response = await apiService.get<SupplierListResponse>(
        endpoints.suppliers.list,
        params
      );

      if (response.success) {
        setSuppliers(response.data);
        setTotalCount(response.meta.total);
      } else {
        setError(response.message || 'Failed to fetch suppliers');
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to fetch suppliers';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSuppliers();
  }, [page, rowsPerPage, searchQuery]);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (searchTimeout) clearTimeout(searchTimeout);

    const timeout = setTimeout(() => {
      setSearchQuery(value);
      setPage(0);
    }, 500);

    setSearchTimeout(timeout);
  };

  const formatDate = (value?: string) => {
    if (!value) return '—';
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return '—';
    return d.toLocaleDateString();
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
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
          <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary', mb: 0.5 }}>
            Suppliers({totalCount})
          </Typography>
          <Typography variant="body2" color="text.secondary">
            View and manage supplier accounts linked to the platform.
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
              width: { xs: '100%', sm: '250px' },
            }}
          >
            <Icon sx={{ color: 'text.secondary', fontSize: '1.2rem !important' }}>search</Icon>
            <InputBase
              placeholder="Search suppliers..."
              onChange={handleSearchChange}
              sx={{ ml: 1, flex: 1, fontSize: '0.9rem' }}
            />
          </Box>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Icon>add</Icon>}
            onClick={() => {
              setEditSupplierKey(null);
              setOpenAddModal(true);
            }}
            sx={{
              textTransform: 'none',
              fontWeight: 600,
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          >
            Add Supplier
          </Button>
        </Stack>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      <Paper
        elevation={0}
        sx={{
          borderRadius: '16px',
          border: '1px solid',
          borderColor: 'divider',
          overflow: 'hidden',
          boxShadow: '0 4px 24px rgba(0,0,0,0.02)',
        }}
      >
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-label="suppliers table">
            <TableHead sx={{ bgcolor: 'grey.50' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 600, color: 'text.secondary', py: 2 }}>Sl No</TableCell>
                <TableCell sx={{ fontWeight: 600, color: 'text.secondary', py: 2 }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 600, color: 'text.secondary', py: 2 }}>Logo</TableCell>
                <TableCell sx={{ fontWeight: 600, color: 'text.secondary', py: 2 }}>Type</TableCell>
                <TableCell sx={{ fontWeight: 600, color: 'text.secondary', py: 2 }}>City</TableCell>
                <TableCell sx={{ fontWeight: 600, color: 'text.secondary', py: 2 }}>Email</TableCell>
                <TableCell sx={{ fontWeight: 600, color: 'text.secondary', py: 2 }}>Verified</TableCell>
                <TableCell sx={{ fontWeight: 600, color: 'text.secondary', py: 2 }}>Created At</TableCell>
                <TableCell align="right" sx={{ fontWeight: 600, color: 'text.secondary', py: 2 }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={9} align="center" sx={{ py: 6 }}>
                    <CircularProgress size={40} />
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                      Loading suppliers...
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : suppliers.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={9} align="center" sx={{ py: 6 }}>
                    <Icon sx={{ fontSize: '3rem !important', color: 'text.disabled', mb: 1 }}>
                      storefront
                    </Icon>
                    <Typography variant="body1" color="text.secondary">
                      No suppliers found.
                    </Typography>
                    <Typography variant="body2" color="text.disabled">
                      {searchQuery ? 'Try a different search term.' : 'Suppliers will appear here once added.'}
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : (
                suppliers.map((row, index) => (
                  <TableRow key={row.id} sx={{ '&:hover': { bgcolor: 'grey.50' } }}>
                    <TableCell sx={{ color: 'text.secondary', fontWeight: 500 }}>
                      #{String(page * rowsPerPage + index + 1).padStart(2, '0')}
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                        {row.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" display="block">
                        {row.slug}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      {row.logo?.trim() ? (
                        <Avatar
                          variant="rounded"
                          src={getLogoUrl(row.logo)}
                          alt={row.name}
                          sx={{ width: 40, height: 40 }}
                        />
                      ) : (
                        <Avatar
                          variant="rounded"
                          sx={{
                            width: 40,
                            height: 40,
                            bgcolor: 'primary.light',
                            color: 'primary.main',
                            fontSize: '1rem',
                            fontWeight: 700,
                          }}
                        >
                          {row.name.charAt(0)}
                        </Avatar>
                      )}
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" color="text.secondary">
                        {row.supplier_type?.name ?? '—'}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" color="text.secondary">
                        {row.city ?? '—'}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.8rem' }}>
                        {row.email ?? '—'}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      {row.is_verified === true ? (
                        <Chip label="Verified" size="small" color="success" variant="outlined" />
                      ) : row.is_verified === false ? (
                        <Chip label="Unverified" size="small" variant="outlined" />
                      ) : (
                        <Typography variant="body2" color="text.secondary">
                          —
                        </Typography>
                      )}
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.8rem' }}>
                        {formatDate(row.created_at)}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Stack direction="row" spacing={1} justifyContent="flex-end">
                        <IconButton
                          size="small"
                          onClick={() => {
                            setEditSupplierKey(row.slug || String(row.id));
                            setOpenAddModal(true);
                          }}
                          sx={{
                            color: 'primary.main',
                            bgcolor: 'primary.50',
                            '&:hover': { bgcolor: 'primary.100' },
                          }}
                        >
                          <Icon fontSize="small">edit</Icon>
                        </IconButton>
                        <IconButton
                          size="small"
                          sx={{ color: 'error.main', bgcolor: 'error.50', '&:hover': { bgcolor: 'error.100' } }}
                        >
                          <Icon fontSize="small">delete</Icon>
                        </IconButton>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={totalCount}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <AddSuppliersModal
        open={openAddModal}
        editSupplierKey={editSupplierKey}
        onClose={() => {
          setOpenAddModal(false);
          setEditSupplierKey(null);
        }}
        onSuccess={fetchSuppliers}
      />
    </Container>
  );
}
