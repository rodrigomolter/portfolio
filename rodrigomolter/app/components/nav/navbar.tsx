import Link from "next/link"
import DarkModeToggle from "@/app/components/nav/dark-mode-toggle"
import { MobileNavDropdown } from "@/app/components/nav/mobile-nav-menu"
import { RodrigoMolterLogo } from "../logo/rodrigomolter-logo"

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
    <nav className="navbar sticky top-0 pb-0 w-screen lg:w-[calc(100vw-20px)] flex justify-center z-20 mix-blend-difference text-zinc-50 backdrop-blur-0">
      <div className="flex justify-between items-center w-full max-w-screen-2xl px-2 pt-4 md:px-12 lg:px-40">
        <Link href="/">
          <RodrigoMolterLogo />
        </Link>

        <ul className="flex flex-row gap-x-6 lg:gap-x-12 justify-end items-center text-xl">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="hidden md:flex p-2 hover:scale-125 transition-all ease-in-out"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="p-2 hover:scale-125 transition-all ease-in-out">
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
