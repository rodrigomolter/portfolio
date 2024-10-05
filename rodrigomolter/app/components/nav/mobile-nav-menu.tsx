"use client"
import React, { useEffect } from "react"
import Link from "next/link"
import { navLinks } from "@/app/components/nav/navbar"

const HamburgerDropdownIcon = () => {
  return (
    <label className="btn btn-circle swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" />

      {/* hamburger icon */}
      <svg
        className="swap-off fill-current"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 512 512"
      >
        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
      </svg>

      {/* close icon */}
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
    <div className="dropdown dropdown-start md:hidden">
      <HamburgerDropdownIcon />
      <ul
        tabIndex={0}
        className="dropdown-content menu z-[1] bg-base-200 p-4 rounded-box shadow gap-6 text-lg"
      >
        {navLinks
          .filter((link) => link.mobile)
          .map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
      </ul>
    </div>
  )
}
