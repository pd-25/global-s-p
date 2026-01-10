'use client'

import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#7FAF0D',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#014B35',
      contrastText: '#ffffff',
    },
    error: {
      main: '#ff0000',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'var(--font-montserrat), sans-serif',
    // Global typography styles
    h1: {
      lineHeight: 1.2,
      fontWeight: 700,
      marginBottom: 0,
    },
    h2: {
      lineHeight: 1.53,
      fontWeight: 700,
      color: '#030303',
      marginBottom: '10px',
    },
    h3: {
      lineHeight: 1.5,
      fontWeight: 400,
      color: '#7FAF0D',
      marginBottom: 0,
    },
    h4: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 700,
      color: '#000000',
      marginBottom: '22px',
    },
    h5: {
      fontSize: '20px',
      lineHeight: '28px',
      fontWeight: 500,
      color: '#2c343a',
      marginBottom: '20px',
    },
    h6: {
      fontSize: '18px',
      lineHeight: '26px',
      fontWeight: 500,
    },
    body1: {
      fontSize: '20px',
      lineHeight: 1.5,
      fontWeight: 400,
      color: '#000000',
    },
    body2: {
      fontSize: '20px',
      lineHeight: 1.5,
      fontWeight: 400,
      color: '#014B35',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          // You can set a custom maxWidth here
          // maxWidth: '1400px', // Uncomment and set your desired width

          // Or use responsive breakpoints
          '@media (min-width: 600px)': {
            maxWidth: '600px',
          },
          '@media (min-width: 900px)': {
            maxWidth: '1200px',
          },
          '@media (min-width: 1200px)': {
            maxWidth: '100%',
            padding: '0 32px',
          },
        },
      },
      defaultProps: {
        // Set default maxWidth for all Container components
        maxWidth: 'xl', // Options: xs, sm, md, lg, xl, false
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          // Global button styles
          borderRadius: '10px',
          textTransform: 'none',
          fontWeight: 700,
          fontSize: '14px',
          minWidth: '180px',
          height: '44px',
          padding: '10px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        // Styles for contained variant
        contained: {
          '&:hover,&:focus': {
            boxShadow: 'none',
            color: '#ffffff',
          },
        },
        // Styles for outlined variant
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
        // Styles for text variant
        text: {
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
      defaultProps: {
        // Set default variant for all Button components
        // variant: 'contained', // Uncomment if you want all buttons to be contained by default
      },
    },
    MuiTypography: {
      styleOverrides: {
        // Only nested selectors and specific overrides here
        h1: {
          fontSize: '32px',
          '@media (min-width: 600px)': {
            fontSize: '36px',
          },
          '@media (min-width: 900px)': {
            fontSize: '40px',
          },
        },
        h2: {
          // Responsive font sizes
          fontSize: '28px', // Mobile default (xs)
          '@media (min-width: 600px)': {
            fontSize: '32px', // Small devices (sm)
          },
          '@media (min-width: 900px)': {
            fontSize: '36px', // Medium devices (md)
          },
          '@media (min-width: 1200px)': {
            fontSize: '40px', // Large devices (lg)
          },
          // Nested selectors
          '& span': {
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '34px',
            marginBottom: '20px',
          },
          '& strong': {
            fontWeight: 500,
          },
        },
        h3: {
          // Responsive font sizes
          fontSize: '22px', // Mobile default (xs)
          '@media (min-width: 600px)': {
            fontSize: '24px', // Small devices (sm)
          },
          '@media (min-width: 900px)': {
            fontSize: '26px', // Medium devices (md)
          },
          '@media (min-width: 1200px)': {
            fontSize: '30px', // Large devices (lg)
          },
        },
      },
    },
  },
})

export default theme
