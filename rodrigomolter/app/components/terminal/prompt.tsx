interface PromptProps {
  directory?: string
  branch?: boolean
  content: string
}

export function Prompt({ directory, branch = false, content }: PromptProps) {
  return (
    <p>
      <span className="text-accent font-semibold">
        ~/rodrigomolter/portfolio{directory}
        <span className="text-primary">{branch && " (main)"}</span> $
      </span>{" "}
      {content}
    </p>
  )
}
