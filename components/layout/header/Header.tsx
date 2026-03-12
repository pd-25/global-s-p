"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import Drawer from "@mui/material/Drawer"
import Icon from "@/components/ui/icon/Icon"
import LanguageSwitcher from "@/components/ui/language-switcher/LanguageSwitcher"
import styles from "./Header.module.css"
import Image from "next/image"
import logo from "@/public/gse-green-bg.svg"

import { navLinks } from "@/lib/constants"

const brandWords = ["Global", "Source", "Expo", "Ltd"] as const
const WORD_DELAY = 500 // ms between each word appearing

function AnimatedBrandText({
  fontSize,
  letterSpacing,
  flexDirection = 'column',
  gap = 0,
}: {
  fontSize: string | Record<string, string>
  letterSpacing: string | Record<string, string>
  flexDirection?: 'column' | 'row' | Record<string, string>
  gap?: number | string | Record<string, number | string>
}) {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    if (visibleCount < brandWords.length) {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1)
      }, WORD_DELAY)
      return () => clearTimeout(timer)
    }
  }, [visibleCount])

  return (
    <Typography
      component="span"
      sx={{
        fontWeight: 700,
        fontSize,
        letterSpacing,
        lineHeight: 1.1,
        display: 'flex',
        flexDirection,
        alignItems: { xs: 'flex-start', md: 'center' },
        gap,
      }}
    >
      <Box
        component="span"
        sx={{
          color: 'white',
          opacity: 0 < visibleCount ? 1 : 0,
          transform: 0 < visibleCount ? 'translateY(0)' : 'translateY(6px)',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
        }}
      >
        {brandWords[0]}
      </Box>
      <Box
        component="span"
        sx={{
          color: '#7FAF0D',
          opacity: 1 < visibleCount ? 1 : 0,
          transform: 1 < visibleCount ? 'translateY(0)' : 'translateY(6px)',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
        }}
      >
        {brandWords[1]}
      </Box>
      <Box component="span" sx={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
        <Box
          component="span"
          sx={{
            color: 'white',
            opacity: 2 < visibleCount ? 1 : 0,
            transform: 2 < visibleCount ? 'translateY(0)' : 'translateY(6px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          {brandWords[2]}
        </Box>
        <Box
          component="span"
          sx={{
            color: '#7FAF0D',
            opacity: 3 < visibleCount ? 1 : 0,
            transform: 3 < visibleCount ? 'translateY(0)' : 'translateY(6px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          {brandWords[3]}
        </Box>
      </Box>
    </Typography>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box sx={{ p: 3, backgroundColor: "#054934", height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Image src={logo} alt="logo" width={80} height={80} />
          <Box sx={{ width: '2px', height: '44px', bgcolor: '#7FAF0D', borderRadius: '1px', opacity: 0.6 }} />
          <AnimatedBrandText fontSize="14px" letterSpacing="2px" />
        </Box>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ color: "#ffffff" }}
          aria-label="close menu"
        >
          <Icon name="close" width={24} height={24} />
        </IconButton>
      </Box>
      <Stack direction="column" spacing={2}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={styles.mobileNavLink}
            onClick={handleDrawerToggle}
          >
            {link.name}
          </Link>
        ))}

        <Button variant="contained" component={Link} href="/connect">
          Connect with us
        </Button>
      </Stack>
    </Box>
  )

  return (
    <Box component="header" className={styles.header}>
      <Container sx={{ maxWidth: "100% !important", padding: "0 15px !important" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 2,
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: { xs: 40, md: 60 },
              maxWidth: { xs: 180, md: 400 },
            }}
          >
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: '8px', minWidth: 'max-content' }}>
              <Image
                src={logo}
                alt="logo"
                width={200}
                height={86}
                className="logo"
                style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "80px" }}
              />
              <Box sx={{ width: '2px', height: { xs: '36px', md: '52px' }, bgcolor: '#7FAF0D', borderRadius: '1px', opacity: 0.6 }} />
              <AnimatedBrandText
                fontSize={{ xs: '12px', md: '16px' }}
                letterSpacing={{ xs: '1.5px', md: '2.5px' }}
                flexDirection={{ xs: 'column', md: 'row' }}
                gap={{ xs: 0, md: '6px' }}
              />
            </Link>
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 3,
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={styles.navLink}
                style={{ fontWeight: 700, fontSize: "15px" }}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="contained" component={Link} href="/connect">
              Connect with us
            </Button>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <IconButton sx={{ color: "#ffffff" }} aria-label="notifications">
                <Icon name="notification" width={30} height={30} />
              </IconButton>
              <IconButton sx={{ color: "#ffffff" }} aria-label="user profile">
                <Icon name="user" width={30} height={30} />
              </IconButton>
              <LanguageSwitcher iconSize={30} />
            </Box>
          </Box>

          {/* Mobile Icons and Menu Button */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              gap: { xs: "0", md: "10px" },
            }}
          >
            <IconButton sx={{ color: "#ffffff" }} aria-label="user profile">
              <Icon name="user" width={24} height={24} />
            </IconButton>
            <LanguageSwitcher iconSize={24} />
            <IconButton
              sx={{ color: "#ffffff" }}
              onClick={handleDrawerToggle}
              aria-label="open menu"
            >
              <Icon name="menu" width={24} height={24} />
            </IconButton>
          </Box>
        </Box>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: { xs: "80%", sm: 400 },
            backgroundColor: "#054934",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  )
}
