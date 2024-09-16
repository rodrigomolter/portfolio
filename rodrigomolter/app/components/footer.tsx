import React from "react"
import { SocialIcons } from "./social-icons"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <div className="max-w-screen-lg w-full text-center pb-6 pt-16 opacity-80 space-y-2">
      <Separator className="opacity-30" />
      <p className="pt-2">
        Made with &hearts; by{" "}
        <a href="https://www.linkedin.com/in/rodrigo-molter/" target="_blank">
          Rodrigo Molter
        </a>
      </p>
      <p>
        Incredible template made by{" "}
        <a href="https://www.paytonpierce.dev/" target="_blank">
          Payton Pierce
        </a>
      </p>
      <SocialIcons size="small" />
    </div>
  )
}
