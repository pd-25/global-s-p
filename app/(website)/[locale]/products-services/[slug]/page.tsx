import ProductServiceDetailsClient from "@/components/sections/products-services/ProductServiceDetailsClient"
import { Box, Container } from "@mui/material"
import "../../../product.scss"
import "../../../product-services.scss"
import { CategorySlugProvider } from "@/components/providers/CategorySlugProvider"
import { API_BASE_URL } from "@/lib/constants"

async function getCategoryData(slug: string) {
  try {
    const res = await fetch(`${API_BASE_URL}/website/categories/category-wise-subcategories/${slug}`, {
      // next: { revalidate: 300 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json?.data || null;
  } catch (error) {
    console.error("Error fetching category subcategories:", error);
    return null;
  }
}

export default async function ProductAndServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const categoryData = await getCategoryData(slug)

  return (
    <CategorySlugProvider slug={slug}>
      <ProductServiceDetailsClient slug={slug} categoryData={categoryData} />
    </CategorySlugProvider>
  )
}
