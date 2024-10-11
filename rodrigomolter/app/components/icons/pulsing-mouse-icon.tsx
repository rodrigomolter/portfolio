"use client"

import React, { useState, useEffect } from "react"
import { BsMouse } from "react-icons/bs"

export function PulsingMouseIcon() {
  const [showIcon, setShowIcon] = useState(false)
  const DELAY = 5000 // 4 seconds

  useEffect(() => {
    let timer = setTimeout(() => {
      setShowIcon(true)
    }, DELAY)

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
        <div className="absolute hidden md:flex items-center bottom-20 right-10 xl:right-40">
          {/* <BsMouse className="text-3xl animate-bounce" /> */}
          <p className="text-xl animate-bounce font-mono">scroll.</p>
        </div>
      )}
    </div>
  )
}
