import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
// Statistics section images
import StatisticsParralax from "@/public/home/home-statistics-parralax.png"
import StatisticsGlobe from "@/public/home/home-statistics-globe.png"
import StatisticsIcon1 from "@/public/home/home-statistics-icon-01.svg"
import StatisticsIcon2 from "@/public/home/home-statistics-icon-02.svg"
import StatisticsIcon3 from "@/public/home/home-statistics-icon-03.svg"
import StatisticsIcon4 from "@/public/home/home-statistics-icon-04.svg"
import StatisticsIcon5 from "@/public/home/home-statistics-icon-05.svg"
import { AnimateOnScroll } from "@/components/animations";
import { useEffect, useRef, useState } from "react";

// Custom hook for animated counter
function useCounter(
  end: number,
  duration: number = 2000,
  decimals: number = 1
) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true)
            let startTime: number | null = null
            const startValue = 0

            const animate = (currentTime: number) => {
              if (startTime === null) startTime = currentTime
              const progress = Math.min((currentTime - startTime) / duration, 1)

              // Easing function for smooth animation
              const easeOutQuart = 1 - Math.pow(1 - progress, 4)
              const currentCount =
                startValue + (end - startValue) * easeOutQuart

              setCount(parseFloat(currentCount.toFixed(decimals)))

              if (progress < 1) {
                requestAnimationFrame(animate)
              } else {
                setCount(end)
              }
            }

            requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [end, duration, decimals, hasStarted])

  return { count, elementRef }
}
export default function Statistics() {
    const { count: b2bCount, elementRef: b2bRef } = useCounter(2.2, 1000, 1)
  const { count: sectorsCount, elementRef: sectorsRef } = useCounter(
    111,
    1000,
    0
  )
  const { count: productsCount, elementRef: productsRef } = useCounter(
    670,
    1000,
    0
  )
  const { count: picturesCount, elementRef: picturesRef } = useCounter(
    1.3,
    1000,
    1
  )
  const { count: buyersCount, elementRef: buyersRef } = useCounter(1, 1000, 0)

  return (
    <Box
        component="section"
        className="statisticsWrapper"
        sx={{ position: "relative" }}
      >
        <Box className="statisticsParralax">
          <Image
            src={StatisticsParralax}
            alt="statistics-bg"
            width={1000}
            height={1080}
          />
        </Box>
        <Box className="statisticsGlobe">
          <Image
            src='https://d18yn9dcojt05d.cloudfront.net/apps/visable-dev/homepage-frontend/_nuxt/quotes_backgrade.BNzaFa3U.gif'
            alt="statistics-globe"
            width={360}
            height={360}
            unoptimized={true}
          />
        </Box>
        <Box className="container">
          <Box
            className="statisticsContent"
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 2,
            }}
          >
            {/* statistics-item */}
            <AnimateOnScroll animation="fade-in" delay={0.1}>
              <Box className="statisticsItem">
                <Box className="statisticsItemIcon">
                  <Image
                    src={StatisticsIcon1}
                    alt="statistics-icon"
                    width={34}
                    height={34}
                  />
                </Box>
                <Box className="statisticsItemContent" ref={b2bRef}>
                  <Typography variant="h3" component="h3">
                    {b2bCount} <span>Million </span>
                  </Typography>
                  <Typography variant="body1" component="p">
                    B2B Providers
                  </Typography>
                </Box>
              </Box>
            </AnimateOnScroll>
            {/* statistics-item */}
            <AnimateOnScroll animation="fade-up" delay={0.2}>
              <Box className="statisticsItem">
                <Box className="statisticsItemIcon">
                  <Image
                    src={StatisticsIcon2}
                    alt="statistics-icon"
                    width={34}
                    height={34}
                  />
                </Box>
                <Box className="statisticsItemContent" ref={sectorsRef}>
                  <Typography variant="h3" component="h3">
                    {Math.round(sectorsCount)}
                  </Typography>
                  <Typography variant="body1" component="p">
                    Industry Sectors
                  </Typography>
                </Box>
              </Box>
            </AnimateOnScroll>
            {/* statistics-item */}

            {/* statistics-item */}
            <AnimateOnScroll animation="fade-up" delay={0.3}>
              <Box className="statisticsItem">
                <Box className="statisticsItemIcon">
                  <Image
                    src={StatisticsIcon3}
                    alt="statistics-icon"
                    width={34}
                    height={34}
                  />
                </Box>
                <Box className="statisticsItemContent" ref={productsRef}>
                  <Typography variant="h3" component="h3">
                    {Math.round(productsCount)}.000
                  </Typography>
                  <Typography variant="body1" component="p">
                    Products
                  </Typography>
                </Box>
              </Box>
            </AnimateOnScroll>
            {/* statistics-item */}

            {/* statistics-item */}
            <AnimateOnScroll animation="fade-up" delay={0.4}>
              <Box className="statisticsItem">
                <Box className="statisticsItemIcon">
                  <Image
                    src={StatisticsIcon4}
                    alt="statistics-icon"
                    width={34}
                    height={34}
                  />
                </Box>
                <Box className="statisticsItemContent" ref={picturesRef}>
                  <Typography variant="h3" component="h3">
                    {picturesCount} <span>Million</span>
                  </Typography>
                  <Typography variant="body1" component="p">
                    Pictures & Video
                  </Typography>
                </Box>
              </Box>
            </AnimateOnScroll>
            {/* statistics-item */}

            {/* statistics-item */}
            <AnimateOnScroll animation="fade-up" delay={0.5}>
              <Box className="statisticsItem">
                <Box className="statisticsItemIcon">
                  <Image
                    src={StatisticsIcon5}
                    alt="statistics-icon"
                    width={34}
                    height={34}
                  />
                </Box>
                <Box className="statisticsItemContent" ref={buyersRef}>
                  <Typography variant="h3" component="h3">
                    {Math.round(buyersCount)} <span>Million</span>
                  </Typography>
                  <Typography variant="body1" component="p">
                    Buyers per month
                  </Typography>
                </Box>
              </Box>
            </AnimateOnScroll>
            {/* statistics-item */}
          </Box>
          <Box className="actionBtn" sx={{ textAlign: "center", mt: 4 }}>
            <Button variant="contained" href="/">
              Get Multiple Quotes
            </Button>
          </Box>
        </Box>
      </Box>
  )
}
