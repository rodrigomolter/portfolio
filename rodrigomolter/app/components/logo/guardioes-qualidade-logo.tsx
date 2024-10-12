"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"

export default function GuardioesQualidadeLogo() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const logoPath =
    theme === "dracula"
      ? "/projects/logo-guardioes-branco.png"
      : "/projects/logo-guardioes-preto.png"
  return (
    <Image
      alt="Logo Guardiões da Qualidade"
      src={logoPath}
      width={500}
      height={300}
      className="w-auto h-auto"
    />
  )
}
