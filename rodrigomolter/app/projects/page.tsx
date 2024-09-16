import React from "react"
import { FakeTerminalWindow } from "../components/terminal/fake-terminal-window"
import { Prompt } from "../components/terminal/prompt"
import { Browser } from "../components/browser"

export default function Portfolio() {
  return (
    <div className="pt-16 mx-4">
      <Browser url="https://rodrigomolter.com/projects">
        <div className="">
          <FakeTerminalWindow>
            <Prompt branch={true} content="cd projects" />
            <Prompt
              directory="/projects"
              branch={true}
              content="npm run deploy"
            />
            <p>
              Starting the deployment...
              <br />
              It will be available here soon...
            </p>
          </FakeTerminalWindow>
        </div>
      </Browser>
    </div>
  )
}
