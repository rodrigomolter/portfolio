"use client"
import Image from "next/image"
import Link from "next/link"
import confetti from "canvas-confetti"

import { PulsingMouseIcon } from "@/app/components/icons/pulsing-mouse-icon"
import { Spotlight } from "@/app/components/ui/spotlight"
import { ProjectCarousel } from "@/app/(projects)/project-carousel"
import SparklesText from "@/app/components/ui/sparkle-text"

import About from "@/app/about/page"
import Contact from "@/app/contact/page"

import { myself } from "@/data/info"
import { CoolMode } from "./components/ui/cool-mode"

const handleConfetti = () => {
  const end = Date.now() + 1 * 500 // 0.5 second
  const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"]

  const frame = () => {
    if (Date.now() > end) return

    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      startVelocity: 60,
      origin: { x: 0, y: 0.5 },
      colors: colors,
    })
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      startVelocity: 60,
      origin: { x: 1, y: 0.5 },
      colors: colors,
    })

    requestAnimationFrame(frame)
  }

  frame()
}

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Hero */}
      <div className="flex flex-col justify-start sm:justify-center md:justify-start items-center h-[70vh] 2xl:h-[60vh] min-h-[500px] lg:min-h-[600px] max-h-[800px]  2xl:max-h-[700px] mx-4 lg:mx-10 gap-4">
        <Image
          src="/self.png"
          alt="Foto de Rodrigo Molter sorrindo enquanto olha para a câmera. Rodrigo é um homem, com rosto oval e possui barba. Utiliza uma camisa bordo e um casaco preto. A foto possui um fundo cinza."
          width={1188}
          height={1232}
          className="bg-gradient-to-br from-accent to-logo-primary rounded-full w-[150px] sm:w-[200px] rotate-3"
          priority={true}
        />
        <div className="flex justify-start items-center text-3xl font-suisse-book">
          <span>Olá </span>
          <label className="swap animate-wave swap-flip">
            <input type="checkbox" />
            <span className="swap-on">🤙🏻</span>
            <span className="swap-off">🖐🏻</span>
          </label>
          <span>, sou o {myself.firstName}</span>
        </div>
        <Spotlight
          className="top-44 sm:top-64 md:top-10 xl:top-0 2xl:-top-20 3xl:-top-80 4xl:-top-1/3 -left-8 sm:-left-24 lg:-left-1 xl:left-20 4xl:left-1/4"
          fill="oklch(var(--bc))"
        />
        <div className="flex flex-row justify-center md:w-2/3">
          <span className="text-center mt-6 xl:mt-12 text-3xl sm:text-4xl md:text-5xl font-suisse-book">
            <CoolMode options={{ particle: "/beetle.png" }}>
              <a>
                <SparklesText
                  text={myself.role}
                  className="text-3xl sm:text-4xl md:text-5xl text-accent"
                />
              </a>
            </CoolMode>
            <span> {myself.description}</span>
          </span>
        </div>
      </div>
      <Link href="#projects">
        <PulsingMouseIcon />
      </Link>

      {/* Projects */}
      <ProjectCarousel />

      {/* About */}
      <About />

      {/* Contact */}
      <Contact />
    </div>
  )
}
