'use client';

import Modal from './Modal';
import {
    Box,
    TextField,
    Button,
    Stack,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
    Icon,
    Paper
} from '@mui/material';
import { useState } from 'react';

interface AddCategoryModalProps {
    open: boolean;
    onClose: () => void;
}

export default function AddCategoryModal({ open, onClose }: AddCategoryModalProps) {
    const [status, setStatus] = useState('Active');

    // Drag and drop handler placeholders
    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
    };

    return (
        <Modal open={open} onClose={onClose} title="Add New Category" maxWidth="lg">
            <Box component="form" noValidate autoComplete="off" sx={{ mt: 1 }}>
                <Stack spacing={3}>
                    {/* Name Field */}
                    <TextField
                        fullWidth
                        label="Category Name"
                        placeholder="e.g. Organic Spices"
                        variant="outlined"
                        required
                        slotProps={{ inputLabel: { shrink: true } }}
                    />

                    {/* Description Field */}
                    <TextField
                        fullWidth
                        label="Description"
                        placeholder="Brief description of the category..."
                        multiline
                        rows={3}
                        variant="outlined"
                        slotProps={{ inputLabel: { shrink: true } }}
                    />

                    {/* Image Upload Area */}
                    <Box>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>Category Image</Typography>
                        <Paper
                            variant="outlined"
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                            sx={{
                                border: '2px dashed',
                                borderColor: 'divider',
                                borderRadius: '8px',
                                p: 4,
                                textAlign: 'center',
                                bgcolor: 'grey.50',
                                cursor: 'pointer',
                                transition: 'border-color 0.2s, background-color 0.2s',
                                '&:hover': {
                                    borderColor: 'primary.main',
                                    bgcolor: 'primary.50'
                                }
                            }}
                        >
                            <Stack spacing={1} alignItems="center">
                                <Icon sx={{ fontSize: '2.5rem', color: 'text.secondary' }}>cloud_upload</Icon>
                                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                    Click to upload or drag and drop
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    SVG, PNG, JPG or GIF (max. 2MB)
                                </Typography>
                            </Stack>
                        </Paper>
                    </Box>

                    {/* Status Field */}
                    <FormControl fullWidth>
                        <InputLabel id="status-select-label">Status</InputLabel>
                        <Select
                            labelId="status-select-label"
                            value={status}
                            label="Status"
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <MenuItem value="Active">Active</MenuItem>
                            <MenuItem value="Inactive">Inactive</MenuItem>
                            <MenuItem value="Review">Review</MenuItem>
                        </Select>
                    </FormControl>

                    {/* Action Buttons */}
                    <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ pt: 2 }}>
                        <Button
                            variant="outlined"
                            onClick={onClose}
                            sx={{ borderRadius: '8px', textTransform: 'none', px: 3 }}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            onClick={onClose} // For now just close, eventually separate handler
                            sx={{ borderRadius: '8px', textTransform: 'none', px: 4 }}
                        >
                            Add Category
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </Modal>
    );
}
