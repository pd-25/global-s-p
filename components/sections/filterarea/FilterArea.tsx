'use client'
import { useState, useEffect, useRef, Suspense } from "react"
import Image from "next/image"
import NextLink from "next/link"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
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
} from "@mui/material"
import Icon from "@/components/ui/icon/Icon"
import Loader from "@/components/ui/loader/Loader"
import apiService from "@/service/apiService"
import { websiteEndpoints } from "@/config/websiteEndpoints"
import { routes } from "@/config/routes"
import type { CategoryWithSubcategories, CategoryWiseSubcategoriesResponse, ValuablePartner, ValuablePartnersResponse, Country, CountriesResponse, SupplierType, SupplierTypesResponse } from "@/interfaces/interface"

import arrowDownIcon from "@/public/chevron-bottom.svg"



export default function FilterArea() {
    return (
        <Suspense fallback={<Loader minHeight={300} text="Loading filters..." />}>
            <FilterAreaContent />
        </Suspense>
    )
}

function FilterAreaContent() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const updateQueryParams = (key: string, value: string | null) => {
        const params = new URLSearchParams(searchParams.toString())
        if (value) params.set(key, value)
        else params.delete(key)
        params.delete('page')
        router.push(`${pathname}?${params.toString()}`, { scroll: false })
    }

    const resetFilters = () => {
        const params = new URLSearchParams(searchParams.toString())
        params.delete('min_price')
        params.delete('max_price')
        params.delete('supplier_slug')
        params.delete('country_code')
        params.delete('supplier_type_slug')
        params.delete('page')
        router.push(`${pathname}?${params.toString()}`, { scroll: false })
        setSupplierSlugs([])
        setCountryCodes([])
        setSupplierTypeSlugs([])
        setPriceRange([0, 10000])
    }

    const handleCheckboxChange = (key: string, value: string) => {
        const currentParams = searchParams.get(key)?.split(',') || []
        const newParams = currentParams.includes(value) ? currentParams.filter(v => v !== value) : [...currentParams, value]
        updateQueryParams(key, newParams.length > 0 ? newParams.join(',') : null)
    }

    const handlePriceCommit = (event: React.SyntheticEvent | Event, newValue: number | number[]) => {
        const val = newValue as number[]
        setPriceRange(val)

        if (debounceRef.current) clearTimeout(debounceRef.current)
        debounceRef.current = setTimeout(() => {
            const params = new URLSearchParams(window.location.search)
            if (val[0] > 0) params.set('min_price', val[0].toString())
            else params.delete('min_price')

            if (val[1] < 10000) params.set('max_price', val[1].toString())
            else params.delete('max_price')

            params.delete('page')
            router.push(`${pathname}?${params.toString()}`, { scroll: false })
        }, 500)
    };

    const handleExactPriceUpdate = () => {
        if (debounceRef.current) clearTimeout(debounceRef.current)
        debounceRef.current = setTimeout(() => {
            const params = new URLSearchParams(window.location.search)
            if (priceRange[0] > 0) params.set('min_price', priceRange[0].toString())
            else params.delete('min_price')
            if (priceRange[1] < 10000) params.set('max_price', priceRange[1].toString())
            else params.delete('max_price')
            params.delete('page')
            router.push(`${pathname}?${params.toString()}`, { scroll: false })
        }, 500)
    }

    // SUPPLIER AND COUNTRY DEBOUNCE
    const [supplierSlugs, setSupplierSlugs] = useState<string[]>(searchParams.get('supplier_slug')?.split(',').filter(Boolean) || [])
    const [countryCodes, setCountryCodes] = useState<string[]>(searchParams.get('country_code')?.split(',').filter(Boolean) || [])
    const [supplierTypeSlugs, setSupplierTypeSlugs] = useState<string[]>(searchParams.get('supplier_type_slug')?.split(',').filter(Boolean) || [])
    const debounceRef = useRef<NodeJS.Timeout | null>(null)

    // Keep it synced with external URL changes
    useEffect(() => {
        setSupplierSlugs(searchParams.get('supplier_slug')?.split(',').filter(Boolean) || [])
        setCountryCodes(searchParams.get('country_code')?.split(',').filter(Boolean) || [])
        setSupplierTypeSlugs(searchParams.get('supplier_type_slug')?.split(',').filter(Boolean) || [])
    }, [searchParams])

    const handleSupplierChange = (slug: string) => {
        if (!slug || String(slug).trim() === "" || String(slug).toLowerCase() === "null") return;
        setSupplierSlugs(prev => {
            const newVals = prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]

            if (debounceRef.current) clearTimeout(debounceRef.current)
            debounceRef.current = setTimeout(() => {
                const params = new URLSearchParams(window.location.search)
                if (newVals.length > 0) params.set('supplier_slug', newVals.join(','))
                else params.delete('supplier_slug')
                params.delete('page')
                router.push(`${pathname}?${params.toString()}`, { scroll: false })
            }, 500)

            return newVals
        })
    }

    const handleCountryChange = (code: string) => {
        if (!code || String(code).trim() === "" || String(code).toLowerCase() === "null") return;
        setCountryCodes(prev => {
            const newVals = prev.includes(code) ? prev.filter(c => c !== code) : [...prev, code]

            if (debounceRef.current) clearTimeout(debounceRef.current)
            debounceRef.current = setTimeout(() => {
                const params = new URLSearchParams(window.location.search)
                if (newVals.length > 0) params.set('country_code', newVals.join(','))
                else params.delete('country_code')
                params.delete('page')
                router.push(`${pathname}?${params.toString()}`, { scroll: false })
            }, 500)

            return newVals
        })
    }

    const handleSupplierTypeChange = (slug: string) => {
        if (!slug || String(slug).trim() === "" || String(slug).toLowerCase() === "null") return;
        setSupplierTypeSlugs(prev => {
            const newVals = prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]

            if (debounceRef.current) clearTimeout(debounceRef.current)
            debounceRef.current = setTimeout(() => {
                const params = new URLSearchParams(window.location.search)
                if (newVals.length > 0) params.set('supplier_type_slug', newVals.join(','))
                else params.delete('supplier_type_slug')
                params.delete('page')
                router.push(`${pathname}?${params.toString()}`, { scroll: false })
            }, 500)

            return newVals
        })
    }

    const [sidebarOpen, setSidebarOpen] = useState(false)
    const toggleSideBar = () => setSidebarOpen((prev) => !prev)

    // const [location, setLocation] = useState("")
    // const [radius, setRadius] = useState(50)

    const initialMin = searchParams.get('min_price') ? Number(searchParams.get('min_price')) : 0
    const initialMax = searchParams.get('max_price') ? Number(searchParams.get('max_price')) : 10000
    const [priceRange, setPriceRange] = useState<number[]>([initialMin, initialMax])

    useEffect(() => {
        setPriceRange([
            searchParams.get('min_price') ? Number(searchParams.get('min_price')) : 0,
            searchParams.get('max_price') ? Number(searchParams.get('max_price')) : 10000
        ])
    }, [searchParams])

    const [categories, setCategories] = useState<CategoryWithSubcategories[]>([])
    const [categoriesExpanded, setCategoriesExpanded] = useState(false)
    const [suppliersExpanded, setSuppliersExpanded] = useState(false)
    const [loadingCategories, setLoadingCategories] = useState(true)

    const [suppliers, setSuppliers] = useState<ValuablePartner[]>([])
    const [loadingSuppliers, setLoadingSuppliers] = useState(true)

    const [countries, setCountries] = useState<Country[]>([])
    const [loadingCountries, setLoadingCountries] = useState(true)
    const [countriesExpanded, setCountriesExpanded] = useState(false)

    const [supplierTypes, setSupplierTypes] = useState<SupplierType[]>([])
    const [loadingSupplierTypes, setLoadingSupplierTypes] = useState(true)
    const [supplierTypesExpanded, setSupplierTypesExpanded] = useState(false)

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

    async function fetchSuppliers() {
        try {
            const cacheKey = "suppliers_data";
            const cached = localStorage.getItem(cacheKey);
            if (cached) {
                const { data, timestamp } = JSON.parse(cached);
                if (Date.now() - timestamp < 86400000) { // 24 hours
                    setSuppliers(data);
                    return;
                }
            }

            const res = await apiService.get<ValuablePartnersResponse>(websiteEndpoints.valuablePartners)
            if (res?.data) {
                setSuppliers(res.data)
                localStorage.setItem(cacheKey, JSON.stringify({ data: res.data, timestamp: Date.now() }));
            }
        } catch (err) {
            console.error("Failed to fetch suppliers:", err)
        } finally {
            setLoadingSuppliers(false)
        }
    }

    async function fetchCountries() {
        try {
            const cacheKey = "countries_data";
            const cached = localStorage.getItem(cacheKey);
            if (cached) {
                const { data, timestamp } = JSON.parse(cached);
                if (Date.now() - timestamp < 86400000) { // 24 hours
                    setCountries(data);
                    return;
                }
            }

            const res = await apiService.get<CountriesResponse>(websiteEndpoints.countries)
            if (res?.data) {
                setCountries(res.data)
                localStorage.setItem(cacheKey, JSON.stringify({ data: res.data, timestamp: Date.now() }));
            }
        } catch (err) {
            console.error("Failed to fetch countries:", err)
        } finally {
            setLoadingCountries(false)
        }
    }

    async function fetchSupplierTypes() {
        try {
            const cacheKey = "supplier_types_data";
            const cached = localStorage.getItem(cacheKey);
            if (cached) {
                const { data, timestamp } = JSON.parse(cached);
                if (Date.now() - timestamp < 86400000) { // 24 hours
                    setSupplierTypes(data);
                    return;
                }
            }

            const res = await apiService.get<SupplierTypesResponse>(websiteEndpoints.supplierTypes)
            if (res?.data) {
                setSupplierTypes(res.data)
                localStorage.setItem(cacheKey, JSON.stringify({ data: res.data, timestamp: Date.now() }));
            }
        } catch (err) {
            console.error("Failed to fetch supplier types:", err)
        } finally {
            setLoadingSupplierTypes(false)
        }
    }

    const hasFetched = useRef(false);

    useEffect(() => {
        if (!hasFetched.current) {
            hasFetched.current = true;
            fetchCategories();
            fetchSuppliers();
            fetchCountries();
            fetchSupplierTypes();
        }
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
                        <Box className="widgetContent"
                            sx={{
                                maxHeight: suppliersExpanded ? '800px' : '280px',
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
                            {loadingSuppliers ? (
                                <Loader minHeight={100} text="Loading suppliers..." />
                            ) : (
                                suppliers.map((supplier) => {
                                    const computedSlug = supplier.slug || supplier.name.toLowerCase().replace(/\s+/g, '-');
                                    
                                    return (
                                        <FormGroup key={supplier.id}>
                                            <FormControlLabel
                                                control={<Checkbox
                                                    checked={supplierSlugs.includes(computedSlug)}
                                                    onChange={() => handleSupplierChange(computedSlug)}
                                                />}
                                                label={
                                                    <Stack
                                                        direction="row"
                                                        spacing={1}
                                                        alignItems="center"
                                                    >
                                                        <span>{supplier.name}</span>
                                                    </Stack>
                                                }
                                            />
                                        </FormGroup>
                                    );
                                })
                            )}
                        </Box>

                        {suppliers.length > 0 && (
                            <Box
                                className="bottomIcon"
                                sx={{ cursor: 'pointer', mt: 1 }}
                                onClick={() => setSuppliersExpanded(!suppliersExpanded)}
                            >
                                <Image
                                    src={arrowDownIcon}
                                    alt="arrow-down"
                                    width={28}
                                    height={28}
                                    style={{
                                        transform: suppliersExpanded ? 'rotate(180deg)' : 'none',
                                        transition: 'transform 0.3s ease',
                                    }}
                                />
                            </Box>
                        )}
                    </Box>
                    <Box className="widget supplierWidget">
                        <Typography variant="h3" className="widgetTitle">
                            Supplier country
                        </Typography>
                        <Box className="widgetContent"
                            sx={{
                                maxHeight: countriesExpanded ? '800px' : '280px',
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
                            {loadingCountries ? (
                                <Loader minHeight={100} text="Loading countries..." />
                            ) : (
                                countries.map((country) => (
                                    <FormGroup key={country.id}>
                                        <FormControlLabel
                                            control={<Checkbox
                                                checked={countryCodes.includes(country.country_code)}
                                                onChange={() => handleCountryChange(country.country_code)}
                                            />}
                                            label={
                                                <Stack
                                                    direction="row"
                                                    spacing={1}
                                                    alignItems="center"
                                                >
                                                    {country.country_flag && (
                                                        <Image
                                                            src={country.country_flag}
                                                            alt={country.name}
                                                            width={24}
                                                            height={24}
                                                        />
                                                    )}
                                                    <span>{country.name}</span>
                                                </Stack>
                                            }
                                        />
                                    </FormGroup>
                                ))
                            )}
                        </Box>

                        {countries.length > 0 && (
                            <Box
                                className="bottomIcon"
                                sx={{ cursor: 'pointer', mt: 1 }}
                                onClick={() => setCountriesExpanded(!countriesExpanded)}
                            >
                                <Image
                                    src={arrowDownIcon}
                                    alt="arrow-down"
                                    width={28}
                                    height={28}
                                    style={{
                                        transform: countriesExpanded ? 'rotate(180deg)' : 'none',
                                        transition: 'transform 0.3s ease',
                                    }}
                                />
                            </Box>
                        )}
                        {/* <Box className="nearMeWidget">
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
                        </Box> */}
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
                                    onClick={() => {
                                        const params = new URLSearchParams(searchParams.toString())
                                        params.delete('min_price')
                                        params.delete('max_price')
                                        params.delete('page')
                                        router.push(`${pathname}?${params.toString()}`, { scroll: false })
                                        setPriceRange([0, 10000])
                                    }}
                                >
                                    Reset
                                </Button>
                            </Stack>

                            <Box className="priceRangeWidgetContentInner">
                                <Box sx={{ px: 1, py: 2 }}>
                                    <Slider
                                        value={priceRange}
                                        onChange={(e, newValue) => {
                                            const val = newValue as number[]
                                            setPriceRange(val)
                                            // Trigger debounced update
                                            if (debounceRef.current) clearTimeout(debounceRef.current)
                                            debounceRef.current = setTimeout(() => {
                                                const params = new URLSearchParams(window.location.search)
                                                if (val[0] > 0) params.set('min_price', val[0].toString())
                                                else params.delete('min_price')
                                                if (val[1] < 10000) params.set('max_price', val[1].toString())
                                                else params.delete('max_price')
                                                params.delete('page')
                                                router.push(`${pathname}?${params.toString()}`, { scroll: false })
                                            }, 500)
                                        }}
                                        valueLabelDisplay="auto"
                                        min={0}
                                        max={10000}
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
                                            "& .MuiSlider-valueLabel": {
                                                backgroundColor: "#054934",
                                            }
                                        }}
                                    />
                                </Box>
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
                                        value={priceRange[0]}
                                        onChange={(e) => {
                                            const val = parseInt(e.target.value);
                                            const newRange = !isNaN(val) ? [val, priceRange[1]] : [0, priceRange[1]];
                                            setPriceRange(newRange);
                                            // Handle typing debounce
                                            if (debounceRef.current) clearTimeout(debounceRef.current)
                                            debounceRef.current = setTimeout(() => {
                                                const params = new URLSearchParams(window.location.search)
                                                if (newRange[0] > 0) params.set('min_price', newRange[0].toString())
                                                else params.delete('min_price')
                                                params.delete('page')
                                                router.push(`${pathname}?${params.toString()}`, { scroll: false })
                                            }, 500)
                                        }}
                                        onBlur={handleExactPriceUpdate}
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
                                        value={priceRange[1]}
                                        onChange={(e) => {
                                            const val = parseInt(e.target.value);
                                            const newRange = !isNaN(val) ? [priceRange[0], val] : [priceRange[0], 0];
                                            setPriceRange(newRange);
                                            // Handle typing debounce
                                            if (debounceRef.current) clearTimeout(debounceRef.current)
                                            debounceRef.current = setTimeout(() => {
                                                const params = new URLSearchParams(window.location.search)
                                                if (newRange[1] < 10000) params.set('max_price', newRange[1].toString())
                                                else params.delete('max_price')
                                                params.delete('page')
                                                router.push(`${pathname}?${params.toString()}`, { scroll: false })
                                            }, 500)
                                        }}
                                        onBlur={handleExactPriceUpdate}
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
                        {/* <Box className="bottomIcon">
                            <Image
                                src={arrowDownIcon}
                                alt="arrow-down"
                                width={28}
                                height={28}
                            />
                        </Box> */}
                    </Box>
                    <Box className="widget supplierWidget">
                        <Typography variant="h3" className="widgetTitle">
                            Supplier Type
                        </Typography>
                        <Box className="widgetContent"
                            sx={{
                                maxHeight: supplierTypesExpanded ? '800px' : '280px',
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
                            {loadingSupplierTypes ? (
                                <Loader minHeight={100} text="Loading supplier types..." />
                            ) : (
                                supplierTypes.map((supplierType) => {
                                    // Fallback to slugifying the name if slug API property is missing
                                    const computedSlug = supplierType.slug || supplierType.name.toLowerCase().replace(/\s+/g, '-');
                                    
                                    return (
                                        <FormGroup key={supplierType.id}>
                                            <FormControlLabel
                                                control={<Checkbox
                                                    checked={supplierTypeSlugs.includes(computedSlug)}
                                                    onChange={() => handleSupplierTypeChange(computedSlug)}
                                                />}
                                                label={
                                                    <Stack
                                                        direction="row"
                                                        spacing={1}
                                                        alignItems="center"
                                                    >
                                                        <span>{supplierType.name}</span>
                                                    </Stack>
                                                }
                                            />
                                        </FormGroup>
                                    );
                                })
                            )}
                        </Box>

                        {supplierTypes.length > 0 && (
                            <Box
                                className="bottomIcon"
                                sx={{ cursor: 'pointer', mt: 1 }}
                                onClick={() => setSupplierTypesExpanded(!supplierTypesExpanded)}
                            >
                                <Image
                                    src={arrowDownIcon}
                                    alt="arrow-down"
                                    width={28}
                                    height={28}
                                    style={{
                                        transform: supplierTypesExpanded ? 'rotate(180deg)' : 'none',
                                        transition: 'transform 0.3s ease',
                                    }}
                                />
                            </Box>
                        )}
                    </Box>

                    <Box className="sidebarFooter">
                        <Button variant="contained" className="resetFiltersButton" onClick={resetFilters}>
                            Reset Filters
                        </Button>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}
