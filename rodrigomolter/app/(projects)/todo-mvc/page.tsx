import Image from "next/image"
import Link from "next/link"
import { FaGithub } from "react-icons/fa6"

import { ImageModal } from "@/app/components/image-modal"
import { FakeTerminalWindow } from "@/app/components/terminal/fake-terminal-window"
import { CitationBlock } from "@/app/(projects)/citation-block"
import { SimilarProjects } from "@/app/(projects)/similar-projects"
import { parseURL } from "@/app/lib/utils"

import { myself, projects } from "@/data/info"

const thisProject = projects.todoMVC
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

export default function TodoMVC() {
  return (
    <div className="mt-12">
      <FakeTerminalWindow>
        <main>
          <section className="text-lg md:px-6 ">
            <header className="flex flex-col items-center justify-center my-8">
              <Image
                alt="TodoMVC"
                src="/projects/todo-mvc/todo-mvc-logo.svg"
                width={500}
                height={85}
                className="mx-4 w-[80vw] md:w-[60vw] xl:w-[40vw] h-auto bg-zinc-100 p-8"
              />
              <nav className="text-4xl pt-6">
                <Link
                  href="https://github.com/rodrigomolter/TodoMVC"
                  target="_blank"
                  className="hover:scale-125 hover:text-accent transition-all ease-in-out tooltip"
                  data-tip="GitHub"
                >
                  <FaGithub />
                </Link>
              </nav>
            </header>
            <h1 className="text-accent text-3xl md:text-4xl font-bold pb-1">
              TODO MVC
            </h1>
            <article className="space-y-4">
              <p>
                O projeto consiste no desenvolvimento de uma{" "}
                <span className="text-accent">
                  suíte de testes manuais e automatizados
                </span>{" "}
                para a aplicação{" "}
                <a href="https://todomvc.com/" target="_blank" className="link">
                  TodoMVC
                </a>
                . Ele inclui <span className="font-bold">user stories</span> com
                seus requisitos e regras de negócio; um{" "}
                <span className="font-bold">plano de testes</span> para garantir
                cobertura das funcionalidades e{" "}
                <span className="font-bold">testes manuais</span> com evidências
                documentadas. Além disso, implementei{" "}
                <span className="font-bold">automação de testes</span> usando{" "}
                <span className="font-bold text-accent">Cypress</span> junto com
                uma{" "}
                <span className="font-bold text-accent">
                  integração contínua
                </span>{" "}
                via Github Actions para manter a estabilidade e qualidade do
                código.
              </p>
              <ImageModal
                imageSrc="/projects/todo-mvc/todo-mvc-home.png"
                caption="TodoMVC React"
                captionSrc="https://todomvc.com/examples/react/dist/"
              />
            </article>
            <header className="mt-6">
              <h2 className="text-accent text-3xl font-bold pb-1">
                APLICAÇÃO SOB TEST (AUT)
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                O{" "}
                <a href="https://todomvc.com/" target="_blank" className="link">
                  TodoMVC
                </a>{" "}
                é um projeto que apresenta o mesmo aplicativo de lista de
                tarefas implementado em diferentes frameworks JavaScript. É uma
                ferramenta útil para comparar sintaxes, soluções e desempenho
                entre os principais frameworks, sendo amplamente utilizado para
                benchmarks de compatibilidade entre navegadores.
              </p>
              <CitationBlock
                Quote="To help you understand the options, we created TodoMVC - a project which has offered the same Todo applications implemented in popular JavaScript frameworks for the last decade."
                Author="TodoMVC.com"
              />
              <p>
                Por mais que a interface gráfica e as funcionalidades sejam
                iguais entre as diferentes implementações, neste projeto eu
                utilizo apenas a interface do{" "}
                <a
                  href="https://todomvc.com/examples/react/dist/"
                  target="_blank"
                  className="link"
                >
                  exemplo do TodoMVC implementado em React
                </a>
                .
              </p>
            </article>

            <header className="mt-8">
              <h2 className="text-accent text-3xl font-bold pb-1">
                USER STORIES
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                As{" "}
                <a
                  href="https://www.notion.so/molter/User-Stories-491da01d74b94342acdf5a1166315f24"
                  target="_blank"
                  className="link text-accent"
                >
                  user stories
                </a>{" "}
                são uma parte fundamental do processo de desenvolvimento ágil,
                pois ajudam a capturar as necessidades e expectativas dos
                usuários de forma simples e compreensível. No contexto do
                TodoMVC, as User Stories foram elaboradas com base nas
                principais funcionalidades: criar uma tarefa, completar uma
                tarefa e os filtros atribuídos.
              </p>
              <p>
                Com a analise do funcionamento da aplicação e suas
                funcionalidades principais, foi possível definir requisitos e
                user stories com suas respectivas regras de negócio e critérios
                de aceitação.
              </p>

              <ImageModal
                imageSrc="/projects/todo-mvc/user-stories.png"
                caption="Escopo das User Stories"
                captionSrc="https://www.notion.so/molter/User-Stories-491da01d74b94342acdf5a1166315f24"
              />
            </article>
            <header className="mt-4">
              <h2 className="text-accent text-3xl font-bold pb-1">
                PLANO DE TESTES
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                Com as user stories definidas como nosso guia, passei para a
                elaboração do{" "}
                <a
                  className="link text-accent font-bold"
                  href="https://www.notion.so/molter/TodoMVC-32d7b72188dd445180511f338a19462c"
                  target="_blank"
                >
                  plano de testes
                </a>
                . Os cenários de testes foram desenvolvidos com base nas
                principais funcionalidades da aplicação TodoMVC. Foram
                desenvolvidos um total de{" "}
                <span className="text-accent">13 casos de testes</span>,
                elaborados para validar as funcionalidades conforme descrito nas
                user stories, assegurando que todos os aspectos críticos da
                aplicação fossem testados de maneira eficaz.
              </p>
              <p>
                Os casos de teste, escritos em Gherkin, são elaborados a partir
                da perspectiva do usuário e seu comportamento. Essa abordagem
                garante que os testes reflitam as necessidades reais dos
                usuários e ajudem a alinhar as expectativas dos stakeholders com
                a funcionalidade do sistema.
              </p>
              <p>Cada teste foi documentado com os seguintes detalhes:</p>
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
                imageSrc="/projects/todo-mvc/plano-testes.png"
                caption="Plano de Testes"
                captionSrc="https://www.notion.so/molter/TodoMVC-32d7b72188dd445180511f338a19462c"
              />
              <p>
                A etapa seguinte envolveu a execução dos casos de testes
                definidos anteriormente no plano de teste. Executei os testes e
                documentei as evidências dos testes realizados, fornecendo uma
                documentação visual do processo de teste manual. Você pode
                verificar{" "}
                <a
                  href="https://github.com/rodrigomolter/TodoMVC/tree/main/Test%20Plan/Screenshots"
                  target="_blank"
                  className="link text-accent"
                >
                  as evidências aqui
                </a>
                .
              </p>
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
            <header className="mt-8">
              <h2 className="text-accent text-3xl font-bold pb-1">
                TESTES AUTOMATIZADOS
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                Por fim, implementei a{" "}
                <a
                  href="https://github.com/rodrigomolter/TodoMVC"
                  target="_blank"
                  className="link text-accent"
                >
                  automação dos cenários de teste
                </a>{" "}
                utilizando o framework{" "}
                <span className="font-bold">Cypress</span>. Esse processo
                permitiu a criação de scripts automatizados que reproduzem os
                mesmos cenários de teste de forma consistente e repetível. Os
                testes automatizados permitem uma detecção precoce de possíveis
                regressões mantendo a estabilidade da aplicação ao longo do
                tempo.
              </p>
              <p>
                Para melhorar a usabilidade e a clareza do código, criei{" "}
                <span className="font-bold text-accent">
                  comandos customizáveis
                </span>{" "}
                no Cypress. Cada comando foi devidamente documentado, incluindo
                exemplos claros de como usá-los efetivamente. Essa abordagem não
                apenas facilitou a manutenção dos testes, mas também promoveu
                uma colaboração mais eficiente dentro da equipe.
              </p>
              <ImageModal
                imageSrc="/projects/todo-mvc/comando-customizavel.png"
                caption="Documentação do comando customizável cy.createNewTaskbyGUI() no IntelliSense"
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
                de testes automatizados do Cypress com o{" "}
                <span className="font-bold">GitHub Actions</span>. Toda vez que
                um <span className="font-bold">push</span> é feito no
                repositório, os testes são{" "}
                <span className="text-accent font-bold">
                  executados automaticamente
                </span>
                , fornecendo feedback imediato sobre a saúde do projeto.
              </p>
              <ImageModal
                imageSrc="/projects/continuous-integration.svg"
                caption="Pipeline do Github Actions"
              />
            </article>
            <header className="mt-8">
              <h2 className="text-accent text-3xl font-bold pb-1">CONCLUSÃO</h2>
            </header>
            <article className="space-y-4">
              <p>
                Durante o desenvolvimento dos testes para o projeto TodoMVC,
                aprendi a importância de uma{" "}
                <span className="text-accent">abordagem organizada</span> para
                garantir a qualidade do software. Criar as user stories e o
                plano de testes me ajudou a entender melhor as funcionalidades
                do sistema e a testar o que realmente importa para o usuário. A
                automação com Cypress e a integração com GitHub Actions
                garantiram a estabilidade da aplicação. Foi uma ótima
                experiência para melhorar minhas habilidades em testes e
                garantir a qualidade do software.
              </p>
            </article>
          </section>
          <footer>
            <SimilarProjects
              projects={[
                projects.motionhub,
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
