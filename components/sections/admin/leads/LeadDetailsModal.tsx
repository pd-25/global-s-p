'use client';

import Modal from '@/components/ui/modal/Modal';
import {
  Alert,
  Avatar,
  Box,
  Button,
  Chip,
  CircularProgress,
  Divider,
  Grid,
  Icon,
  IconButton,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { useState, useEffect, useCallback } from 'react';
import apiService from '@/service/apiService';
import { endpoints } from '@/config/adminEndpoints';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
interface LeadDetail {
  id: number;
  enquiry_number: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  status: string;
  reason_for_contacting: string | null;
  request_title: string | null;
  delivery_location: string | null;
  quantity: string | null;
  request_type: string | null;
  message: string | null;
  business_email: string | null;
  company_name: string | null;
  forward_to_other: boolean;
  supplier_id: number | null;
  product_id: number | null;
  product_name: string | null;
  product_slug: string | null;
  product_image: string | null;
  supplier_name: string | null;
  supplier_slug: string | null;
  created_at: string;
  updated_at: string;
}

interface LeadDetailApiResponse {
  success: boolean;
  message: string;
  data: LeadDetail;
  meta: Record<string, unknown>;
}

interface LeadDetailsModalProps {
  open: boolean;
  onClose: () => void;
  enquiryNumber: string | null;
  leadType: string; // 'inquiries' or 'quotes'
  onUpdate?: () => void; // callback to refresh the table list
}

/* ------------------------------------------------------------------ */
/*  Editable field keys                                                */
/* ------------------------------------------------------------------ */
type EditableField =
  | 'name'
  | 'email'
  | 'phone'
  | 'reason_for_contacting'
  | 'request_title'
  | 'delivery_location'
  | 'quantity'
  | 'request_type'
  | 'message'
  | 'business_email'
  | 'company_name'
  | 'status';

/* ------------------------------------------------------------------ */
/*  Allowed statuses                                                   */
/* ------------------------------------------------------------------ */
const ALLOWED_STATUSES = [
  'Pending',
  'In Progress',
  'Replied',
  'Closed',
  'On Hold',
  'Not Interested',
  'Not Relevant',
  'Spam',
  'Other',
];

/* ------------------------------------------------------------------ */
/*  Status chip colour map                                             */
/* ------------------------------------------------------------------ */
const statusStyle = (status: string) => {
  const map: Record<string, { bgcolor: string; color: string }> = {
    'Pending': { bgcolor: '#fff7ed', color: '#c2410c' },
    'In Progress': { bgcolor: '#e0f2fe', color: '#0369a1' },
    'Replied': { bgcolor: '#dbeafe', color: '#1d4ed8' },
    'Closed': { bgcolor: '#dcfce7', color: '#15803d' },
    'On Hold': { bgcolor: '#fef3c7', color: '#92400e' },
    'Not Interested': { bgcolor: '#fce7f3', color: '#9d174d' },
    'Not Relevant': { bgcolor: '#f1f5f9', color: '#475569' },
    'Spam': { bgcolor: '#fee2e2', color: '#b91c1c' },
    'Other': { bgcolor: '#ede9fe', color: '#6d28d9' },
  };
  return map[status] ?? { bgcolor: 'grey.100', color: 'text.primary' };
};

/* ------------------------------------------------------------------ */
/*  Format date                                                        */
/* ------------------------------------------------------------------ */
function formatDate(isoString: string): string {
  const date = new Date(isoString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

/* ------------------------------------------------------------------ */
/*  Editable field row                                                 */
/* ------------------------------------------------------------------ */
function EditableRow({
  icon,
  label,
  fieldKey,
  value,
  editingField,
  editValue,
  saving,
  onEdit,
  onEditValueChange,
  onSave,
  onCancel,
  multiline,
}: {
  icon: string;
  label: string;
  fieldKey: EditableField;
  value: string | null;
  editingField: EditableField | null;
  editValue: string;
  saving: boolean;
  onEdit: (field: EditableField, currentValue: string) => void;
  onEditValueChange: (v: string) => void;
  onSave: () => void;
  onCancel: () => void;
  multiline?: boolean;
}) {
  const isEditing = editingField === fieldKey;

  return (
    <Stack direction="row" spacing={2} alignItems="flex-start" sx={{ py: 1 }}>
      <Icon sx={{ color: 'text.secondary', fontSize: 20, mt: isEditing ? 1.25 : 0.25, flexShrink: 0 }}>
        {icon}
      </Icon>
      <Box sx={{ minWidth: 0, flex: 1 }}>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}
        >
          {label}
        </Typography>

        {isEditing ? (
          <Stack direction="row" spacing={1} alignItems="flex-start" sx={{ mt: 0.5 }}>
            <TextField
              value={editValue}
              onChange={(e) => onEditValueChange(e.target.value)}
              size="small"
              fullWidth
              multiline={multiline}
              rows={multiline ? 3 : undefined}
              autoFocus
              disabled={saving}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !multiline) {
                  e.preventDefault();
                  onSave();
                }
                if (e.key === 'Escape') onCancel();
              }}
            />
            <Tooltip title="Save">
              <IconButton
                size="small"
                color="primary"
                onClick={onSave}
                disabled={saving}
                sx={{ mt: 0.25 }}
              >
                {saving ? <CircularProgress size={18} /> : <Icon fontSize="small">check</Icon>}
              </IconButton>
            </Tooltip>
            <Tooltip title="Cancel">
              <IconButton
                size="small"
                onClick={onCancel}
                disabled={saving}
                sx={{ mt: 0.25 }}
              >
                <Icon fontSize="small">close</Icon>
              </IconButton>
            </Tooltip>
          </Stack>
        ) : (
          <Stack direction="row" alignItems="center" spacing={0.5} sx={{ minHeight: 28 }}>
            <Typography variant="body2" sx={{ fontWeight: 500, wordBreak: 'break-word' }}>
              {value || '—'}
            </Typography>
            <Tooltip title={`Edit ${label.toLowerCase()}`}>
              <IconButton
                size="small"
                onClick={() => onEdit(fieldKey, value || '')}
                sx={{
                  opacity: 0.4,
                  transition: 'opacity 0.15s',
                  '&:hover': { opacity: 1 },
                  ml: 0.5,
                }}
              >
                <Icon sx={{ fontSize: 16 }}>edit</Icon>
              </IconButton>
            </Tooltip>
          </Stack>
        )}
      </Box>
    </Stack>
  );
}

