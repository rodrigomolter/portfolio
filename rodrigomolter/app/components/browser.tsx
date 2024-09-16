import { ReactNode } from "react"

export function Browser({
  url = "https://rodrigomolter.com",
  children,
}: {
  url?: string
  children: ReactNode
}) {
  return (
    <div className="mockup-browser border-base-300 border ">
      <div className="mockup-browser-toolbar">
        <div className="input border-base-300 border">{url}</div>
      </div>
      <div className="border-base-300 flex justify-center border-t px-4 py-8">
        {children}
      </div>
    </div>
  )
}
