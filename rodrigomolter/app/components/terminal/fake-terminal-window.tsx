import { ReactNode } from "react"

export function FakeTerminalWindow({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-screen-lg mx-2 md:mx-8 rounded-xl shadow-lg text-lg border border-black/20">
      {/* top bar */}
      <div className="flex bg-base-200 py-2 px-4 rounded-t-xl gap-2">
        <div className="bg-error h-4 w-4 rounded-full" />
        <div className="bg-warning h-4 w-4 rounded-full" />
        <div className="bg-success h-4 w-4 rounded-full" />
      </div>
      {/* bottom content */}
      <div className="bg-base-300 py-6 px-6 lg:px-10 rounded-b-xl ">
        <div className="space-y-4 space">{children}</div>
      </div>
    </div>
  )
}
