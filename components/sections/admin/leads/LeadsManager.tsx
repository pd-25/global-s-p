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

const initialLeads = [
    { id: 1, company: 'Alibaba Traders', contact: 'John Doe', email: 'john@example.com', status: 'New', date: '2023-10-25' },
    { id: 2, company: 'Global Sourcing LLC', contact: 'Jane Smith', email: 'jane@example.com', status: 'Contacted', date: '2023-10-24' },
    { id: 3, company: 'TechNova', contact: 'Sam Wilson', email: 'sam@example.com', status: 'Qualified', date: '2023-10-22' },
];

export default function LeadsManager() {
    const [leads, setLeads] = useState(initialLeads);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'New': return 'primary';
            case 'Contacted': return 'info';
            case 'Qualified': return 'success';
            default: return 'default';
        }
    };

    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
                <Box>
                    <Typography variant="h4" fontWeight={700}>Leads Management</Typography>
                    <Typography variant="body1" color="text.secondary">Track and manage potential buyers/suppliers</Typography>
                </Box>
                <Button variant="outlined" startIcon={<Icon>download</Icon>}>
                    Export CSV
                </Button>
            </Stack>

            <Paper elevation={0} sx={{ borderRadius: '12px', border: '1px solid', borderColor: 'divider', overflow: 'hidden' }}>
                <Box sx={{ p: 3, borderBottom: '1px solid', borderColor: 'divider', display: 'flex', justifyContent: 'space-between' }}>
                    <TextField
                        placeholder="Search leads..."
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
                                <TableCell sx={{ fontWeight: 600 }}>Company</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Contact Person</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Email</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Date Active</TableCell>
                                <TableCell sx={{ fontWeight: 600, textAlign: 'right' }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {leads.map((lead) => (
                                <TableRow key={lead.id}>
                                    <TableCell sx={{ fontWeight: 600 }}>{lead.company}</TableCell>
                                    <TableCell>{lead.contact}</TableCell>
                                    <TableCell sx={{ color: 'text.secondary' }}>{lead.email}</TableCell>
                                    <TableCell>
                                        <Chip
                                            label={lead.status}
                                            size="small"
                                            color={getStatusColor(lead.status)}
                                            sx={{ fontWeight: 600 }}
                                        />
                                    </TableCell>
                                    <TableCell>{lead.date}</TableCell>
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
                <MenuItem onClick={handleMenuClose}><Icon sx={{ mr: 1 }} fontSize="small">mail</Icon> Send Email</MenuItem>
                <MenuItem onClick={handleMenuClose}><Icon sx={{ mr: 1 }} fontSize="small">edit</Icon> Update Status</MenuItem>
                <MenuItem onClick={handleMenuClose} sx={{ color: 'error.main' }}><Icon sx={{ mr: 1, color: 'error.main' }} fontSize="small">delete</Icon> Delete</MenuItem>
            </Menu>
        </Box>
    );
}
