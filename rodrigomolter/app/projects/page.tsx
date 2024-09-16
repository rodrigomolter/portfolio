"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { Browser } from "../components/browser"
import docunder from "@/public/projects/docunder.png"
import Particles from "../components/ui/magicui/particles"
import { useTheme } from "next-themes"

export default function Portfolio() {
  const { theme } = useTheme()
  const [color, setColor] = useState("#ffffff")

  useEffect(() => {
    setColor(theme === "dracula" ? "#ffffff" : "#000000")
  }, [theme])
  return (
    <div>
      <div className="pt-16 mx-4">
        <Browser
          url="https://docunder.com"
          link="https://docunder.onrender.com/"
        >
          <Image
            alt="Docunder Webiste"
            src={docunder}
            className="mask mask-parallelogram"
          />
        </Browser>
        <p>
          <strong>
            <a href="https://www.linkedin.com/company/docunder/">Docunder</a>
          </strong>{" "}
          é uma plataforma de documentação técnica para desenvolvedores de
          software, hardware e IoT.
        </p>
        <p>
          O projeto tem objetivo a criação de uma plataforma de compartilhamento
          de documentos técnicos na área de desenvolvimento e compartilhamento
          de códigos para um grupo específico. Além disso, ser de fácil
          utilização sem que haja cursos externos para o uso da plataforma
          gerando oportunidades para iniciantes e empresas. Este produto ajuda
          desenvolvedores de tecnologia que precisam documentar seu trabalho de
          forma colaborativa para obter um registro dos processos ao
          proporcionar uma navegação simples e intuitiva. Essa ideia se
          diferencia das soluções existentes porque é open source e tem uma
          interface simples.
        </p>
        <p>
          Desenvolvida de forma voluntária, o projeto consiste de setores como
          agilistas, product menager, ux/ui designers, desenvolvedores e QAs.
        </p>
      </div>
      <Particles
        className="absolute inset-0 pointer-events-none"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  )
}
