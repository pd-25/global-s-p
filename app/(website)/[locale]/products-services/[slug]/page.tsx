import ProductServiceDetailsClient from "@/components/sections/products-services/ProductServiceDetailsClient"
import { Box, Container } from "@mui/material"
import "../../../product.scss"
export default async function ProductAndServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  return (
    <ProductServiceDetailsClient />
  )
}
