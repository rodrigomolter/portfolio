import Image from "next/image"
import Link from "next/link"

import { FakeTerminalWindow } from "@/app/components/terminal/fake-terminal-window"
import { ImageModal } from "@/app/components/image-modal"
import { SimilarProjects } from "@/app/(projects)/similar-projects"

import bugsPorCenario from "@/public/projects/beedoo/beedoo-bugs-cenario.svg"
import casosPorCenario from "@/public/projects/beedoo/beedoo-casos-testes-cenario.svg"
import { parseURL } from "@/app/lib/utils"

import { myself, projects } from "@/data/info"

const thisProject = projects.beedoo
export const metadata = {
  title: `${thisProject.name} | ${myself.fullName}`,
  description: thisProject.description,
  openGraph: {
    title: `${thisProject.name} | ${myself.fullName}`,
    description: thisProject.description,
    url: parseURL(),
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

export default function Beedoo() {
  return (
    <div className="mt-12">
      <FakeTerminalWindow>
        <main>
          <section className="text-lg md:px-6 ">
            <header className="flex flex-col items-center justify-center my-8">
              <Image
                alt="Logo Beedoo"
                src="/projects/beedoo/beedoo-home.png"
                width={1080}
                height={1080}
                className="px-4 w-[80vw] md:w-[60vw] xl:w-[40vw] h-auto"
              />
              <nav className="gap-8 flex just text-sm md:text-lg mt-4">
                <Link
                  href="https://docs.google.com/spreadsheets/d/1PsArQFZ13y2IsFuKSXQPnaLIRTgnbyjhjXqkFay0ZOE/edit?usp=drive_link"
                  target="_blank"
                  className="link font-bold text-accent"
                >
                  Plano de Teste
                </Link>
                |
                <Link
                  href="https://docs.google.com/spreadsheets/d/13fEWkz2abpgmCHLCIdRyCBnkSJEvdTn5P9v120qnrpI/edit?usp=drive_link"
                  target="_blank"
                  className="link font-bold text-accent"
                >
                  Bug Report
                </Link>
                |
                <Link
                  href="https://drive.google.com/drive/folders/1cDO_WuWiMwyif5GjNcgRO_3NLtKkPJij?usp=drive_link"
                  target="_blank"
                  className="link font-bold text-accent"
                >
                  Evidências
                </Link>
              </nav>
            </header>
            <h1 className="text-accent text-3xl md:text-4xl font-bold pb-1 pt-6">
              DESAFIO BEEDOO
            </h1>
            <article className="space-y-4">
              <p>
                O{" "}
                <a
                  href="https://creative-sherbet-a51eac.netlify.app/"
                  target="_blank"
                  className="link"
                >
                  Desafio Beedoo
                </a>{" "}
                foi realizado para avaliar habilidades em{" "}
                <span className="text-accent">teste de software</span>, focando
                na criação das <span className="italic">user stories</span> e
                dos casos de teste para uma aplicação de cadastro e visualização
                de cursos. Foram elaborados casos de teste com base nas
                funcionalidades existentes, como criar, listar e excluir cursos,
                utilizando user stories para mapear as necessidades dos
                usuários.
              </p>
              <p>
                Após a execução dos testes, um bug report foi gerado,
                identificando bugs de diferentes criticidades. As evidências dos
                testes foram organizadas e referenciadas no bug report,
                permitindo um acompanhamento claro do processo de validação.
                Essa experiência reforçou a importância de uma abordagem
                estruturada em testes e a comunicação das necessidades do
                usuário.
              </p>
            </article>

            <header className="mt-6">
              <h2 className="text-accent text-3xl font-bold pb-1">
                USER STORIES
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                As <span className="font-bold">User Stories</span> são uma parte
                fundamental do processo de desenvolvimento ágil, pois ajudam a
                capturar as necessidades e expectativas dos usuários de forma
                simples e compreensível. No contexto do Desafio Beedoo, as User
                Stories foram elaboradas com base nas principais funcionalidades
                do módulo de cursos:{" "}
                <span className="text-accent">criar, listar e excluir</span>.
              </p>
              <div className="space-y-4 pt-4">
                <p className="font-bold text-xl text-accent">
                  I. Cadastrar novo usuário
                </p>
                <ol className="flex flex-col gap-4 px-4 md:px-12 list-decimal marker:text-purple-500 marker:font-bold">
                  <li>
                    <p className="font-bold text-secondary">User Storie:</p>
                    <p className="pl-1 md:pl-4">
                      <span className="font-semibold">Como </span>usuário do
                      Beedoo QA Challenge
                      <br />
                      <span className="font-semibold">Quero </span>cadastrar um
                      novo curso,
                      <br />
                      <span className="font-semibold">Para que</span> ele possa
                      ser listado na página de cursos.
                    </p>
                  </li>
                  <li>
                    <p className="font-bold text-secondary">
                      Regras de Negócio
                    </p>
                    <ul className="pl-1 md:pl-4 space-y-3">
                      <li className="flex flex-row gap-2">
                        <p className="font-bold text-primary">RN001. </p>
                        <p>
                          Devem estar disponíveis os campos "Nome do Curso",
                          "Descrição do Curso", "Instrutor", "URL da Imagem da
                          Capa", "Data de Início", "Data de Fim", "Número de
                          Vagas", e "Tipo de Curso", sendo todos eles
                          obrigatórios.
                        </p>
                      </li>
                      <li className="flex flex-row gap-2">
                        <p className="font-bold text-primary">RN002. </p>
                        <p>
                          O campo "Data Fim" deve possuir uma data igual ou
                          posterior à "Data Início".
                        </p>
                      </li>
                      <li className="flex flex-row gap-2">
                        <p className="font-bold text-primary">RN003. </p>
                        <p>
                          O campo "Número de Vagas" deve ser um número inteiro
                          positivo.
                        </p>
                      </li>
                      <li className="flex flex-row gap-2">
                        <p className="font-bold text-primary">RN004. </p>
                        <p>
                          O campo "Tipo do Curso" possuir apenas as opções
                          "Presencial" e "Online".
                        </p>
                      </li>
                      <li className="flex flex-row gap-2">
                        <p className="font-bold text-primary">RN005. </p>
                        <p>
                          Caso o Tipo do Curso escolhido for "Presencial", o
                          campo "Endereço" deverá ser exibido e é um campo
                          obrigatório.
                        </p>
                      </li>
                      <li className="flex flex-row gap-2">
                        <p className="font-bold text-primary">RN006. </p>
                        <p>
                          Caso o Tipo do Curso escolhido for "Online", o campo
                          "Link de Inscrição" deverá ser exibido e é um campo
                          obrigatório.
                        </p>
                      </li>
                      <li className="flex flex-row gap-2">
                        <p className="font-bold text-primary">RN007. </p>
                        <p>
                          Ao cadastrar um novo curso, o usuário deve receber uma
                          mensagem de confirmação de cadastro com sucesso, e ser
                          redirecionado para a página de listagem de cursos.
                        </p>
                      </li>
                      <li className="flex flex-row gap-2">
                        <p className="font-bold text-primary">RN008. </p>
                        <p>
                          Deve se exibir de forma clara qual campo esta inválido
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p className="font-bold text-secondary">
                      Critérios de Aceite
                    </p>
                    <p className="pl-1 md:pl-4">
                      <span className="font-semibold">Dado</span> que o usuário
                      esta na na página de cadastro de curso
                      <br />
                      <span className="font-semibold">Quando</span> ele
                      preencher todos os campos obrigatórios corretamente,
                      <br />
                      <span className="font-semibold">E</span> clicar em
                      "Salvar",
                      <br />
                      <span className="font-semibold">Então</span> o novo curso
                      deve ser criado
                      <br />
                      <span className="font-semibold">E</span> o curso deve ser
                      exibido na página de listagem de cursos.
                    </p>
                  </li>
                </ol>
              </div>

              <div className="space-y-4 pt-4">
                <p className="font-bold text-xl text-accent">
                  II. Listar cursos disponíveis
                </p>
                <ol className="flex flex-col gap-4 px-4 md:px-12 list-decimal marker:text-purple-500 marker:font-bold">
                  <li>
                    <p className="font-bold text-secondary">User Storie:</p>
                    <p className="pl-1 md:pl-4">
                      <span className="font-semibold">Como</span> usuário do
                      Beedoo QA Challenge
                      <br />
                      <span className="font-semibold">Quero</span> visualizar a
                      lista de cursos disponíveis,
                      <br />
                      <span className="font-semibold">Para que</span> eu possa
                      visualizar suas informações.
                    </p>
                  </li>
                  <li>
                    <p className="font-bold text-secondary">
                      Regras de Negócio
                    </p>
                    <ul className="pl-1 md:pl-4 space-y-3">
                      <li className="flex flex-row gap-2">
                        <p className="font-bold text-primary">RN001. </p>
                        <p>
                          A listagem de cursos deve exibir as informações do
                          curso, como Nome do Curso, Descrição, Data Início,
                          Data Fim, Número de vagas e Tipo do Curso.
                        </p>
                      </li>
                      <li className="flex flex-row gap-2">
                        <p className="font-bold text-primary">RN002. </p>
                        <p>
                          Deve possuir um botão com a opção de deletar o curso
                          listado.
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p className="font-bold text-secondary">
                      Critérios de Aceite
                    </p>
                    <p className="pl-1 md:pl-4">
                      <span className="font-semibold">Dado</span> que o usuário
                      esta na página de listagem de cursos
                      <br />
                      <span className="font-semibold">Então</span> todos os
                      cursos cadastrados são exibidos.
                    </p>
                  </li>
                </ol>
              </div>

              <div className="space-y-4 pt-4">
                <p className="font-bold text-xl text-accent">
                  III. Excluir Curso
                </p>
                <ol className="flex flex-col gap-4 px-4 md:px-12 list-decimal marker:text-purple-500 marker:font-bold">
                  <li>
                    <p className="font-bold text-secondary">User Storie:</p>
                    <p className="pl-1 md:pl-4">
                      <span className="font-semibold">Como</span> usuário do
                      Beedoo QA Challenge
                      <br />
                      <span className="font-semibold">Quero</span> deletar um
                      curso da cadastrado,
                      <br />
                      <span className="font-semibold">Para que</span> eele não
                      esteja mais disponível para visualização.
                    </p>
                  </li>
                  <li>
                    <p className="font-bold text-secondary">
                      Regras de Negócio
                    </p>
                    <ul className="pl-1 md:pl-4 space-y-3">
                      <li className="flex flex-row gap-2">
                        <p className="font-bold text-primary">RN001. </p>
                        <p>
                          A ação de deletar deve solicitar uma confirmação antes
                          de excluir o curso permanentemente.
                        </p>
                      </li>
                      <li className="flex flex-row gap-2">
                        <p className="font-bold text-primary">RN002. </p>
                        <p>
                          Ao deletar um curso, este deve ser removido da
                          listagem de cursos de forma dinâmica, sem necessidade
                          de se atualizar a página.
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p className="font-bold text-secondary">
                      Critérios de Aceite
                    </p>
                    <p className="pl-1 md:pl-4">
                      <span className="font-semibold">Dado</span> que o usuário
                      esta na página de listagem de cursos,
                      <br />
                      <span className="font-semibold">Quando</span> o usuário
                      deletar um curso,
                      <br />
                      <span className="font-semibold">Então</span> o curso deve
                      ser removido da listagem.
                    </p>
                  </li>
                </ol>
              </div>
            </article>

            <header className="pt-8">
              <h2 className="text-accent text-3xl font-bold pb-1">
                PLANO DE TESTE
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                Os{" "}
                <a
                  className="link text-accent"
                  href="https://docs.google.com/spreadsheets/d/1PsArQFZ13y2IsFuKSXQPnaLIRTgnbyjhjXqkFay0ZOE/edit?usp=drive_link"
                  target="_blank"
                >
                  cenários de teste
                </a>{" "}
                foram desenvolvidos com base nas User Stories e outras
                funcionalidades identificadas. Foram desenvolvidos um total de{" "}
                <span className="text-accent font-bold">
                  12 casos de testes
                </span>{" "}
                divididos entre os{" "}
                <span className="text-accent font-bold">
                  03 principais fluxos
                </span>
                .
              </p>
              <ImageModal
                imageSrc={casosPorCenario}
                caption="Casos de Teste por Cenário de Teste"
                captionSrc="https://docs.google.com/spreadsheets/d/1PsArQFZ13y2IsFuKSXQPnaLIRTgnbyjhjXqkFay0ZOE/edit?usp=drive_link"
              />
            </article>
            <header className="pt-12">
              <h2 className="text-accent text-3xl font-bold pb-1">
                BUG REPORT
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                Após a execução dos testes, o{" "}
                <a
                  className="link text-accent"
                  href="https://docs.google.com/spreadsheets/d/13fEWkz2abpgmCHLCIdRyCBnkSJEvdTn5P9v120qnrpI/edit?usp=drive_link"
                  target="_blank"
                >
                  bug report
                </a>{" "}
                do Desafio Beedoo categoriza e prioriza os problemas
                identificados em cada cenário de teste. Os bugs são
                classificados por sua criticidade, proporcionando uma visão
                clara dos aspectos do sistema que requerem correção imediata
                para melhorar a experiência do usuário e a eficiência
                operacional da aplicação.
              </p>
              <p>
                Foram reportados um total de
                <span className="font-bold text-accent"> 12 bugs</span>,
                distribuídos por todo o sistema, cada um com diferentes níveis
                de criticidade.{" "}
              </p>
              <ImageModal
                imageSrc={bugsPorCenario}
                caption="Quantidades de Bugs por Cenário de Teste"
                captionSrc="https://docs.google.com/spreadsheets/d/13fEWkz2abpgmCHLCIdRyCBnkSJEvdTn5P9v120qnrpI/edit?usp=drive_link"
              />
            </article>
            <header className="mt-8">
              <h3 className="text-accent text-2xl">CRITICIDADE</h3>
            </header>
            <article className="space-y-4">
              <p>
                A criticidade dos bugs foi categorizada em quatro níveis, cada
                um refletindo a severidade do impacto no funcionamento do
                sistema e na experiência do usuário. Abaixo estão as definições
                de cada nível de criticidade:
              </p>
              <ul className="flex gap-4 flex-col">
                <li>
                  <span className="font-bold text-accent">🔵 Leve</span>: Bugs
                  que causam pequenos inconvenientes ou problemas estéticos, sem
                  afetar significativamente a funcionalidade do sistema.
                </li>
                <li>
                  <span className="font-bold text-accent">⚠️ Moderada</span>:
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
              <h3 className="text-accent text-2xl">EVIDENCIAS</h3>
            </header>
            <article className="space-y-4">
              <p>
                As evidências de todos os testes com sucesso e com falhas se
                encontram dentro das pasta de{" "}
                <a
                  href="https://drive.google.com/drive/folders/1cDO_WuWiMwyif5GjNcgRO_3NLtKkPJij?usp=drive_link"
                  target="_blank"
                  className="link font-bold text-accent"
                >
                  evidências
                </a>
                . As evidências também são referênciadas dentro do Bug Report.
              </p>
            </article>
            <header className="pt-12">
              <h2 className="text-accent text-3xl font-bold pb-1">
                APRENDIZADOS
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                O Desafio Beedoo foi uma ótima oportunidade para aprender sobre
                testes de software. Identificamos{" "}
                <span className="text-accent">12 bugs</span> que podem ser
                corrigidos, destacando a importância de entender as necessidades
                dos usuários.
              </p>
            </article>
          </section>
          <footer>
            <SimilarProjects
              projects={[
                projects.lojaQA,
                projects.amigosEntregadores,
                projects.backofficeJogajunto,
              ]}
            />
          </footer>
        </main>
      </FakeTerminalWindow>
    </div>
  )
}
