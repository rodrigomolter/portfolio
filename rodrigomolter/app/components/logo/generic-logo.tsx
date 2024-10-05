import { cn } from "@/app/lib/utils"

export default function GenericLogo({
  title = "🚀",
  className,
}: {
  title?: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "overflow-hidden w-full h-full flex items-center justify-center bg-zinc-50 rounded-full",
        className
      )}
    >
      <p className="text-4xl">{title}</p>
    </div>
  )
}
