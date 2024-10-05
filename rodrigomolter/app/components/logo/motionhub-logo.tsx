import Image from "next/image"

export default function MotionHUBLogo() {
  return (
    <div className="overflow-hidden w-full h-full flex items-center justify-center bg-black rounded-full p-1">
      <Image
        src="/projects/motionhub-api/hub-small.png"
        alt="MotionHUB Logo"
        width={1080}
        height={1080}
      />
    </div>
  )
}
