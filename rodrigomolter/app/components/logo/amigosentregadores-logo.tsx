import Image from "next/image"

export default function AmigosEntregadoresLogo() {
  return (
    <div className="overflow-hidden w-full h-full flex items-center justify-center rounded-full">
      <Image
        alt="Logo Amigos Entregadores"
        src="/projects/amigos-entregadores/amigos-entregadores-logo.png"
        width={500}
        height={500}
      />
    </div>
  )
}
