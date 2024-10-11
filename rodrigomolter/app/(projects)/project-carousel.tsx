import Image from "next/image"
import Link from "next/link"
import { FaFigma, FaGithub, FaLinkedin } from "react-icons/fa6"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/components/ui/carousel"

import { projects } from "@/data/info"

export function ProjectCarousel() {
  return (
    <Carousel
      id="projects"
      className="max-w-[98vw]"
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
            xsimage,
            logo,
            description,
            github,
            linkedin,
            figma,
          }) => (
            <CarouselItem key={name} className="basis-auto">
              <div className="w-[270px] sm:w-[360px] lg:w-[600px] h-auto bg-base-300 flex flex-col rounded-3xl">
                {/* Image */}
                <Link href={url}>
                  <div className="flex justify-center items-center bg-base-200 w-auto rounded-3xl mb-4 shadow-lg ">
                    <picture>
                      <source media="(max-width: 360px)" srcSet={xsimage} />
                      <source media="(max-width: 768px)" srcSet={smimage} />
                      <Image
                        alt={`Imagem do projeto ${name}.`}
                        src={image}
                        width={800}
                        height={600}
                        className="rounded-t-3xl w-[360px] lg:w-[800px] h-auto"
                      />
                    </picture>
                  </div>
                </Link>

                {/* Bottom */}
                <div className="gap-6 mx-4 lg:mx-6 h-24 sm:h-28 lg:h-40 flex flex-row items-center justify-between">
                  <Link href={url}>
                    <div className="flex flex-row gap-4 items-center py-4 sm:py-6">
                      <div className="flex flex-row justify-start items-center w-16 h-16 lg:w-20 lg:h-20 flex-shrink-0 rounded-full">
                        {logo}
                      </div>
                      <div>
                        <h1 className="text-2xl sm:text-3xl font-roboto">
                          {name}
                        </h1>
                        <p className="hidden lg:flex pt-2">{description}</p>
                      </div>
                    </div>
                  </Link>

                  {/* Socials */}
                  <div className="hidden sm:flex text-4xl lg:text-5xl mr-6 justify-end items-center gap-6 lg:gap-12">
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
    </Carousel>
  )
}
