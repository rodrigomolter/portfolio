import Image from "next/image"

export default function DocunderLogo() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-white rounded-[40px]">
      <Image
        src="/projects/docunder/docunder-logo.svg"
        alt="Docunder Logo"
        width={1080}
        height={1080}
      />
    </div>
  )
}
