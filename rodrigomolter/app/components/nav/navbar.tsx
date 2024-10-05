import Link from "next/link"
import DarkModeToggle from "@/app/components/nav/dark-mode-toggle"
import { MobileNavDropdown } from "@/app/components/nav/mobile-nav-menu"

const Logo = () => {
  return (
    <div className="bg-gradient-to-tl from-logo-primary to-accent text-transparent bg-clip-text font-bold text-2xl sm:text-3xl">
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
    <nav className="navbar md:p-1 sticky top-0 bg-base-200 md:bg-base-100 z-50 md:rounded-b-full border-zinc-950/50 border-b-2 max-w-screen-lg">
      <div className="w-full flex justify-between md:justify-center md:items-center">
        {/* desktop */}
        <ul className="menu menu-horizontal md:p-0 items-center gap-6 lg:gap-8 hidden md:flex text-xl scroll-smooth">
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
