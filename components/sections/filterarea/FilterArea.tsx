'use client'
import { useState, useEffect } from "react"
import Image from "next/image"
import NextLink from "next/link"
import {
    Box,
    Typography,
    Stack,
    Button,
    IconButton,
    TextField,
    FormControlLabel,
    FormGroup,
    Checkbox,
    List,
    ListItem,
    ListItemText,
    Slider,
    LinearProgress,
    FormControl,
    RadioGroup,
    Radio,
} from "@mui/material"
import Icon from "@/components/ui/icon/Icon"
import Loader from "@/components/ui/loader/Loader"
import apiService from "@/service/apiService"
import { websiteEndpoints } from "@/config/websiteEndpoints"
import { routes } from "@/config/routes"
import type { CategoryWithSubcategories, CategoryWiseSubcategoriesResponse } from "@/interfaces/interface"

import arrowDownIcon from "@/public/chevron-bottom.svg"
import flagGermanyIcon from "@/public/flag/germany.svg"
import flagTurkeyIcon from "@/public/flag/turkey.svg"
import flagSpainIcon from "@/public/flag/spain.svg"
import flagFranceIcon from "@/public/flag/france.svg"
import flagItalyIcon from "@/public/flag/italy.svg"



export default function FilterArea() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const toggleSideBar = () => setSidebarOpen((prev) => !prev)

    const [location, setLocation] = useState("")
    const [radius, setRadius] = useState(50)

    const [categories, setCategories] = useState<CategoryWithSubcategories[]>([])
    const [categoriesExpanded, setCategoriesExpanded] = useState(false)
    const [loadingCategories, setLoadingCategories] = useState(true)

    async function fetchCategories() {
        try {
            const res = await apiService.get<CategoryWiseSubcategoriesResponse>(websiteEndpoints.categoryWiseSubcategories)
            if (res?.data) {
                setCategories(res.data)
            }
        } catch (err) {
            console.error("Failed to fetch categories:", err)
        } finally {
            setLoadingCategories(false)
        }
    }
    useEffect(() => {

        fetchCategories()
    }, [])

    return (
        <Box
            component="aside"
            className={`sidebar ${sidebarOpen ? "sidebarToggled" : ""}`}
            sx={{
                flex: {
                    xs: "1 1 100%",
                    sm: "1 1 calc(100% - 0px)",
                    md: "1 1 calc(25% - 32px)",
                    lg: "1 1 calc(25% - 24px)",
                },
                minWidth: 0,
            }}
        >
            <Box className="sidebarContent">
                <Typography
                    variant="h3"
                    className="sidebarTitle"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    Filters
                    <Icon
                        name="filter"
                        width={24}
                        height={24}
                        style={{ marginBottom: "0" }}
                    />
                </Typography>
                <Box className="siderBarListHolder">
                    <IconButton
                        className="closeButton"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <Icon
                            name="close"
                            width={35}
                            height={35}
                            style={{ marginBottom: "0" }}
                        />
                    </IconButton>
                    <Box className="widget categoryWidget">
                        <Typography variant="h3" className="widgetTitle">
                            Categories
                        </Typography>
                        <Box
                            className="widgetContent"
                            sx={{
                                maxHeight: categoriesExpanded ? '800px' : '280px',
                                overflowY: 'auto',
                                transition: 'max-height 0.4s ease-in-out',
                                pr: 1, // Add persistent padding so thumb scrollbar doesn't clip content
                                '&::-webkit-scrollbar': {
                                    width: '4px',
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    backgroundColor: '#ccc',
                                    borderRadius: '4px',
                                },
                            }}
                        >
                            {loadingCategories ? (
                                <Loader minHeight={180} text="Loading categories..." />
                            ) : (
                                categories.map((category) => (
                                    <Box className="categoryItem" key={category.id} sx={{ mb: 2 }}>
                                        <Typography variant="h4" className="categoryItemTitle">
                                            <NextLink
                                                href={routes.serviceProductListPage.replace("[categoryId]", category.slug)}
                                                style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
                                            >
                                                {category.name}
                                            </NextLink>
                                        </Typography>
                                        <List className="categoryItemList">
                                            {category.subcategories.map((sub) => (
                                                <ListItem key={sub.id} disablePadding sx={{ pb: 0.5 }}>
                                                    <NextLink
                                                        href={routes.serviceProductListPage.replace("[categoryId]", sub.slug)}
                                                        style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
                                                    >
                                                        <ListItemText primary={sub.name} sx={{ m: 0 }} />
                                                    </NextLink>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Box>
                                ))
                            )}
                        </Box>
                        {categories.length > 0 && (
                            <Box
                                className="bottomIcon"
                                sx={{ cursor: 'pointer', mt: 1 }}
                                onClick={() => setCategoriesExpanded(!categoriesExpanded)}
                            >
                                <Image
                                    src={arrowDownIcon}
                                    alt="arrow-down"
                                    width={28}
                                    height={28}
                                    style={{
                                        transform: categoriesExpanded ? 'rotate(180deg)' : 'none',
                                        transition: 'transform 0.3s ease',
                                    }}
                                />
                            </Box>
                        )}
                    </Box>
                    <Box className="widget supplierWidget">
                        <Typography variant="h3" className="widgetTitle">
                            Supplier
                        </Typography>
                        <Box className="widgetContent">
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label={
                                        <Stack
                                            direction="row"
                                            spacing={1}
                                            alignItems="center"
                                        >
                                            <span>Packaging Products (648)</span>
                                        </Stack>
                                    }
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label={
                                        <Stack
                                            direction="row"
                                            spacing={1}
                                            alignItems="center"
                                        >
                                            <span>Packaging Aids (74)</span>
                                        </Stack>
                                    }
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label={
                                        <Stack
                                            direction="row"
                                            spacing={1}
                                            alignItems="center"
                                        >
                                            <span>Packaging Machinery (Other) (44)</span>
                                        </Stack>
                                    }
                                />
                            </FormGroup>
                        </Box>

                        <Box className="bottomIcon">
                            <Image
                                src={arrowDownIcon}
                                alt="arrow-down"
                                width={28}
                                height={28}
                            />
                        </Box>
                    </Box>
                    <Box className="widget supplierWidget">
                        <Typography variant="h3" className="widgetTitle">
                            Supplier country
                        </Typography>
                        <Box className="widgetContent">
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label={
                                        <Stack
                                            direction="row"
                                            spacing={1}
                                            alignItems="center"
                                        >
                                            <Image
                                                src={flagGermanyIcon}
                                                alt="Printable"
                                                width={24}
                                                height={24}
                                            />
                                            <span>Germany (506)</span>
                                        </Stack>
                                    }
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label={
                                        <Stack
                                            direction="row"
                                            spacing={1}
                                            alignItems="center"
                                        >
                                            <Image
                                                src={flagTurkeyIcon}
                                                alt="Printable"
                                                width={24}
                                                height={24}
                                            />
                                            <span>Türkiye (200)</span>
                                        </Stack>
                                    }
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label={
                                        <Stack
                                            direction="row"
                                            spacing={1}
                                            alignItems="center"
                                        >
                                            <Image
                                                src={flagSpainIcon}
                                                alt="Printable"
                                                width={24}
                                                height={24}
                                            />
                                            <span>Spain (93)</span>
                                        </Stack>
                                    }
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label={
                                        <Stack
                                            direction="row"
                                            spacing={1}
                                            alignItems="center"
                                        >
                                            <Image
                                                src={flagFranceIcon}
                                                alt="Printable"
                                                width={24}
                                                height={24}
                                            />
                                            <span>France (89)</span>
                                        </Stack>
                                    }
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label={
                                        <Stack
                                            direction="row"
                                            spacing={1}
                                            alignItems="center"
                                        >
                                            <Image
                                                src={flagItalyIcon}
                                                alt="Printable"
                                                width={24}
                                                height={24}
                                            />
                                            <span>Italy (66)</span>
                                        </Stack>
                                    }
                                />
                            </FormGroup>
                        </Box>
                        <Box className="nearMeWidget">
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                sx={{ marginBottom: "16px" }}
                            >
                                <Typography variant="h3" className="widgetTitle" sx={{ marginBottom: "0 !important" }}>
                                    Near me
                                </Typography>
                                <Button
                                    variant="text"
                                    sx={{
                                        color: "#7FAF0D",
                                        fontSize: "14px",
                                        textTransform: "none",
                                        minWidth: "auto",
                                        padding: "0",
                                        height: "auto",
                                    }}
                                    onClick={() => {
                                        setLocation("")
                                        setRadius(50)
                                    }}
                                >
                                    Reset
                                </Button>
                            </Stack>
                            <Box className="widgetContent">
                                <TextField
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    placeholder="City or postal code"
                                    fullWidth
                                    label="Enter your location"
                                    sx={{
                                        marginBottom: "16px",
                                        "& .MuiOutlinedInput-root": {
                                            fontSize: "18px",
                                            padding: "12px",
                                            borderRadius: "8px",
                                            height: "48px",
                                            backgroundColor: "rgba(255,255,255,0.4)",
                                            "& fieldset": {
                                                borderColor: "#ddd",
                                                borderRadius: "8px",
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "#bbb",
                                            },
                                            "& input": {
                                                color: "#000000",
                                                padding: "8px",
                                                "&::placeholder": {
                                                    color: "#999",
                                                    opacity: 1,
                                                },
                                            },
                                        },
                                    }}
                                />
                                <Button
                                    variant="text"
                                    className="useMyLocationButton"
                                    sx={{
                                        color: "#7FAF0D",
                                        fontSize: "14px",
                                        textTransform: "none",
                                        marginBottom: "24px",
                                        padding: "0",
                                        justifyContent: "flex-start",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        height: "auto",

                                    }}
                                >
                                    <Icon
                                        name="location"
                                        width={18}
                                        height={18}
                                        style={{ marginBottom: "0" }}
                                    />
                                    Use my location
                                </Button>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        marginBottom: "12px",
                                        fontWeight: "500",
                                        color: "#333",
                                    }}
                                >
                                    Radius(km):
                                </Typography>
                                <Slider
                                    value={radius}
                                    onChange={(e, newValue) =>
                                        setRadius(newValue as number)
                                    }
                                    min={10}
                                    max={100}
                                    step={15}
                                    marks={[
                                        { value: 10, label: "10" },
                                        { value: 25, label: "25" },
                                        { value: 50, label: "50" },
                                        { value: 75, label: "75" },
                                        { value: 100, label: "100" },
                                    ]}
                                    valueLabelDisplay="auto"
                                    sx={{
                                        "& .MuiSlider-rail": {
                                            backgroundColor: "#ddd",
                                            height: "4px",
                                        },
                                        "& .MuiSlider-track": {
                                            backgroundColor: "#7FAF0D",
                                            height: "4px",
                                        },
                                        "& .MuiSlider-thumb": {
                                            backgroundColor: "#7FAF0D",
                                            width: "18px",
                                            height: "18px",
                                            "&:hover": {
                                                boxShadow: "0 0 0 8px rgba(127, 175, 13, 0.16)",
                                            },
                                        },
                                        "& .MuiSlider-mark": {
                                            backgroundColor: "#bbb",
                                            width: "8px",
                                            height: "8px",
                                            borderRadius: "50%",
                                        },
                                        "& .MuiSlider-markLabel": {
                                            fontSize: "12px",
                                            marginTop: "8px",
                                        },
                                    }}
                                />
                            </Box>
                        </Box>
                        <Box className="bottomIcon">
                            <Image
                                src={arrowDownIcon}
                                alt="arrow-down"
                                width={28}
                                height={28}
                            />
                        </Box>
                    </Box>
                    <Box className="widget priceRangeWidget">
                        <Box className="priceRangeWidgetContent">
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                sx={{ marginBottom: "16px" }}
                            >
                                <Typography variant="h3" className="widgetTitle" sx={{ marginBottom: "0 !important" }}>
                                    Price range (EUR)
                                </Typography>
                                <Button
                                    variant="text"
                                    sx={{
                                        color: "#7FAF0D",
                                        fontSize: "14px",
                                        textTransform: "none",
                                        minWidth: "auto",
                                        padding: "0",
                                        height: "auto",
                                    }}
                                >
                                    Reset
                                </Button>
                            </Stack>

                            <Box className="priceRangeWidgetContentInner">
                                <FormControl className="priceRangeRadioGroup">
                                    <RadioGroup
                                        aria-labelledby="price-range-group-label"
                                        name="price-range-group"
                                    >
                                        <FormControlLabel
                                            value="lt5"
                                            control={<Radio />}
                                            sx={{ width: "100%", alignItems: "center", py: 1 }}
                                            label={
                                                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ width: "100%" }}>
                                                    <Stack direction="row" spacing={1} alignItems="center">
                                                        <span>{"< 5"}</span>
                                                        <Box component="span" sx={{ color: "#777" }}>(81)</Box>
                                                    </Stack>
                                                    <Box className="priceRangeProgress">
                                                        <LinearProgress
                                                            variant="determinate"
                                                            value={20}
                                                            sx={{
                                                                height: 10,
                                                                borderRadius: 8,
                                                                bgcolor: "#eee",
                                                                "& .MuiLinearProgress-bar": {
                                                                    backgroundColor: "#7FAF0D",
                                                                },
                                                            }}
                                                        />
                                                    </Box>
                                                </Stack>
                                            }
                                        />

                                        <FormControlLabel
                                            value="5-40"
                                            control={<Radio />}
                                            sx={{ width: "100%", alignItems: "center", py: 1 }}
                                            label={
                                                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ width: "100%" }}>
                                                    <Stack direction="row" spacing={1} alignItems="center">
                                                        <span>5 - 40</span>
                                                        <Box component="span" sx={{ color: "#777" }}>(58)</Box>
                                                    </Stack>
                                                    <Box className="priceRangeProgress" >
                                                        <LinearProgress
                                                            variant="determinate"
                                                            value={50}
                                                            sx={{
                                                                height: 10,
                                                                borderRadius: 8,
                                                                bgcolor: "#eee",
                                                                "& .MuiLinearProgress-bar": {
                                                                    backgroundColor: "#7FAF0D",
                                                                },
                                                            }}
                                                        />
                                                    </Box>
                                                </Stack>
                                            }
                                        />

                                        <FormControlLabel
                                            value="gte40"
                                            control={<Radio />}
                                            sx={{ width: "100%", alignItems: "center", py: 1 }}
                                            label={
                                                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ width: "100%" }}>
                                                    <Stack direction="row" spacing={1} alignItems="center">
                                                        <span>{"\u2265 40"}</span>
                                                        <Box component="span" sx={{ color: "#777" }}>(72)</Box>
                                                    </Stack>
                                                    <Box className="priceRangeProgress" >
                                                        <LinearProgress
                                                            variant="determinate"
                                                            value={70}
                                                            sx={{
                                                                height: 10,
                                                                borderRadius: 8,
                                                                bgcolor: "#eee",
                                                                "& .MuiLinearProgress-bar": {
                                                                    backgroundColor: "#7FAF0D",
                                                                },
                                                            }}
                                                        />
                                                    </Box>
                                                </Stack>
                                            }
                                        />
                                    </RadioGroup>
                                </FormControl>
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    gap={2}
                                    sx={{ marginBottom: "16px" }}
                                    className="priceRangeWidgetContentInnerInputs"
                                >
                                    <TextField
                                        placeholder="0"
                                        fullWidth
                                        label="Minimum"
                                        sx={{
                                            marginBottom: "16px",
                                            "& .MuiOutlinedInput-root": {
                                                fontSize: "18px",
                                                padding: "12px",
                                                borderRadius: "8px",
                                                height: "48px",
                                                backgroundColor: "rgba(255,255,255,0.4)",
                                                "& fieldset": {
                                                    borderColor: "#ddd",
                                                    borderRadius: "8px",
                                                },
                                                "&:hover fieldset": {
                                                    borderColor: "#bbb",
                                                },
                                                "& input": {
                                                    color: "#000000",
                                                    padding: "8px",
                                                    "&::placeholder": {
                                                        color: "#999",
                                                        opacity: 1,
                                                    },
                                                },
                                            },
                                        }}
                                    />
                                    <span>-</span>
                                    <TextField
                                        placeholder="10000"
                                        fullWidth
                                        label="Maximum"
                                        sx={{
                                            marginBottom: "16px",
                                            "& .MuiOutlinedInput-root": {
                                                fontSize: "18px",
                                                padding: "12px",
                                                borderRadius: "8px",
                                                height: "48px",
                                                backgroundColor: "rgba(255,255,255,0.4)",
                                                "& fieldset": {
                                                    borderColor: "#ddd",
                                                    borderRadius: "8px",
                                                },
                                                "&:hover fieldset": {
                                                    borderColor: "#bbb",
                                                },
                                                "& input": {
                                                    color: "#000000",
                                                    padding: "8px",
                                                    "&::placeholder": {
                                                        color: "#999",
                                                        opacity: 1,
                                                    },
                                                },
                                            },
                                        }}
                                    />
                                </Stack>
                            </Box>
                        </Box>
                        <Box className="bottomIcon">
                            <Image
                                src={arrowDownIcon}
                                alt="arrow-down"
                                width={28}
                                height={28}
                            />
                        </Box>
                    </Box>

                    <Box className="sidebarFooter">
                        <Button variant="contained" className="resetFiltersButton">
                            Reset Filters
                        </Button>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}
