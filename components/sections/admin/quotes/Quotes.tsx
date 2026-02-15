'use client'
import { Box, Button, Chip, Grid, Icon, IconButton, InputAdornment, Menu, MenuItem, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { useState } from "react";
import NextLink from 'next/link';
import { adminRoutes } from "../../../../config/routes";

interface Quote {
  id: number;
  refId: string;
  user: string;
  item: string;
  amount: string;
  date: string;
  status: 'Pending' | 'Approved' | 'Review' | 'Rejected';
}
interface QuotesProps {
  showViewAll?: boolean;
};
const recentQuotes: Quote[] = [
  { id: 1, refId: 'QT-2024-001', user: 'John Doe', item: 'Organic Spices Bulk', amount: '$4,500', date: '2 mins ago', status: 'Pending' },
  { id: 2, refId: 'QT-2024-002', user: 'Mike Johnson', item: 'Handmade Pottery Set', amount: '$1,200', date: '3 hours ago', status: 'Review' },
  { id: 3, refId: 'QT-2024-003', user: 'Global Traders', item: 'Textiles Shipment', amount: '$8,900', date: '5 hours ago', status: 'Approved' },
  { id: 4, refId: 'QT-2024-004', user: 'Sarah Smith', item: 'Ceramic Vases', amount: '$850', date: '1 day ago', status: 'Rejected' },
  { id: 5, refId: 'QT-2024-005', user: 'Aman Gupta', item: 'Agricultural Tools', amount: '$3,200', date: '2 days ago', status: 'Pending' },
];

const TableToolbar = ({ title, showViewAll = true }: { title: string, showViewAll?: boolean }) => (
  <Box sx={{ p: 3, borderBottom: '1px solid', borderColor: 'divider' }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, flexWrap: 'wrap', gap: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 700 }}>{title}</Typography>
      {showViewAll && (
        <Button
          component={NextLink}
          href={adminRoutes.quotePage}
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
export default function Quotes({ showViewAll = false }: QuotesProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {/* Recent Quotes Section */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
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
            <TableToolbar title="All Quotes" showViewAll={showViewAll} />
            <TableContainer>
              <Table sx={{ minWidth: 800 }} aria-label="recent quotes table">
                <TableHead sx={{ bgcolor: 'grey.50' }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600 }}>Quote ID</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>User</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Product</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Amount</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Date</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 600 }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recentQuotes.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell sx={{ fontWeight: 500, color: 'primary.main' }}>
                        {row.refId}
                      </TableCell>
                      <TableCell sx={{ fontWeight: 500 }}>
                        {row.user}
                      </TableCell>
                      <TableCell>{row.item}</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>{row.amount}</TableCell>
                      <TableCell sx={{ color: 'text.secondary' }}>{row.date}</TableCell>
                      <TableCell>
                        <Chip
                          label={row.status}
                          size="small"
                          sx={{
                            fontWeight: 600,
                            bgcolor: row.status === 'Pending' ? 'warning.light' :
                              row.status === 'Approved' ? 'success.light' :
                                row.status === 'Review' ? 'info.light' : 'error.light',
                            color: row.status === 'Pending' ? 'warning.dark' :
                              row.status === 'Approved' ? 'success.dark' :
                                row.status === 'Review' ? 'info.dark' : 'error.dark'
                          }}
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
    </>
  )
}
