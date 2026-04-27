"use client"

import { useState } from "react"
import { useLocale } from "next-intl"
import { useRouter, usePathname } from "@/i18n/navigation"
import { locales, type Locale } from "@/i18n/routing"
import { languageList } from "@/lib/constants"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Icon from "@/components/ui/icon/Icon"

interface LanguageSwitcherProps {
    iconSize?: number
}

export default function LanguageSwitcher({ iconSize = 24 }: LanguageSwitcherProps) {
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleLocaleChange = (newLocale: Locale) => {
        router.replace(pathname, { locale: newLocale })
        handleClose()
    }

    // Map locale codes to display names from languageList
    const getLanguageName = (code: string) => {
        const lang = languageList.find((l) => l.path === `/${code}`)
        return lang?.name ?? code.toUpperCase()
    }

    return (
        <>
            <Button
                onClick={handleClick}
                aria-label="language selector"
                aria-controls={open ? "language-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                id="language-switcher-button"
                disableElevation
                sx={{
                    minWidth: "auto",
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: 0.5, sm: 1 },
                    color: "#ffffff",
                    bgcolor: open ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid",
                    borderColor: open ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.1)",
                    borderRadius: "24px",
                    px: { xs: 1.2, sm: 2 },
                    py: { xs: 0.6, sm: 0.8 },
                    textTransform: "none",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                        bgcolor: "rgba(255, 255, 255, 0.2)",
                        borderColor: "rgba(255, 255, 255, 0.4)",
                        transform: "translateY(-1px)",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    },
                    "&:active": {
                        transform: "translateY(0)",
                    }
                }}
            >
                <Icon name="translate" width={iconSize * 0.8} height={iconSize * 0.8} />
                <Typography 
                    sx={{ 
                        fontSize: { xs: "13px", sm: "14px" }, 
                        fontWeight: 600, 
                        display: { xs: "none", sm: "block" },
                        letterSpacing: "0.3px"
                    }}
                >
                    {getLanguageName(locale)}
                </Typography>
                <ExpandMoreIcon 
                    sx={{ 
                        fontSize: 20, 
                        ml: { xs: 0, sm: 0.5 },
                        transform: open ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        opacity: 0.8,
                        display: { xs: "none", sm: "block" }
                    }} 
                />
            </Button>
            <Menu
                id="language-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "language-switcher-button",
                }}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                sx={{
                    "& .MuiPaper-root": {
                        mt: 1.5,
                        borderRadius: "16px",
                        minWidth: 200,
                        bgcolor: "#054934",
                        backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.08), rgba(255,255,255,0))",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        boxShadow: "0 12px 40px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.2)",
                        overflow: "visible",
                        "&::before": {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 24,
                            width: 12,
                            height: 12,
                            bgcolor: "#054934",
                            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
                            borderLeft: "1px solid rgba(255, 255, 255, 0.15)",
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                    "& .MuiList-root": {
                        py: 1,
                        px: 1,
                    }
                }}
            >
                {locales.map((loc) => (
                    <MenuItem
                        key={loc}
                        onClick={() => handleLocaleChange(loc)}
                        selected={locale === loc}
                        sx={{
                            my: 0.5,
                            py: 1.2,
                            px: 2,
                            borderRadius: "10px",
                            color: "rgba(255, 255, 255, 0.8)",
                            transition: "all 0.2s ease",
                            "&.Mui-selected": {
                                bgcolor: "rgba(127, 175, 13, 0.15)",
                                color: "#ffffff",
                                "&:hover": {
                                    bgcolor: "rgba(127, 175, 13, 0.25)",
                                }
                            },
                            "&:hover": {
                                bgcolor: "rgba(255,255,255,0.08)",
                                color: "#ffffff",
                                transform: "translateX(2px)",
                            },
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "center", width: "100%", gap: 1.5 }}>
                            <Box
                                sx={{
                                    width: 28,
                                    height: 28,
                                    borderRadius: "50%",
                                    bgcolor: locale === loc ? "#7FAF0D" : "rgba(255,255,255,0.08)",
                                    border: "1px solid",
                                    borderColor: locale === loc ? "#7FAF0D" : "rgba(255,255,255,0.1)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    transition: "all 0.2s ease",
                                }}
                            >
                                <Typography sx={{ fontSize: "10px", fontWeight: 700, color: locale === loc ? "#054934" : "#ffffff", letterSpacing: "0.5px" }}>
                                    {loc.toUpperCase()}
                                </Typography>
                            </Box>
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: locale === loc ? 600 : 500,
                                    flex: 1,
                                    letterSpacing: "0.2px",
                                }}
                            >
                                {getLanguageName(loc)}
                            </Typography>
                            {locale === loc && (
                                <Box
                                    sx={{
                                        width: 6,
                                        height: 6,
                                        borderRadius: "50%",
                                        bgcolor: "#7FAF0D",
                                        boxShadow: "0 0 8px #7FAF0D",
                                    }}
                                />
                            )}
                        </Box>
                    </MenuItem>
                ))}
            </Menu>
        </>
    )
}

