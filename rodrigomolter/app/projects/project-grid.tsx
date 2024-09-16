"use client"

import Image from "next/image"
import React from "react"
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card"
import Link from "next/link"
import docunder from "@/public/projects/docunder.png"

export function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <CardContainer className="inter-var ">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
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
          <CardItem
            as="p"
            translateZ="70"
            className="text-neutral-500 text-md max-w-sm mt-2 dark:text-neutral-300"
          >
            Docunder é uma plataforma técnica colaborativa
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Sign up
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

      <CardContainer className="inter-var ">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
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
          <CardItem
            as="p"
            translateZ="70"
            className="text-neutral-500 text-md max-w-sm mt-2 dark:text-neutral-300"
          >
            Docunder é uma plataforma técnica colaborativa
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Sign up
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  )
}
