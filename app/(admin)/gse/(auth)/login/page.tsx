'use client'

import React, { useState } from 'react'
import {
  Box,
  Button,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  IconButton,
  Paper,
  Stack,
  Link as MuiLink,
} from '@mui/material'
import Image from 'next/image'
import Icon from '@/components/ui/icon'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        bgcolor: '#FFFFFF',
      }}
    >
      {/* Left Side - Branding Section (Hidden on mobile) */}
      <Box
        sx={{
          flex: 1,
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          bgcolor: 'secondary.main', // Using theme's dark green
          p: 8,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative Circle */}
        <Box
          sx={{
            position: 'absolute',
            top: '-10%',
            right: '-10%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            bgcolor: 'rgba(255, 255, 255, 0.05)',
          }}
        />

        <Stack spacing={4} sx={{ position: 'relative', zIndex: 1, color: 'common.white' }}>
          <Box sx={{ mb: 2 }}>
            {/* Placeholder for Logo if available, using text for now */}
            <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 1 }}>
              GLOBAL
            </Typography>
            <Typography variant="h3" sx={{ color: 'common.white', fontWeight: 300, letterSpacing: 1 }}>
              SOURCE EXPORT
            </Typography>
          </Box>

          <Typography variant="h4" sx={{ color: 'rgba(255, 255, 255, 0.9)', maxWidth: '400px', fontWeight: 400 }}>
            Manage your marketplace efficiently with our powerful admin dashboard.
          </Typography>

          <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
            <Box sx={{ p: 2, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 2 }}>
              <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 700, mb: 0 }}>15k+</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>Active Sellers</Typography>
            </Box>
            <Box sx={{ p: 2, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 2 }}>
              <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 700, mb: 0 }}>50k+</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>Products Listed</Typography>
            </Box>
          </Box>
        </Stack>
      </Box>

      {/* Right Side - Login Form */}
      <Box
        sx={{
          flex: { xs: '1', md: '0 0 550px' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: { xs: 4, sm: 6, md: 8 },
        }}
      >
        <Box sx={{ width: '100%', maxWidth: '400px' }}>
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography variant="h4" sx={{
              color: 'secondary.main',
              fontWeight: 700,
              mb: 1
            }}>
              Welcome Back!
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Please login to access your dashboard.
            </Typography>
          </Box>

          <form>
            <Stack spacing={3}>
              <Box>
                <Typography component="label" sx={{ display: 'block', mb: 1, fontWeight: 600, color: 'text.primary' }}>
                  Email Address
                </Typography>
                <TextField
                  fullWidth
                  placeholder="admin@globalsourceexport.com"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {/* <Email color="action" /> */}
                         <Icon name="email" width={20} height={20} />
                      </InputAdornment>
                    ),
                    sx: { borderRadius: '10px' }
                  }}
                />
              </Box>

              <Box>
                <Typography component="label" sx={{ display: 'block', mb: 1, fontWeight: 600, color: 'text.primary' }}>
                  Password
                </Typography>
                <TextField
                  fullWidth
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {/* <Lock color="action" /> */}
                         <Icon name="lock" width={20} height={20} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ?  <Icon name="visibilityOff" width={20} height={20} /> : <Icon name="visibility" width={20} height={20} />}
                        </IconButton>
                      </InputAdornment>
                    ),
                    sx: { borderRadius: '10px' }
                  }}
                />
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label={<Typography variant="body2">Remember me</Typography>}
                />
                <MuiLink href="#" underline="hover" sx={{ color: 'primary.main', fontWeight: 600, fontSize: '0.875rem' }}>
                  Forgot Password?
                </MuiLink>
              </Box>

              <Button
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  py: 1.5,
                  fontSize: '1rem',
                  textTransform: 'none',
                  boxShadow: '0 4px 12px rgba(127, 175, 13, 0.4)', // Using primary color shadow
                }}
              >
                Log In
              </Button>
            </Stack>
          </form>

          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              &copy; {new Date().getFullYear()} Global Source Export. All rights reserved.
            </Typography>
          </Box>

        </Box>
      </Box>
    </Box>
  )
}
