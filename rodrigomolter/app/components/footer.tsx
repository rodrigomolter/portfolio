import { SocialIcons } from "@/app/components/icons/social-icons"

export function Footer() {
  return (
    <footer className="max-w-screen-lg w-full text-center my-8 opacity-80">
      <div className="divider" />
      <p>
        Made with <span className="text-red-500">❤</span> by{" "}
        <a
          href="https://www.linkedin.com/in/rodrigo-molter/"
          className="link"
          target="_blank"
        >
          Rodrigo Molter
        </a>
      </p>

      <SocialIcons small />
    </footer>
  )
}
