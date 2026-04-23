'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Icon,
  Typography,
  Box,
  Divider,
  useTheme,
  Alert,
  CircularProgress,
  Chip,
  FormHelperText,
  Snackbar,
} from '@mui/material';
import apiService, { ApiError } from '@/service/apiService';
import { websiteEndpoints } from '@/config/websiteEndpoints';
import { endpoints } from '@/config/adminEndpoints';

interface Subcategory {
  id: number;
  slug: string;
  name: string;
  image: string;
  total_products: number;
}

interface Category {
  id: number;
  slug: string;
  name: string;
  image: string;
  total_products: number;
  subcategories: Subcategory[];
}

interface Supplier {
  id: number;
  name: string;
}

interface Country {
  id: number;
  name: string;
  country_flag: string;
}

interface ProductType {
  id: number;
  name: string;
}

interface ExistingImage {
  id: number;
  image: string;
  is_preview: boolean;
}

interface FormErrors {
  title?: string;
  short_desc?: string;
  description?: string;
  price_per_measurement?: string;
  category_id?: string;
  supplier_id?: string;
  product_type_id?: string;
  country_id?: string;
  images?: string;
  [key: string]: string | undefined;
}

interface AddProductModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  editSlug?: string | null;
}

export default function AddProductModal({ open, onClose, onSuccess, editSlug }: AddProductModalProps) {
  const theme = useTheme();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const isEditMode = !!editSlug;

  // --- Dropdown data ---
  const [categories, setCategories] = useState<Category[]>([]);
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [productTypes, setProductTypes] = useState<ProductType[]>([]);

  // --- Form fields ---
  const [title, setTitle] = useState('');
  const [shortDesc, setShortDesc] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [pricePerMeasurement, setPricePerMeasurement] = useState('');
  const [minOrder, setMinOrder] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<number | ''>('');
  const [selectedSubcategory, setSelectedSubcategory] = useState<number | ''>('');
  const [selectedProductType, setSelectedProductType] = useState<number | ''>('');
  const [selectedSupplier, setSelectedSupplier] = useState<number | ''>('');
  const [selectedCountry, setSelectedCountry] = useState<number | ''>('');
  const [images, setImages] = useState<File[]>([]);
  const [existingImages, setExistingImages] = useState<ExistingImage[]>([]);
  const [loadingProduct, setLoadingProduct] = useState(false);

  // --- UI state ---
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({ open: false, message: '', severity: 'success' });

  // --- Fetch dropdown data on open ---
  useEffect(() => {
    if (open) {
      const fetchCategories = async () => {
        try {
          const response = await apiService.get<{ success: boolean; data: Category[] }>(websiteEndpoints.categoryWiseSubcategories);
          if (response?.success && response.data) {
            setCategories(response.data);
          }
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      };
      const fetchSuppliers = async () => {
        try {
          const response = await apiService.get<{ success: boolean; data: Supplier[] }>(websiteEndpoints.valuablePartners);
          if (response?.success && response.data) {
            setSuppliers(response.data);
          }
        } catch (error) {
          console.error('Error fetching suppliers:', error);
        }
      };
      const fetchCountries = async () => {
        try {
          const response = await apiService.get<{ success: boolean; data: Country[] }>(websiteEndpoints.countries);
          if (response?.success && response.data) {
            setCountries(response.data);
          }
        } catch (error) {
          console.error('Error fetching countries:', error);
        }
      };
      const fetchProductTypes = async () => {
        try {
          const response = await apiService.get<{ success: boolean; data: ProductType[] }>(endpoints.productTypes.list, { per_page: 100 });
          if (response?.success && response.data) {
            setProductTypes(response.data);
          }
        } catch (error) {
          console.error('Error fetching product types:', error);
        }
      };
      fetchCategories();
      fetchSuppliers();
      fetchCountries();
      fetchProductTypes();
    }
  }, [open]);

  // --- Fetch product data for edit mode ---
  useEffect(() => {
    if (open && editSlug) {
      const fetchProduct = async () => {
        setLoadingProduct(true);
        try {
          const response = await apiService.get<{ success: boolean; data: any }>(endpoints.products.getById(editSlug));
          if (response?.success && response.data) {
            const p = response.data;
            setTitle(p.title || '');
            setShortDesc(p.short_desc || '');
            setDescription(p.description || '');
            setPrice(p.price ? String(parseFloat(p.price)) : '');
            setCurrency(p.currency || 'USD');
            setPricePerMeasurement(p.price_per_measurement || '');
            setMinOrder(p.min_order ? String(p.min_order) : '');
            setSelectedCategory(p.category.parent_id || '');
            setSelectedSubcategory(p.category_id || '');
            setSelectedProductType(p.product_type_id || '');
            setSelectedSupplier(p.supplier_id || '');
            setSelectedCountry(p.country_id || '');
            setExistingImages(p.images || []);
          }
        } catch (error) {
          console.error('Error fetching product for edit:', error);
          setApiError('Failed to load product data.');
        } finally {
          setLoadingProduct(false);
        }
      };
      fetchProduct();
    }
  }, [open, editSlug]);

  // --- Reset form ---
  const resetForm = () => {
    setTitle('');
    setShortDesc('');
    setDescription('');
    setPrice('');
    setCurrency('USD');
    setPricePerMeasurement('');
    setMinOrder('');
    setSelectedCategory('');
    setSelectedSubcategory('');
    setSelectedProductType('');
    setSelectedSupplier('');
    setSelectedCountry('');
    setImages([]);
    setExistingImages([]);
    setErrors({});
    setApiError('');
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  // --- Category change ---
  const handleCategoryChange = (e: any) => {
    setSelectedCategory(e.target.value as number);
    setSelectedSubcategory('');
    if (errors.category_id) setErrors(prev => ({ ...prev, category_id: undefined }));
  };

  const currentSubcategories = categories.find(c => c.id === selectedCategory)?.subcategories || [];

  // --- File handling ---
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setImages(prev => [...prev, ...newFiles]);
      if (errors.images) setErrors(prev => ({ ...prev, images: undefined }));
    }
    // Reset file input so same file can be re-selected
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleRemoveImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleRemoveExistingImage = (imageId: number) => {
    setExistingImages(prev => prev.filter(img => img.id !== imageId));
  };

  // --- Validation ---
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!title.trim()) newErrors.title = 'Product title is required';
    if (!shortDesc.trim()) newErrors.short_desc = 'Short description is required';
    if (!description.trim()) newErrors.description = 'Detailed description is required';
    if (!pricePerMeasurement.trim()) newErrors.price_per_measurement = 'Unit measurement is required';
    if (!selectedCategory) newErrors.category_id = 'Category is required';
    if (!selectedSubcategory) newErrors.subcategory_id = 'Subcategory is required';
    if (!selectedSupplier) newErrors.supplier_id = 'Supplier is required';
    if (!selectedProductType) newErrors.product_type_id = 'Product type is required';
    if (!selectedCountry) newErrors.country_id = 'Country is required';
    if (images.length === 0 && existingImages.length === 0) newErrors.images = 'At least one product image is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --- Submit ---
  const handleSubmit = async () => {
    if (!validate()) return;

    setSubmitting(true);
    setApiError('');

    try {
      const formData = new FormData();
      formData.append('title', title.trim());
      formData.append('short_desc', shortDesc.trim());
      formData.append('description', description.trim());
      formData.append('price_per_measurement', pricePerMeasurement.trim());
      formData.append('category_id', selectedSubcategory ? String(selectedSubcategory) : String(selectedCategory));
      formData.append('supplier_id', String(selectedSupplier));
      formData.append('product_type_id', String(selectedProductType));
      formData.append('country_id', String(selectedCountry));

      // Optional fields
      if (price) formData.append('price', price);
      if (currency) formData.append('currency', currency);
      if (minOrder) formData.append('min_order', minOrder);

      // Append images
      images.forEach((file) => {
        formData.append('images', file);
      });

      if (isEditMode) {
        await apiService.putFormData(endpoints.products.update(editSlug!), formData);
        setSnackbar({ open: true, message: 'Product updated successfully!', severity: 'success' });
      } else {
        await apiService.postFormData(endpoints.products.create, formData);
        setSnackbar({ open: true, message: 'Product created successfully!', severity: 'success' });
      }
      resetForm();
      onSuccess?.();
      onClose();
    } catch (error) {
      if (error instanceof ApiError) {
        // Map field-level errors from the API response
        if (Object.keys(error.fieldErrors).length > 0) {
          setErrors(error.fieldErrors);
        }
        setApiError(error.message);
      } else {
        setApiError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  // --- Clear field error on change ---
  const clearError = (field: string) => {
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        scroll="paper"
        PaperProps={{
          sx: {
            borderRadius: 3,
            maxHeight: '90vh',
          }
        }}
      >
        {/* Header */}
        <DialogTitle sx={{ px: 3, py: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="h5" fontWeight="700">{isEditMode ? 'Edit Product' : 'Add New Product'}</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              {isEditMode ? 'Update the product details below' : 'Fill in the details below to create a new product listing'}
            </Typography>
          </Box>
          <IconButton onClick={handleClose} size="small" sx={{ bgcolor: 'grey.100', '&:hover': { bgcolor: 'grey.200' } }}>
            <Icon fontSize="small">close</Icon>
          </IconButton>
        </DialogTitle>
        <Divider />

        {/* Form Content */}
        <DialogContent sx={{ px: 3, py: 3 }}>

          {/* Loading overlay for edit mode */}
          {loadingProduct && (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 10 }}>
              <CircularProgress />
              <Typography variant="body1" sx={{ ml: 2 }}>Loading product data...</Typography>
            </Box>
          )}

          {!loadingProduct && (
          <>

          {/* API Error Banner */}
          {apiError && (
            <Alert severity="error" sx={{ mb: 3 }} onClose={() => setApiError('')}>
              {apiError}
            </Alert>
          )}

          {/* Section 1: Basic Information */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle2" fontWeight="700" color="primary" textTransform="uppercase" letterSpacing={0.5} sx={{ mb: 2 }}>
              Basic Information
            </Typography>
            <Grid container spacing={2.5}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Product Title"
                  variant="outlined"
                  size="medium"
                  placeholder="e.g. Premium Cotton Drawstring Bag"
                  value={title}
                  onChange={(e) => { setTitle(e.target.value); clearError('title'); }}
                  error={!!errors.title}
                  helperText={errors.title}
                  required
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Short Description"
                  variant="outlined"
                  size="medium"
                  placeholder="Brief summary (max 150 characters)"
                  value={shortDesc}
                  onChange={(e) => { setShortDesc(e.target.value); clearError('short_desc'); }}
                  error={!!errors.short_desc}
                  helperText={errors.short_desc}
                  required
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Detailed Description"
                  variant="outlined"
                  multiline
                  rows={3}
                  placeholder="Full details about the product, materials, usage, etc."
                  value={description}
                  onChange={(e) => { setDescription(e.target.value); clearError('description'); }}
                  error={!!errors.description}
                  helperText={errors.description}
                  required
                />
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Section 2: Pricing & Limits */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle2" fontWeight="700" color="primary" textTransform="uppercase" letterSpacing={0.5} sx={{ mb: 2 }}>
              Pricing & Limits
            </Typography>
            <Grid container spacing={2.5}>
              <Grid size={{ xs: 12, sm: 3 }}>
                <TextField
                  fullWidth
                  label="Price"
                  variant="outlined"
                  size="medium"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  InputProps={{
                    startAdornment: <Box component="span" sx={{ color: 'text.secondary', mr: 0.5, fontWeight: 600 }}>$</Box>
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 3 }}>
                <FormControl fullWidth size="medium">
                  <InputLabel>Currency</InputLabel>
                  <Select value={currency} onChange={(e) => setCurrency(e.target.value)} label="Currency">
                    <MenuItem value="USD">USD</MenuItem>
                    <MenuItem value="EUR">EUR</MenuItem>
                    <MenuItem value="GBP">GBP</MenuItem>
                    <MenuItem value="INR">INR</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12, sm: 3 }}>
                <TextField
                  fullWidth
                  label="Unit Measurement"
                  variant="outlined"
                  size="medium"
                  placeholder="e.g. 1 piece"
                  value={pricePerMeasurement}
                  onChange={(e) => { setPricePerMeasurement(e.target.value); clearError('price_per_measurement'); }}
                  error={!!errors.price_per_measurement}
                  helperText={errors.price_per_measurement}
                  required
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 3 }}>
                <TextField
                  fullWidth
                  label="Min. Order Qty"
                  variant="outlined"
                  size="medium"
                  type="number"
                  placeholder="e.g. 100"
                  value={minOrder}
                  onChange={(e) => setMinOrder(e.target.value)}
                />
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Section 3: Categorization */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle2" fontWeight="700" color="primary" textTransform="uppercase" letterSpacing={0.5} sx={{ mb: 2 }}>
              Categorization
            </Typography>
            <Grid container spacing={2.5}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth size="medium" error={!!errors.category_id} required>
                  <InputLabel>Category</InputLabel>
                  <Select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    label="Category"
                  >
                    {categories.map((category) => (
                      <MenuItem key={category.id} value={category.id}>
                        {category.name}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.category_id && <FormHelperText>{errors.category_id}</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth size="medium" disabled={!selectedCategory}>
                  <InputLabel>Subcategory</InputLabel>
                  <Select
                    value={selectedSubcategory}
                    onChange={(e) => setSelectedSubcategory(e.target.value as number)}
                    label="Subcategory"
                  >
                    {currentSubcategories.length > 0 ? (
                      currentSubcategories.map((sub) => (
                        <MenuItem key={sub.id} value={sub.id}>
                          {sub.name}
                        </MenuItem>
                      ))
                    ) : (
                      <MenuItem value="" disabled>No subcategories available</MenuItem>
                    )}
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth size="medium" error={!!errors.product_type_id} required>
                  <InputLabel>Product Type</InputLabel>
                  <Select
                    value={selectedProductType}
                    onChange={(e) => { setSelectedProductType(e.target.value as number); clearError('product_type_id'); }}
                    label="Product Type"
                  >
                    {productTypes.map((pt) => (
                      <MenuItem key={pt.id} value={pt.id}>
                        {pt.name}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.product_type_id && <FormHelperText>{errors.product_type_id}</FormHelperText>}
                </FormControl>
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Section 4: Sourcing & Origin */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle2" fontWeight="700" color="primary" textTransform="uppercase" letterSpacing={0.5} sx={{ mb: 2 }}>
              Sourcing & Origin
            </Typography>
            <Grid container spacing={2.5}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth size="medium" error={!!errors.supplier_id} required>
                  <InputLabel>Supplier</InputLabel>
                  <Select
                    value={selectedSupplier}
                    onChange={(e) => { setSelectedSupplier(e.target.value as number); clearError('supplier_id'); }}
                    label="Supplier"
                  >
                    {suppliers.map((supplier) => (
                      <MenuItem key={supplier.id} value={supplier.id}>
                        {supplier.name}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.supplier_id && <FormHelperText>{errors.supplier_id}</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth size="medium" error={!!errors.country_id} required>
                  <InputLabel>Country of Origin</InputLabel>
                  <Select
                    value={selectedCountry}
                    onChange={(e) => { setSelectedCountry(e.target.value as number); clearError('country_id'); }}
                    label="Country of Origin"
                  >
                    {countries.map((country) => (
                      <MenuItem key={country.id} value={country.id}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <img src={country.country_flag} alt={country.name} width={20} height={14} style={{ objectFit: 'cover', borderRadius: 2 }} />
                          {country.name}
                        </Box>
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.country_id && <FormHelperText>{errors.country_id}</FormHelperText>}
                </FormControl>
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Section 5: Product Images */}
          <Box>
            <Typography variant="subtitle2" fontWeight="700" color="primary" textTransform="uppercase" letterSpacing={0.5} sx={{ mb: 2 }}>
              Product Images <Typography component="span" color="error">*</Typography>
            </Typography>

            {/* Hidden file input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              hidden
              onChange={handleFileSelect}
            />

            {/* Upload area */}
            <Box
              onClick={() => fileInputRef.current?.click()}
              sx={{
                border: '2px dashed',
                borderColor: errors.images ? 'error.main' : 'grey.300',
                borderRadius: 2,
                p: 4,
                textAlign: 'center',
                bgcolor: 'grey.50',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: 'primary.50',
                  borderColor: 'primary.main',
                }
              }}
            >
              <Icon sx={{ fontSize: 40, color: 'grey.400', mb: 1, display: 'block', mx: 'auto' }}>cloud_upload</Icon>
              <Typography variant="body1" fontWeight="600" color="text.primary">
                Click to upload or drag and drop
              </Typography>
              <Typography variant="caption" color="text.secondary">
                PNG, JPG or JPEG (multiple files allowed)
              </Typography>
            </Box>
            {errors.images && (
              <FormHelperText error sx={{ mt: 1 }}>{errors.images}</FormHelperText>
            )}

            {/* Existing images (edit mode) */}
            {existingImages.length > 0 && (
              <Box sx={{ mb: 2 }}>
                <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>Current Images</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                  {existingImages.map((img) => (
                    <Box
                      key={img.id}
                      sx={{
                        position: 'relative',
                        width: 100,
                        height: 100,
                        borderRadius: 2,
                        overflow: 'hidden',
                        border: 1,
                        borderColor: 'divider',
                      }}
                    >
                      <img
                        src={img.image}
                        alt={`Product image ${img.id}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <IconButton
                        size="small"
                        onClick={() => handleRemoveExistingImage(img.id)}
                        sx={{
                          position: 'absolute',
                          top: 2,
                          right: 2,
                          bgcolor: 'rgba(0,0,0,0.6)',
                          color: 'white',
                          width: 22,
                          height: 22,
                          '&:hover': { bgcolor: 'error.main' },
                        }}
                      >
                        <Icon sx={{ fontSize: 14 }}>close</Icon>
                      </IconButton>
                      {img.is_preview && (
                        <Chip
                          label="Preview"
                          size="small"
                          color="primary"
                          sx={{
                            position: 'absolute',
                            bottom: 4,
                            left: 4,
                            height: 18,
                            fontSize: 10,
                          }}
                        />
                      )}
                    </Box>
                  ))}
                </Box>
              </Box>
            )}

            {/* New image previews */}
            {images.length > 0 && (
              <Box sx={{ mb: 1 }}>
                {isEditMode && <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>New Images</Typography>}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                  {images.map((file, index) => (
                    <Box
                      key={index}
                      sx={{
                        position: 'relative',
                        width: 100,
                        height: 100,
                        borderRadius: 2,
                        overflow: 'hidden',
                        border: 1,
                        borderColor: 'divider',
                      }}
                    >
                      <img
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <IconButton
                        size="small"
                        onClick={() => handleRemoveImage(index)}
                        sx={{
                          position: 'absolute',
                          top: 2,
                          right: 2,
                          bgcolor: 'rgba(0,0,0,0.6)',
                          color: 'white',
                          width: 22,
                          height: 22,
                          '&:hover': { bgcolor: 'error.main' },
                        }}
                      >
                        <Icon sx={{ fontSize: 14 }}>close</Icon>
                      </IconButton>
                      {index === 0 && existingImages.length === 0 && (
                        <Chip
                          label="Preview"
                          size="small"
                          color="primary"
                          sx={{
                            position: 'absolute',
                            bottom: 4,
                            left: 4,
                            height: 18,
                            fontSize: 10,
                          }}
                        />
                      )}
                    </Box>
                  ))}
                </Box>
              </Box>
            )}
          </Box>

          </>
          )}

        </DialogContent>

        {/* Footer Actions */}
        <Divider />
        <DialogActions sx={{ px: 3, py: 2 }}>
          <Button onClick={handleClose} variant="outlined" color="inherit" sx={{ borderRadius: 2, px: 3, textTransform: 'none' }} disabled={submitting}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={submitting}
            sx={{ borderRadius: 2, px: 4, textTransform: 'none', fontWeight: 600, boxShadow: theme.shadows[4] }}
          >
            {submitting ? <CircularProgress size={22} color="inherit" sx={{ mr: 1 }} /> : null}
            {submitting ? 'Saving...' : isEditMode ? 'Update Product' : 'Save Product'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Success/Error Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert severity={snackbar.severity} variant="filled" onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}
