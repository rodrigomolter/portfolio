"use client"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

import { MoonIcon } from "@/app/components/icons/moon-icon"
import { SunIcon } from "@/app/components/icons/sun-icon"

const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const onChangeTheme = () => {
    setTheme(theme === "winter" ? "dracula" : "winter")
  }

  if (!mounted) return null

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        className="theme-controller"
        onChange={onChangeTheme}
        checked={theme == "dracula" ? true : false}
      />
      <SunIcon className="swap-on" />
      <MoonIcon className="swap-off" />
    </label>
  )
}

export default DarkModeToggle
