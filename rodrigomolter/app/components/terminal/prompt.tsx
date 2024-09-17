interface PromptProps {
  directory?: string
  branch?: boolean
  content: string
}

export function Prompt({ directory, branch = false, content }: PromptProps) {
  return (
    <p>
      <span className="text-primary font-semibold">
        ~/rodrigomolter/portfolio{directory}
        <span className="text-accent">{branch && " (main)"}</span> $
      </span>{" "}
      {content}
    </p>
  )
}
