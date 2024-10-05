import Image from "next/image"

export default function LojaQALogo() {
  return (
    <div className="overflow-hidden h-full w-auto flex items-center justify-center rounded-full bg-black">
      <Image
        alt="Logo Loja QA"
        src="/projects/loja-qa/home-lojaqa.svg"
        width={1080}
        height={1080}
        className="object-cover w-auto h-[60px]"
      />
    </div>
  )
}
