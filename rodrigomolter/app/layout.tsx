import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import { Navbar } from "./components/nav/navbar"
import { Footer } from "./components/footer"
import { ThemeProvider } from "next-themes"
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "sonner"

const nunito = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rodrigo Molter | Portfolio",
  description: "Portfolio de Rodrigo Molter, QA Engineer apaixonado por chás.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ptBR">
      <body className={`${nunito.className} transition-colors duration-100`}>
        <ThemeProvider themes={["light", "dark"]} defaultTheme="system">
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
