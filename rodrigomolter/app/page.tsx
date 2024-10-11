"use client"
import Image from "next/image"
import Link from "next/link"

import { PulsingMouseIcon } from "@/app/components/icons/pulsing-mouse-icon"
import { Spotlight } from "@/app/components/ui/spotlight"
import { ProjectCarousel } from "@/app/(projects)/project-carousel"
import SparklesText from "@/app/components/ui/sparkle-text"
import { CoolMode } from "@/app/components/ui/cool-mode"
import { BlurFade } from "@/app/components/ui/blur-fade"

import About from "@/app/about/page"
import Contact from "@/app/contact/page"

import { myself } from "@/data/info"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Hero */}
      <BlurFade className="lg:z-20">
        <div className="flex flex-col justify-start sm:justify-center md:justify-start items-center h-[70vh] 2xl:h-[60vh] min-h-[500px] lg:min-h-[600px] max-h-[800px]  2xl:max-h-[700px] m-4 lg:mx-10 gap-4">
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
            <label className="swap swap-flip">
              <input type="checkbox" />
              <Image
                src="/emojis/horns.png"
                alt="Waving Hand"
                height={50}
                width={50}
                className="swap-on"
                unoptimized
              />
              <Image
                src="/emojis/waving.png"
                alt="Waving Hand"
                height={50}
                width={50}
                className="swap-off -translate-y-2"
                unoptimized
              />
            </label>
            <span>, sou o {myself.firstName}.</span>
          </div>
          <Spotlight
            className="top-44 sm:top-64 md:top-10 xl:top-0 2xl:-top-20 3xl:-top-80 4xl:-top-1/3 -left-8 sm:-left-24 lg:-left-1 xl:left-20 4xl:left-1/4"
            fill="oklch(var(--bc))"
          />
          <div className="flex flex-row justify-center md:w-2/3">
            <span className="text-center mt-6 xl:mt-12 text-3xl sm:text-4xl md:text-5xl font-suisse-book">
              <CoolMode options={{ particle: "/emojis/beetle.png" }}>
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
      </BlurFade>
      {/* Projects */}
      <BlurFade delay={0.75}>
        <ProjectCarousel />
      </BlurFade>
      {/* About */}
      <BlurFade inView>
        <About />
      </BlurFade>

      {/* Contact */}
      <BlurFade inView>
        <Contact />
      </BlurFade>
    </div>
  )
}
