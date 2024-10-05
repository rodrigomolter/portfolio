import Image from "next/image"
import Link from "next/link"
import { FaFigma, FaGithub, FaLinkedin } from "react-icons/fa6"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel"

import { projects } from "@/data/info"

export function ProjectCarousel() {
  return (
    <Carousel
      className="max-w-md md:max-w-xl lg:max-w-5xl "
      opts={{
        align: "center",
        loop: true,
      }}
    >
      <CarouselContent>
        {Object.values(projects).map(
          ({
            name,
            url,
            image,
            smimage,
            logo,
            description,
            github,
            linkedin,
            figma,
          }) => (
            <CarouselItem key={name} className="md:basis-4/5">
              <div className="h-auto bg-base-300 flex flex-col rounded-3xl">
                {/* Video */}
                <Link href={url}>
                  <div className="relative flex justify-center items-center bg-base-200 h-[70vh] min-h-[480px] max-h-[650px] w-auto rounded-3xl mb-4 shadow-lg ">
                    <picture>
                      <source media="(max-width: 1024px)" srcSet={smimage} />
                      <Image
                        alt={`Imagem do projeto ${name}.`}
                        src={image}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-t-3xl"
                      />
                    </picture>
                  </div>
                </Link>

                {/* Bottom */}
                <div className="gap-6 mx-4 lg:mx-6 flex flex-row items-center justify-between">
                  <Link href={url}>
                    <div className="flex flex-row gap-4 items-center py-6">
                      <div className="rounded-full flex flex-row justify-start items-center w-16 h-16 lg:w-20 lg:h-20 flex-shrink-0">
                        {logo}
                      </div>
                      <div>
                        <h1 className="text-3xl font-semibold">{name}</h1>
                        <p className="hidden lg:flex pt-2">{description}</p>
                      </div>
                    </div>
                  </Link>

                  {/* Socials */}
                  <div className="text-4xl lg:text-5xl mr-6 flex justify-end items-center gap-6 lg:gap-12">
                    {linkedin ? (
                      <Link
                        href={linkedin}
                        target="_blank"
                        className="hover:scale-125 hover:text-accent transition-all ease-in-out tooltip"
                        data-tip="LinkedIn"
                      >
                        <FaLinkedin />
                      </Link>
                    ) : null}
                    {github ? (
                      <Link
                        href={github}
                        target="_blank"
                        className="hover:scale-125 hover:text-accent transition-all ease-in-out tooltip"
                        data-tip="GitHub"
                      >
                        <FaGithub />
                      </Link>
                    ) : null}
                    {figma ? (
                      <Link
                        href={figma}
                        target="_blank"
                        className="hover:scale-125 hover:text-accent transition-all ease-in-out tooltip"
                        data-tip="Figma"
                      >
                        <FaFigma />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>
            </CarouselItem>
          )
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
