import {
    Box,
    Container,
    Button,
    Grid,
    MenuItem,
    Select,
    InputBase,
    Paper,
    FormControl,
    SelectChangeEvent
} from '@mui/material'
import { useState, useEffect } from 'react'
import apiService from '@/service/apiService'
import { websiteEndpoints } from '@/config/websiteEndpoints'
import { CategoryWithSubcategories, CategoryWiseSubcategoriesResponse, Subcategory, Country } from '@/interfaces/interface'
import { getCountries } from '@/lib/fetchCountries'
const SearchIconSvg = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
interface FilterAreaSearchProps {
    onSearch: (params: {
        category_id?: string | number;
        subcategory_id?: string | number;
        search_string?: string;
        location?: string | number;
    }) => void;
}

export default function FilterAreaSearch({ onSearch }: FilterAreaSearchProps) {

    const [categories, setCategories] = useState<CategoryWithSubcategories[]>([]);
    const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
    const [countries, setCountries] = useState<Country[]>([]);

    const [selectedCategory, setSelectedCategory] = useState<string | number>("");
    const [selectedSubcategory, setSelectedSubcategory] = useState<string | number>("");
    const [selectedCountry, setSelectedCountry] = useState<string | number>("");
    const [searchQuery, setSearchQuery] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch categories
                const catRes = await apiService.get<CategoryWiseSubcategoriesResponse>(websiteEndpoints.categoryWiseSubcategories);
                if (catRes.success) setCategories(catRes.data);

                // Fetch countries using cached service
                const countryData = await getCountries();
                setCountries(countryData);
            } catch (error) {
                console.error("Error fetching filter data:", error);
            }
        };
        fetchData();
    }, []);

    const handleCategoryChange = (event: SelectChangeEvent<string | number>) => {
        const value = event.target.value;
        setSelectedCategory(value);
        setSelectedSubcategory(""); // Reset subcategory when category changes

        const category = categories.find(cat => cat.id === Number(value));
        if (category) {
            setSubcategories(category.subcategories);
        } else {
            setSubcategories([]);
        }
    };

    const handleSubcategoryChange = (event: SelectChangeEvent<string | number>) => {
        setSelectedSubcategory(event.target.value);
    };

    const handleCountryChange = (event: SelectChangeEvent<string | number>) => {
        setSelectedCountry(event.target.value);
    };

    const handleSearch = () => {
        onSearch({
            category_id: selectedCategory,
            subcategory_id: selectedSubcategory,
            location: selectedCountry,
            search_string: searchQuery
        });
    };


    return (
        <Container disableGutters sx={{ mt: { xs: -6, md: -4 }, position: 'relative', zIndex: 2, maxWidth: '1040px !important', px: { xs: 2, lg: 0 } }}>
            <Paper elevation={0} sx={{ p: '12px', borderRadius: '8px', bgcolor: 'white', border: '1px solid #E5E7EB', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                <Grid container spacing={1.5} alignItems="center">
                    <Grid size={{ xs: 12, sm: 6, md: 2.2 }}>
                        <Select
                            fullWidth
                            displayEmpty
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            sx={{ bgcolor: '#F3F4F6', borderRadius: '6px', '& fieldset': { border: 'none' }, height: '48px', color: '#1F2937', fontSize: '14px' }}
                        >
                            <MenuItem value="" disabled>Select category</MenuItem>
                            {categories.map((cat) => (
                                <MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 2.2 }}>
                        <Select
                            fullWidth
                            displayEmpty
                            value={selectedSubcategory}
                            onChange={handleSubcategoryChange}
                            disabled={!selectedCategory || subcategories.length === 0}
                            sx={{ bgcolor: '#F3F4F6', borderRadius: '6px', '& fieldset': { border: 'none' }, height: '48px', color: '#1F2937', fontSize: '14px' }}
                        >
                            <MenuItem value="" disabled>
                                {selectedCategory ? (subcategories.length > 0 ? "Select subcategory" : "No subcategories") : "Select subcategory"}
                            </MenuItem>
                            {subcategories.map((sub) => (
                                <MenuItem key={sub.id} value={sub.id}>{sub.name}</MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 12, md: 2.2 }}>
                        <Select
                            fullWidth
                            displayEmpty
                            value={selectedCountry}
                            onChange={handleCountryChange}
                            sx={{ bgcolor: '#F3F4F6', borderRadius: '6px', '& fieldset': { border: 'none' }, height: '48px', color: '#1F2937', fontSize: '14px' }}
                        >
                            <MenuItem value="" disabled>Buyer location</MenuItem>
                            {countries.map((country) => (
                                <MenuItem key={country.id} value={country.id}>{country.name}</MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3.4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#F3F4F6', borderRadius: '6px', px: 2, height: '48px' }}>
                            <InputBase
                                placeholder="Search by any keyword"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                sx={{ ml: 1, flex: 1, color: '#1F2937' }}
                            />
                            <Box sx={{ color: '#9CA3AF', display: 'flex', alignItems: 'center' }}>
                                <SearchIconSvg />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 2 }}>
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={handleSearch}
                            sx={{
                                bgcolor: '#7FAF0D',
                                color: 'white',
                                height: '48px',
                                borderRadius: '6px',
                                textTransform: 'none',
                                fontWeight: 700,
                                fontSize: '16px',
                                boxShadow: 'none',
                                '&:hover': { bgcolor: '#6e980c', boxShadow: 'none' }
                            }}
                        >
                            Find requests
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}
