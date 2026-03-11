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
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Tooltip,
} from '@mui/material';
import apiService from '@/service/apiService';
import { endpoints } from '@/config/adminEndpoints';

// ─── Types matching API response ─────────────────────────────────────────────

interface Country {
    id: number;
    name: string;
    country_flag: string;
    created_at: string;
    updated_at: string;
}

interface PaginationMeta {
    count: number;
    total: number;
    page: number;
    per_page: number;
}

interface CountryListResponse {
    success: boolean;
    message: string;
    data: Country[];
    meta: PaginationMeta;
}

interface CountryCreateResponse {
    success: boolean;
    message: string;
    data: Country;
}

// ─── Add / Edit Country Dialog ───────────────────────────────────────────────

interface CountryDialogProps {
    open: boolean;
    onClose: () => void;
    onSuccess: () => void;
    editCountry: Country | null;
}

function CountryDialog({ open, onClose, onSuccess, editCountry }: CountryDialogProps) {
    const [name, setName] = useState('');
    const [flagFile, setFlagFile] = useState<File | null>(null);
    const [flagPreview, setFlagPreview] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (open) {
            if (editCountry) {
                setName(editCountry.name);
                setFlagPreview(editCountry.country_flag || null);
            } else {
                setName('');
                setFlagPreview(null);
            }
            setFlagFile(null);
            setError(null);
        }
    }, [open, editCountry]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFlagFile(file);
            setFlagPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async () => {
        if (!name.trim()) {
            setError('Country name is required');
            return;
        }

        setIsSubmitting(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append('name', name.trim());
            if (flagFile) {
                formData.append('country_flag', flagFile);
            }

            if (editCountry) {
                await apiService.putFormData<CountryCreateResponse>(
                    endpoints.countries.update(editCountry.id),
                    formData
                );
            } else {
                await apiService.postFormData<CountryCreateResponse>(
                    endpoints.countries.create,
                    formData
                );
            }

            onSuccess();
            onClose();
        } catch (err: any) {
            setError(err.message || 'Failed to save country');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
            PaperProps={{
                sx: { borderRadius: '16px', overflow: 'hidden' }
            }}
        >
            <DialogTitle
                sx={{
                    fontWeight: 700,
                    bgcolor: 'grey.50',
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                }}
            >
                <Icon sx={{ color: 'primary.main' }}>public</Icon>
                {editCountry ? 'Edit Country' : 'Add New Country'}
            </DialogTitle>
            <DialogContent sx={{ pt: '24px !important', pb: 2 }}>
                {error && (
                    <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError(null)}>
                        {error}
                    </Alert>
                )}

                <TextField
                    autoFocus
                    fullWidth
                    label="Country Name"
                    placeholder="e.g. United States"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{ mb: 3 }}
                    InputProps={{ sx: { borderRadius: '10px' } }}
                />

                <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'text.secondary' }}>
                    Country Flag (optional)
                </Typography>
                <Box
                    sx={{
                        border: '2px dashed',
                        borderColor: 'divider',
                        borderRadius: '12px',
                        p: 3,
                        textAlign: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        '&:hover': { borderColor: 'primary.main', bgcolor: 'primary.50' },
                    }}
                    onClick={() => document.getElementById('flag-upload')?.click()}
                >
                    {flagPreview ? (
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                            <Avatar
                                variant="rounded"
                                src={flagPreview}
                                sx={{ width: 80, height: 52, border: '2px solid', borderColor: 'divider' }}
                            />
                            <Typography variant="caption" color="text.secondary">
                                Click to change
                            </Typography>
                        </Box>
                    ) : (
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
                            <Icon sx={{ fontSize: '2.5rem !important', color: 'text.disabled' }}>cloud_upload</Icon>
                            <Typography variant="body2" color="text.secondary">
                                Click to upload flag image
                            </Typography>
                            <Typography variant="caption" color="text.disabled">
                                JPG, PNG, SVG up to 5MB
                            </Typography>
                        </Box>
                    )}
                </Box>
                <input
                    id="flag-upload"
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleFileChange}
                />
            </DialogContent>
            <DialogActions sx={{ px: 3, py: 2, borderTop: '1px solid', borderColor: 'divider' }}>
                <Button onClick={onClose} sx={{ textTransform: 'none', fontWeight: 600 }}>
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    startIcon={isSubmitting ? <CircularProgress size={18} color="inherit" /> : <Icon>check</Icon>}
                    sx={{ textTransform: 'none', fontWeight: 600, borderRadius: '8px', px: 3 }}
                >
                    {editCountry ? 'Update' : 'Add Country'}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

// ─── Delete Confirmation Dialog ──────────────────────────────────────────────

interface DeleteDialogProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    countryName: string;
    isDeleting: boolean;
}

