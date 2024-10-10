"use client"
import Image from "next/image"
import confetti from "canvas-confetti"

import { SocialIcons } from "@/app/components/icons/social-icons"
import { PulsingMouseIcon } from "@/app/components/icons/pulsing-mouse-icon"
import { ProjectCarousel } from "@/app/(projects)/project-carousel"

import About from "@/app/about/page"
import Contact from "@/app/contact/page"

import { myself } from "@/data/info"

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
      <div className="flex flex-col-reverse md:flex-row justify-end sm:justify-center items-center h-[85vh] min-h-[540px] max-h-[1080px] gap-4 lg:gap-20 md:mt-0 md:mx-12">
        <div className="flex flex-col text-center md:text-left">
          <div className="mb-4 space-y-10 text-3xl sm:text-4xl mx-2 md:mx-0">
            <label className="swap animate-wave swap-flip text-4xl">
              <input type="checkbox" />

              <span className="inline swap-off translate-y-1">🖐🏻</span>
              <span className="inline swap-on translate-y-1">🤙🏻</span>
            </label>
            Olá, sou o{" "}
            <span onClick={handleConfetti} className="font-bold capitalize">
              {myself.firstName}
            </span>
            .<p className="md:flex text-xl md:text-2xl">{myself.description}</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 my-6 mx-2">
            <button
              onClick={handleShareEmail}
              className="p-4 border-accent border-2 text-xl lg:text-2xl font-semibold rounded-full bg-base-200 hover:scale-110 hover:text-accent hover:bg-base-300 transition-all ease-in-out"
            >
              📧 {myself.email}
            </button>
            <p className="text-xs"> (clique para copiar)</p>
          </div>
          <SocialIcons />
        </div>
        <Image
          src="/self.png"
          alt="Foto de Rodrigo Molter sorrindo enquanto olha para a câmera. Rodrigo é um homem, com rosto oval e possui barba. Utiliza uma camisa bordo e um casaco preto. A foto possui um fundo cinza."
          width={1188}
          height={1232}
          className="bg-gradient-to-br from-accent to-logo-primary rounded-full w-[150px] sm:w-[250px] lg:w-[350px] rotate-3 xl:-translate-y-10"
          priority={true}
        />
        <a href="#projects">
          <PulsingMouseIcon />
        </a>
      </div>

      {/* Projects */}
      <div id="projects">
        <ProjectCarousel />
      </div>

      {/* About */}
      <About />

      {/* Contact */}
      <Contact />
    </div>
  )
}
