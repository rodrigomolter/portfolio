import React from "react"
import { SocialIcons } from "./social-icons"

export function Footer() {
  return (
    <div className="max-w-screen-lg w-full text-center pb-6 pt-16 opacity-60">
      <p>
        Made with &hearts; by{" "}
        <a href="https://www.linkedin.com/in/rodrigo-molter/">Rodrigo Molter</a>
      </p>
      <SocialIcons size="small" />
    </div>
  )
}
