import Link from "next/link"
import DarkModeToggle from "@/app/components/nav/dark-mode-toggle"
import { MobileNavDropdown } from "@/app/components/nav/mobile-nav-menu"

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
    <nav className="navbar sticky top-0 w-screen lg:w-[calc(100vw-20px)] flex justify-center bg-base-100 z-20">
      <div className="flex justify-between items-center w-full max-w-screen-2xl p-2 md:px-12 lg:px-40">
        <Link href="/">
          <div className="font-roboto font-bold text-3xl md:text-4xl tracking-tight hover:scale-125 hover:text-secondary transition-all ease-in-out">
            <p>Rodrigo</p>
            <p className="-translate-y-3">Molter</p>
          </div>
        </Link>

        <ul className="flex flex-row gap-x-8 lg:gap-x-12 justify-end items-center text-xl scroll-smooth">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="hidden md:flex p-2 hover:scale-125 hover:text-accent transition-all ease-in-out"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="p-2 hover:scale-125 hover:text-accent transition-all ease-in-out">
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
