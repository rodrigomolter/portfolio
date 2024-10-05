import Image from "next/image"

export default function BugbankLogo() {
  return (
    <div className="overflow-hidden w-full h-full flex items-center justify-center bg-[#b424c7] rounded-full p-1">
      <Image
        src="/projects/bugbank/bugbank-logo.png"
        alt="Bugbank Logo"
        width={1080}
        height={1080}
      />
    </div>
  )
}
