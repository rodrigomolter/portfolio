"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

import { navLinks } from "@/app/components/nav/navbar"
import { SocialIcons } from "@/app/components/icons/social-icons"
import { HamburgerDropdownIcon } from "@/app/components/icons/hamburguer-dropdown-icon"

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
    <div className="relative z-20 md:hidden ">
      <HamburgerDropdownIcon
        isOpen={isOpen}
        toggleMenu={() => setIsOpen((isOpen) => !isOpen)}
      />
      {isOpen && (
        <div className="absolute flex flex-col items-center -right-4 top-14 w-[100vw] h-[90vh] sm:h-[95vh] bg-base-300 rounded-xl text-base-content">
          <ul
            tabIndex={0}
            className="absolute flex flex-col bottom-1/2 text-center gap-8 text-3xl font-roboto uppercase"
          >
            {navLinks
              .filter((link) => link.mobile)
              .map((link, index) => (
                <li
                  key={index}
                  className="active:scale-90 transition-all ease-in-out"
                >
                  <Link href={link.href} onClick={() => setIsOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
          <div className="absolute bottom-20">
            <SocialIcons />
          </div>
        </div>
      )}
    </div>
  )
}
