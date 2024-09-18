"use client"

import Image from "next/image"
import React from "react"
import Link from "next/link"
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card"
import docunder from "@/public/projects/docunder.png"
import { FaGithub, FaLinkedin } from "react-icons/fa6"

export function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 px-4 gap-4">
      <CardContainer className="inter-var ">
        <CardBody className="bg-base-300 relative group/card hover:shadow-2xl hover:shadow-accent/[0.1] border-base-content/[0.2] w-auto sm:w-[30rem] h-auto rounded-2xl p-6 border ">
          <CardItem translateZ="50" className="text-xl font-bold text-accent">
            📘 Docunder
          </CardItem>

          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={docunder}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem translateZ="70" className="text-lg mt-2">
            O projeto tem objetivo a criação de uma plataforma de
            compartilhamento de documentos técnicos na área de desenvolvimento e
            compartilhamento de códigos para um grupo específico. Essa ideia se
            diferencia das soluções existentes porque é open source e tem uma
            interface simples.
          </CardItem>
          <div className="flex justify-center items-center my-4 gap-16">
            <CardItem translateZ={85}>
              <button className="px-8 py-2 rounded-full relative bg-base-100/50 text-sm border border-slate-600">
                <div className="absolute inset-x-0 h-[2px] w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-accent to-transparent" />
                <Link
                  href="/docunder"
                  target="_blank"
                  className="relative z-20"
                >
                  Saiba mais
                </Link>
              </button>
            </CardItem>
            <CardItem translateZ={70}>
              <button className="px-2 py-2 text-4xl rounded-full glass">
                <a href="https://github.com/Organizacao-Docunder">
                  <FaGithub />
                </a>
              </button>
            </CardItem>
            <CardItem translateZ={75}>
              <button className="px-2 py-2 text-4xl rounded-full glass">
                <a href="https://www.linkedin.com/company/docunder/">
                  <FaLinkedin />
                </a>
              </button>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

      <CardContainer className="inter-var ">
        <CardBody className="bg-base-300 relative group/card hover:shadow-2xl hover:shadow-accent/[0.1] border-base-content/[0.2] w-auto sm:w-[30rem] h-auto rounded-2xl p-6 border ">
          <CardItem translateZ="50" className="text-xl font-bold text-accent">
            👖 Backoffice JogaJunto
          </CardItem>

          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={docunder}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem translateZ="70" className="text-lg mt-2">
            O Backoffice JogaJunto é o projeto final do módulo AVANÇADO do curso
            Bugou? QA TA ON oferecido pelo Instituto Joga Junto. Trata-se de um
            sistema de controle de estoque de produtos para os colaboradores do
            Instituto Joga Junto, no qual é possível realizar o cadastro,
            pesquisa e filtragem de produtos adicionados.
          </CardItem>
          <div className="flex justify-center items-center my-4 gap-16">
            <CardItem translateZ={85}>
              <button className="px-8 py-2 rounded-full relative bg-base-100/50 text-sm border border-slate-600">
                <div className="absolute inset-x-0 h-[2px] w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-accent to-transparent" />
                <Link
                  href="/backoffice-jogajunto"
                  target="_blank"
                  className="relative z-20"
                >
                  Saiba mais
                </Link>
              </button>
            </CardItem>
            <CardItem translateZ={70}>
              <button className="px-2 py-2 text-4xl rounded-full glass">
                <a href="https://github.com/rodrigomolter/backoffice-jogajunto">
                  <FaGithub />
                </a>
              </button>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

      <CardContainer className="inter-var ">
        <CardBody className="bg-base-300 relative group/card hover:shadow-2xl hover:shadow-accent/[0.1] border-base-content/[0.2] w-auto sm:w-[30rem] h-auto rounded-2xl p-6 border ">
          <CardItem translateZ="50" className="text-xl font-bold text-accent">
            Docunder
          </CardItem>

          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={docunder}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem translateZ="70" className="text-lg mt-2">
            O projeto tem objetivo a criação de uma plataforma de
            compartilhamento de documentos técnicos na área de desenvolvimento e
            compartilhamento de códigos para um grupo específico. Essa ideia se
            diferencia das soluções existentes porque é open source e tem uma
            interface simples.
          </CardItem>
          <div className="flex justify-center items-center my-4 gap-16">
            <CardItem translateZ={85}>
              <button className="px-8 py-2 rounded-full relative bg-base-100/50 text-sm border border-slate-600">
                <div className="absolute inset-x-0 h-[2px] w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-accent to-transparent" />
                <span className="relative z-20">Saiba mais</span>
              </button>
            </CardItem>
            <CardItem translateZ={70}>
              <button className="px-2 py-2 text-4xl rounded-full glass">
                <a href="https://github.com/Organizacao-Docunder">
                  <FaGithub />
                </a>
              </button>
            </CardItem>
            <CardItem translateZ={75}>
              <button className="px-2 py-2 text-4xl rounded-full glass">
                <a href="https://www.linkedin.com/company/docunder/">
                  <FaLinkedin />
                </a>
              </button>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

      <CardContainer className="inter-var ">
        <CardBody className="bg-base-300 relative group/card hover:shadow-2xl hover:shadow-accent/[0.1] border-base-content/[0.2] w-auto sm:w-[30rem] h-auto rounded-2xl p-6 border ">
          <CardItem translateZ="50" className="text-xl font-bold text-accent">
            Docunder
          </CardItem>

          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={docunder}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem translateZ="70" className="text-lg mt-2">
            O projeto tem objetivo a criação de uma plataforma de
            compartilhamento de documentos técnicos na área de desenvolvimento e
            compartilhamento de códigos para um grupo específico. Essa ideia se
            diferencia das soluções existentes porque é open source e tem uma
            interface simples.
          </CardItem>
          <div className="flex justify-center items-center my-4 gap-16">
            <CardItem translateZ={85}>
              <button className="px-8 py-2 rounded-full relative bg-base-100/50 text-sm border border-slate-600">
                <div className="absolute inset-x-0 h-[2px] w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-accent to-transparent" />
                <span className="relative z-20">Saiba mais</span>
              </button>
            </CardItem>
            <CardItem translateZ={70}>
              <button className="px-2 py-2 text-4xl rounded-full glass">
                <a href="https://github.com/Organizacao-Docunder">
                  <FaGithub />
                </a>
              </button>
            </CardItem>
            <CardItem translateZ={75}>
              <button className="px-2 py-2 text-4xl rounded-full glass">
                <a href="https://www.linkedin.com/company/docunder/">
                  <FaLinkedin />
                </a>
              </button>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  )
}
