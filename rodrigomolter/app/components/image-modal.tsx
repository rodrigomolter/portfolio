"use client"
import Image from "next/image"
import { useRef } from "react"
import { cn } from "@/app/lib/utils"

export function ImageModal({
  imageSrc,
  caption,
  captionSrc,
  width = 1080,
  height = 1080,
  className,
}: {
  imageSrc: string
  caption?: string
  captionSrc?: string
  width?: number
  height?: number
  className?: string
}) {
  const modalRef = useRef<HTMLDialogElement>(null)

  const handleOpenModal = () => {
    modalRef.current?.showModal()
  }

  const handleCloseModal = () => {
    modalRef.current?.close()
  }

  return (
    <div className="pt-6">
      <div className="flex flex-col items-center justify-center">
        <button onClick={handleOpenModal}>
          <div className="h-auto w-[80vw] md:w-[60vw] max-w-screen-md">
            <Image
              alt={`Imagem de ${caption}`}
              src={imageSrc}
              width={width}
              height={height}
              title="Clique para aumentar."
              className={cn(
                "max-w-full max-h-[50vh] h-auto object-contain",
                className
              )}
            />
          </div>
        </button>
        <p className="pt-4 italic">
          {captionSrc ? (
            <a href={captionSrc} className="link" target="_blank">
              {caption}
            </a>
          ) : (
            caption
          )}
        </p>
      </div>

      <dialog ref={modalRef} className="modal">
        <div className="modal-box max-w-5xl p-4">
          <div className="relative flex flex-col items-center ">
            <button
              className="absolute top-2 right-4 text-xl btn btn-neutral btn-circle"
              aria-label="Fechar modal"
              onClick={handleCloseModal}
            >
              X
            </button>
            <Image
              alt={`Imagem de ${caption}`}
              src={imageSrc}
              width={width}
              height={height}
              title="Clique para aumentar."
              className="max-w-full max-h-[80vh] h-auto object-contain"
            />
            <p className="pt-4 italic">
              {captionSrc ? (
                <a href={captionSrc} className="link" target="_blank">
                  {caption}
                </a>
              ) : (
                caption
              )}
            </p>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  )
}
