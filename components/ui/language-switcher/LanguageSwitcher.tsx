"use client"

import { useState } from "react"
import { useLocale } from "next-intl"
import { useRouter, usePathname } from "@/i18n/navigation"
import { locales, type Locale } from "@/i18n/routing"
import { languageList } from "@/lib/constants"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Icon from "@/components/ui/icon/Icon"

interface LanguageSwitcherProps {
    iconSize?: number
}

export default function LanguageSwitcher({ iconSize = 30 }: LanguageSwitcherProps) {
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
            <IconButton
                onClick={handleClick}
                sx={{ color: "#ffffff" }}
                aria-label="language"
                aria-controls={open ? "language-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                id="language-switcher-button"
            >
                <Icon name="translate" width={iconSize} height={iconSize} />
            </IconButton>
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
                        mt: 1,
                        borderRadius: "12px",
                        minWidth: 160,
                        bgcolor: "#054934",
                        border: "1px solid rgba(255,255,255,0.1)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                    },
                }}
            >
                {locales.map((loc) => (
                    <MenuItem
                        key={loc}
                        onClick={() => handleLocaleChange(loc)}
                        selected={locale === loc}
                        sx={{
                            py: 1.2,
                            px: 2.5,
                            color: "#ffffff",
                            "&.Mui-selected": {
                                bgcolor: "rgba(127, 175, 13, 0.2)",
                                color: "#7FAF0D",
                            },
                            "&:hover": {
                                bgcolor: "rgba(255,255,255,0.08)",
                            },
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: locale === loc ? 700 : 500,
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
                                        ml: "auto",
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
