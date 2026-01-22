'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  Avatar,
  Menu,
  MenuItem,
  Stack,
  Icon,
  InputBase,
  IconButton,
  Badge
} from '@mui/material';
import { pages } from '@/lib/constants';



export default function Header() {
  const pathname = usePathname();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: '#ffffff', color: 'text.primary', boxShadow: '0px 1px 15px rgba(0,0,0,0.04)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: '80px', gap: 2 }}>

          {/* Logo Section */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Icon sx={{ color: 'primary.main', fontSize: '2rem !important' }}>admin_panel_settings</Icon>
            <Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <Typography
                variant="h6"
                noWrap
                component={Link}
                href="/admin/gse/admin/dashboard"
                sx={{
                  fontWeight: 800,
                  color: 'primary.main',
                  textDecoration: 'none',
                  letterSpacing: '.05rem',
                  fontSize: '1.2rem',
                  lineHeight: 1
                }}
              >
                GLOBAL
              </Typography>
              <Typography
                variant="caption"
                noWrap
                sx={{
                  fontWeight: 600,
                  color: 'secondary.main',
                  fontSize: '0.65rem',
                  letterSpacing: '.1rem',
                }}
              >
                SOURCE EXPORT
              </Typography>
            </Box>
          </Box>

          {/* Search Bar (Professional Touch) */}
          <Box
            sx={{
              display: { xs: 'none', lg: 'flex' },
              alignItems: 'center',
              bgcolor: 'grey.100',
              px: 2,
              py: 0.5,
              borderRadius: '50px',
              width: '300px',
              transition: 'all 0.3s',
              '&:focus-within': {
                bgcolor: 'grey.200',
                width: '350px',
              }
            }}
          >
            <Icon sx={{ color: 'text.secondary', fontSize: '1.2rem !important' }}>search</Icon>
            <InputBase
              placeholder="Search resources..."
              sx={{ ml: 1, flex: 1, fontSize: '0.9rem' }}
            />
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {pages.map((page) => {
              const isActive = pathname === page.path;
              return (
                <Button
                  key={page.name}
                  component={Link}
                  href={page.path}
                  startIcon={<Icon sx={{ fontSize: '1.2rem !important' }}>{page.icon}</Icon>}
                  sx={{
                    my: 1,
                    px: 2,
                    color: isActive ? 'primary.main' : 'text.secondary',
                    bgcolor: isActive ? 'primary.light' : 'transparent',
                    fontWeight: isActive ? 700 : 500,
                    textTransform: 'none',
                    fontSize: '0.9rem',
                    borderRadius: '8px',
                    '&:hover': {
                      bgcolor: isActive ? 'primary.light' : 'grey.50',
                      color: 'primary.main'
                    },
                    '&:hover .material-icons': {
                      color: 'primary.main'
                    }
                  }}
                >
                  {page.name}
                </Button>
              )
            })}
          </Box>

          {/* User Settings & Notifications */}
          <Box sx={{ flexGrow: 0 }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <IconButton size="small" sx={{ color: 'text.secondary' }}>
                <Badge badgeContent={4} color="error">
                  <Icon>notifications</Icon>
                </Badge>
              </IconButton>

              <Box sx={{ textAlign: 'right', display: { xs: 'none', sm: 'block' }, mr: 1, ml: 2 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, lineHeight: 1.2 }}>Admin User</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', lineHeight: 1 }}>Super Admin</Typography>
              </Box>
              <Button onClick={handleOpenUserMenu} sx={{ p: 0, minWidth: 'auto', borderRadius: '50%' }}>
                <Avatar sx={{ bgcolor: 'secondary.main', width: 40, height: 40 }}>A</Avatar>
              </Button>
            </Stack>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              PaperProps={{
                sx: {
                  mt: 1.5,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  borderRadius: '12px'
                }
              }}
            >
              <MenuItem onClick={handleCloseUserMenu} sx={{ gap: 2, minWidth: '150px' }}>
                <Icon sx={{ color: 'text.secondary' }}>person</Icon>
                <Typography>Profile</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu} sx={{ gap: 2 }}>
                <Icon sx={{ color: 'text.secondary' }}>settings</Icon>
                <Typography>Settings</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu} sx={{ gap: 2 }}>
                <Icon color="error">logout</Icon>
                <Typography color="error">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
