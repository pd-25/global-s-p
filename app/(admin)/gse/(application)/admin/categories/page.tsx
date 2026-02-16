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
  Icon,
  Collapse,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import type { Metadata } from "next";
import AddCategoryModal from '@/components/ui/modal/AddCategoryModal';

// export const metadata: Metadata = {
//   title: "Categories | Global Source Export",
//   description: "Manage your product categories and inventory organization.",
// };

// Types
interface SubCategory {
  id: number;
  name: string;
  totalProducts: number;
  status: 'Active' | 'Inactive' | 'Review';
}

interface Category {
  id: number;
  name: string;
  image: string;
  totalProducts: number;
  status: 'Active' | 'Inactive' | 'Review';
  subCategories: SubCategory[];
}

// Mock Data for Categories
const categories: Category[] = [
  {
    id: 1,
    name: 'Organic Spices',
    image: '',
    totalProducts: 120,
    status: 'Active',
    subCategories: [
      { id: 101, name: 'Whole Spices', totalProducts: 60, status: 'Active' },
      { id: 102, name: 'Powdered Spices', totalProducts: 40, status: 'Active' },
      { id: 103, name: 'Herbs', totalProducts: 20, status: 'Review' },
    ]
  },
  {
    id: 2,
    name: 'Textiles & Fabrics',
    image: '',
    totalProducts: 85,
    status: 'Active',
    subCategories: [
      { id: 201, name: 'Cotton', totalProducts: 40, status: 'Active' },
      { id: 202, name: 'Silk', totalProducts: 25, status: 'Inactive' },
      { id: 203, name: 'Wool', totalProducts: 20, status: 'Active' },
    ]
  },
  {
    id: 3,
    name: 'Handmade Pottery',
    image: '',
    totalProducts: 42,
    status: 'Review',
    subCategories: [
      { id: 301, name: 'Vases', totalProducts: 20, status: 'Review' },
      { id: 302, name: 'Bowls', totalProducts: 15, status: 'Review' },
      { id: 303, name: 'Plates', totalProducts: 7, status: 'Active' },
    ]
  },
  {
    id: 4,
    name: 'Agricultural Tools',
    image: '',
    totalProducts: 15,
    status: 'Inactive',
    subCategories: []
  },
  {
    id: 5,
    name: 'Home Decor',
    image: '',
    totalProducts: 230,
    status: 'Active',
    subCategories: [
      { id: 501, name: 'Lighting', totalProducts: 100, status: 'Active' },
      { id: 502, name: 'Wall Art', totalProducts: 80, status: 'Active' },
      { id: 503, name: 'Furniture', totalProducts: 50, status: 'Review' },
    ]
  },
  {
    id: 6,
    name: 'Jewelry',
    image: '',
    totalProducts: 64,
    status: 'Active',
    subCategories: [
      { id: 601, name: 'Necklaces', totalProducts: 30, status: 'Active' },
      { id: 602, name: 'Earrings', totalProducts: 20, status: 'Active' },
      { id: 603, name: 'Bracelets', totalProducts: 14, status: 'Inactive' },
    ]
  },
];

function Row({ row, index, open, onToggle }: { row: Category, index: number, open: boolean, onToggle: () => void }) {
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
        </TableCell>
        <TableCell>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            {row.totalProducts} <Box component="span" sx={{ color: 'text.secondary', fontSize: '0.8rem' }}>items</Box>
          </Typography>
        </TableCell>
        <TableCell>
          <Chip
            label={row.status}
            size="small"
            sx={{
              fontWeight: 600,
              fontSize: '0.75rem',
              height: '24px',
              bgcolor: row.status === 'Active' ? 'success.light' :
                row.status === 'Inactive' ? 'error.light' : 'warning.light',
              color: row.status === 'Active' ? 'success.dark' :
                row.status === 'Inactive' ? 'error.dark' : 'warning.dark',
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
              <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                  <Icon fontSize="small">visibility</Icon>
                </ListItemIcon>
                <ListItemText>View Products</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                  <Icon fontSize="small">playlist_add</Icon>
                </ListItemIcon>
                <ListItemText>Add Subcategory</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                  <Icon fontSize="small">info</Icon>
                </ListItemIcon>
                <ListItemText>Details</ListItemText>
              </MenuItem>
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
                    <TableCell>Total Products</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.subCategories.length > 0 ? (
                    row.subCategories.map((subRow) => (
                      <TableRow key={subRow.id}>
                        <TableCell component="th" scope="row">
                          {subRow.name}
                        </TableCell>
                        <TableCell>{subRow.totalProducts}</TableCell>
                        <TableCell>
                          <Chip
                            label={subRow.status}
                            size="small"
                            sx={{
                              fontSize: '0.7rem',
                              height: '20px',
                              bgcolor: subRow.status === 'Active' ? 'success.light' :
                                subRow.status === 'Inactive' ? 'error.light' : 'warning.light',
                              color: subRow.status === 'Active' ? 'success.dark' :
                                subRow.status === 'Inactive' ? 'error.dark' : 'warning.dark',
                            }}
                          />
                        </TableCell>
                        <TableCell align="right">
                          <Stack direction="row" spacing={1} justifyContent="flex-end">
                            <IconButton size="small" sx={{ color: 'primary.main', '&:hover': { bgcolor: 'primary.50' } }}>
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
                      <TableCell colSpan={4} align="center">
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

export default function CategoryPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const handleOpenAddModal = () => setIsAddModalOpen(true);
  const handleCloseAddModal = () => setIsAddModalOpen(false);

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
                <TableCell>
                  <IconButton size="small" onClick={handleToggleAll}>
                    <Icon>{isAllExpanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</Icon>
                  </IconButton>
                </TableCell>
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
                <Row
                  key={category.id}
                  row={category}
                  index={index}
                  open={expandedRows.includes(category.id)}
                  onToggle={() => handleToggleRow(category.id)}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <AddCategoryModal open={isAddModalOpen} onClose={handleCloseAddModal} />
    </Container>
  );
}
