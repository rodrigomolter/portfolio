import Link from "next/link"
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa6"

import { myself } from "@/data/info"

export function SocialIcons({ size = "large" }) {
  return (
    <ul className="flex justify-center text-4xl gap-10 lg:mt-4">
      <li
        className="hover:scale-125 hover:text-accent transition-all ease-in-out tooltip"
        data-tip="GitHub"
      >
        <Link href={myself.github} target="_blank">
          <FaGithub />
        </Link>
      </li>
      <li
        className="hover:scale-125 hover:text-accent transition-all ease-in-out tooltip"
        data-tip="LinkedIn"
      >
        <Link href={myself.linkedin} target="_blank">
          <FaLinkedin />
        </Link>
      </li>
      {size === "large" ? (
        <li
          className="hover:scale-125 hover:text-accent transition-all ease-in-out tooltip"
          data-tip="WhatsApp"
        >
          <Link href={myself.whatsapp} target="_blank">
            <FaWhatsapp />
          </Link>
        </li>
      ) : null}
      {size === "large" ? (
        <li
          className="hover:scale-125 hover:text-accent transition-all ease-in-out tooltip"
          data-tip="Email"
        >
          <Link href={`mailto:${myself.email}`} target="_blank">
            <FaEnvelope />
          </Link>
        </li>
      ) : null}
    </ul>
  )
}
