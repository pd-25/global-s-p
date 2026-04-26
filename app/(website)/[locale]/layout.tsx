import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { notFound } from "next/navigation"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { routing } from "@/i18n/routing"
import "../globals.css"
import "../_reset.scss"
import ThemeRegistry from "../ThemeRegistry"
import Header from "@/components/layout/header/Header"
import Footer from "@/components/layout/footer/Footer"
import { websiteEndpoints } from "@/config/websiteEndpoints"
import apiService from "@/service/apiService"
import type { CategoryWithSubcategories, CategoryWiseSubcategoriesResponse } from "@/interfaces/interface"

async function getCategoryWiseSubcategories(): Promise<CategoryWithSubcategories[]> {
    try {
        const url = `${websiteEndpoints.categoryWiseSubcategories}?limit=12&sub_cat_limit=10`
        const json = await apiService.get<CategoryWiseSubcategoriesResponse>(url)
        return json?.data ?? []
    } catch {
        return []
    }
}

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
    title: "Global Source Export",
    description: "A b2b market place for buyers.",
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
    }
}

type Props = {
    children: React.ReactNode
    params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params

    // Validate that the incoming locale is supported
    if (!routing.locales.includes(locale as any)) {
        notFound()
    }

    // Load messages for the current locale
    const messages = await getMessages()
    const categoryWiseSubcategories = await getCategoryWiseSubcategories()

    return (
        <html lang={locale}>
            <body className={`${montserrat.variable} ${montserrat.className}`}>
                <NextIntlClientProvider messages={messages}>
                    <ThemeRegistry>
                        <Header />
                        {children}
                        <Footer categories={categoryWiseSubcategories} />
                    </ThemeRegistry>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
