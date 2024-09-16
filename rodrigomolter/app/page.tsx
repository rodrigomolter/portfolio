"use client"
import Image from "next/image"
import { SocialIcons } from "./components/social-icons"
import { bio } from "@/data/info"
import { FakeTerminalWindow } from "./components/terminal/fake-terminal-window"
import { Prompt } from "./components/terminal/prompt"
import { toast } from "sonner"
import { useEffect, useState } from "react"
import confetti from "canvas-confetti"
import { useTheme } from "next-themes"
import Particles from "@/app/components/ui/magicui/particles"
import { FaRocket } from "react-icons/fa6"

function handleShareRoom() {
  navigator.clipboard.writeText("rodrigo.molter@gmail.com")
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
  const { theme } = useTheme()
  const [color, setColor] = useState("#ffffff")

  useEffect(() => {
    setColor(theme === "dracula" ? "#ffffff" : "#000000")
  }, [theme])

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 pt-12 md:pt-36">
        <Image
          src="/self.png"
          alt="Foto de Rodrigo Molter sorrindo enquanto olha para a câmera. Rodrigo é um homem, com rosto oval e possui barba. Utiliza uma camisa bordo e um casaco preto. A foto possui um fundo cinza."
          width={1188}
          height={1232}
          className="bg-gradient-to-br from-yellow-500 to-amber-800 rounded-full w-[300px] md:w-2/6 p-3"
        />
        <div>
          <div className="text-center md:text-left mb-4 space-y-1">
            <div className="text-5xl">
              <span className="text-3xl">Olá, </span>
              <span className="animate-wave inline-block">🤚🏻</span>
            </div>
            <h1 className="text-5xl">
              Sou o{" "}
              <span
                onClick={handleConfetti}
                className="bg-gradient-to-tl from-amber-600 to-yellow-500 text-transparent bg-clip-text font-bold"
              >
                Rodrigo.
              </span>
            </h1>
            <h2 className="text-3xl">QA Engineer.</h2>
          </div>

          <ul className="space-y-1 text-xl text-center md:text-left pb-8">
            <li>🍵 apaixonado por chás</li>
            <li>🧉 gaúcho, tchê!</li>
            <li>🦙 AI enthusiast</li>
            <li>
              <button onClick={handleShareRoom}>
                📧 rodrigo.molter@gmail.com
                <p className="text-xs"> (clique para copiar)</p>
              </button>
            </li>
          </ul>
          <SocialIcons />
        </div>
      </div>
      <div className="mt-12 md:mt-60">
        <FakeTerminalWindow>
          <Prompt content="cd about" branch={true} />
          <Prompt directory="/about" branch={true} content="cat README.md" />
          <p>{bio}</p>
          <p>
            Acesse{" "}
            <a href="/about" className="font-bold underline">
              /sobre
            </a>{" "}
            para ver mais.
          </p>
        </FakeTerminalWindow>
      </div>
      <Particles
        className="absolute inset-0 pointer-events-none -z-10"
        quantity={120}
        ease={80}
        color={color}
        refresh
      />
    </div>
  )
}
