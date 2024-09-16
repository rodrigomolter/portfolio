"use client"
import { SocialIcons } from "./social-icons"
import Particles from "./ui/particles"

export function Footer() {
  return (
    <footer className="max-w-screen-lg w-full text-center pb-6 pt-16 opacity-80 space-y-2">
      <div className="divider" />
      <p className="pt-2">
        Made with <span className="text-red-500">❤</span> by{" "}
        <a
          href="https://www.linkedin.com/in/rodrigo-molter/"
          className="link"
          target="_blank"
        >
          Rodrigo Molter
        </a>
      </p>
      <p>
        Incredible template made by{" "}
        <a
          href="https://www.paytonpierce.dev/"
          className="link"
          target="_blank"
        >
          Payton Pierce
        </a>
      </p>
      <SocialIcons size="small" />
      <Particles />
    </footer>
  )
}
