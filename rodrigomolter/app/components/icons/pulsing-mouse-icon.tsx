"use client"

import React, { useState, useEffect } from "react"
import { BsMouse } from "react-icons/bs"

export function PulsingMouseIcon() {
  const [showIcon, setShowIcon] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowIcon(false)
      window.removeEventListener("scroll", handleScroll)
    }

    window.addEventListener("scroll", handleScroll)

    const timer = setTimeout(() => {
      setShowIcon(true)
    }, 4000) // 4 segundos

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

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
