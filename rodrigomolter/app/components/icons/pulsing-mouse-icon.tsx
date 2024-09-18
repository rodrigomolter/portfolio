"use client"

import React, { useState, useEffect } from "react"
import { BsMouse } from "react-icons/bs"

export function PulsingMouseIcon() {
  const [showIcon, setShowIcon] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowIcon(false)
        setHasScrolled(true)
        window.removeEventListener("scroll", handleScroll)
      }
    }
    if (window.scrollY > 0) {
      setShowIcon(false)
      setHasScrolled(true)
    }

    if (!hasScrolled) {
      window.addEventListener("scroll", handleScroll)
    }

    const timer = setTimeout(() => {
      if (!hasScrolled) {
        setShowIcon(true)
      }
    }, 4000) // 4 segundos

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [hasScrolled])

  return (
    <div>
      {showIcon && (
        <div className="">
          <BsMouse className=" absolute hidden md:flex bottom-40 left-1/2 text-3xl animate-bounce" />
        </div>
      )}
    </div>
  )
}
