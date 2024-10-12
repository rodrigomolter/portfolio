import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { Nunito, Roboto } from "next/font/google"
import { Toaster } from "sonner"
import { Analytics } from "@vercel/analytics/react"

import "./globals.css"
import { Navbar } from "@/app/components/nav/navbar"
import { Footer } from "@/app/components/footer"

import { myself } from "@/data/info"

const nunito = Nunito({ subsets: ["latin"] })

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["500", "700"],
})

export const metadata = {
  title: `${myself.fullName} | Portfolio`,
  description: `${myself.fullName} é um ${myself.role} ${myself.description}`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${nunito.className} ${roboto.variable} transition-colors duration-100 `}
      >
        <ThemeProvider themes={["winter", "dracula"]} defaultTheme="dracula">
          <div className="max-w-screen-lg xl:max-w-screen-2xl min-h-screen mx-auto flex flex-col justify-center items-center">
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
