"use client"

import { toast } from "sonner"
import confetti from "canvas-confetti"

import { SocialIcons } from "@/app/components/icons/social-icons"

import { myself } from "@/data/info"
import { RainbowButton } from "@/app/components/ui/rainbow-button"
import Image from "next/image"

function handleShareEmail() {
  navigator.clipboard.writeText(myself.email)
  toast.success("O email foi copiado para área de transferência (CTRL+C) 🎉.")
  handleConfetti()
}

const handleConfetti = () => {
  const end = Date.now() + 1 * 500 // 0.5 second
  const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"]

  const frame = () => {
    if (Date.now() > end) return

    confetti({
      particleCount: 2,
      angle: 30,
      spread: 55,
      startVelocity: 60,
      origin: { x: 0, y: 0.5 },
      colors: colors,
    })
    confetti({
      particleCount: 2,
      angle: 150,
      spread: 55,
      startVelocity: 60,
      origin: { x: 1, y: 0.5 },
      colors: colors,
    })

    requestAnimationFrame(frame)
  }

  frame()
}

export default function Contact() {
  return (
    <div
      id="contact"
      className="w-[calc(100vw-20px)] bg-base-300 h-[85vh] sm:h-[90vh] mt-20"
    >
      <div className="flex flex-col justify-center items-center h-full gap-16 sm:gap-28 3xl:gap-32 mx-2 font-suisse-book">
        <p className="flex flex-col justify-center items-center text-6xl sm:text-7xl 3xl:text-8xl text-center ">
          <Image
            src="/emojis/raising-hand.png"
            alt="Homem com a mão levantada"
            height={100}
            width={100}
            className="mr-1 -translate-y-4"
            unoptimized
          />
          Vamos conversar!
        </p>
        <div className="flex flex-col justify-center items-center gap-2">
          <RainbowButton
            onClick={handleShareEmail}
            className="text-xl sm:text-2xl xl:text-3xl"
          >
            <Image
              src="/emojis/email.png"
              alt="Email"
              height={50}
              width={50}
              className="inline mr-1"
            />
            <span>{myself.email}</span>
          </RainbowButton>
          <p className="text-sm 3xl:text-base"> (clique para copiar)</p>
        </div>
        <SocialIcons />
      </div>
    </div>
  )
}
