import { FakeTerminalWindow } from "../components/terminal/fake-terminal-window"
import { Prompt } from "../components/terminal/prompt"
import { skills, bio } from "../../data/info"

const SkillList = ({ title, items }: { title: string; items: string[] }) => (
  <>
    <li className="text-secondary font-semibold">{title}/</li>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </>
)

export default function About() {
  return (
    <div className="space-y-10 my-10 break-words">
      <FakeTerminalWindow>
        <Prompt content="cd about" branch={true} />
        <Prompt directory="/about" branch={true} content="cat README.md" />
        <p>{bio}</p>
        <Prompt directory="/about" branch={true} content="cd skillsAndTools" />
        <Prompt
          directory="about/skillsAndTools"
          branch={true}
          content="ls -R"
        />
        <div>
          <ul className="flex flex-row gap-12">
            <li>Testing</li>
            <li>OthersTools</li>
            <li>Programing</li>
          </ul>
        </div>
        <div className="flex justify-start flex-wrap md:justify-between gap-8">
          <ul>
            <SkillList title="Testing" items={skills.testing} />
          </ul>
          <ul>
            <SkillList title="Programing" items={skills.programing} />
          </ul>
          <ul>
            <SkillList title="OthersTools" items={skills.others} />
          </ul>
        </div>
        <Prompt
          directory="/about/skillsAndTools"
          branch={true}
          content="cd .."
        />
        <Prompt
          directory="/about"
          branch={true}
          content="cd HobbiesAndInterests"
        />
        <Prompt
          directory="about/HobbiesAndInterests"
          branch={true}
          content="ls"
        />
        <ul>
          <li>🍃 chás & infusões</li>
          <li>⚡ harry potter </li>
          <li>💪 gym </li>
          <li>💃 mi gente latino</li>
        </ul>
      </FakeTerminalWindow>
    </div>
  )
}
