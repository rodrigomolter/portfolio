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
]

export function Navbar() {
  return (
    <nav className="navbar sticky top-0 w-screen lg:w-[calc(100vw-20px)] flex justify-center bg-base-100 z-50">
      <div className="flex justify-between items-center w-full max-w-screen-2xl p-2 p2 md:px-12 lg:px-40">
        <Link href="/">
          <p className={`${inter.className} font-bold text-2xl sm:text-3xl`}>
            Rodrigo <br />
            Molter
          </p>
        </Link>

        <ul className="menu menu-horizontal justify-end items-center gap-2 lg:gap-12 text-xl scroll-smooth">
          {navLinks.map((link, index) => (
            <li key={index} className="hidden md:flex">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
          <li>
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
