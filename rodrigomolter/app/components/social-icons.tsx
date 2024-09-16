import Link from "next/link"
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa6"

export function SocialIcons({ size = "large" }) {
  return (
    <ul className="flex justify-center text-3xl gap-10 mt-4">
      <li
        className="hover:scale-125 transition-all ease-in-out tooltip"
        data-tip="GitHub"
      >
        <Link href="https://github.com/rodrigomolter/" target="_blank">
          <FaGithub />
        </Link>
      </li>
      <li
        className="hover:scale-125 transition-all ease-in-out tooltip"
        data-tip="LinkedIn"
      >
        <Link href="https://linkedin.com/in/rodrigo-molter/" target="_blank">
          <FaLinkedin />
        </Link>
      </li>
      {size === "large" ? (
        <li
          className="hover:scale-125 transition-all ease-in-out tooltip"
          data-tip="WhatsApp"
        >
          <Link href="https://wa.me/+5551998832787" target="_blank">
            <FaWhatsapp />
          </Link>
        </li>
      ) : null}
      {size === "large" ? (
        <li
          className="hover:scale-125 transition-all ease-in-out tooltip"
          data-tip="Email"
        >
          <Link href="mailto:rodrigo.molter@gmail.com" target="_blank">
            <FaEnvelope />
          </Link>
        </li>
      ) : null}
    </ul>
  )
}
