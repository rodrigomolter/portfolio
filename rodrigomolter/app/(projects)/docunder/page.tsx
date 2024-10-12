import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa6"

import { FakeTerminalWindow } from "@/app/components/terminal/fake-terminal-window"
import { ImageModal } from "@/app/components/image-modal"
import { SimilarProjects } from "@/app/(projects)/similar-projects"
import { parseURL } from "@/app/lib/utils"

import DocunderLogo from "@/app/components/logo/docunder-logo"

import { myself, projects } from "@/data/info"

const thisProject = projects.docunder
export const metadata = {
  title: `${thisProject.name} | ${myself.fullName}`,
  description: thisProject.description,
  openGraph: {
    title: `${thisProject.name} | ${myself.fullName}`,
    description: thisProject.description,
    url: parseURL(thisProject.url),
    siteName: `${myself.fullName} | Portfolio`,
    images: [
      {
        url: parseURL(thisProject.image),
        width: 1200,
        heigth: 900,
        alt: `Projeto ${thisProject.name}`,
      },
    ],
  },
}

export default function Docunder() {
  return (
    <div className="mt-12">
      <FakeTerminalWindow>
        <main>
          <section className="text-lg md:px-6 ">
            <header className="flex flex-col items-center justify-center my-8">
              <div className="h-auto w-[60vw] max-w-[500px]">
                <DocunderLogo />
              </div>
            </header>

            <nav className="my-8">
              <ul className="flex justify-center text-4xl gap-20">
                <li
                  className="hover:scale-125 hover:text-accent transition-all ease-in-out tooltip"
                  data-tip="GitHub da Docunder"
                >
                  <Link
                    href="https://github.com/Organizacao-Docunder"
                    target="_blank"
                  >
                    <FaGithub />
                  </Link>
                </li>
                <li
                  className="hover:scale-125 hover:text-accent transition-all ease-in-out tooltip"
                  data-tip="LinkedIn da Docunder"
                >
                  <Link
                    href="https://www.linkedin.com/company/docunder/"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </Link>
                </li>
              </ul>
            </nav>
            <h1 className="text-accent text-3xl md:text-4xl font-bold pb-1">
              DOCUNDER
            </h1>
            <article className="space-y-4">
              <p>
                O{" "}
                <a
                  href="https://docunder.onrender.com/"
                  target="_blank"
                  className="link font-bold text-accent"
                >
                  Docunder
                </a>{" "}
                ajuda profissionais de tecnologia que precisam documentar e
                compartilhar seu trabalho de forma{" "}
                <span className="font-bold">colaborativa</span>, simples e
                intuitiva. Sendo uma plataforma de{" "}
                <span className="text-accent">
                  compartilhamento de artefatos técnicos
                </span>
                , tem como objetivo ser de{" "}
                <span className="text-accent font-semibold">gratuita</span> e{" "}
                <span className="text-accent font-semibold">código aberto</span>
                .
              </p>
              <p>
                Desenvolvido de forma totalmente voluntária, o Docunder conta
                com a ajuda profissionais de diversas áreas, como Scrum Masters,
                Product Owners, UX/UI Designers, Desenvolvedores e QAs.
              </p>
              <ImageModal
                imageSrc="/projects/docunder/docunder-persona.svg"
                caption="Análise de Persona da Docunder"
                className="bg-white p-4"
              />
            </article>
            <header className="mt-6">
              <h2 className="text-accent text-3xl font-bold pb-1">SOUJUNIOR</h2>
            </header>
            <article className="space-y-4">
              <p>
                A{" "}
                <a
                  href="https://www.linkedin.com/company/soujunior"
                  target="_blank"
                  className="link"
                >
                  SouJunior
                </a>{" "}
                é um projeto OpenSource com o objetivo de criar novos projetos
                que agregem valor, reunindo profissionais de diversas áreas que
                tem um objetivo em comum: aprender.
              </p>
              <p>
                A Docunder é um dos diversos projetos criados através da
                SouJunior.
              </p>
            </article>
            <header className="mt-6">
              <h2 className="text-accent text-3xl font-bold pb-1">
                ARQUITETURA
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                O projeto utiliza <span className="text-accent">Docker</span>{" "}
                para gerenciar e isolar os diferentes componentes da aplicação,
                garantindo um ambiente de desenvolvimento consistente e
                replicável. A arquitetura é composta por{" "}
                <span className="font-bold">três</span> containers principais:
                um para o frontend desenvolvido em{" "}
                <span className="text-accent font-bold">Next.js</span>, outro
                para o backend desenvolvido em{" "}
                <span className="text-accent font-bold">Nest.js</span> e um
                terceiro para o banco de dados{" "}
                <span className="text-accent font-bold">PostgreSQL</span>.
              </p>
              <p>
                Essa separação permite que cada parte do sistema funcione de
                forma independente, facilitando a manutenção, a escalabilidade e
                a implantação.
              </p>
              <ImageModal
                imageSrc="/projects/docunder/arquitetura-docunder.png"
                caption="Arquitetura dos containers Docker"
              />
            </article>
            <header className="mt-6">
              <h2 className="text-accent text-3xl font-bold pb-1">PIPELINE</h2>
            </header>
            <article className="space-y-4">
              <p>
                O fluxo se inicia com a criação de uma{" "}
                <span className="text-accent">pull request</span> na branch main
                ou dev por um desenvolvedor. A partir desse momento, o GitHub
                Actions é automaticamente acionado para realizar o{" "}
                <span className="font-bold">build</span> do código, a
                verificação de padrões através do{" "}
                <span className="font-bold">ESLint</span> e a execução dos{" "}
                <span className="font-bold">testes automatizados</span> com{" "}
                <span className="text-accent">Cypress</span>.
              </p>
              <ImageModal
                imageSrc="/projects/docunder/pipeline-docunder.png"
                caption="Docunder Pipeline"
                className="bg-white p-4"
              />
              <p>
                Com essas validações automáticas concluídas, o código segue para
                a etapa de <span className="text-accent">Code Review</span> por
                outro desenvolvedor e um QA. Além disso, são realizados testes
                manuais para garantir o funcionamento correto das
                funcionalidades.
              </p>
              <p>
                Após a aprovação no <span className="italic">code review</span>{" "}
                e nos testes, o código é mesclado na branch principal Com o
                merge, é realizado o{" "}
                <span className="font-semibold">build</span> e o{" "}
                <span className="font-semibold">push</span> da nova{" "}
                <span className="italic text-accent">docker image</span> gerada
                e enviada ao{" "}
                <a
                  href="https://hub.docker.com/u/rodrigomolter"
                  target="_blank"
                  className="link"
                >
                  Docker Hub
                </a>
                . Essa imagem é então utilizada no processo de deploy,
                atualizando a aplicação de forma rápida e segura,
                disponibilizando as novas funcionalidades para os usuários.
              </p>
            </article>
            <header className="mt-6">
              <h2 className="text-accent text-3xl font-bold pb-1">FUTURO</h2>
            </header>
            <article className="space-y-4">
              <p>
                O Docunder ainda se encontra em fase de desenvolvimento e em
                atualizações e melhorias constante na sua forma de organização e
                processos. Toda sprint é uma oportunidade evoluir.
              </p>
              <p>
                Quer saber mais sobre o andamento da Docunder e mais a fundo
                sobre o que tenho agregado para a equipe?{" "}
                <Link href="/#contact" className="font-bold text-accent link">
                  Vamos marcar uma conversa!
                </Link>
              </p>
            </article>
          </section>
          <footer>
            <SimilarProjects
              projects={[
                projects.backofficeJogajunto,
                projects.bugbank,
                projects.motionhub,
              ]}
            />
          </footer>
        </main>
      </FakeTerminalWindow>
    </div>
  )
}
