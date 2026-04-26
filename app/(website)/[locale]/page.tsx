import type { Metadata } from "next"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import "swiper/css"
import "swiper/css/navigation"
import "../home.scss"
import "../category-slider.scss"
import CategorySlider from "@/components/sections/category/CategorySlider"
import { AnimateOnScroll } from "@/components/animations"
import { getTranslations } from "next-intl/server"
import Link from "next/link"
import Image from "next/image"
import perfectVendorBg from "@/public/home/perfect-vendor-pic.webp"
import Banner from "@/components/sections/banner/Banner"
import Statistics from "@/components/sections/statistics/Statistics"
import CategoryWiseProducts from "@/components/sections/category-wise-product/CategoryWiseProducts"
import TopBrands from "@/components/sections/top-brands/TopBrands"
import MarketplaceCards from "@/components/sections/marketplace-cards/MarketplaceCards"
import PartnerInfo from "@/components/sections/partners/PartnerInfo"
import PartnerSlider from "@/components/sections/partners/PartnerSlider"
import Testimonials from "@/components/sections/testimonials/Testimonials"
import { websiteEndpoints } from "@/config/websiteEndpoints"
import type {
  RecommendedProduct,
  RecommendedProductsResponse,
  CategoryWithSubcategories,
  CategoryWiseSubcategoriesResponse,
  ValuablePartner,
  ValuablePartnersResponse,
} from "@/interfaces/interface"
import apiService from "@/service/apiService"

async function getRecommendedProducts(): Promise<RecommendedProduct[]> {
  try {
    const json = await apiService.get<RecommendedProductsResponse>(
      websiteEndpoints.recommendedProducts
    )
    // console.log('json?.data- ', json?.data);

    return json?.data ?? []
  } catch {
    return []
  }
}

async function getCategoryWiseSubcategories(): Promise<CategoryWithSubcategories[]> {
  try {
    const url = `${websiteEndpoints.categoryWiseSubcategories}?limit=4&sub_cat_limit=10`
    const json = await apiService.get<CategoryWiseSubcategoriesResponse>(
      url
    )
    // console.log('json?.data- ', json?.data);
    return json?.data ?? []
  } catch {
    return []
  }
}

async function getValuablePartners(): Promise<ValuablePartner[]> {
  try {
    const json = await apiService.get<ValuablePartnersResponse>(
      websiteEndpoints.valuablePartners
    )
    return json?.data ?? []
  } catch {
    return []
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("home.meta")

  return {
    title: t("title"),
    description: t("description"),
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      siteName: "Global Source Expo",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
  }
}

export default async function Home() {
  const t = await getTranslations("home")
  const [recommendedProducts, categoryWiseSubcategories, valuablePartners] = await Promise.all([
    getRecommendedProducts(),
    getCategoryWiseSubcategories(),
    getValuablePartners(),
  ])
  return (
    <>
      {/* banner-section */}
      <Banner />
      {/* banner-section */}
      {/* statistics-section */}
      <div className="home-content">
        <Statistics />
        {/* statistics-section */}
        {/* product-category-slider-section */}
        <AnimateOnScroll animation="fade-up">
          <CategorySlider recommendedProducts={recommendedProducts} />
        </AnimateOnScroll>
        {/* product-category-slider-section */}
        {/* product-showcase-section */}

        <CategoryWiseProducts categories={categoryWiseSubcategories} />

        {/* product-showcase-section */}
        {/* top-brands-section */}
        <TopBrands />
        {/* top-brands-section */}
        {/* marketplace-section */}
        <MarketplaceCards />
        {/* marketplace-section */}
        {/* our-partners-section */}
        <PartnerInfo />
        {/* our-partners-section */}
        {/* our-partners-slider-section */}
        <PartnerSlider partners={valuablePartners} />
        {/* our-partner-slider-section */}
        {/* perfect-vendor-section */}
        <Box component="section" className="perfectVendorWrapper">
          <Box className="perfectVendorBg">
            <Image src={perfectVendorBg} alt="perfect-vendor-bg" />
          </Box>
          <Container>
            <Box className="sectionHeading">
              <Typography variant="h2" component="h2">
                <span>{t("perfectVendor.subheading")}</span> {t("perfectVendor.heading")}
              </Typography>
              <Typography variant="body1" component="p">
                {t("perfectVendor.description")} <strong> {t("perfectVendor.descriptionBold")} </strong>
                {t("perfectVendor.descriptionEnd")}
              </Typography>
              <Link href="/" passHref>
                <Button variant="contained">
                  {t("perfectVendor.cta")}
                </Button>
              </Link>
            </Box>
          </Container>
        </Box>
        {/* perfect-vendor-section */}
        {/* our-latest-blog */}
        {/* <BlogList /> */}
        {/* our-latest-blog */}
        {/* testimonials-section */}
        <Testimonials />
        {/* testimonials-section */}
      </div>
    </>
  )
}
