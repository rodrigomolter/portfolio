interface PromptProps {
  directory?: string
  branch?: boolean
  content: string
}

export function Prompt({ directory, branch = false, content }: PromptProps) {
  return (
    <p>
      <span className="text-violet-400 font-semibold">
        ~/rodrigomolter/portfolio{directory}
        <span className="text-success">{branch && " (main)"}</span> $
      </span>{" "}
      {content}
    </p>
  )
}
