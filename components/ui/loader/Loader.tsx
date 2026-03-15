'use client'

import { Box, CircularProgress, Typography, CircularProgressProps, keyframes } from '@mui/material'

const pulseAnimation = keyframes`
  0% { opacity: 0.6; transform: scale(0.98); }
  50% { opacity: 1; transform: scale(1); }
  100% { opacity: 0.6; transform: scale(0.98); }
`

interface LoaderProps extends CircularProgressProps {
    text?: string
    minHeight?: number | string
}

export default function Loader({ text = "Loading...", minHeight = 200, ...props }: LoaderProps) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: minHeight,
                width: '100%',
                animation: `${pulseAnimation} 1.5s ease-in-out infinite`,
            }}
        >
            <CircularProgress
                sx={{
                    color: '#7FAF0D', // $colorPrimary
                    mb: 1.5
                }}
                size={40}
                thickness={4}
                {...props}
            />
            {text && (
                <Typography
                    variant="body2"
                    sx={{
                        color: '#054934', // $colorSecondary
                        fontWeight: 600,
                        letterSpacing: '0.5px'
                    }}
                >
                    {text}
                </Typography>
            )}
        </Box>
    )
}
