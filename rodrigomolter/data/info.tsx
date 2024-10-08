import AmigosEntregadoresLogo from "@/app/components/logo/amigosentregadores-logo"
import BeedooLogo from "@/app/components/logo/beedoo-logo"
import BugbankLogo from "@/app/components/logo/bugbank-logo"
import DocunderLogo from "@/app/components/logo/docunder-logo"
import GenericLogo from "@/app/components/logo/generic-logo"
import LojaQALogo from "@/app/components/logo/lojaqa-logo"
import MotionHUBLogo from "@/app/components/logo/motionhub-logo"
import TodoMVCLogo from "@/app/components/logo/todomvc-logo"

export const myself = {
  firstName: "Rodrigo",
  fullName: "Rodrigo Molter",
  role: "QA Engineer",
  email: "rodrigo.molter@gmail.com",
  github: "https://github.com/rodrigomolter/",
  linkedin: "https://www.linkedin.com/in/rodrigo-molter/",
  whatsapp: "https://wa.me/+5551998832787",
  description: "Sou um QA Engineer atento aos detalhes e um amante de chá 🍵",
  bulletPoints: ["🐞 além do bug", "🦙 AI enthusiast", "🍵 tea lover"],
}

export type ProjectParams = {
  name: string
  description: string
  image: string
  smimage: string
  xsimage: string
  video?: string
  logo: JSX.Element
  url: string
  github?: string
  linkedin?: string
  figma?: string
}

const genericVideo =
  "https://images.unsplash.com/photo-1719937050446-a121748d4ba0?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

export const projects: { [project: string]: ProjectParams } = {
  lojaQA: {
    name: "Loja do QA",
    description:
      "A Loja do QA é uma suite de testes para um e-commerce que segue o padrão de grandes plataformas como Amazon e Casas Bahia.",
    image: "/projects/loja-qa/lojaqa.png",
    smimage: "/projects/loja-qa/lojaqa-sm.png",
    xsimage: "/projects/loja-qa/lojaqa-xs.png",
    video: genericVideo,
    logo: <LojaQALogo />,
    url: "/loja-qa",
  },

  docunder: {
    name: "Docunder",
    description:
      "O Docunder ajuda profissionais de tecnologia que precisam documentar seu trabalho de forma colaborativa, simples e intuitiva.",
    image: "/projects/docunder/docunder.png",
    smimage: "/projects/docunder/docunder-sm.png",
    xsimage: "/projects/docunder/docunder-xs.png",
    video: "/projects/docunder/docunder-home.png",
    logo: <DocunderLogo />,
    url: "/docunder",
    github: "https://github.com/Organizacao-Docunder",
    linkedin: "https://www.linkedin.com/company/docunder/",
  },

  backofficeJogajunto: {
    name: "Backoffice JogaJunto",
    description:
      "O Backoffice JogaJunto é sobre a criação de cenários de testes manuais e automatizados para um sistema de controle de estoque de produtos.",
    image: "/projects/backoffice-jogajunto/backoffice-jogajunto.png",
    smimage: "/projects/backoffice-jogajunto/backoffice-jogajunto-sm.png",
    xsimage: "/projects/backoffice-jogajunto/backoffice-jogajunto-xs.png",
    video: genericVideo,
    logo: <GenericLogo title="📋" className="bg-yellow-400" />,
    url: "/backoffice-jogajunto",
    github: "https://github.com/rodrigomolter/backoffice-jogajunto",
  },

  amigosEntregadores: {
    name: "Amigos Entregadores",
    description:
      "O projeto visa resolver o problema da ONG Amigos Entregadores, que necessita de pontos de apoio para seus entregadores de aplicativos parceiros.",
    image: "/projects/amigos-entregadores/amigos-entregadores.png",
    smimage: "/projects/amigos-entregadores/amigos-entregadores-sm.png",
    xsimage: "/projects/amigos-entregadores/amigos-entregadores-xs.png",
    video: genericVideo,
    logo: <AmigosEntregadoresLogo />,
    url: "/amigos-entregadores",
    figma:
      "https://www.figma.com/proto/pRhTYhcJViSd0ytTJGcZVg/Amigos-Entregadores---Guardi%C3%B5es-da-Qualidade?type=design&node-id=803-122&t=HB8FGDxAtteOiOcV-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=803%3A122",
  },

  bugbank: {
    name: "Bug Bank",
    description:
      "O projeto Bug Bank foca na análise, escrita e automação de testes para a aplicação de banco online Bug Bank.",
    image: "/projects/bugbank/bugbank.png",
    smimage: "/projects/bugbank/bugbank-sm.png",
    xsimage: "/projects/bugbank/bugbank-xs.png",
    video: genericVideo,
    logo: <BugbankLogo />,
    url: "/bugbank",
    github: "https://github.com/rodrigomolter/bugbank-selenium",
  },

  motionhub: {
    name: "Motion HUB API",
    description:
      "MotionHUB API é uma API com onde você pode armazenar informações de filmes, como nome, descrição e duração.",
    image: "/projects/motionhub-api/motionhub.png",
    smimage: "/projects/motionhub-api/motionhub-sm.png",
    xsimage: "/projects/motionhub-api/motionhub-xs.png",
    video: genericVideo,
    logo: <MotionHUBLogo />,
    url: "/motionhub-api",
    github: "https://github.com/rodrigomolter/MotionHub-API",
  },

  todoMVC: {
    name: "Todo MVC",
    description:
      "O projeto consiste no desenvolvimento de uma suíte de testes manuais e automatizados para a aplicação de lista de tarefas TodoMVC",
    image: "/projects/todo-mvc/todo-mvc.png",
    smimage: "/projects/todo-mvc/todo-mvc-sm.png",
    xsimage: "/projects/todo-mvc/todo-mvc-xs.png",
    video: genericVideo,
    logo: <TodoMVCLogo />,
    url: "/todo-mvc",
    github: "https://github.com/rodrigomolter/TodoMVC",
  },

  beedoo: {
    name: "Desafio Beedoo",
    description:
      "O Desafio Beedoo tem o objetivo de avaliar os conhecimentos e habilidades em teste de software manual.",
    image: "/projects/beedoo/beedoo.png",
    smimage: "/projects/beedoo/beedoo-sm.png",
    xsimage: "/projects/beedoo/beedoo-xs.png",
    video: genericVideo,
    logo: <BeedooLogo />,
    url: "/beedoo",
    github: "https://github.com/rodrigomolter/DESAFIO-BEEDOO",
  },
}
