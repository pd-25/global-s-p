'use client';

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
  TableRow
} from '@mui/material';

// Mock Data
const stats = [
  { label: 'Total Products', value: '1,234', color: '#7faf0d', percentage: '+12%' },
  { label: 'Active Leads', value: '56', color: '#014b35', percentage: '+5%' },
  { label: 'New Requests', value: '12', color: '#ff9800', percentage: '+2%' },
  { label: 'Total Categories', value: '24', color: '#2196f3', percentage: '0%' },
];

const recentActivity = [
  { id: 1, user: 'John Doe', action: 'Requested Quote', item: 'Organic Spices', date: '2 mins ago', status: 'Pending' },
  { id: 2, user: 'Sarah Smith', action: 'New Registration', item: '-', date: '1 hour ago', status: 'Approved' },
  { id: 3, user: 'Mike Johnson', action: 'Added Product', item: 'Handmade Pottery', date: '3 hours ago', status: 'Review' },
  { id: 4, user: 'Emily Brown', action: 'Updated Profile', item: '-', date: '1 day ago', status: 'Completed' },
  { id: 5, user: 'Aman Gupta', action: 'Requested Quote', item: 'Textiles', date: '2 days ago', status: 'Pending' },
];

export default function DashboardAdmin() {
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
        <Button variant="contained" color="secondary">
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
            <Box sx={{ p: 3, borderBottom: '1px solid', borderColor: 'divider' }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>Recent Activity</Typography>
            </Box>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="recent activity table">
                <TableHead sx={{ bgcolor: 'grey.50' }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600 }}>User</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Action</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Subject</TableCell>
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
                      <TableCell>{row.item}</TableCell>
                      <TableCell sx={{ color: 'text.secondary' }}>{row.date}</TableCell>
                      <TableCell>
                        <Chip
                          label={row.status}
                          size="small"
                          sx={{
                            fontWeight: 600,
                            bgcolor: row.status === 'Pending' ? 'warning.light' :
                              row.status === 'Approved' ? 'success.light' :
                                row.status === 'Completed' ? 'info.light' : 'grey.200',
                            color: row.status === 'Pending' ? 'warning.dark' :
                              row.status === 'Approved' ? 'success.dark' :
                                row.status === 'Completed' ? 'info.dark' : 'text.secondary'
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

    </Container>
  );
}
