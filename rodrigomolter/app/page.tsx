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
      <div className="flex flex-col md:flex-row justify-start sm:justify-center items-center h-[90vh] min-h-[540px] md:min-h-[500px] max-h-[1080px] gap-4 md:gap-20 mt-6">
        <Image
          src="/self.png"
          alt="Foto de Rodrigo Molter sorrindo enquanto olha para a câmera. Rodrigo é um homem, com rosto oval e possui barba. Utiliza uma camisa bordo e um casaco preto. A foto possui um fundo cinza."
          width={1188}
          height={1232}
          className="bg-gradient-to-br from-accent to-logo-primary rounded-full w-[150px] sm:w-[250px] lg:w-[350px] rotate-3"
          priority={true}
        />
        <div>
          <div className="text-center md:text-left mb-4 space-y-1">
            <div className="hidden sm:flex text-4xl">
              <span className="animate-wave inline-block mr-5 text-5xl">
                🖐🏻
              </span>
              Sou o
            </div>
            <h1 className="text-5xl">
              <span
                onClick={handleConfetti}
                className="bg-gradient-to-tl from-accent to-logo-primary text-transparent bg-clip-text font-bold capitalize"
              >
                {myself.firstName}.
              </span>
            </h1>
            <h2 className="text-3xl font-bold">{myself.role}.</h2>
          </div>

          <ul className="space-y-1 text-xl text-center md:text-left pb-8">
            {myself.bulletPoints.map((bulletPoint) => (
              <li key={bulletPoint}>{bulletPoint}</li>
            ))}
            <li>
              <button onClick={handleShareEmail}>
                📧 {myself.email}
                <p className="text-xs"> (clique para copiar)</p>
              </button>
            </li>
          </ul>
          <SocialIcons />
        </div>
        <PulsingMouseIcon />
        <GridPattern
          width={50}
          height={50}
          numSquares={60}
          maxOpacity={0.25}
          duration={4}
          repeatDelay={0.5}
        />
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
