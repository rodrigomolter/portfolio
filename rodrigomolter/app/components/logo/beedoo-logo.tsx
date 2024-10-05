import Image from "next/image"

export default function BeedooLogo() {
  return (
    <div className="overflow-hidden w-full h-full flex items-center justify-center bg-zinc-950 rounded-full p-1">
      <Image
        src="/projects/beedoo/logo-beedoo-white.png"
        alt="Beedoo Logo"
        width={1080}
        height={1080}
      />
    </div>
  )
}
