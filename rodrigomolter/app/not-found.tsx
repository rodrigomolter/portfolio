"use client"
import Image from "next/image"

export default function Custom404() {
  return (
    <div className="flex flex-col items-center gap-1 text-lg mx-6">
      <h1 className="text-4xl font-bold font-roboto">404 NOT FOUND</h1>
      <Image
        src="/emojis/see-no-evil.png"
        alt="See no Evil Monkey"
        width={200}
        height={200}
        unoptimized
        className="mt-4 mb-12"
      />
      <p>Oops, parece que essa página ainda não existe.</p>
      <p>
        Caso tenha encontrado um <span className="font-bold">bug, </span>
        <a
          href="https://github.com/rodrigomolter/portfolio/issues/new"
          target="_blank"
          className="link font-semibold text-accent"
        >
          crie uma issue aqui
        </a>
        . É importante para mim{" "}
        <Image
          src="/emojis/love.png"
          alt="Coração com as mãos"
          width={25}
          height={25}
          unoptimized
          className="inline -translate-y-1"
        />
        .
      </p>
      <p className="mt-6">
        Deseja ir para{" "}
        <a href="/" className="link font-semibold text-accent">
          home
        </a>
        ?
      </p>
    </div>
  )
}
