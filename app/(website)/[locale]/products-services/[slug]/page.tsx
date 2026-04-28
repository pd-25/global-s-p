import ProductServiceDetailsClient from "@/components/sections/products-services/ProductServiceDetailsClient"
import { Box, Container } from "@mui/material"
import "../../../product.scss"
import "../../../product-services.scss"
import { CategorySlugProvider } from "@/components/providers/CategorySlugProvider"

export default async function ProductAndServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  return (
    <CategorySlugProvider slug={slug}>
      <ProductServiceDetailsClient slug={slug} />
    </CategorySlugProvider>
  )
}
