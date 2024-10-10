import Link from "next/link"
import DarkModeToggle from "@/app/components/nav/dark-mode-toggle"
import { MobileNavDropdown } from "@/app/components/nav/mobile-nav-menu"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const navLinks = [
  {
    label: "projetos.",
    href: "/#projects",
    mobile: true,
  },
  {
    label: "sobre.",
    href: "/#about",
    mobile: true,
  },
  {
    label: "contato.",
    href: "/#contact",
    mobile: true,
  },
]

export function Navbar() {
  return (
    <nav className="navbar sticky top-0 w-screen lg:w-[calc(100vw-20px)] flex justify-center bg-base-100 z-50">
      <div className="flex justify-between items-center w-full max-w-screen-2xl p-2 md:px-12 lg:px-40">
        <Link href="/">
          <p className={`${inter.className} font-bold text-xl sm:text-3xl`}>
            Rodrigo <br />
            Molter
          </p>
        </Link>

        <ul className="flex flex-row gap-x-8 lg:gap-x-12 justify-end items-center text-xl scroll-smooth">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="hidden md:flex hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="hidden sm:flex hover:text-accent">
            <DarkModeToggle />
          </li>
          <li>
            <MobileNavDropdown />
          </li>
        </ul>
      </div>
    </nav>
  )
}
