'use client';

import {
  Avatar,
  Box,
  Chip,
  CircularProgress,
  Grid,
  Icon,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { useState, useEffect, useCallback } from 'react';
import apiService from '@/service/apiService';
import { endpoints } from '@/config/adminEndpoints';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
interface LeadItem {
  id: number;
  enquiry_number: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  status: string;
  product_name: string | null;
  product_slug: string | null;
  product_image: string | null;
  created_at: string;
  updated_at: string;
}

interface Meta {
  count: number;
  total: number;
  page: number;
  per_page: number;
}

interface LeadsApiResponse {
  success: boolean;
  message: string;
  data: LeadItem[];
  meta: Meta;
}

interface LeadsTableProps {
  leadType: string;
}

/* ------------------------------------------------------------------ */
/*  Date-range helper – maps dropdown value to a start_date string     */
/* ------------------------------------------------------------------ */
function getStartDate(range: string): string | undefined {
  const now = new Date();
  switch (range) {
    case 'today': {
      return now.toISOString().split('T')[0];
    }
    case 'week': {
      const d = new Date(now);
      d.setDate(d.getDate() - 7);
      return d.toISOString().split('T')[0];
    }
    case 'month': {
      const d = new Date(now);
      d.setMonth(d.getMonth() - 1);
      return d.toISOString().split('T')[0];
    }
    case 'year': {
      const d = new Date(now);
      d.setFullYear(d.getFullYear() - 1);
      return d.toISOString().split('T')[0];
    }
    default:
      return undefined; // 'all' – no date filter
  }
}

/* ------------------------------------------------------------------ */
/*  Status chip colour map                                             */
/* ------------------------------------------------------------------ */
const statusStyle = (status: string) => {
  const map: Record<string, { bgcolor: string; color: string }> = {
    'Pending': { bgcolor: '#fff7ed', color: '#c2410c' },
    'In Progress': { bgcolor: '#e0f2fe', color: '#0369a1' },
    'Replied': { bgcolor: '#dbeafe', color: '#1d4ed8' },
    'Closed': { bgcolor: '#dcfce7', color: '#15803d' },
    'On Hold': { bgcolor: '#fef3c7', color: '#92400e' },
    'Not Interested': { bgcolor: '#fce7f3', color: '#9d174d' },
    'Not Relevant': { bgcolor: '#f1f5f9', color: '#475569' },
    'Spam': { bgcolor: '#fee2e2', color: '#b91c1c' },
    'Other': { bgcolor: '#ede9fe', color: '#6d28d9' },
  };
  return map[status] ?? { bgcolor: 'grey.100', color: 'text.primary' };
};

/* ------------------------------------------------------------------ */
/*  Format date                                                        */
/* ------------------------------------------------------------------ */
function formatDate(isoString: string): string {
  const date = new Date(isoString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function LeadsTable({ leadType }: LeadsTableProps) {
  const [leads, setLeads] = useState<LeadItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0); // MUI is 0-indexed
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [dateRange, setDateRange] = useState('all');
  const [totalCount, setTotalCount] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const isInquiry = leadType.toLowerCase() === 'inquiries';
  const title = isInquiry ? 'All Inquiries' : 'All Quotes';

  /* ── Fetch leads from API ──────────────────────────────────────── */
  const fetchLeads = useCallback(async () => {
    setLoading(true);
    try {
      const params: Record<string, string | number | boolean> = {
        page: page + 1, // API is 1-indexed
        per_page: rowsPerPage,
        sort_order: 'desc',
      };

      if (searchQuery.trim()) {
        params.search_string = searchQuery.trim();
      }

      const startDate = getStartDate(dateRange);
      if (startDate) {
        params.start_date = startDate;
      }

      const response = await apiService.get<LeadsApiResponse>(
        endpoints.leads.list(leadType),
        params,
      );

      if (response?.success) {
        setLeads(response.data || []);
        setTotalCount(response.meta?.total || 0);
      }
    } catch (error) {
      console.error('Error fetching leads:', error);
      setLeads([]);
      setTotalCount(0);
    } finally {
      setLoading(false);
    }
  }, [leadType, page, rowsPerPage, searchQuery, dateRange]);

  /* ── Debounced fetch ───────────────────────────────────────────── */
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchLeads();
    }, 400);
    return () => clearTimeout(debounceTimer);
  }, [fetchLeads]);

  /* ── Reset page when tab / search / filter changes ─────────────── */
  useEffect(() => {
    setPage(0);
  }, [leadType]);

  /* ── Handlers ──────────────────────────────────────────────────── */
  const handlePageChange = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  /* ── Render ────────────────────────────────────────────────────── */
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          borderRadius: '0 0 12px 12px',
          borderTop: 'none',
          overflow: 'hidden',
        }}
      >
        {/* ── Toolbar ─────────────────────────────────────────── */}
        <Box sx={{ p: 3, borderBottom: 1, borderColor: 'divider' }}>
          <Grid container spacing={2} alignItems="center">
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack direction="row" spacing={1.5} alignItems="baseline">
                <Typography variant="h6" fontWeight={700}>
                  {title}
                </Typography>
                <Chip
                  label={totalCount}
                  size="small"
                  sx={{
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    height: 22,
                    bgcolor: isInquiry ? '#e0f2fe' : '#ede9fe',
                    color: isInquiry ? '#0369a1' : '#6d28d9',
                  }}
                />
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent={{ xs: 'flex-start', md: 'flex-end' }}
              >
                <TextField
                  placeholder="Search by name, email, ref ID…"
                  size="small"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setPage(0);
                  }}
                  sx={{ width: { xs: '100%', sm: 300 } }}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <Icon sx={{ color: 'text.secondary', fontSize: '1.25rem' }}>
                            search
                          </Icon>
                        </InputAdornment>
                      ),
                    },
                  }}
                />
                <TextField
                  select
                  size="small"
                  value={dateRange}
                  onChange={(e) => {
                    setDateRange(e.target.value);
                    setPage(0);
                  }}
                  sx={{ width: { xs: '100%', sm: 180 } }}
                >
                  <MenuItem value="all">All Time</MenuItem>
                  <MenuItem value="today">Today</MenuItem>
                  <MenuItem value="week">Last 7 Days</MenuItem>
                  <MenuItem value="month">Last 30 Days</MenuItem>
                  <MenuItem value="year">This Year</MenuItem>
                </TextField>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        {/* ── Table ───────────────────────────────────────────── */}
        <TableContainer>
          <Table sx={{ minWidth: 800 }} aria-label={`${leadType} table`}>
            <TableHead sx={{ bgcolor: 'grey.50' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>
                  {isInquiry ? 'Inquiry ID' : 'Quote ID'}
                </TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Contact</TableCell>
                {isInquiry ? <TableCell sx={{ fontWeight: 600 }}>Product</TableCell> : null}
                {/* <TableCell sx={{ fontWeight: 600 }}>Product</TableCell> */}
                <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Date</TableCell>
                <TableCell align="right" sx={{ fontWeight: 600 }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={6} align="center" sx={{ py: 8 }}>
                    <CircularProgress size={36} />
                  </TableCell>
                </TableRow>
              ) : leads.length > 0 ? (
                leads.map((row) => {
                  const sChip = statusStyle(row.status);
                  return (
                    <TableRow
                      key={row.id}
                      hover
                      sx={{
                        transition: 'background-color 0.15s ease',
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      {/* Enquiry Number */}
                      <TableCell sx={{ fontWeight: 500, color: 'primary.main' }}>
                        {row.enquiry_number}
                      </TableCell>

                      {/* Contact Info */}
                      <TableCell>
                        <Box>
                          <Typography variant="body2" fontWeight={500} noWrap sx={{ maxWidth: 200 }}>
                            {row.name || '—'}
                          </Typography>
                          {row.email && (
                            <Typography variant="caption" color="text.secondary" noWrap display="block">
                              {row.email}
                            </Typography>
                          )}
                          {row.phone && (
                            <Typography variant="caption" color="text.secondary" noWrap display="block">
                              {row.phone}
                            </Typography>
                          )}
                        </Box>
                      </TableCell>

                      {/* Product */}
                      {isInquiry && (
                        <TableCell>
                          {row.product_name ? (
                            <Stack direction="row" spacing={1.5} alignItems="center">
                              <Avatar
                                variant="rounded"
                                src={row.product_image || ''}
                                sx={{ width: 36, height: 36, bgcolor: 'grey.100' }}
                              >
                                <Icon color="disabled" sx={{ fontSize: 18 }}>
                                  inventory_2
                                </Icon>
                              </Avatar>
                              <Typography
                                variant="body2"
                                fontWeight={500}
                                noWrap
                                sx={{ maxWidth: 180 }}
                                title={row.product_name}
                              >
                                {row.product_name}
                              </Typography>
                            </Stack>
                          ) : (
                            <Typography variant="body2" color="text.secondary">
                              —
                            </Typography>
                          )}
                        </TableCell>
                      )}

                      {/* Status */}
                      <TableCell>
                        <Chip
                          label={row.status}
                          size="small"
                          sx={{
                            fontWeight: 600,
                            bgcolor: sChip.bgcolor,
                            color: sChip.color,
                          }}
                        />
                      </TableCell>

                      {/* Date */}
                      <TableCell>
                        <Typography variant="body2" color="text.secondary" noWrap>
                          {formatDate(row.created_at)}
                        </Typography>
                      </TableCell>

                      {/* Actions */}
                      <TableCell align="right">
                        <Tooltip title="View Details">
                          <IconButton size="small">
                            <Icon fontSize="small">visibility</Icon>
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="More">
                          <IconButton size="small" onClick={handleMenuClick}>
                            <Icon fontSize="small">more_vert</Icon>
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={6} align="center" sx={{ py: 8 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <Icon sx={{ fontSize: 48, color: 'text.disabled', mb: 2 }}>
                        {isInquiry ? 'contact_mail' : 'request_quote'}
                      </Icon>
                      <Typography variant="h6" color="text.secondary">
                        No {isInquiry ? 'inquiries' : 'quotes'} found
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Try adjusting your search or date filter
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* ── Pagination ──────────────────────────────────────── */}
        <TablePagination
          rowsPerPageOptions={[5, 10, 20, 50]}
          component="div"
          count={totalCount}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </Paper>

      {/* ── Action Menu ──────────────────────────────────────────── */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        elevation={2}
        sx={{ '& .MuiPaper-root': { borderRadius: '8px', mt: 1 } }}
      >
        <MenuItem onClick={handleMenuClose} sx={{ gap: 1 }}>
          <Icon fontSize="small" color="action">visibility</Icon> View Details
        </MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ gap: 1 }}>
          <Icon fontSize="small" color="action">edit</Icon> Edit
        </MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ gap: 1, color: 'error.main' }}>
          <Icon fontSize="small" color="error">delete</Icon> Delete
        </MenuItem>
      </Menu>
    </>
  );
}