/* ------------------------------------------------------------------ */
/*  Read-only detail row                                               */
/* ------------------------------------------------------------------ */
function DetailRow({
  icon,
  label,
  value,
  chip,
}: {
  icon: string;
  label: string;
  value?: string | null;
  chip?: React.ReactNode;
}) {
  if (!value && !chip) return null;
  return (
    <Stack direction="row" spacing={2} alignItems="flex-start" sx={{ py: 1.25 }}>
      <Icon sx={{ color: 'text.secondary', fontSize: 20, mt: 0.25, flexShrink: 0 }}>
        {icon}
      </Icon>
      <Box sx={{ minWidth: 0 }}>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}
        >
          {label}
        </Typography>
        {chip ? (
          <Box sx={{ mt: 0.5 }}>{chip}</Box>
        ) : (
          <Typography variant="body2" sx={{ fontWeight: 500, wordBreak: 'break-word' }}>
            {value}
          </Typography>
        )}
      </Box>
    </Stack>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function LeadDetailsModal({
  open,
  onClose,
  enquiryNumber,
  leadType,
  onUpdate,
}: LeadDetailsModalProps) {
  const [detail, setDetail] = useState<LeadDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Inline editing state
  const [editingField, setEditingField] = useState<EditableField | null>(null);
  const [editValue, setEditValue] = useState('');
  const [saving, setSaving] = useState(false);
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({
    open: false,
    message: '',
    severity: 'success',
  });

  const isInquiry = leadType.toLowerCase() === 'inquiries';
  // API expects singular: "inquiry" or "quote"
  const apiLeadType = isInquiry ? 'inquiry' : 'quote';

  /* ── Fetch detail ──────────────────────────────────────────────── */
  useEffect(() => {
    if (open && enquiryNumber) {
      setLoading(true);
      setError(null);
      setDetail(null);
      setEditingField(null);

      apiService
        .get<LeadDetailApiResponse>(
          endpoints.leads.getByEnquiryNumber(enquiryNumber, apiLeadType),
        )
        .then((response) => {
          if (response?.success && response.data) {
            setDetail(response.data);
          } else {
            setError('Failed to load details.');
          }
        })
        .catch((err: any) => {
          setError(err.message || 'An error occurred while fetching details.');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [open, enquiryNumber, apiLeadType]);

  /* ── Start editing a field ─────────────────────────────────────── */
  const handleEdit = useCallback((field: EditableField, currentValue: string) => {
    setEditingField(field);
    setEditValue(currentValue);
  }, []);

  /* ── Cancel editing ────────────────────────────────────────────── */
  const handleCancel = useCallback(() => {
    setEditingField(null);
    setEditValue('');
  }, []);

  /* ── Save a single field via PATCH ─────────────────────────────── */
  const handleSave = useCallback(async () => {
    if (!detail || !editingField) return;

    // Check if value actually changed
    const originalValue = detail[editingField] as string | null;
    if (editValue === (originalValue || '')) {
      handleCancel();
      return;
    }

    setSaving(true);
    try {
      const payload: Record<string, string> = {
        [editingField]: editValue,
      };

      const response = await apiService.patch<LeadDetailApiResponse>(
        endpoints.leads.updateByEnquiryNumber(detail.enquiry_number),
        payload,
      );

      if (response?.success && response.data) {
        setDetail(response.data);
        setSnackbar({ open: true, message: 'Updated successfully', severity: 'success' });
        onUpdate?.(); // refresh the table list
      } else {
        setSnackbar({ open: true, message: 'Update failed', severity: 'error' });
      }
    } catch (err: any) {
      setSnackbar({
        open: true,
        message: err.message || 'Failed to update. Please try again.',
        severity: 'error',
      });
    } finally {
      setSaving(false);
      setEditingField(null);
      setEditValue('');
    }
  }, [detail, editingField, editValue, handleCancel, onUpdate]);

  /* ── Status change handler (dropdown) ──────────────────────────── */
  const handleStatusChange = useCallback(
    async (newStatus: string) => {
      if (!detail || newStatus === detail.status) return;

      setSaving(true);
      try {
        const response = await apiService.patch<LeadDetailApiResponse>(
          endpoints.leads.updateByEnquiryNumber(detail.enquiry_number),
          { status: newStatus },
        );

        if (response?.success && response.data) {
          setDetail(response.data);
          setSnackbar({ open: true, message: 'Status updated successfully', severity: 'success' });
          onUpdate?.();
        } else {
          setSnackbar({ open: true, message: 'Status update failed', severity: 'error' });
        }
      } catch (err: any) {
        setSnackbar({
          open: true,
          message: err.message || 'Failed to update status.',
          severity: 'error',
        });
      } finally {
        setSaving(false);
      }
    },
    [detail, onUpdate],
  );

  const modalTitle = isInquiry ? 'Inquiry Details' : 'Quote Details';

  return (
    <>
      <Modal open={open} onClose={onClose} title={modalTitle} maxWidth="md">
        {loading ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 8 }}>
            <CircularProgress size={40} />
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              Loading details…
            </Typography>
          </Box>
        ) : error ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 8 }}>
            <Icon sx={{ fontSize: 48, color: 'error.main', mb: 2 }}>error_outline</Icon>
            <Typography variant="body1" color="error">
              {error}
            </Typography>
          </Box>
        ) : detail ? (
          <Box sx={{ mt: 1 }}>
            {/* ── Header: Enquiry number + status ────────────────── */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              justifyContent="space-between"
              alignItems={{ xs: 'flex-start', sm: 'center' }}
              spacing={2}
              sx={{
                p: 2,
                mb: 3,
                borderRadius: '10px',
                bgcolor: 'grey.50',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Box>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                  {isInquiry ? 'INQUIRY' : 'QUOTE'} NUMBER
                </Typography>
                <Typography variant="h6" fontWeight={700} color="primary.main">
                  {detail.enquiry_number}
                </Typography>
              </Box>

              {/* Status dropdown */}
              <TextField
                select
                size="small"
                value={detail.status}
                onChange={(e) => handleStatusChange(e.target.value)}
                disabled={saving}
                sx={{
                  minWidth: 170,
                  '& .MuiSelect-select': { fontWeight: 600 },
                }}
              >
                {ALLOWED_STATUSES.map((s) => {
                  const st = statusStyle(s);
                  return (
                    <MenuItem key={s} value={s}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            bgcolor: st.color,
                            flexShrink: 0,
                          }}
                        />
                        <Typography variant="body2" fontWeight={500}>
                          {s}
                        </Typography>
                      </Stack>
                    </MenuItem>
                  );
                })}
              </TextField>
            </Stack>

            <Grid container spacing={4}>
              {/* ── Left column ─────────────────────────────────── */}
              <Grid size={{ xs: 12, md: 6 }}>
                {/* Contact Information */}
                <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 1, color: 'text.primary' }}>
                  Contact Information
                </Typography>
                <Box sx={{ pl: 0.5 }}>
                  <EditableRow
                    icon="person" label="Name" fieldKey="name"
                    value={detail.name} editingField={editingField} editValue={editValue}
                    saving={saving} onEdit={handleEdit} onEditValueChange={setEditValue}
                    onSave={handleSave} onCancel={handleCancel}
                  />
                  <EditableRow
                    icon="email" label="Email" fieldKey="email"
                    value={detail.email} editingField={editingField} editValue={editValue}
                    saving={saving} onEdit={handleEdit} onEditValueChange={setEditValue}
                    onSave={handleSave} onCancel={handleCancel}
                  />
                  <EditableRow
                    icon="phone" label="Phone" fieldKey="phone"
                    value={detail.phone} editingField={editingField} editValue={editValue}
                    saving={saving} onEdit={handleEdit} onEditValueChange={setEditValue}
                    onSave={handleSave} onCancel={handleCancel}
                  />
                  <EditableRow
                    icon="business" label="Company" fieldKey="company_name"
                    value={detail.company_name} editingField={editingField} editValue={editValue}
                    saving={saving} onEdit={handleEdit} onEditValueChange={setEditValue}
                    onSave={handleSave} onCancel={handleCancel}
                  />
                  <EditableRow
                    icon="alternate_email" label="Business Email" fieldKey="business_email"
                    value={detail.business_email} editingField={editingField} editValue={editValue}
                    saving={saving} onEdit={handleEdit} onEditValueChange={setEditValue}
                    onSave={handleSave} onCancel={handleCancel}
                  />
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Request Details */}
                <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 1, color: 'text.primary' }}>
                  Request Details
                </Typography>
                <Box sx={{ pl: 0.5 }}>
                  <EditableRow
                    icon="title" label="Request Title" fieldKey="request_title"
                    value={detail.request_title} editingField={editingField} editValue={editValue}
                    saving={saving} onEdit={handleEdit} onEditValueChange={setEditValue}
                    onSave={handleSave} onCancel={handleCancel}
                  />
                  <EditableRow
                    icon="category" label="Request Type" fieldKey="request_type"
                    value={detail.request_type} editingField={editingField} editValue={editValue}
                    saving={saving} onEdit={handleEdit} onEditValueChange={setEditValue}
                    onSave={handleSave} onCancel={handleCancel}
                  />
                  <EditableRow
                    icon="help_outline" label="Reason for Contacting" fieldKey="reason_for_contacting"
                    value={detail.reason_for_contacting} editingField={editingField} editValue={editValue}
                    saving={saving} onEdit={handleEdit} onEditValueChange={setEditValue}
                    onSave={handleSave} onCancel={handleCancel}
                  />
                  <EditableRow
                    icon="inventory" label="Quantity" fieldKey="quantity"
                    value={detail.quantity} editingField={editingField} editValue={editValue}
                    saving={saving} onEdit={handleEdit} onEditValueChange={setEditValue}
                    onSave={handleSave} onCancel={handleCancel}
                  />
                  <EditableRow
                    icon="location_on" label="Delivery Location" fieldKey="delivery_location"
                    value={detail.delivery_location} editingField={editingField} editValue={editValue}
                    saving={saving} onEdit={handleEdit} onEditValueChange={setEditValue}
                    onSave={handleSave} onCancel={handleCancel}
                  />
                  <DetailRow
                    icon="forward_to_inbox"
                    label="Forward to Other"
                    chip={
                      <Chip
                        label={detail.forward_to_other ? 'Yes' : 'No'}
                        size="small"
                        sx={{
                          fontWeight: 600,
                          bgcolor: detail.forward_to_other ? '#dcfce7' : '#f1f5f9',
                          color: detail.forward_to_other ? '#15803d' : '#475569',
                        }}
                      />
                    }
                  />
                </Box>
              </Grid>

              {/* ── Right column ────────────────────────────────── */}
              <Grid size={{ xs: 12, md: 6 }}>
                {/* Product Information */}
                {detail.product_name && (
                  <>
                    <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 1, color: 'text.primary' }}>
                      Product Information
                    </Typography>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: '10px',
                        border: '1px solid',
                        borderColor: 'divider',
                        bgcolor: 'background.paper',
                        mb: 2,
                      }}
                    >
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar
                          variant="rounded"
                          src={detail.product_image || ''}
                          sx={{ width: 56, height: 56, bgcolor: 'grey.100' }}
                        >
                          <Icon color="disabled">inventory_2</Icon>
                        </Avatar>
                        <Box>
                          <Typography variant="body1" fontWeight={600}>
                            {detail.product_name}
                          </Typography>
                          {detail.product_slug && (
                            <Typography variant="caption" color="text.secondary">
                              /{detail.product_slug}
                            </Typography>
                          )}
                        </Box>
                      </Stack>
                    </Box>
                  </>
                )}

                {/* Supplier Information */}
                {detail.supplier_name && (
                  <>
                    <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 1, color: 'text.primary' }}>
                      Supplier Information
                    </Typography>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: '10px',
                        border: '1px solid',
                        borderColor: 'divider',
                        bgcolor: 'background.paper',
                        mb: 2,
                      }}
                    >
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{ width: 40, height: 40, bgcolor: '#ede9fe', color: '#6d28d9' }}>
                          <Icon>store</Icon>
                        </Avatar>
                        <Box>
                          <Typography variant="body2" fontWeight={600}>
                            {detail.supplier_name}
                          </Typography>
                          {detail.supplier_slug && (
                            <Typography variant="caption" color="text.secondary">
                              /{detail.supplier_slug}
                            </Typography>
                          )}
                        </Box>
                      </Stack>
                    </Box>
                  </>
                )}

                {/* Message (editable, multiline) */}
                <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 1, color: 'text.primary' }}>
                  Message
                </Typography>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: '10px',
                    bgcolor: '#f8fafc',
                    border: '1px solid',
                    borderColor: 'divider',
                    mb: 2,
                  }}
                >
                  {editingField === 'message' ? (
                    <Stack spacing={1}>
                      <TextField
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        size="small"
                        fullWidth
                        multiline
                        rows={4}
                        autoFocus
                        disabled={saving}
                        onKeyDown={(e) => {
                          if (e.key === 'Escape') handleCancel();
                        }}
                      />
                      <Stack direction="row" spacing={1} justifyContent="flex-end">
                        <Button
                          size="small"
                          variant="outlined"
                          onClick={handleCancel}
                          disabled={saving}
                          sx={{ textTransform: 'none', borderRadius: '6px' }}
                        >
                          Cancel
                        </Button>
                        <Button
                          size="small"
                          variant="contained"
                          onClick={handleSave}
                          disabled={saving}
                          startIcon={saving ? <CircularProgress size={14} /> : undefined}
                          sx={{ textTransform: 'none', borderRadius: '6px' }}
                        >
                          Save
                        </Button>
                      </Stack>
                    </Stack>
                  ) : (
                    <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                      <Typography
                        variant="body2"
                        sx={{ whiteSpace: 'pre-wrap', color: 'text.primary', flex: 1 }}
                      >
                        {detail.message || '—'}
                      </Typography>
                      <Tooltip title="Edit message">
                        <IconButton
                          size="small"
                          onClick={() => handleEdit('message', detail.message || '')}
                          sx={{
                            opacity: 0.4,
                            transition: 'opacity 0.15s',
                            '&:hover': { opacity: 1 },
                            ml: 1,
                            flexShrink: 0,
                          }}
                        >
                          <Icon sx={{ fontSize: 16 }}>edit</Icon>
                        </IconButton>
                      </Tooltip>
                    </Stack>
                  )}
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Timestamps (read-only) */}
                <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 1, color: 'text.primary' }}>
                  Timestamps
                </Typography>
                <Box sx={{ pl: 0.5 }}>
                  <DetailRow icon="schedule" label="Created At" value={formatDate(detail.created_at)} />
                  <DetailRow icon="update" label="Updated At" value={formatDate(detail.updated_at)} />
                </Box>
              </Grid>
            </Grid>
          </Box>
        ) : null}
      </Modal>

      {/* ── Success / Error Snackbar ──────────────────────────────── */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}
