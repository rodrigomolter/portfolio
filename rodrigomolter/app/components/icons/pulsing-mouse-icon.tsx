"use client"

import React, { useState, useEffect } from "react"
import { BsMouse } from "react-icons/bs"

export function PulsingMouseIcon() {
  const [showIcon, setShowIcon] = useState(false)
  const DELAY = 4000 // 4 seconds

  //fix for first load without moving scroll
  setTimeout(() => {
    setShowIcon(true)
  }, DELAY)

  useEffect(() => {
    let timer: any

    const handleScroll = () => {
      clearTimeout(timer)

      if (window.scrollY > 0) {
        setShowIcon(false)
      } else {
        timer = setTimeout(() => {
          setShowIcon(true)
        }, DELAY)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div>
      {showIcon && (
        <div className="absolute hidden md:flex items-center bottom-20 left-1/2">
          <BsMouse className="text-3xl animate-bounce" />
          <p className="text-xl animate-bounce">Scroll</p>
        </div>
      )}
    </div>
  )
}
