'use client';

import React, { useEffect, useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Stack,
  Box,
  Icon,
  Typography,
  Chip,
  useTheme,
  Skeleton
} from '@mui/material';
import apiService from '@/service/apiService';
import { endpoints } from '@/config/adminEndpoints';

interface TopVisitedProduct {
  id: number;
  slug: string;
  title: string;
  total_views: number;
}

interface TopQuotedProduct {
  id: number;
  slug: string;
  title: string;
  total_quotes: number;
}

interface KpiData {
  summary: {
    total_active_products: number;
  };
  top_visited: TopVisitedProduct[];
  top_quoted: TopQuotedProduct[];
}

interface KpiResponse {
  success: boolean;
  message: string;
  data: KpiData;
  meta: any;
}

export default function ProductsKPI() {
  const theme = useTheme();
  const [loading, setLoading] = useState<boolean>(true);
  const [kpiData, setKpiData] = useState<KpiData | null>(null);

  useEffect(() => {
    const fetchKpis = async () => {
      try {
        setLoading(true);
        const response = await apiService.get<KpiResponse>(endpoints.products.kpis);
        if (response?.success && response?.data) {
          setKpiData(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch Product KPIs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchKpis();
  }, []);

  if (loading) {
    return (
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {[1, 2, 3].map((item) => (
          <Grid key={item} size={{ xs: 12, md: 4 }}>
            <Card elevation={0} sx={{ height: '100%', border: 1, borderColor: 'divider', borderRadius: 3 }}>
              <CardContent>
                <Skeleton variant="rectangular" height={100} sx={{ borderRadius: 2 }} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }

  if (!kpiData) {
    return null;
  }

  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      {/* KPI 1: Total Active Products */}
      <Grid size={{ xs: 12, md: 4 }}>
        <Card
          elevation={0}
          sx={{
            height: '100%',
            border: 1,
            borderColor: 'divider',
            borderRadius: 3,
            background: `linear-gradient(135deg, ${theme.palette.primary.main}15, ${theme.palette.background.paper})`
          }}
        >
          <CardContent>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: 2,
                  bgcolor: 'primary.light',
                  color: 'primary.dark'
                }}
              >
                <Icon>inventory_2</Icon>
              </Box>
              <Typography variant="overline" color="text.secondary" fontWeight="600">
                Total Active Products
              </Typography>
            </Stack>
            <Typography variant="h3" fontWeight="700" color="text.primary">
              {kpiData.summary.total_active_products.toLocaleString()}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* KPI 2: Top 5 Visited Products */}
      <Grid size={{ xs: 12, md: 4 }}>
        <Card
          elevation={0}
          sx={{
            height: '100%',
            border: 1,
            borderColor: 'divider',
            borderRadius: 3
          }}
        >
          <CardContent>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: 2,
                  bgcolor: 'info.light',
                  color: 'info.dark'
                }}
              >
                <Icon>visibility</Icon>
              </Box>
              <Typography variant="overline" color="text.secondary" fontWeight="600">
                Top Visited Products
              </Typography>
            </Stack>
            <Stack spacing={1.5}>
              {kpiData.top_visited.slice(0, 5).map((prod, idx) => (
                <Stack key={prod.id} direction="row" alignItems="center" justifyContent="space-between">
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ overflow: 'hidden' }}>
                    <Typography variant="body2" color="text.secondary" sx={{ minWidth: 20 }}>
                      #{idx + 1}
                    </Typography>
                    <Typography variant="body2" fontWeight="500" noWrap sx={{ maxWidth: 160 }} title={prod.title}>
                      {prod.title}
                    </Typography>
                  </Stack>
                  <Chip
                    label={`${prod.total_views.toLocaleString()} Views`}
                    size="small"
                    color="info"
                    variant="outlined"
                    sx={{ height: 20, fontSize: '0.65rem' }}
                  />
                </Stack>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Grid>

      {/* KPI 3: Top 5 Highest Quotes */}
      <Grid size={{ xs: 12, md: 4 }}>
        <Card
          elevation={0}
          sx={{
            height: '100%',
            border: 1,
            borderColor: 'divider',
            borderRadius: 3
          }}
        >
          <CardContent>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: 2,
                  bgcolor: 'warning.light',
                  color: 'warning.dark'
                }}
              >
                <Icon>star</Icon>
              </Box>
              <Typography variant="overline" color="text.secondary" fontWeight="600">
                Top Inquiry Products
              </Typography>
            </Stack>
            <Stack spacing={1.5}>
              {kpiData.top_quoted.slice(0, 5).map((prod, idx) => (
                <Stack key={prod.id} direction="row" alignItems="center" justifyContent="space-between">
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ overflow: 'hidden' }}>
                    <Typography variant="body2" color="text.secondary" sx={{ minWidth: 20 }}>
                      #{idx + 1}
                    </Typography>
                    <Typography variant="body2" fontWeight="500" noWrap sx={{ maxWidth: 160 }} title={prod.title}>
                      {prod.title}
                    </Typography>
                  </Stack>
                  <Chip
                    label={`${prod.total_quotes} Quotes`}
                    size="small"
                    color="warning"
                    variant="outlined"
                    sx={{ height: 20, fontSize: '0.65rem' }}
                  />
                </Stack>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
