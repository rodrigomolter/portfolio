"use client"
import Image from "next/image"
import { SocialIcons } from "./components/social-icons"
import { bio } from "@/data/info"
import { FakeTerminalWindow } from "./components/terminal/fake-terminal-window"
import { Prompt } from "./components/terminal/prompt"
import { toast } from "sonner"

function handleShareRoom() {
  navigator.clipboard.writeText("rodrigo.molter@gmail.com")
  toast.info("O link do email foi copiado para área de transferência (CTRL+C).")
}

export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 pt-12 md:pt-36">
        <Image
          src="/self.png"
          alt="Foto de Rodrigo Molter sorrindo enquanto olha para a câmera. Rodrigo é um homem, com rosto oval e possui barba. Utiliza uma camisa bordo e um casaco preto. A foto possui um fundo cinza."
          width={1188}
          height={1232}
          className="bg-gradient-to-br from-indigo-500 to-fuchsia-500 rounded-full w-[300px] md:w-2/6 p-3"
        />
        <div>
          <div className="text-center md:text-left mb-4 space-y-1">
            <div className="text-5xl">
              <span className="text-3xl">Olá, </span>
              <span className="animate-wave inline-block">🤚🏻</span>
            </div>
            <h1 className="text-5xl">
              Sou o{" "}
              <span className="bg-gradient-to-tl from-indigo-500 to-fuchsia-500 text-transparent bg-clip-text font-bold">
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
            {/* <li>
              <a href="https://wa.me/+5551998832787" target="_blank">
                🤝 vamos conversar!
              </a>
            </li> */}
          </ul>
          <SocialIcons />
        </div>
      </div>
      <div className="mt-12 md:mt-60">
        <FakeTerminalWindow>
          <Prompt content="cd about" branch={true} />
          <Prompt directory="/about" branch={true} content="cat README.md" />
          <p>{bio}</p>
        </FakeTerminalWindow>
      </div>
      <div></div>
    </div>
  )
}
