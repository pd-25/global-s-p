'use client';

import Quotes from '@/components/sections/admin/quotes/Quotes';
import {
    Box,
    Container,
    Grid,
    Paper,
    Typography,
    Button,
    Chip,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Stack,
    TextField,
    MenuItem,
    InputAdornment,
    Icon,
    IconButton,
    Menu,
} from '@mui/material';
import { useState } from 'react';

// Interfaces


interface Activity {
    id: number;
    user: string;
    action: string;
    target: string;
    date: string;
    status: 'Completed' | 'Pending' | 'Failed';
}

// Mock Data
const stats = [
    { label: 'Total Products', value: '1,234', color: '#7faf0d', percentage: '+12%' },
    { label: 'Active Leads', value: '56', color: '#014b35', percentage: '+5%' },
    { label: 'New Requests', value: '12', color: '#ff9800', percentage: '+2%' },
    { label: 'Total Categories', value: '24', color: '#2196f3', percentage: '0%' },
];



const recentActivity: Activity[] = [
    { id: 1, user: 'Sarah Smith', action: 'New Registration', target: 'Account', date: '1 hour ago', status: 'Completed' },
    { id: 2, user: 'Emily Brown', action: 'Updated Profile', target: 'Profile Settings', date: '1 day ago', status: 'Completed' },
    { id: 3, user: 'Admin User', action: 'System Backup', target: 'Database', date: '1 day ago', status: 'Completed' },
    { id: 4, user: 'John Doe', action: 'Failed Login', target: 'Security', date: '2 days ago', status: 'Failed' },
    { id: 5, user: 'System', action: 'Auto-Report', target: 'Weekly Stats', date: '3 days ago', status: 'Pending' },
];

// Reusable Search and Filter Component
const TableToolbar = ({ title, showViewAll = true }: { title: string, showViewAll?: boolean }) => (
    <Box sx={{ p: 3, borderBottom: '1px solid', borderColor: 'divider' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, flexWrap: 'wrap', gap: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>{title}</Typography>
            {showViewAll && (
                <Button
                    variant="text"
                    color="primary"
                    endIcon={<Icon>arrow_forward</Icon>}
                    sx={{ fontWeight: 600, textTransform: 'none' }}
                >
                    View all
                </Button>
            )}
        </Box>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
            <TextField
                placeholder="Search..."
                size="small"
                fullWidth
                sx={{ maxWidth: { xs: '100%', sm: 300 } }}
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon sx={{ color: 'text.secondary', fontSize: '1.25rem' }}>search</Icon>
                            </InputAdornment>
                        ),
                    }
                }}
            />
            <TextField
                select
                size="small"
                defaultValue="week"
                fullWidth
                sx={{ maxWidth: { xs: '100%', sm: 200 } }}
            >
                <MenuItem value="today">Today</MenuItem>
                <MenuItem value="week">This Week</MenuItem>
                <MenuItem value="month">This Month</MenuItem>
                <MenuItem value="year">This Year</MenuItem>
            </TextField>
        </Stack>
    </Box>
);

export default function DashboardAdminContent() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <Container maxWidth="xl">
            <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary' }}>
                        Dashboard
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Welcome back, Admin! Here's what's happening today.
                    </Typography>
                </Box>
                <Button variant="contained" color="secondary" startIcon={<Icon>download</Icon>}>
                    Generate Report
                </Button>
            </Box>

            {/* Stats Grid */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
                {stats.map((stat, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: 3,
                                borderRadius: '12px',
                                border: '1px solid',
                                borderColor: 'divider',
                                transition: 'transform 0.2s',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                                }
                            }}
                        >
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                                <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 600 }}>
                                    {stat.label}
                                </Typography>
                                <Box
                                    sx={{
                                        bgcolor: `${stat.color}22`,
                                        color: stat.color,
                                        py: 0.5,
                                        px: 1,
                                        borderRadius: '4px',
                                        fontSize: '0.75rem',
                                        fontWeight: 700
                                    }}
                                >
                                    {stat.percentage}
                                </Box>
                            </Box>
                            <Typography variant="h3" sx={{ fontWeight: 800, color: 'text.primary' }}>
                                {stat.value}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            {/* Recent Quotes Section*/}

            <Quotes showViewAll={true}/>

            {/* Recent Activity Section */}
            <Grid container spacing={3}>
                <Grid size={{ xs: 12 }}>
                    <Paper
                        elevation={0}
                        sx={{
                            borderRadius: '12px',
                            border: '1px solid',
                            borderColor: 'divider',
                            overflow: 'hidden'
                        }}
                    >
                        <TableToolbar title="Recent Activity" />
                        <TableContainer>
                            <Table sx={{ minWidth: 650 }} aria-label="recent activity table">
                                <TableHead sx={{ bgcolor: 'grey.50' }}>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: 600 }}>User</TableCell>
                                        <TableCell sx={{ fontWeight: 600 }}>Action</TableCell>
                                        <TableCell sx={{ fontWeight: 600 }}>Target</TableCell>
                                        <TableCell sx={{ fontWeight: 600 }}>Date</TableCell>
                                        <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {recentActivity.map((row) => (
                                        <TableRow
                                            key={row.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" sx={{ fontWeight: 500 }}>
                                                {row.user}
                                            </TableCell>
                                            <TableCell>{row.action}</TableCell>
                                            <TableCell>{row.target}</TableCell>
                                            <TableCell sx={{ color: 'text.secondary' }}>{row.date}</TableCell>
                                            <TableCell>
                                                <Chip
                                                    label={row.status}
                                                    size="small"
                                                    sx={{
                                                        fontWeight: 600,
                                                        bgcolor: row.status === 'Pending' ? 'warning.light' :
                                                            row.status === 'Completed' ? 'success.light' : 'error.light',
                                                        color: row.status === 'Pending' ? 'warning.dark' :
                                                            row.status === 'Completed' ? 'success.dark' : 'error.dark'
                                                    }}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
            </Grid>

            {/* Action Menu (Shared for now) */}
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                elevation={2}
                sx={{ '& .MuiPaper-root': { borderRadius: '8px', mt: 1 } }}
            >
                <MenuItem onClick={handleMenuClose} sx={{ gap: 1 }}>
                    <Icon fontSize="small" color="action">visibility</Icon> View Details
                </MenuItem>
                <MenuItem onClick={handleMenuClose} sx={{ gap: 1 }}>
                    <Icon fontSize="small" color="action">edit</Icon> Edit Quote
                </MenuItem>
                <MenuItem onClick={handleMenuClose} sx={{ gap: 1, color: 'error.main' }}>
                    <Icon fontSize="small" color="error">delete</Icon> Delete
                </MenuItem>
            </Menu>

        </Container>
    );
}
