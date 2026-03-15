'use client'

import { Breadcrumbs, Typography, Link as MuiLink } from '@mui/material'
import NextLink from 'next/link'
import Image from 'next/image'
import { useParams, useSearchParams } from 'next/navigation'
import homeIcon from '@/public/home-icon.svg'

function formatBreadcrumbString(str: string): string {
    // Transform "category-slug-name" to "Category Slug Name"
    return str
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

export default function ProductBreadcrumbs() {
    const params = useParams()
    const searchParams = useSearchParams()

    const categoryId = params?.categoryId as string | undefined
    const searchString = searchParams?.get('search_string')

    return (
        <Breadcrumbs aria-label="breadcrumb">
            <MuiLink component={NextLink} underline="hover" color="inherit" href="/">
                <Image src={homeIcon} alt="home" width={36} height={36} />
            </MuiLink>

            {/* If there's a category or search string, link back to main Products page, else it's text */}
            {categoryId || searchString ? (
                <MuiLink component={NextLink} underline="hover" color="inherit" href="/products&searvices">
                    Products and services
                </MuiLink>
            ) : (
                <Typography sx={{ color: 'text.primary' }}>
                    Products and services
                </Typography>
            )}

            {categoryId && (
                <Typography sx={{ color: 'text.primary' }}>
                    {formatBreadcrumbString(categoryId)}
                </Typography>
            )}

            {/* If there is a search filter applied, show it at the end of the breadcrumb */}
            {searchString && (
                <Typography sx={{ color: 'text.primary' }}>
                    Search: "{searchString}"
                </Typography>
            )}
        </Breadcrumbs>
    )
}
