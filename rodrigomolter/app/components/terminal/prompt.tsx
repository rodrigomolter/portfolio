interface PromptProps {
  directory?: string
  branch?: boolean
  content: string
}

export function Prompt({ directory, branch = false, content }: PromptProps) {
  return (
    <p>
      <span className="text-amber-600 font-semibold">
        ~/rodrigomolter/portfolio{directory}
        <span className="text-violet-500">{branch && " (main)"}</span> $
      </span>{" "}
      {content}
    </p>
  )
}
