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
    Button
} from '@mui/material';

const initialCategories = [
    { id: 1, name: 'Electronics', slug: 'electronics', count: 45, status: 'Active' },
    { id: 2, name: 'Packaging Materials', slug: 'packaging-materials', count: 120, status: 'Active' },
    { id: 3, name: 'Apparel', slug: 'apparel', count: 34, status: 'Inactive' },
    { id: 4, name: 'Raw Materials', slug: 'raw-materials', count: 89, status: 'Active' },
];

export default function CategoriesManager() {
    const [categories, setCategories] = useState(initialCategories);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
                <Box>
                    <Typography variant="h4" fontWeight={700}>Categories</Typography>
                    <Typography variant="body1" color="text.secondary">Manage your product categories</Typography>
                </Box>
                <Button variant="contained" color="primary" startIcon={<Icon>add</Icon>}>
                    Add Category
                </Button>
            </Stack>

            <Paper elevation={0} sx={{ borderRadius: '12px', border: '1px solid', borderColor: 'divider', overflow: 'hidden' }}>
                <Box sx={{ p: 3, borderBottom: '1px solid', borderColor: 'divider', display: 'flex', justifyContent: 'space-between' }}>
                    <TextField
                        placeholder="Search categories..."
                        size="small"
                        sx={{ width: 300 }}
                        slotProps={{
                            input: {
                                startAdornment: <InputAdornment position="start"><Icon>search</Icon></InputAdornment>,
                            }
                        }}
                    />
                </Box>
                <TableContainer>
                    <Table>
                        <TableHead sx={{ bgcolor: 'grey.50' }}>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Slug</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Products</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                                <TableCell sx={{ fontWeight: 600, textAlign: 'right' }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {categories.map((cat) => (
                                <TableRow key={cat.id}>
                                    <TableCell sx={{ fontWeight: 500 }}>{cat.name}</TableCell>
                                    <TableCell sx={{ color: 'text.secondary' }}>{cat.slug}</TableCell>
                                    <TableCell>{cat.count}</TableCell>
                                    <TableCell>
                                        <Chip
                                            label={cat.status}
                                            size="small"
                                            color={cat.status === 'Active' ? 'success' : 'default'}
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
                <MenuItem onClick={handleMenuClose}><Icon sx={{ mr: 1 }} fontSize="small">edit</Icon> Edit</MenuItem>
                <MenuItem onClick={handleMenuClose} sx={{ color: 'error.main' }}><Icon sx={{ mr: 1, color: 'error.main' }} fontSize="small">delete</Icon> Delete</MenuItem>
            </Menu>
        </Box>
    );
}
