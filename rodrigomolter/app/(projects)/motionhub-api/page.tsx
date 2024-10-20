import Image from "next/image"
import Link from "next/link"
import { FaGithub } from "react-icons/fa6"

import { ImageModal } from "@/app/components/image-modal"
import { FakeTerminalWindow } from "@/app/components/terminal/fake-terminal-window"
import { SimilarProjects } from "@/app/(projects)/similar-projects"
import { parseURL } from "@/app/lib/utils"

import { myself, projects } from "@/data/info"

const thisProject = projects.motionhub
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
        heigth: 600,
        alt: `Projeto ${thisProject.name}`,
      },
    ],
  },
}

export default function MotionHubAPI() {
  return (
    <div className="mt-12">
      <FakeTerminalWindow>
        <main>
          <section className="text-lg md:px-6 ">
            <header className="flex flex-col items-center justify-center my-8">
              <Image
                alt="Logo MotionHub API"
                src="/projects/motionhub-api/HUB.png"
                width={1080}
                height={120}
                className="px-4 w-[80vw] md:w-[60vw] xl:w-[40vw] h-auto"
              />
              <nav className="text-4xl pt-6">
                <Link
                  href="https://github.com/rodrigomolter/MotionHub-API"
                  target="_blank"
                  className="hover:scale-125 hover:text-accent transition-all ease-in-out tooltip"
                  data-tip="GitHub"
                >
                  <FaGithub />
                </Link>
              </nav>
            </header>
            <h1 className="text-accent text-3xl md:text-4xl font-bold pb-1">
              MOTION HUB API
            </h1>
            <article className="space-y-4">
              <p>
                A Motion HUB API é uma API desenvolvida em JavaScript utilizando
                o framework{" "}
                <a href="https://fastify.dev/" className="link">
                  Fastify
                </a>
                . Ela foi criada com o objetivo de praticar a construção de uma
                API de forma simples e eficiente. A API utiliza de um banco de
                dados em memória (
                <span className="italic">in-memory database</span>) para{" "}
                <span className="text-accent">
                  armazenar informações de filmes
                </span>
                , como <span className="font-bold">nome</span>,{" "}
                <span className="font-bold">descrição</span> e{" "}
                <span className="font-bold">duração</span>. O projeto enfatiza
                boas práticas de desenvolvimento, incluindo padrões de código
                mantidos com ESLint e documentação gerada com{" "}
                <span className="font-bold">Swagger</span>.
              </p>
              <p>
                Foi desenvolvido uma{" "}
                <span className="font-bold">suite de testes</span> que inclui
                testes manuais e automatizados usando{" "}
                <span className="text-accent">Postman</span> e{" "}
                <span className="text-accent">Cypress</span>, além de integrar
                tudo ao GitHub Actions para a execução contínua dos testes. Essa
                experiência me ensinou muito sobre a importância de uma
                documentação clara e do uso de testes automatizados para
                assegurar a qualidade do software.
              </p>
            </article>
            <header className="mt-6">
              <h2 className="text-accent text-2xl pb-1">
                BANCO DE DADOS EM MEMÓRIA
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                A Motion HUB API utiliza um banco de dados em memória, o que
                significa que não requer configurações complexas para armazenar
                e acessar dados rapidamente. No entanto, é importante notar que
                os dados são perdidos quando a aplicação é encerrada ou
                reiniciada, pois são mantidos apenas na memória volátil do
                servidor.
              </p>
            </article>

            <header className="mt-8">
              <h2 className="text-accent text-3xl font-bold pb-1">
                DOCUMENTAÇÃO
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                A documentação da API foi gerada utilizando o{" "}
                <span className="text-accent font-bold">Swagger</span>. Isso
                permite que qualquer desenvolvedor visualize e teste os
                endpoints da API de forma interativa. A documentação inclui{" "}
                <span className="font-semibold">descrições detalhadas</span> dos
                parâmetros de entrada e saída, facilitando o entendimento do
                projeto a novas pessoas.
              </p>
              <ImageModal
                imageSrc="/projects/motionhub-api/swagger.png"
                caption="SwaggerUI do MotionHUB API"
              />
            </article>
            <header className="pt-8">
              <h2 className="text-accent text-3xl font-bold pb-1">
                PLANO DE TESTES
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                Os{" "}
                <a
                  href="https://molter.notion.site/Motion-Hub-fe69d08e0e23419baf06ceeb23e669c9"
                  target="_blank"
                  className="link text-accent"
                >
                  cenários de teste
                </a>{" "}
                foram desenvolvidos com base nas principais funcionalidades da
                MotionHUB API. Foram desenvolvidos um total de 13 casos de
                testes. Cada teste foi documentado com os seguintes detalhes:
              </p>
              <ul className="flex gap-4 flex-col">
                <li>
                  <span className="font-bold text-accent">
                    😀 Status do Teste
                  </span>
                  : Indicação se o teste foi aprovado ou reprovado.
                </li>
                <li>
                  <span className="font-bold text-accent">🔥 Prioridade</span>:
                  Classificação da importância da funcionalidade no projeto.
                </li>
                <li>
                  <span className="font-bold text-accent">🚨 Severidade</span>:
                  Grau de impacto sobre outras tarefas.
                </li>
                <li>
                  <span className="font-bold text-accent">
                    📆 Data do teste
                  </span>
                  : Último dia que o teste foi realizado.
                </li>
              </ul>
              <ImageModal
                imageSrc="/projects/motionhub-api/plano-testes.png"
                caption="Plano de Testes"
                captionSrc="https://molter.notion.site/Motion-Hub-fe69d08e0e23419baf06ceeb23e669c9"
              />
              <p>
                A criticidade dos bugs foi categorizada em quatro níveis, cada
                um refletindo a severidade do impacto no funcionamento do
                sistema e na experiência do usuário. Abaixo estão as definições
                de cada nível de criticidade:
              </p>
              <ul className="flex gap-4 flex-col">
                <li>
                  <span className="font-bold text-accent">🧊 Leve</span>: Bugs
                  que causam pequenos inconvenientes ou problemas estéticos, sem
                  afetar significativamente a funcionalidade do sistema.
                </li>
                <li>
                  <span className="font-bold text-accent">⚡ Moderada</span>:
                  Bugs que afetam algumas funcionalidades, mas possuem soluções
                  alternativas, permitindo o uso contínuo do sistema.
                </li>
                <li>
                  <span className="font-bold text-accent">🚨 Grave</span>: Bugs
                  que comprometem funcionalidades importantes, tornando o
                  sistema difícil de usar ou causando erros significativos que
                  afetam a experiência do usuário.
                </li>
                <li>
                  <span className="font-bold text-accent">🔥 Blocker</span>:
                  Bugs críticos que interrompem completamente o funcionamento do
                  sistema, impedindo a realização de ações essenciais e tornando
                  o sistema inutilizável até serem corrigidos.
                </li>
              </ul>
            </article>
            <header className="pt-12">
              <h2 className="text-accent text-3xl font-bold pb-1">
                TESTES AUTOMATIZADOS
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                Os{" "}
                <a
                  href="https://github.com/rodrigomolter/MotionHub-API"
                  target="_blank"
                  className="link font-bold text-accent"
                >
                  testes automatizados
                </a>{" "}
                foram implementados para garantir uma cobertura contínua e
                eficiente dos cenários de uso da API.
              </p>
              <p>
                A fim de estudos, desenvolvi os testes automatizados utilizando
                tanto Postman quanto Cypress. Em ambas as automações de testes,
                utilizei a biblioteca FakerJS para gerar massas de dados de
                forma dinâmica. Isso permite criar cenários variados e
                realistas, aumentando a robustez e abrangência dos testes.
              </p>
              <ImageModal
                imageSrc="/projects/motionhub-api/tests-execution.png"
                caption="Execução dos testes no Cypress"
              />
            </article>
            <header className="mt-8">
              <h2 className="text-accent text-3xl font-bold pb-1">
                CONTINOUS INTEGRATION
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                Para garantir a qualidade contínua do projeto, integrei a suíte
                de testes automatizados do Cypress com o GitHub Actions. Toda
                vez que um push é feito no repositório, os testes são executados
                automaticamente, fornecendo feedback imediato sobre a saúde do
                projeto.
              </p>
              <ImageModal
                imageSrc="/projects/continuous-integration.svg"
                caption="Pipeline do Github Actions"
              />
            </article>
            <header className="mt-8">
              <h2 className="text-accent text-3xl font-bold pb-1">
                APRENDIZADOS
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                Desenvolver a Motion HUB API foi uma experiência divertida e
                mais fácil do que eu esperava. Aprendi a{" "}
                <span className="text-accent">criar</span> e{" "}
                <span className="text-accent">organizar</span> uma API
                eficiente, e a escolha do Fastify se mostrou acertada, tornando
                o projeto simples e eficaz.
              </p>
              <p>
                Integrar o Swagger apresentou{" "}
                <span className="font-bold">desafios</span>, já que decidi
                adicioná-lo no final do desenvolvimento. A configuração inicial
                foi complicada, mas, uma vez pronto, o Swagger se tornou uma
                ferramenta <span className="text-accent">valiosa</span> para
                manter a documentação clara e acessível.
              </p>
              <p>
                A implementação de testes também foi um ponto positivo. Criar um
                plano de testes ajudou a garantir a qualidade dos testes
                automatizados, e o uso do Postman e do Cypress me trouxe
                aprendizado, mesmo que tenha gerado alguma duplicidade.
              </p>
              <p>
                Por outro lado, percebi que a{" "}
                <span className="font-bold">falta de testes unitários</span> foi
                uma falha. Não tê-los implementado desde o início me fez falta
                ao integrar os testes com o GitHub Actions, pois ter esses
                testes teria me dado mais confiança em manutenções e novas
                funcionalidades.
              </p>
              <p>
                Experiências como essa são essenciais para entender a
                importância da qualidade do software e ajudam a desenvolver
                habilidades fundamentais para o mercado de trabalho.
              </p>
            </article>
          </section>
          <footer>
            <SimilarProjects
              projects={[
                projects.todoMVC,
                projects.bugbank,
                projects.backofficeJogajunto,
              ]}
            />
          </footer>
        </main>
      </FakeTerminalWindow>
    </div>
  )
}
