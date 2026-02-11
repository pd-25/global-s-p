import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import "./_reset.scss"
import ThemeRegistry from "./ThemeRegistry"
import Header from "@/components/layout/header/Header"
import Footer from "@/components/layout/footer/Footer"

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Global Source Export",
  description: "A b2b market place for buyers.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${montserrat.className}`}>
        <ThemeRegistry>
          <Header />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  )
}
