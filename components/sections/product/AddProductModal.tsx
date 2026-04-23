'use client';

import React, { useState, useEffect } from 'react';
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
  useTheme
} from '@mui/material';
import apiService from '@/service/apiService';
import { websiteEndpoints } from '@/config/websiteEndpoints';

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

interface AddProductModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AddProductModal({ open, onClose }: AddProductModalProps) {
  const theme = useTheme();
  
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | ''>('');
  const [selectedSubcategory, setSelectedSubcategory] = useState<number | ''>('');
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [selectedSupplier, setSelectedSupplier] = useState<number | ''>('');

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
      fetchCategories();
      fetchSuppliers();
    } else {
      setSelectedCategory('');
      setSelectedSubcategory('');
      setSelectedSupplier('');
    }
  }, [open]);

  const handleCategoryChange = (e: any) => {
    setSelectedCategory(e.target.value as number);
    setSelectedSubcategory(''); // Reset subcategory when category changes
  };

  const currentSubcategories = categories.find(c => c.id === selectedCategory)?.subcategories || [];

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="md" 
      fullWidth
      PaperProps={{
        sx: { borderRadius: 3, p: 1 }
      }}
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5" fontWeight="700">Add New Product</Typography>
        <IconButton onClick={onClose} size="small" sx={{ bgcolor: 'grey.100' }}>
          <Icon>close</Icon>
        </IconButton>
      </DialogTitle>
      <Divider />
      
      <DialogContent sx={{ mt: 2 }}>
        <Grid container spacing={3}>
          {/* Basic Information */}
          <Grid item xs={12}>
            <Typography variant="subtitle1" fontWeight="600" color="text.secondary" sx={{ mb: 1 }}>
              Basic Information
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Product Title" variant="outlined" placeholder="e.g. Cotton Drawstring Bag" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Short Description" variant="outlined" placeholder="Brief summary of the product" />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              fullWidth 
              label="Detailed Description" 
              variant="outlined" 
              multiline 
              rows={4} 
              placeholder="Full details about the product, materials, usage, etc." 
            />
          </Grid>

          {/* Pricing & Order Limits */}
          <Grid item xs={12}>
            <Divider sx={{ my: 1 }} />
            <Typography variant="subtitle1" fontWeight="600" color="text.secondary" sx={{ mb: 1 }}>
              Pricing & Limits
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Price" variant="outlined" type="number" InputProps={{ startAdornment: <Box component="span" sx={{ color: 'text.secondary', mr: 1 }}>$</Box> }} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Currency</InputLabel>
              <Select defaultValue="USD" label="Currency">
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="EUR">EUR</MenuItem>
                <MenuItem value="GBP">GBP</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Unit Measurement" variant="outlined" placeholder="e.g. 1 piece" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Minimum Order Quantity" variant="outlined" type="number" />
          </Grid>

          {/* Categorization */}
          <Grid item xs={12}>
            <Divider sx={{ my: 1 }} />
            <Typography variant="subtitle1" fontWeight="600" color="text.secondary" sx={{ mb: 1 }}>
              Categorization
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
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
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth disabled={!selectedCategory}>
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
                  <MenuItem value="" disabled>No Subcategories</MenuItem>
                )}
              </Select>
            </FormControl>
          </Grid>

          {/* Sourcing */}
          <Grid item xs={12}>
            <Divider sx={{ my: 1 }} />
            <Typography variant="subtitle1" fontWeight="600" color="text.secondary" sx={{ mb: 1 }}>
              Sourcing & Origin
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Supplier</InputLabel>
              <Select 
                value={selectedSupplier} 
                onChange={(e) => setSelectedSupplier(e.target.value as number)} 
                label="Supplier"
              >
                {suppliers.map((supplier) => (
                  <MenuItem key={supplier.id} value={supplier.id}>
                    {supplier.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Country of Origin</InputLabel>
              <Select defaultValue="" label="Country of Origin">
                <MenuItem value={1}>UK</MenuItem>
                <MenuItem value={2}>Germany</MenuItem>
                <MenuItem value={3}>USA</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Images */}
          <Grid item xs={12}>
            <Divider sx={{ my: 1 }} />
            <Typography variant="subtitle1" fontWeight="600" color="text.secondary" sx={{ mb: 1 }}>
              Product Images
            </Typography>
            <Box 
              sx={{ 
                border: '2px dashed', 
                borderColor: 'divider', 
                borderRadius: 2, 
                p: 4, 
                textAlign: 'center',
                bgcolor: 'grey.50',
                cursor: 'pointer',
                '&:hover': { bgcolor: 'grey.100' }
              }}
            >
              <Icon sx={{ fontSize: 40, color: 'text.secondary', mb: 1 }}>cloud_upload</Icon>
              <Typography variant="body1" fontWeight="500">
                Click to upload or drag and drop
              </Typography>
              <Typography variant="body2" color="text.secondary">
                SVG, PNG, JPG or GIF (max. 800x400px)
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
      
      <DialogActions sx={{ p: 3, pt: 1 }}>
        <Button onClick={onClose} variant="outlined" color="inherit" sx={{ borderRadius: 2, px: 3 }}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" sx={{ borderRadius: 2, px: 4, boxShadow: theme.shadows[4] }}>
          Save Product
        </Button>
      </DialogActions>
    </Dialog>
  );
}
