"use client"
import Link from "next/link"
import { navLinks } from "@/app/components/nav/navbar"
import { useState, useEffect } from "react"

const HamburgerDropdownIcon = ({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean
  toggleMenu: () => void
}) => {
  return (
    <label className="btn btn-circle swap swap-rotate">
      <input type="checkbox" checked={isOpen} onChange={toggleMenu} />
      {/* Ícone de hambúrguer */}
      <svg
        className="swap-off fill-current"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 512 512"
      >
        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
      </svg>
      {/* Ícone de fechar */}
      <svg
        className="swap-on fill-current"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 512 512"
      >
        <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
      </svg>
    </label>
  )
}

export function MobileNavDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById("hamburguer-menu")
      if (menu && !menu.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="relative z-40 md:hidden">
      <HamburgerDropdownIcon
        isOpen={isOpen}
        toggleMenu={() => setIsOpen((prev) => !prev)}
      />
      {isOpen && (
        <ul
          tabIndex={0}
          className="absolute right-0 mt-2 w-48 bg-base-200 p-4 rounded-box shadow gap-6 text-lg"
        >
          {navLinks
            .filter((link) => link.mobile)
            .map((link, index) => (
              <li key={index}>
                <Link href={link.href} onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
        </ul>
      )}
    </div>
  )
}
