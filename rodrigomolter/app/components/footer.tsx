import { SocialIcons } from "@/app/components/icons/social-icons"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="px-6 w-full text-center my-8 opacity-80">
      <div className="divider" />
      <div className="mb-6">
        <span>Made with </span>
        <Image
          src={"/emojis/love.png"}
          alt="love"
          width={30}
          height={30}
          className="inline -translate-y-1"
          unoptimized
        />
        <span> by </span>
        <a
          href="https://www.linkedin.com/in/rodrigo-molter/"
          className="link"
          target="_blank"
        >
          Rodrigo Molter
        </a>
      </div>
      <SocialIcons small />
    </footer>
  )
}
