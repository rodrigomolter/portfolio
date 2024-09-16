"use client"
import React, { useEffect } from "react"
import Link from "next/link"
import { navLinks } from "./navbar"

const HamburgerDropdownIcon = () => {
  return <summary className="btn btn-ghost text-3xl">🍔</summary>
}

export function MobileNavDropdown() {
  useEffect(() => {
    let details = document.querySelector("details")
    const handleClick = ({ target }: MouseEvent) => {
      if (!details?.contains(target as Node)) {
        details?.removeAttribute("open")
      }
    }

    document.addEventListener("click", (e) => handleClick(e))

    return () => {
      document.removeEventListener("click", (e) => handleClick(e))
    }
  }, [])

  return (
    <details className="dropdown dropdown-start md:hidden">
      <HamburgerDropdownIcon />
      <ul
        tabIndex={0}
        className="dropdown-content menu z-[1] bg-base-200 p-6 rounded-box shadow w-56 gap-2"
      >
        {navLinks
          .filter((link) => link.mobile)
          .map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
      </ul>
    </details>
  )
}
