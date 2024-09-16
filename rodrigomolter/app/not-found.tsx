"use client"
import Image from "next/image"
import sadCat from "../public/sadcat.png"

export default function Custom404() {
  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold">Erro 404</h1>
      <p>Oops, parece que essa página ainda não existe 😢</p>
      <Image
        src={sadCat}
        alt="Sad Cat :("
        width={200}
        height={200}
        className="rounded-xl"
      />
    </div>
  )
}
