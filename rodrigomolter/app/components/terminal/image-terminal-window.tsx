import { ReactNode } from "react"

export function ImageTerminalWindow({ children }: { children: ReactNode }) {
  return (
    <div className="mx-4 rounded-xl shadow-lg text-lg border border-black/20">
      {/* top bar */}
      <div className="flex bg-base-200 py-2 px-4 rounded-t-xl gap-2">
        <div className="bg-error h-4 w-4 rounded-full" />
        <div className="bg-warning h-4 w-4 rounded-full" />
        <div className="bg-success h-4 w-4 rounded-full" />
      </div>
      {/* bottom content */}
      <div className="bg-base-300 rounded-b-xl overflow-hidden">{children}</div>
    </div>
  )
}
