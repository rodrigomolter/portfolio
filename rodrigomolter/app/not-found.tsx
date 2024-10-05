"use client"
import Image from "next/image"

export default function Custom404() {
  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold">Erro 404</h1>
      <p>Oops, parece que essa página ainda não existe 😢.</p>
      <Image src="/sadcat.png" alt="Sad Cat :(" width={384} height={384} />
      <p className="text-lg">
        Deseja ir para{" "}
        <a href="/" className="link font-semibold text-accent">
          home
        </a>
        ?
      </p>
    </div>
  )
}
