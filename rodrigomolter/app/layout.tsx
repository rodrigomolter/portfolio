import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { Nunito } from "next/font/google"
import { Toaster } from "sonner"
import { Analytics } from "@vercel/analytics/react"

import "./globals.css"
import { Navbar } from "@/app/components/nav/navbar"
import { Footer } from "@/app/components/footer"

import { myself } from "@/data/info"

const nunito = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: `${myself.fullName} | Portfolio`,
  description: myself.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${nunito.className} transition-colors duration-100`}>
        <ThemeProvider themes={["winter", "dracula"]} defaultTheme="system">
          <div className="max-w-screen-lg min-h-screen mx-auto flex flex-col justify-center items-center">
            <Navbar />
            <main className="flex-grow flex flex-col justify-center items-center">
              {children}
            </main>
            <Toaster richColors expand />
            <Footer />
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
