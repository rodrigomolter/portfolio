"use client"
import Image from "next/image"
import { toast } from "sonner"
import confetti from "canvas-confetti"

import { FaRocket } from "react-icons/fa6"
import { SocialIcons } from "@/app/components/icons/social-icons"
import { PulsingMouseIcon } from "@/app/components/icons/pulsing-mouse-icon"

import About from "@/app/about/page"
import { ProjectCarousel } from "@/app/(projects)/project-carousel"
import { GridPattern } from "@/app/components/ui/grid-pattern"

import { myself } from "@/data/info"

function handleShareEmail() {
  navigator.clipboard.writeText(myself.email)
  toast.success("O email foi copiado para área de transferência (CTRL+C).", {
    icon: <FaRocket />,
  })
}

const handleConfetti = () => {
  const end = Date.now() + 1 * 1000 // 1 second
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
      <div className="flex flex-col md:flex-row justify-start sm:justify-center items-center h-[90vh] min-h-[540px] md:min-h-[500px] max-h-[1080px] gap-4 md:gap-20 mt-6 md:mx-12">
        <Image
          src="/self.png"
          alt="Foto de Rodrigo Molter sorrindo enquanto olha para a câmera. Rodrigo é um homem, com rosto oval e possui barba. Utiliza uma camisa bordo e um casaco preto. A foto possui um fundo cinza."
          width={1188}
          height={1232}
          className="bg-gradient-to-br from-accent to-logo-primary rounded-full w-[150px] sm:w-[250px] lg:w-[350px] rotate-3"
          priority={true}
        />
        <div className="flex flex-col text-center md:text-left">
          <div className="mb-4 space-y-10 mx-6 text-3xl sm:text-4xl">
            <span className="inline-block animate-wave">🖐🏻</span> Olá, sou o{" "}
            <span
              onClick={handleConfetti}
              className="bg-gradient-to-tl from-accent to-logo-primary text-transparent bg-clip-text font-bold capitalize"
            >
              {myself.firstName}
            </span>
            .
            <p className="md:flex text-xl md:text-2xl">
              Sou um QA Engineer atento aos detalhes{" "}
              <br className="xs:max-md:hidden" />e um amante de chá 🍵
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 my-6 sm:my-8">
            <button
              onClick={handleShareEmail}
              className="p-4 border-accent border-2 text-xl md:text-2xl font-semibold rounded-full bg-base-200 hover:scale-110 hover:text-accent hover:bg-base-300 transition-all ease-in-out"
            >
              📧 {myself.email}
            </button>
            <p className="text-xs"> (clique para copiar)</p>
          </div>
          <SocialIcons />
        </div>

        <PulsingMouseIcon />
      </div>

      {/* Projects */}
      <div id="projects">
        <ProjectCarousel />
      </div>

      {/* About */}
      <About />
    </div>
  )
}
