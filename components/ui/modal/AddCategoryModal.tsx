'use client';

import Modal from './Modal';
import {
    Box,
    TextField,
    Button,
    Stack,
    Typography,
    Icon,
    Paper,
    Alert,
    CircularProgress,
} from '@mui/material';
import { useState, useRef, useEffect } from 'react';
import apiService from '@/service/apiService';
import { ApiError } from '@/service/apiService';
import { endpoints } from '@/config/adminEndpoints';

// ─── Types ───────────────────────────────────────────────────────────────────

interface CategoryDetailResponse {
    success: boolean;
    message: string;
    data: {
        id: number;
        slug: string;
        created_at: string;
        name: string;
        description: string;
        image: string;
        parent_id: number | null;
        total_products: number;
        subcategories: any[];
    };
    meta: any;
}

interface AddCategoryModalProps {
    open: boolean;
    onClose: () => void;
    onSuccess?: () => void;
    parentCategory?: { id: number; name: string } | null;
    editSlug?: string | null;
}

export default function AddCategoryModal({
    open,
    onClose,
    onSuccess,
    parentCategory = null,
    editSlug = null,
}: AddCategoryModalProps) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [nameError, setNameError] = useState<string | null>(null);
    const [descriptionError, setDescriptionError] = useState<string | null>(null);
    const [editParentId, setEditParentId] = useState<number | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const isEditMode = !!editSlug;

    // Reset form and fetch data when modal opens
    useEffect(() => {
        if (open) {
            // Reset all fields
            setName('');
            setDescription('');
            setImageFile(null);
            setImagePreview(null);
            setError(null);
            setNameError(null);
            setDescriptionError(null);
            setIsSubmitting(false);
            setEditParentId(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }

            // Fetch category data if editing
            if (editSlug) {
                setIsFetching(true);
                apiService.get<CategoryDetailResponse>(endpoints.categories.getById(editSlug))
                    .then((response) => {
                        if (response.success && response.data) {
                            setName(response.data.name || '');
                            setDescription(response.data.description || '');
                            setEditParentId(response.data.parent_id);
                            // Show existing image as preview
                            if (response.data.image && response.data.image.startsWith('http')) {
                                setImagePreview(response.data.image);
                            }
                        }
                    })
                    .catch((err: any) => {
                        setError(err.message || 'Failed to fetch category details.');
                    })
                    .finally(() => {
                        setIsFetching(false);
                    });
            }
        }
    }, [open, editSlug]);

    // ─── Image handling ──────────────────────────────────────────────────────────

    const handleFileSelect = (file: File) => {
        // Validate file type
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml', 'image/webp'];
        if (!allowedTypes.includes(file.type)) {
            setError('Invalid file type. Please upload JPG, PNG, GIF, SVG, or WebP.');
            return;
        }

        // Validate file size (max 2MB)
        if (file.size > 2 * 1024 * 1024) {
            setError('File is too large. Maximum size is 2MB.');
            return;
        }

        setError(null);
        setImageFile(file);

        // Create preview
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
    };

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) handleFileSelect(file);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const file = e.dataTransfer.files?.[0];
        if (file) handleFileSelect(file);
    };

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleRemoveImage = () => {
        setImageFile(null);
        setImagePreview(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    // ─── Form submission ─────────────────────────────────────────────────────────

    const validate = (): boolean => {
        let isValid = true;

        if (!name.trim()) {
            setNameError('Category name is required');
            isValid = false;
        } else {
            setNameError(null);
        }

        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!validate()) return;

        setIsSubmitting(true);

        try {
            const formData = new FormData();
            formData.append('name', name.trim());
            formData.append('description', description.trim());

            if (imageFile) {
                formData.append('image', imageFile);
            }

            if (isEditMode) {
                // ─── UPDATE (PUT) ────────────────────────────────────────────
                await apiService.putFormData(
                    endpoints.categories.update(editSlug!),
                    formData
                );
            } else {
                // ─── CREATE (POST) ───────────────────────────────────────────
                if (parentCategory) {
                    formData.append('parent_id', String(parentCategory.id));
                }
                await apiService.postFormData(endpoints.categories.create, formData);
            }

            // Success — close modal and refresh list
            onClose();
            onSuccess?.();
        } catch (err: any) {
            if (err instanceof ApiError && Object.keys(err.fieldErrors).length > 0) {
                // Map field-level errors to the corresponding form fields
                if (err.fieldErrors.name) setNameError(err.fieldErrors.name);
                if (err.fieldErrors.description) setDescriptionError(err.fieldErrors.description);

                // Show any remaining field errors (not name/description) as a general error
                const unmappedErrors = Object.entries(err.fieldErrors)
                    .filter(([key]) => key !== 'name' && key !== 'description')
                    .map(([key, msg]) => `${key}: ${msg}`);

                if (unmappedErrors.length > 0) {
                    setError(unmappedErrors.join('\n'));
                } else {
                    setError(err.message !== 'Validation error' ? err.message : null);
                }
            } else {
                const action = isEditMode ? 'update' : 'create';
                setError(err.message || `Failed to ${action} category. Please try again.`);
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    // ─── Dynamic labels ──────────────────────────────────────────────────────────

    const isSubcategory = !!parentCategory || (isEditMode && editParentId !== null);

    const modalTitle = isEditMode
        ? `Edit ${isSubcategory ? 'Subcategory' : 'Category'}`
        : isSubcategory
            ? `Add Subcategory to "${parentCategory?.name}"`
            : 'Add New Category';

    const submitLabel = isEditMode
        ? `Update ${isSubcategory ? 'Subcategory' : 'Category'}`
        : isSubcategory
            ? 'Add Subcategory'
            : 'Add Category';

    return (
        <Modal open={open} onClose={onClose} title={modalTitle} maxWidth="sm">
            {isFetching ? (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 6 }}>
                    <CircularProgress size={40} />
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                        Loading category details...
                    </Typography>
                </Box>
            ) : (
                <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <Stack spacing={3}>
                        {/* Error Alert */}
                        {error && (
                            <Alert severity="error" onClose={() => setError(null)}>
                                {error}
                            </Alert>
                        )}

                        {/* Parent Category Info (shown for subcategory creation) */}
                        {!isEditMode && isSubcategory && (
                            <Alert severity="info" icon={<Icon>subdirectory_arrow_right</Icon>}>
                                Creating a subcategory under <strong>{parentCategory?.name}</strong>
                            </Alert>
                        )}

                        {/* Name Field */}
                        <TextField
                            fullWidth
                            label={isSubcategory ? 'Subcategory Name' : 'Category Name'}
                            placeholder={isSubcategory ? 'e.g. Powdered Spices' : 'e.g. Organic Spices'}
                            variant="outlined"
                            required
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                if (nameError) setNameError(null);
                            }}
                            error={!!nameError}
                            helperText={nameError}
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
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value);
                                if (descriptionError) setDescriptionError(null);
                            }}
                            error={!!descriptionError}
                            helperText={descriptionError}
                            slotProps={{ inputLabel: { shrink: true } }}
                        />

                        {/* Image Upload Area */}
                        <Box>
                            <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                                Category Image {isEditMode && <Typography component="span" variant="caption" color="text.secondary">(optional — leave empty to keep current)</Typography>}
                            </Typography>

                            {/* Hidden file input */}
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/jpeg,image/png,image/gif,image/svg+xml,image/webp"
                                style={{ display: 'none' }}
                                onChange={handleFileInputChange}
                            />

                            {imagePreview ? (
                                /* Image Preview */
                                <Paper
                                    variant="outlined"
                                    sx={{
                                        border: '2px solid',
                                        borderColor: 'primary.main',
                                        borderRadius: '8px',
                                        p: 2,
                                        textAlign: 'center',
                                        bgcolor: 'grey.50',
                                        position: 'relative',
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={imagePreview}
                                        alt="Category preview"
                                        sx={{
                                            maxWidth: '100%',
                                            maxHeight: 200,
                                            borderRadius: '4px',
                                            objectFit: 'contain',
                                        }}
                                    />
                                    <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 2 }}>
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            onClick={handleUploadClick}
                                            startIcon={<Icon>swap_horiz</Icon>}
                                            sx={{ textTransform: 'none', borderRadius: '6px' }}
                                        >
                                            Change
                                        </Button>
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            color="error"
                                            onClick={handleRemoveImage}
                                            startIcon={<Icon>delete</Icon>}
                                            sx={{ textTransform: 'none', borderRadius: '6px' }}
                                        >
                                            Remove
                                        </Button>
                                    </Stack>
                                    {imageFile && (
                                        <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                                            {imageFile.name} ({(imageFile.size / 1024).toFixed(1)} KB)
                                        </Typography>
                                    )}
                                </Paper>
                            ) : (
                                /* Upload Dropzone */
                                <Paper
                                    variant="outlined"
                                    onClick={handleUploadClick}
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
                                            JPG, PNG, GIF, SVG or WebP (max. 2MB)
                                        </Typography>
                                    </Stack>
                                </Paper>
                            )}
                        </Box>

                        {/* Action Buttons */}
                        <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ pt: 2 }}>
                            <Button
                                variant="outlined"
                                onClick={onClose}
                                disabled={isSubmitting}
                                sx={{ borderRadius: '8px', textTransform: 'none', px: 3 }}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                disabled={isSubmitting}
                                sx={{ borderRadius: '8px', textTransform: 'none', px: 4 }}
                            >
                                {isSubmitting ? (
                                    <CircularProgress size={22} color="inherit" />
                                ) : (
                                    submitLabel
                                )}
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            )}
        </Modal>
    );
}
