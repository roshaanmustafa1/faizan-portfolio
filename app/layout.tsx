import { Inter, Manrope } from "next/font/google"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SmoothScroll } from "@/components/animation/SmoothScroll"
import { cn } from "@/lib/utils"

const headingFont = Inter({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Faizan Karamat | Medical Billing & Revenue Cycle Management (RCM) Specialist",
  description:
    "Portfolio of Faizan Karamat, Assistant Manager Billing and Operations at F&A Global. 5+ years of specialized U.S. healthcare RCM experience, Accounts Receivable management, denial resolution, and payment collections.",
  keywords: [
    "Faizan Karamat",
    "Medical Billing",
    "Revenue Cycle Management",
    "RCM Specialist",
    "Accounts Receivable",
    "Denial Management",
    "U.S. Healthcare RCM",
    "F&A Global",
    "AR Follow-up",
  ],
  authors: [{ name: "Faizan Karamat" }],
  openGraph: {
    title: "Faizan Karamat | Medical Billing & RCM Specialist",
    description:
      "5+ years of specialized experience in U.S. healthcare RCM, Accounts Receivable management, payment collection, and denial resolution.",
    type: "website",
    locale: "en_US",
    siteName: "Faizan Karamat Portfolio",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased scroll-smooth", headingFont.variable, manrope.variable)}
    >
      <body className="font-sans bg-white text-[#0f0e0e] selection:bg-[#ff6b00] selection:text-white">
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}