function DeleteDialog({ open, onClose, onConfirm, countryName, isDeleting }: DeleteDialogProps) {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth PaperProps={{ sx: { borderRadius: '16px' } }}>
            <DialogTitle sx={{ fontWeight: 700, display: 'flex', alignItems: 'center', gap: 1 }}>
                <Icon color="error">warning</Icon>
                Delete Country
            </DialogTitle>
            <DialogContent>
                <Typography variant="body1" color="text.secondary">
                    Are you sure you want to delete <strong>{countryName}</strong>? This action cannot be undone.
                </Typography>
            </DialogContent>
            <DialogActions sx={{ px: 3, py: 2 }}>
                <Button onClick={onClose} sx={{ textTransform: 'none', fontWeight: 600 }}>
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    color="error"
                    onClick={onConfirm}
                    disabled={isDeleting}
                    startIcon={isDeleting ? <CircularProgress size={18} color="inherit" /> : <Icon>delete</Icon>}
                    sx={{ textTransform: 'none', fontWeight: 600, borderRadius: '8px' }}
                >
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
}

// ─── Main Page Component ─────────────────────────────────────────────────────

export default function CountryPage() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editCountry, setEditCountry] = useState<Country | null>(null);

    // Delete state
    const [deleteTarget, setDeleteTarget] = useState<Country | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);

    // API state
    const [countries, setCountries] = useState<Country[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Pagination state (API is 1-indexed, MUI TablePagination is 0-indexed)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [totalCount, setTotalCount] = useState(0);

    // Search state
    const [searchQuery, setSearchQuery] = useState('');
    const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(null);

    // ─── Dialog handlers ──────────────────────────────────────────────────────

    const handleOpenAddDialog = () => {
        setEditCountry(null);
        setIsDialogOpen(true);
    };

    const handleOpenEditDialog = (country: Country) => {
        setEditCountry(country);
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
        setEditCountry(null);
    };

    // ─── Fetch countries from API ─────────────────────────────────────────────

    const fetchCountries = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const params: Record<string, string | number | boolean> = {
                page: page + 1, // API is 1-indexed
                per_page: rowsPerPage,
                sort_order: 'desc',
            };

            if (searchQuery.trim()) {
                params.search_string = searchQuery.trim();
            }

            const response = await apiService.get<CountryListResponse>(
                endpoints.countries.list,
                params
            );

            if (response.success) {
                setCountries(response.data);
                setTotalCount(response.meta.total);
            } else {
                setError(response.message || 'Failed to fetch countries');
            }
        } catch (err: any) {
            setError(err.message || 'Failed to fetch countries');
        } finally {
            setIsLoading(false);
        }
    }, [page, rowsPerPage, searchQuery]);

    // Fetch on mount and when page/rowsPerPage/search changes
    useEffect(() => {
        fetchCountries();
    }, [fetchCountries]);

    // ─── Delete handler ───────────────────────────────────────────────────────

    const handleDelete = async () => {
        if (!deleteTarget) return;
        setIsDeleting(true);

        try {
            await apiService.delete(endpoints.countries.delete(deleteTarget.id));
            setDeleteTarget(null);
            fetchCountries();
        } catch (err: any) {
            setError(err.message || 'Failed to delete country');
        } finally {
            setIsDeleting(false);
        }
    };

    // ─── Pagination & Search handlers ─────────────────────────────────────────

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        // Debounce search — wait 500ms after user stops typing
        if (searchTimeout) clearTimeout(searchTimeout);

        const timeout = setTimeout(() => {
            setSearchQuery(value);
            setPage(0);
        }, 500);

        setSearchTimeout(timeout);
    };

    // ─── Helper: build full flag URL ──────────────────────────────────────────

    const getFlagUrl = (path: string) => {
        if (!path) return '';
        if (path.startsWith('http')) return path;
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
        // Remove trailing /api or similar from baseUrl if present, then append path
        return `${baseUrl.replace(/\/api\/?$/, '')}/${path}`;
    };

    // ─── Render ────────────────────────────────────────────────────────────────

    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            {/* Header Section */}
            <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                <Box>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary', mb: 0.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Icon sx={{ fontSize: '2rem !important', color: 'primary.main' }}>public</Icon>
                        Countries
                        <Chip
                            label={totalCount}
                            size="small"
                            color="primary"
                            sx={{ fontWeight: 700, fontSize: '0.85rem', height: '26px', ml: 0.5 }}
                        />
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Manage countries and their flags for supplier and product mapping.
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
                            transition: 'all 0.3s',
                            '&:focus-within': {
                                borderColor: 'primary.main',
                                boxShadow: '0 0 0 3px rgba(127, 175, 13, 0.15)',
                            }
                        }}
                    >
                        <Icon sx={{ color: 'text.secondary', fontSize: '1.2rem !important' }}>search</Icon>
                        <InputBase
                            placeholder="Search countries..."
                            onChange={handleSearchChange}
                            sx={{ ml: 1, flex: 1, fontSize: '0.9rem' }}
                        />
                    </Box>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<Icon>add</Icon>}
                        onClick={handleOpenAddDialog}
                        sx={{
                            textTransform: 'none',
                            fontWeight: 600,
                            borderRadius: '8px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        Add Country
                    </Button>
                </Stack>
            </Box>

            {/* Error Alert */}
            {error && (
                <Alert severity="error" sx={{ mb: 3, borderRadius: '12px' }} onClose={() => setError(null)}>
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
                    <Table sx={{ minWidth: 650 }} aria-label="countries table">
                        <TableHead sx={{ bgcolor: 'grey.50' }}>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 600, color: 'text.secondary', py: 2 }}>Sl No</TableCell>
                                <TableCell sx={{ fontWeight: 600, color: 'text.secondary', py: 2 }}>Flag</TableCell>
                                <TableCell sx={{ fontWeight: 600, color: 'text.secondary', py: 2 }}>Country Name</TableCell>
                                <TableCell sx={{ fontWeight: 600, color: 'text.secondary', py: 2 }}>Created At</TableCell>
                                <TableCell sx={{ fontWeight: 600, color: 'text.secondary', py: 2 }}>Updated At</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 600, color: 'text.secondary', py: 2 }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {isLoading ? (
                                <TableRow>
                                    <TableCell colSpan={6} align="center" sx={{ py: 8 }}>
                                        <CircularProgress size={40} />
                                        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                                            Loading countries...
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ) : countries.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6} align="center" sx={{ py: 8 }}>
                                        <Icon sx={{ fontSize: '3rem !important', color: 'text.disabled', mb: 1 }}>public_off</Icon>
                                        <Typography variant="body1" color="text.secondary">
                                            No countries found.
                                        </Typography>
                                        <Typography variant="body2" color="text.disabled">
                                            {searchQuery ? 'Try a different search term.' : 'Click "Add Country" to create one.'}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                countries.map((country, index) => (
                                    <TableRow
                                        key={country.id}
                                        sx={{
                                            '&:hover': { bgcolor: 'grey.50' },
                                            transition: 'background-color 0.15s ease',
                                        }}
                                    >
                                        <TableCell sx={{ color: 'text.secondary', fontWeight: 500 }}>
                                            #{String(page * rowsPerPage + index + 1).padStart(2, '0')}
                                        </TableCell>
                                        <TableCell>
                                            {country.country_flag ? (
                                                <Avatar
                                                    variant="rounded"
                                                    src={getFlagUrl(country.country_flag)}
                                                    sx={{
                                                        width: 48,
                                                        height: 32,
                                                        border: '2px solid',
                                                        borderColor: 'divider',
                                                        borderRadius: '4px',
                                                        '& img': { objectFit: 'cover' }
                                                    }}
                                                >
                                                    <Icon sx={{ fontSize: '1.2rem !important' }}>flag</Icon>
                                                </Avatar>
                                            ) : (
                                                <Avatar
                                                    variant="rounded"
                                                    sx={{
                                                        width: 48,
                                                        height: 32,
                                                        bgcolor: 'grey.100',
                                                        color: 'text.disabled',
                                                        borderRadius: '4px',
                                                        fontSize: '0.75rem',
                                                        fontWeight: 700,
                                                    }}
                                                >
                                                    <Icon sx={{ fontSize: '1.2rem !important', color: 'text.disabled' }}>flag</Icon>
                                                </Avatar>
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                                                {country.name}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.8rem' }}>
                                                {new Date(country.created_at).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric',
                                                })}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.8rem' }}>
                                                {new Date(country.updated_at).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric',
                                                })}
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="right">
                                            <Stack direction="row" spacing={1} justifyContent="flex-end">
                                                <Tooltip title="Edit" arrow>
                                                    <IconButton
                                                        size="small"
                                                        onClick={() => handleOpenEditDialog(country)}
                                                        sx={{
                                                            color: 'primary.main',
                                                            bgcolor: 'primary.50',
                                                            '&:hover': { bgcolor: 'primary.100' },
                                                        }}
                                                    >
                                                        <Icon fontSize="small">edit</Icon>
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete" arrow>
                                                    <IconButton
                                                        size="small"
                                                        onClick={() => setDeleteTarget(country)}
                                                        sx={{
                                                            color: 'error.main',
                                                            bgcolor: 'error.50',
                                                            '&:hover': { bgcolor: 'error.100' },
                                                        }}
                                                    >
                                                        <Icon fontSize="small">delete</Icon>
                                                    </IconButton>
                                                </Tooltip>
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

            {/* Add / Edit Country Dialog */}
            <CountryDialog
                open={isDialogOpen}
                onClose={handleCloseDialog}
                onSuccess={fetchCountries}
                editCountry={editCountry}
            />

            {/* Delete Confirmation Dialog */}
            <DeleteDialog
                open={Boolean(deleteTarget)}
                onClose={() => setDeleteTarget(null)}
                onConfirm={handleDelete}
                countryName={deleteTarget?.name || ''}
                isDeleting={isDeleting}
            />
        </Container>
    );
}
