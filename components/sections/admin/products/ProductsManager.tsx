'use client';

import React, { useState } from 'react';
import {
    Box,
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Chip,
    IconButton,
    Icon,
    Menu,
    MenuItem,
    Stack,
    TextField,
    InputAdornment,
    Button,
    Avatar
} from '@mui/material';

const initialProducts = [
    { id: 1, name: 'Kraft Paper Bags', category: 'Packaging', price: '$0.50 - $1.20', stock: 5000, status: 'Active' },
    { id: 2, name: 'Cotton T-Shirts', category: 'Apparel', price: '$5.00 - $8.00', stock: 1200, status: 'Active' },
    { id: 3, name: 'Organic Fertilizers', category: 'Agriculture', price: '$20.00 / bag', stock: 0, status: 'Out of Stock' },
    { id: 4, name: 'Smartphone Screens', category: 'Electronics', price: '$15.00 - $25.00', stock: 350, status: 'Active' },
];

export default function ProductsManager() {
    const [products, setProducts] = useState(initialProducts);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
                <Box>
                    <Typography variant="h4" fontWeight={700}>Products Directory</Typography>
                    <Typography variant="body1" color="text.secondary">Manage global source inventory</Typography>
                </Box>
                <Button variant="contained" color="primary" startIcon={<Icon>add</Icon>}>
                    Add Product
                </Button>
            </Stack>

            <Paper elevation={0} sx={{ borderRadius: '12px', border: '1px solid', borderColor: 'divider', overflow: 'hidden' }}>
                <Box sx={{ p: 3, borderBottom: '1px solid', borderColor: 'divider', display: 'flex', justifyContent: 'space-between' }}>
                    <TextField
                        placeholder="Search products..."
                        size="small"
                        sx={{ width: 300 }}
                        slotProps={{
                            input: {
                                startAdornment: <InputAdornment position="start"><Icon>search</Icon></InputAdornment>,
                            }
                        }}
                    />
                    <Button variant="outlined" startIcon={<Icon>filter_list</Icon>}>Filter</Button>
                </Box>
                <TableContainer>
                    <Table>
                        <TableHead sx={{ bgcolor: 'grey.50' }}>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 600 }}>Product Name</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Category</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Price Range</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Stock Level</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                                <TableCell sx={{ fontWeight: 600, textAlign: 'right' }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <Avatar variant="rounded" sx={{ width: 40, height: 40, bgcolor: 'grey.200' }}>
                                                <Icon color="action">inventory_2</Icon>
                                            </Avatar>
                                            <Typography fontWeight={500}>{row.name}</Typography>
                                        </Stack>
                                    </TableCell>
                                    <TableCell><Typography color="text.secondary">{row.category}</Typography></TableCell>
                                    <TableCell><Typography fontWeight={600}>{row.price}</Typography></TableCell>
                                    <TableCell>{row.stock}</TableCell>
                                    <TableCell>
                                        <Chip
                                            label={row.status}
                                            size="small"
                                            color={row.status === 'Active' ? 'success' : 'error'}
                                            sx={{ fontWeight: 600 }}
                                        />
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton size="small" onClick={handleMenuClick}>
                                            <Icon>more_vert</Icon>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                <MenuItem onClick={handleMenuClose}><Icon sx={{ mr: 1 }} fontSize="small">visibility</Icon> View</MenuItem>
                <MenuItem onClick={handleMenuClose}><Icon sx={{ mr: 1 }} fontSize="small">edit</Icon> Edit</MenuItem>
                <MenuItem onClick={handleMenuClose} sx={{ color: 'error.main' }}><Icon sx={{ mr: 1, color: 'error.main' }} fontSize="small">delete</Icon> Delete</MenuItem>
            </Menu>
        </Box>
    );
}
