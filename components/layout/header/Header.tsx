"use client"

import { useState } from "react"
import Link from "next/link"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import IconButton from "@mui/material/IconButton"
import Drawer from "@mui/material/Drawer"
import Icon from "@/components/ui/icon/Icon"
import styles from "./Header.module.css"
import Image from "next/image"
import logo from "@/public/global-sp-logo.svg"
import { navLinks } from "@/lib/constants"

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
        <Image src={logo} alt="logo" width={300} height={40} />
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
      <Container>
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
              maxWidth: { xs: 160, md: 300 },
            }}
          >
            <Link href="/" style={{ textDecoration: "none" }}>
              <Image
                src={logo}
                alt="logo"
                width={300}
                height={40}
                className="logo"
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
              <IconButton sx={{ color: "#ffffff" }} aria-label="language">
                <Icon name="translate" width={30} height={30} />
              </IconButton>
            </Box>
          </Box>

          {/* Mobile Icons and Menu Button */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              gap: 1,
            }}
          >
            <IconButton sx={{ color: "#ffffff" }} aria-label="notifications">
              <Icon name="notification" width={24} height={24} />
            </IconButton>
            <IconButton sx={{ color: "#ffffff" }} aria-label="user profile">
              <Icon name="user" width={24} height={24} />
            </IconButton>
            <IconButton sx={{ color: "#ffffff" }} aria-label="language">
              <Icon name="translate" width={24} height={24} />
            </IconButton>
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
