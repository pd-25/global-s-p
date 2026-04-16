'use client'

import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { PaletteMode } from '@mui/material'
import theme from '@/app/(website)/theme'

export const ColorModeContext = React.createContext({ toggleColorMode: () => { } })

export default function AdminThemeRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  const [mode, setMode] = React.useState<PaletteMode>('light')

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )

  const adminTheme = React.useMemo(
    () => {
      const isDark = mode === 'dark';
      return createTheme({
        ...theme,
        palette: {
          ...theme.palette,
          mode,
          ...(isDark
            ? {
              background: {
                default: '#121212',
                paper: '#1e1e1e',
              },
              text: {
                primary: '#ffffff',
                secondary: '#aaaaaa',
              },
              primary: {
                main: '#9CCC65', // Adjust for dark mode if needed
                contrastText: '#000000',
              },
            }
            : {
              background: {
                default: '#f5f5f5',
                paper: '#ffffff',
              },
            }),
        },
        typography: {
          ...theme.typography,
          allVariants: isDark ? { color: '#ffffff' } : undefined,
          ...(isDark ? {
            h1: { ...theme.typography.h1, color: '#ffffff' },
            h2: { ...theme.typography.h2, color: '#e0e0e0' },
            h3: { ...theme.typography.h3, color: '#9CCC65' },
            h4: { ...theme.typography.h4, color: '#ffffff' },
            h5: { ...theme.typography.h5, color: '#e0e0e0' },
            h6: { ...theme.typography.h6, color: '#ffffff' },
            body1: { ...theme.typography.body1, color: '#e0e0e0' },
            body2: { ...theme.typography.body2, color: '#aaaaaa' },
          } : {})
        },
      });
    },
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={adminTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
