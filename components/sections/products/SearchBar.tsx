'use client'

import { useState, FormEvent, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { Box, Stack, Button, TextField } from '@mui/material'
import SearchIcon from '@/public/search.png'

export default function SearchBar() {
    const router = useRouter()
    const searchParams = useSearchParams()
    
    const [searchQuery, setSearchQuery] = useState('')

    // Initialize/sync query from the URL
    useEffect(() => {
        setSearchQuery(searchParams.get('search_string') || '')
    }, [searchParams])

    const handleSearch = (e: FormEvent) => {
        e.preventDefault()
        
        const params = new URLSearchParams()
        if (searchQuery.trim()) {
            params.set('search_string', searchQuery.trim())
        }
        
        // Always redirect to global product listing on new search
        router.push(`/products&searvices/products?${params.toString()}`)
    }

    return (
        <Box>
            <Stack
                direction="row"
                spacing={2}
                className="searchForm"
                sx={{ alignItems: 'flex-end' }}
                component="form"
                onSubmit={handleSearch}
            >
                <TextField
                    id="product-search"
                    placeholder="Search products..."
                    variant="outlined"
                    fullWidth
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            fontSize: '15px',
                            height: '48px',
                            backgroundColor: '#EAEBED',
                            borderRadius: '18px',
                            padding: '0',
                            '& fieldset': {
                                borderColor: 'white',
                                borderRadius: '18px',
                                transition: 'all 0.3s ease',
                            },
                            '&:hover fieldset': {
                                borderColor: 'white',
                            },
                            '& input': {
                                color: '#000',
                                padding: '0 60px 0 15px',
                                fontSize: '15px',
                                '&::placeholder': {
                                    color: '#242424',
                                    opacity: 1,
                                    fontSize: '15px',
                                },
                                backgroundColor: 'transparent',
                            },
                        },
                        '& .MuiOutlinedInput-root.Mui-focused': {
                            '& fieldset': {
                                borderColor: '#7FAF0D',
                            },
                        },
                    }}
                />
                <Button variant="contained" type="submit">
                    <Image src={SearchIcon} alt="search-icon" width={25} height={25} />
                </Button>
            </Stack>
        </Box>
    )
}
