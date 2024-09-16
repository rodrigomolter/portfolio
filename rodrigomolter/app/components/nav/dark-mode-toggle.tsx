"use client"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { MoonIcon } from "../icons/moon-icon"
import { SunIcon } from "../icons/sun-icon"

const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const onChangeTheme = () => {
    setTheme(theme == "light" ? "dark" : "light")
  }

  if (!mounted) return null

  return (
    <label className="btn btn-ghost swap swap-rotate">
      <input
        type="checkbox"
        className="theme-controller"
        onChange={onChangeTheme}
        checked={theme == "dark" ? true : false}
      />
      <SunIcon className="swap-on" />
      <MoonIcon className="swap-off" />
    </label>
  )
}

export default DarkModeToggle
