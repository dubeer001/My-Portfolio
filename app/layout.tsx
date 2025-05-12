import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/layout/Header"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Personal Portfolio | Web Developer & BSCS Student",
  description: "Professional portfolio showcasing my web development projects, skills, and services.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
