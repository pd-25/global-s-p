import { useMediaQuery, useTheme } from "@mui/material"

interface BreakpointConfig {
  [key: number]: number
}

/**
 * Custom hook to determine if slider navigation should be shown
 * @param itemCount - Total number of items in the slider
 * @param defaultSlidesPerView - Default slides per view (for xs breakpoint)
 * @param breakpoints - Breakpoint configuration object with numeric keys (e.g., { 640: 3, 768: 4 })
 * @returns Object with showNavigation boolean and currentSlidesPerView number
 */
export function useSliderNavigation(
  itemCount: number,
  defaultSlidesPerView: number,
  breakpoints?: BreakpointConfig
) {
  const theme = useTheme()
  
  // Use MUI breakpoints to detect current screen size
  const isUp640 = useMediaQuery(theme.breakpoints.up(640))
  const isUp768 = useMediaQuery(theme.breakpoints.up(768))
  const isUp992 = useMediaQuery(theme.breakpoints.up(992))
  const isUp1024 = useMediaQuery(theme.breakpoints.up(1024))
  const isUp1280 = useMediaQuery(theme.breakpoints.up(1280))
  const isUp1400 = useMediaQuery(theme.breakpoints.up(1400))

  // Calculate current slidesPerView based on breakpoint
  // Checks from largest to smallest to get the most specific match
  const getCurrentSlidesPerView = (): number => {
    if (!breakpoints) return defaultSlidesPerView

    // Check breakpoints from largest to smallest
    if (isUp1400 && breakpoints[1400] !== undefined) return breakpoints[1400]
    if (isUp1280 && breakpoints[1280] !== undefined) return breakpoints[1280]
    if (isUp1024 && breakpoints[1024] !== undefined) return breakpoints[1024]
    if (isUp992 && breakpoints[992] !== undefined) return breakpoints[992]
    if (isUp768 && breakpoints[768] !== undefined) return breakpoints[768]
    if (isUp640 && breakpoints[640] !== undefined) return breakpoints[640]

    // Default fallback
    return defaultSlidesPerView
  }

  const currentSlidesPerView = getCurrentSlidesPerView()
  const showNavigation = itemCount > currentSlidesPerView

  return {
    showNavigation,
    currentSlidesPerView,
  }
}
