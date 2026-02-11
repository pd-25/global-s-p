import Footer from "@/components/layout/admin/Footer"
import Header from "@/components/layout/admin/Header"
import ThemeRegistry from "@/app/(website)/ThemeRegistry" // Reuse global registry
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Box } from "@mui/material"

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Admin Dashboard | Global Source Export",
  description: "A b2b market place for buyers.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body className={`${montserrat.variable} ${montserrat.className}`} style={{ margin: 0, padding: 0 }}>
        <ThemeRegistry>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f5f5f5' }}>
            <Header />
            <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
              {children}
            </Box>
            <Footer />
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  )
}
