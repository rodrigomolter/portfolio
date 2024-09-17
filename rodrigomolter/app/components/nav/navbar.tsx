import Link from "next/link"
import DarkModeToggle from "./dark-mode-toggle"
import { MobileNavDropdown } from "./mobile-nav-menu"

const Logo = () => {
  return (
    <div className="bg-gradient-to-tl from-logo-secondary to-logo-primary text-transparent bg-clip-text font-bold text-3xl">
      {"<rodrigomolter />"}
    </div>
  )
}

export const navLinks = [
  {
    label: <Logo />,
    href: "/",
    mobile: false,
  },
  {
    label: "sobre",
    href: "/about",
    mobile: true,
  },
  {
    label: "projetos",
    href: "/#projects",
    mobile: true,
  },
]

export function Navbar() {
  return (
    <nav className="navbar sticky top-0 bg-base-200 md:bg-base-100 z-50">
      <div className="w-full flex md:justify-center justify-between md:items-center md:gap-2">
        {/* desktop */}
        <ul className="menu menu-horizontal items-center gap-6 lg:gap-8 hidden md:flex text-xl">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
          {/* mobile */}
          <li>
            <DarkModeToggle />
          </li>
        </ul>
        <MobileNavDropdown />
        <Link href="/" className="md:hidden">
          <Logo />
        </Link>
        <div className="md:hidden">
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  )
}
