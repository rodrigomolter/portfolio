import Link from "next/link"
import DarkModeToggle from "@/app/components/nav/dark-mode-toggle"
import { MobileNavDropdown } from "@/app/components/nav/mobile-nav-menu"
import { RodrigoMolterLogo } from "@/app/components/logo/rodrigomolter-logo"

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
    <nav className="navbar flex sticky top-0 w-screen lg:w-[calc(100vw-20px)] h-auto justify-center z-10 bg-base-100">
      <div className="flex justify-between items-center w-full max-w-screen-2xl p-2 md:px-12 lg:px-40">
        <Link href="/">
          <RodrigoMolterLogo />
        </Link>

        <ul className="flex flex-row gap-x-6 lg:gap-x-12 justify-end items-center text-xl">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="hidden md:flex p-2 hover:scale-125 active:scale-90 transition-all ease-in-out "
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="p-2 hover:scale-125 active:scale-90 transition-all ease-in-out">
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
