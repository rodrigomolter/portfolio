"use client"
import { cn } from "@/app/lib/utils"
import Link from "next/link"

export function CardHover({
  title,
  src,
  image,
  video = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif",
}: {
  title: string
  src: string
  image: string
  video?: string
}) {
  return (
    <div className="max-w-xs w-full md:w-1/3 mt-6">
      <Link href={src}>
        <div
          style={
            {
              "--image-url": `url(${image})`,
              "--video-url": `url(${video})`,
            } as React.CSSProperties
          }
          className={cn(
            "group w-full cursor-pointer relative rounded-xl h-[26rem] lg:h-96 shadow-xl mx-auto flex flex-col justify-end ",
            "bg-[image:var(--image-url)] bg-cover"
            // Preload hover image by setting it in a pseudo-element
            // "before:bg-[image:var(--video-url)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
            // "hover:bg-[image:var(--video-url)] "
            // "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
            // "transition-all duration-500"
          )}
        >
          <div className="absolute inset-x-0 h-[2px] w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-accent to-transparent" />
          <div className="z-10 p-6 bg-zinc-800/60 backdrop-blur-md h-28">
            <h1 className="font-bold text-3xl text-gray-50">{title}</h1>
          </div>
        </div>
      </Link>
    </div>
  )
}
