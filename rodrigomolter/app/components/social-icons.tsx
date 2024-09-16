import Link from "next/link"
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa6"

const socials = [
  {
    icon: <FaGithub />,
    href: "https://github.com/rodrigomolter/",
  },
  {
    icon: <FaLinkedin />,
    href: "https://linkedin.com/in/rodrigo-molter/",
  },
  {
    icon: <FaWhatsapp />,
    href: "https://wa.me/+5551998832787",
  },
  {
    icon: <FaEnvelope />,
    href: "mailto:rodrigo.molter@gmail.com",
  },
]

export function SocialIcons({ size = "large" }) {
  return (
    <ul className="flex justify-center text-3xl gap-10 mt-4">
      <li className="hover:scale-125 transition-all ease-in-out">
        <Link href="https://github.com/rodrigomolter/" target="_blank">
          <FaGithub />
        </Link>
      </li>
      <li className="hover:scale-125 transition-all ease-in-out">
        <Link href="https://linkedin.com/in/rodrigo-molter/" target="_blank">
          <FaLinkedin />
        </Link>
      </li>
      {size === "large" ? (
        <li className="hover:scale-125 transition-all ease-in-out">
          <Link href="https://wa.me/+5551998832787" target="_blank">
            <FaWhatsapp />
          </Link>
        </li>
      ) : null}
      {size === "large" ? (
        <li className="hover:scale-125 transition-all ease-in-out">
          <Link href="mailto:rodrigo.molter@gmail.com" target="_blank">
            <FaEnvelope />
          </Link>
        </li>
      ) : null}
    </ul>
  )
}
