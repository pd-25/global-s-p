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
  Collapse,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  TablePagination,
  CircularProgress,
  Alert,
} from '@mui/material';
import AddCategoryModal from '@/components/ui/modal/AddCategoryModal';
import apiService from '@/service/apiService';
import { endpoints } from '@/config/adminEndpoints';

// ─── Types matching API response ─────────────────────────────────────────────

interface SubCategory {
  id: number;
  slug: string;
  created_at: string;
  name: string;
  image: string;
  parent_id: number | null;
  total_products: number;
  subcategories: SubCategory[];
}

interface Category {
  id: number;
  slug: string;
  created_at: string;
  name: string;
  image: string;
  parent_id: number | null;
  total_products: number;
  subcategories: SubCategory[];
}

interface PaginationMeta {
  count: number;
  total: number;
  page: number;
  per_page: number;
}

interface CategoryListResponse {
  success: boolean;
  message: string;
  data: Category[];
  meta: PaginationMeta;
}

// ─── Row Component ───────────────────────────────────────────────────────────

function Row({ row, index, open, onToggle, onAddSubcategory, onEdit }: { row: Category, index: number, open: boolean, onToggle: () => void, onAddSubcategory: (parent: { id: number; name: string }) => void, onEdit: (slug: string) => void }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={onToggle}
          >
            {open ? <Icon>keyboard_arrow_up</Icon> : <Icon>keyboard_arrow_down</Icon>}
          </IconButton>
        </TableCell>
        <TableCell sx={{ color: 'text.secondary', fontWeight: 500 }}>
          #{String(index + 1).padStart(2, '0')}
        </TableCell>
        <TableCell>
          <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
            {row.name}
          </Typography>
        </TableCell>
        <TableCell>
          {row.image && row.image.startsWith('http') ? (
            <Avatar
              variant="rounded"
              src={row.image}
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
                fontWeight: 700
              }}
            >
              {row.name.charAt(0)}
            </Avatar>
          )}
        </TableCell>
        <TableCell>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            {row.total_products} <Box component="span" sx={{ color: 'text.secondary', fontSize: '0.8rem' }}>items</Box>
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.8rem' }}>
            {new Date(row.created_at).toLocaleDateString()}
          </Typography>
        </TableCell>
        <TableCell align="right">
          <Stack direction="row" spacing={1} justifyContent="flex-end">
            <IconButton
              size="small"
              onClick={() => onEdit(row.slug)}
              sx={{ color: 'primary.main', bgcolor: 'primary.50', '&:hover': { bgcolor: 'primary.100' } }}
            >
              <Icon fontSize="small">edit</Icon>
            </IconButton>
            <IconButton size="small" sx={{ color: 'error.main', bgcolor: 'error.50', '&:hover': { bgcolor: 'error.100' } }}>
              <Icon fontSize="small">delete</Icon>
            </IconButton>
            <IconButton
              size="small"
              onClick={handleMenuClick}
              sx={{ color: 'text.secondary', bgcolor: 'action.hover', '&:hover': { bgcolor: 'action.selected' } }}
            >
              <Icon fontSize="small">more_vert</Icon>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleMenuClose}
              onClick={handleMenuClose}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
            >
              {/* <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                  <Icon fontSize="small">visibility</Icon>
                </ListItemIcon>
                <ListItemText>View Products</ListItemText>
              </MenuItem> */}
              <MenuItem onClick={() => { handleMenuClose(); onAddSubcategory({ id: row.id, name: row.name }); }}>
                <ListItemIcon>
                  <Icon fontSize="small">playlist_add</Icon>
                </ListItemIcon>
                <ListItemText>Add Subcategory</ListItemText>
              </MenuItem>
              {/* <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                  <Icon fontSize="small">info</Icon>
                </ListItemIcon>
                <ListItemText>Details</ListItemText>
              </MenuItem> */}
            </Menu>
          </Stack>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 2, bgcolor: 'grey.200', borderRadius: 2, p: 2 }}>
              <Typography variant="h6" gutterBottom component="div" sx={{ fontSize: '0.9rem', fontWeight: 600, color: 'text.secondary', mb: 2 }}>
                Subcategories
              </Typography>
              <Table size="small" aria-label="subcategories">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Image</TableCell>
                    <TableCell>Total Products</TableCell>
                    <TableCell>Created At</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.subcategories.length > 0 ? (
                    row.subcategories.map((subRow) => (
                      <TableRow key={subRow.id}>
                        <TableCell component="th" scope="row">
                          {subRow.name}
                        </TableCell>
                        <TableCell>
                          {subRow.image && subRow.image.startsWith('http') ? (
                            <Avatar variant="rounded" src={subRow.image} sx={{ width: 30, height: 30 }} />
                          ) : (
                            <Avatar
                              variant="rounded"
                              sx={{ width: 30, height: 30, bgcolor: 'grey.400', fontSize: '0.7rem' }}
                            >
                              {subRow.name.charAt(0)}
                            </Avatar>
                          )}
                        </TableCell>
                        <TableCell>{subRow.total_products}</TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{ fontSize: '0.8rem', color: 'text.secondary' }}>
                            {new Date(subRow.created_at).toLocaleDateString()}
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Stack direction="row" spacing={1} justifyContent="flex-end">
                            <IconButton
                              size="small"
                              onClick={() => onEdit(subRow.slug)}
                              sx={{ color: 'primary.main', '&:hover': { bgcolor: 'primary.50' } }}
                            >
                              <Icon fontSize="small" sx={{ fontSize: '1.2rem' }}>edit</Icon>
                            </IconButton>
                            <IconButton size="small" sx={{ color: 'error.main', '&:hover': { bgcolor: 'error.50' } }}>
                              <Icon fontSize="small" sx={{ fontSize: '1.2rem' }}>delete</Icon>
                            </IconButton>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} align="center">
                        <Typography variant="body2" color="text.secondary" fontStyle="italic">
                          No subcategories found.
                        </Typography>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// ─── Main Page Component ─────────────────────────────────────────────────────

export default function CategoryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [parentCategory, setParentCategory] = useState<{ id: number; name: string } | null>(null);
  const [editSlug, setEditSlug] = useState<string | null>(null);
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  // API state
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Pagination state (API is 1-indexed, MUI TablePagination is 0-indexed)
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalCount, setTotalCount] = useState(0);

  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(null);

  // ─── Modal handlers ────────────────────────────────────────────────────────

  const handleOpenAddModal = () => {
    setParentCategory(null);
    setEditSlug(null);
    setIsModalOpen(true);
  };

  const handleOpenAddSubcategoryModal = (parent: { id: number; name: string }) => {
    setParentCategory(parent);
    setEditSlug(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (slug: string) => {
    setEditSlug(slug);
    setParentCategory(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setParentCategory(null);
    setEditSlug(null);
  };

  // ─── Fetch categories from API ─────────────────────────────────────────────

  const fetchCategories = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const params: Record<string, string | number | boolean> = {
        page: page + 1, // API is 1-indexed
        per_page: rowsPerPage,
        order_by_column: 'id',
        sort_order: 'desc',
      };

      if (searchQuery.trim()) {
        params.search_string = searchQuery.trim();
      }

      const response = await apiService.get<CategoryListResponse>(
        endpoints.categories.list,
        params
      );

      if (response.success) {
        setCategories(response.data);
        setTotalCount(response.meta.total);
      } else {
        setError(response.message || 'Failed to fetch categories');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to fetch categories');
    } finally {
      setIsLoading(false);
    }
  }, [page, rowsPerPage, searchQuery]);

  // Fetch on mount and when page/rowsPerPage/search changes
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  // ─── Handlers ──────────────────────────────────────────────────────────────

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    // Debounce search — wait 500ms after user stops typing
    if (searchTimeout) clearTimeout(searchTimeout);

    const timeout = setTimeout(() => {
      setSearchQuery(value);
      setPage(0); // Reset to first page on new search
    }, 500);

    setSearchTimeout(timeout);
  };

  const handleToggleRow = (id: number) => {
    setExpandedRows(prev =>
      prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
    );
  };

  const handleToggleAll = () => {
    if (expandedRows.length === categories.length) {
      setExpandedRows([]);
    } else {
      setExpandedRows(categories.map(c => c.id));
    }
  };

  const isAllExpanded = categories.length > 0 && expandedRows.length === categories.length;

  // ─── Render ────────────────────────────────────────────────────────────────

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header Section */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary', mb: 0.5 }}>
            Categories({totalCount})
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
              onChange={handleSearchChange}
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

      {/* Error Alert */}
      {error && (
        <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

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
                <TableCell>
                  <IconButton size="small" onClick={handleToggleAll} disabled={categories.length === 0}>
                    <Icon>{isAllExpanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</Icon>
                  </IconButton>
                </TableCell>
                <TableCell sx={{ fontWeight: 600, color: 'text.secondary', py: 2 }}>Sl No</TableCell>
                <TableCell sx={{ fontWeight: 600, color: 'text.secondary', py: 2 }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 600, color: 'text.secondary', py: 2 }}>Image</TableCell>
                <TableCell sx={{ fontWeight: 600, color: 'text.secondary', py: 2 }}>Total Products</TableCell>
                <TableCell sx={{ fontWeight: 600, color: 'text.secondary', py: 2 }}>Created At</TableCell>
                <TableCell align="right" sx={{ fontWeight: 600, color: 'text.secondary', py: 2 }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={7} align="center" sx={{ py: 6 }}>
                    <CircularProgress size={40} />
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                      Loading categories...
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : categories.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} align="center" sx={{ py: 6 }}>
                    <Icon sx={{ fontSize: '3rem !important', color: 'text.disabled', mb: 1 }}>category</Icon>
                    <Typography variant="body1" color="text.secondary">
                      No categories found.
                    </Typography>
                    <Typography variant="body2" color="text.disabled">
                      {searchQuery ? 'Try a different search term.' : 'Click "Add Category" to create one.'}
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : (
                categories.map((category, index) => (
                  <Row
                    key={category.id}
                    row={category}
                    index={page * rowsPerPage + index}
                    open={expandedRows.includes(category.id)}
                    onToggle={() => handleToggleRow(category.id)}
                    onAddSubcategory={handleOpenAddSubcategoryModal}
                    onEdit={handleOpenEditModal}
                  />
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

      <AddCategoryModal
        open={isModalOpen}
        onClose={handleCloseModal}
        onSuccess={fetchCategories}
        parentCategory={parentCategory}
        editSlug={editSlug}
      />
    </Container>
  );
}
