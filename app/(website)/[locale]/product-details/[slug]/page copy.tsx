import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { fetchProductDetails } from '@/lib/fetchProductDetails';
import ProductDetailsContent from '@/components/sections/product/ProductDetailsContent';
import { Box } from '@mui/material';

interface PageProps {
    params: Promise<{
        slug: string;
        locale: string;
    }>;
}

/**
 * Generate metadata for SEO using product title and short description.
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const result = await fetchProductDetails(slug);
    const product = result?.data;

    if (!product) {
        return {
            title: 'Product Not Found | Global Supplier Portal',
        };
    }

    return {
        title: `${product.title} | Global Supplier Portal`,
        description: product.short_desc,
        openGraph: {
            title: product.title,
            description: product.short_desc,
            images: product.images?.[0]?.image ? [product.images[0].image] : [],
        },
    };
}

/**
 * Product Details Page (Server Component).
 */
export default async function ProductDetailsPage({ params }: PageProps) {
    const { slug, locale } = await params;
    const result = await fetchProductDetails(slug);

    if (!result?.success || !result.data) {
        notFound();
    }

    const product = result.data;

    return (
        <Box sx={{ backgroundColor: '#F4F7F9', minHeight: '100vh', py: { xs: 4, md: 6 } }}>
            <ProductDetailsContent product={product} locale={locale} />
        </Box>
    );
}
