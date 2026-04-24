'use client';

import { adminRoutes } from '@/config/routes';
import { leadTypes } from '@/lib/constants';
import { Box, Tab, Tabs } from '@mui/material';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

const leadSlugs = leadTypes.map((t) => t.toLowerCase());

export default function LeadsTabs() {
  const pathname = usePathname();

  const activeIndex = useMemo(() => {
    const slug = pathname.split('/').pop();
    const idx = leadSlugs.indexOf(slug ?? '');
    return idx === -1 ? 0 : idx;
  }, [pathname]);

  return (
    <Box
      sx={{
        borderBottom: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        borderRadius: '12px 12px 0 0',
        px: { xs: 1, sm: 2 },
      }}
    >
      <Tabs
        value={activeIndex}
        aria-label="Leads navigation tabs"
        sx={{
          minHeight: 52,
          '& .MuiTabs-indicator': {
            height: 3,
            borderRadius: '3px 3px 0 0',
            background: 'linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)',
          },
          '& .MuiTab-root': {
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '0.925rem',
            letterSpacing: '0.01em',
            minHeight: 52,
            px: 3,
            color: 'text.secondary',
            transition: 'color 0.2s ease, background-color 0.2s ease',
            borderRadius: '8px 8px 0 0',
            '&:hover': {
              color: 'text.primary',
              bgcolor: 'action.hover',
            },
            '&.Mui-selected': {
              color: '#6366f1',
              fontWeight: 700,
            },
          },
        }}
      >
        {leadTypes.map((label, idx) => (
          <Tab
            key={label}
            label={label}
            component={NextLink}
            href={`${adminRoutes.leadPage.replace('[leadType]', leadSlugs[idx])}`}
            prefetch={true}
            id={`leads-tab-${idx}`}
            aria-controls={`leads-tabpanel-${idx}`}
          />
        ))}
      </Tabs>
    </Box>
  );
}
