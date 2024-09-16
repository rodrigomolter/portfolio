import { FakeTerminalWindow } from "./fake-terminal-window"
import { Prompt } from "./prompt"
import { bio } from "@/data/info"

export function Bio() {
  return (
    <FakeTerminalWindow>
      <Prompt content="cd about" branch={true} />
      <Prompt directory="/about" branch={true} content="cat README.md" />
      <p>{bio}</p>
    </FakeTerminalWindow>
  )
}
