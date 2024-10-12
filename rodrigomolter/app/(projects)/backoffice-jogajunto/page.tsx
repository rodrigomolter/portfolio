import Image from "next/image"

import { CitationBlock } from "@/app/(projects)/citation-block"
import { FakeTerminalWindow } from "@/app/components/terminal/fake-terminal-window"
import { ImageModal } from "@/app/components/image-modal"
import { SimilarProjects } from "@/app/(projects)/similar-projects"
import { parseURL } from "@/app/lib/utils"

import { myself, projects } from "@/data/info"

const thisProject = projects.backofficeJogajunto
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

export default function BackofficeJogajunto() {
  return (
    <div className="my-12">
      <FakeTerminalWindow>
        <main>
          <section className="text-lg md:px-6 ">
            <header className="flex flex-col items-center justify-center my-8 lg:mb-16">
              <ImageModal imageSrc="/projects/backoffice-jogajunto/home-backoffice-jogajunto.png" />
              <nav className="gap-4 flex text-sm md:text-lg mt-4">
                <a
                  className="link font-bold text-accent"
                  href="https://github.com/rodrigomolter/backoffice-jogajunto"
                  target="_blank"
                >
                  Github
                </a>
                <span className="hidden md:flex"> | </span>
                <a
                  className="link font-bold text-accent"
                  href="https://docs.google.com/document/d/1XsePFviE_ZLnjvnMSCtucGEtLX1eiA0L/edit?usp=drive_link&ouid=103488550512610870019&rtpof=true&sd=true"
                  target="_blank"
                >
                  Plano de Teste
                </a>
                <span className="hidden md:flex"> | </span>
                <a
                  className="link font-bold text-accent"
                  href="https://docs.google.com/spreadsheets/d/11okCLPQDrQiVADdKLYXMjBvAqGDkbCS26A-FpWDbuBU/edit?usp=drive_link"
                  target="_blank"
                >
                  Cenário de Testes & Reporte de Bugs
                </a>
              </nav>
            </header>
            <h1 className="text-accent text-3xl md:text-4xl font-bold pb-1">
              BACKOFFICE JOGAJUNTO
            </h1>
            <article className="space-y-4">
              <p>
                O{" "}
                <a
                  href="https://projetofinal.jogajuntoinstituto.org/"
                  target="_blank"
                  className="link"
                >
                  Backoffice JogaJunto
                </a>{" "}
                é o <span className="font-bold">projeto final</span> do módulo
                avançado do curso{" "}
                <span className="font-bold">Bugou? QA TA ON</span> oferecido
                pelo Instituto Joga Junto. Trata-se da{" "}
                <span className="font-bold text-accent">
                  criação de cenários de testes manuais e automatizados
                </span>{" "}
                para um sistema de controle de estoque de produtos para os
                colaboradores do Instituto Joga Junto, no qual é possível
                realizar o cadastro, pesquisa e filtragem de produtos
                adicionados.
              </p>
              <p>
                Durante o projeto, começamos com o planejamento inicial, onde
                <span className="font-bold"> compreendemos</span> o problema,
                <span className="font-bold"> analisamos</span> os fluxos e
                requisitos do cliente,
                <span className="font-bold"> exploramos</span> o funcionamento
                do sistema e <span className="font-bold">mapeamos</span> suas
                principais funcionalidades. Direcionamos nossa atenção para a
                definição de cronogramas e divisão de tarefas que seriam
                realizadas nessa sprint.
              </p>
              <p>
                Em seguida focamos na parte da execução prática, envolvendo o
                detalhamento de cenários e casos de testes, a condução dos
                testes manuais, a elaboração do bug report e a criação de testes
                de API e de testes automatizados. Por fim, foi realizado uma
                análise dos problemas identificados e a apresentação dos
                resultados para o cliente.
              </p>
              <p>
                A automação dos testes é desenvolvida em{" "}
                <span className="text-accent font-bold">Python</span>,
                utilizando{" "}
                <span className="text-accent font-bold">
                  Selenium WebDriver
                </span>
                , com o padrão de design
                <span className="font-bold"> Page Objects</span>. Os casos de
                testes, utilizam do framework <em>Behave</em> para o suporte ao
                desenvolvimento orientado ao comportamento. Tanto os
                cenários/casos de teste, quanto o bug report foram escritos em
                Gherkin.
              </p>
            </article>
            <header className="mt-6">
              <h2 className="text-accent text-3xl font-bold pb-1">SQUADS</h2>
            </header>
            <article className="space-y-4">
              <p>
                A divisão de equipes dentro do Instituto Joga Junto foi através
                de Squads. Esse conceito foi popularizado pela Spotify, embora
                muitas outras empresas também tenham adotado e adaptado esse
                modelo.
              </p>

              <CitationBlock
                Quote="Uma Squad é semelhante a uma equipe Scrum e é projetada para parecer uma mini-startup. Eles trabalham juntos e têm todas as habilidades e ferramentas necessárias para projetar, desenvolver, testar e lançar na produção. São uma equipe auto-organizada e decidem sua própria forma de trabalhar – algumas usam sprints de Scrum, outras usam Kanban, e algumas usam uma combinação dessas abordagens."
                Author="Henrik Kniberg & Anders Ivarsson"
                Title="Scaling Agile @ Spotify (2012)"
                Reference="https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf"
              />

              <p>
                Com isso, surgiu os{" "}
                <span className="text-accent">Aspirantes da Automação</span>.
                Esse foi o nome escolhido ao nosso squad pelos participantes -
                uma sugestão que foi rapidamente abraçada pela equipe, tendo em
                vista que o principal tópico do módulo avançado do curso era o
                seu foco em automação de testes.
              </p>
            </article>
            <header className="mt-8">
              <h2 className="text-accent text-3xl font-bold pb-1">
                FLUXUOGRAMA
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                Antes da criação dos cenários de testes, foi elaborado um{" "}
                <a
                  className="link text-accent"
                  href="https://miro.com/app/board/uXjVKxtmeHU=/"
                  target="_blank"
                >
                  fluxuograma
                </a>{" "}
                detalhado para mapear todos os possíveis caminhos e interações
                do usuário no Backoffice JogaJunto. Esse processo foi
                fundamental para compreender o funcionamento completo do sistema
                e identificar os fluxos que precisavam ser validados durante os
                testes.
              </p>
              <ImageModal
                imageSrc="/projects/backoffice-jogajunto/fluxuograma.jpg"
                caption="Fluxuograma - Backoffice JogaJunto"
                captionSrc="https://miro.com/app/board/uXjVKxtmeHU=/"
              />
            </article>
            <header className="pt-8">
              <h2 className="text-accent text-3xl font-bold pb-1">
                PLANEJAMENTO DOS TESTES
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                No planejamento de testes para o Backoffice JogaJunto, começamos
                com uma reunião para definir o que seria testado, focando nas
                funções de{" "}
                <span className="font-bold text-accent">cadastro</span>,{" "}
                <span className="font-bold text-accent">pesquisa</span> e{" "}
                <span className="font-bold text-accent">
                  filtragem de produtos
                </span>
                . Durante essa reunião, discutimos como realizar os testes e
                dividimos as tarefas entre os membros da equipe, de acordo com
                as habilidades de cada um.
              </p>
              <p>
                Depois de dividir as tarefas, criamos um cronograma com prazos
                para cada etapa do projeto. Isso nos ajudou a organizar o
                trabalho e garantir que todas as fases fossem concluídas dentro
                do tempo planejado, mantendo a qualidade do projeto.
              </p>
              <ImageModal
                imageSrc="/projects/backoffice-jogajunto/cronograma.png"
                caption="Organização do Planejamento de testes"
              />
            </article>
            <header className="mt-8">
              <h2 className="text-accent text-3xl font-bold pb-1">
                CENÁRIOS DE TESTES
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                Os{" "}
                <a
                  href="https://docs.google.com/spreadsheets/d/11okCLPQDrQiVADdKLYXMjBvAqGDkbCS26A-FpWDbuBU/edit?usp=drive_link"
                  target="_blank"
                  className="link font-bold text-accent"
                >
                  cenários de testes
                </a>{" "}
                foram desenvolvidos com base nos requisitos estabelecidos e
                executados nos navegadores{" "}
                <span className="font-bold"> Google Chrome</span> (Windows e
                Android) e <span className="font-bold">Safari</span> (iOS e
                iPadOS).
              </p>
              <p>
                Foram desenvolvidos um total de{" "}
                <span className="font-bold text-accent">
                  69 casos de testes
                </span>{" "}
                divididos entre os fluxos de{" "}
                <span className="font-semibold">login/logout</span>,{" "}
                <span className="font-semibold">cadastro de produto</span>,{" "}
                <span className="font-semibold">filtragens de produtos</span>,{" "}
                <span className="font-semibold">pesquisa de produtos</span> e
                entre outros requisitos funcionais e não funcionais.
              </p>
              <ImageModal
                imageSrc="/projects/backoffice-jogajunto/casos-teste-cenario.svg"
                caption="Casos de Testes por Cenário de Teste"
              />
            </article>
            <header className="mt-8">
              <h2 className="text-accent text-3xl font-bold pb-1">
                BUG REPORT
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                Após a execução dos testes, o{" "}
                <a
                  href="https://docs.google.com/spreadsheets/d/11okCLPQDrQiVADdKLYXMjBvAqGDkbCS26A-FpWDbuBU/edit?gid=281890621#gid=281890621"
                  target="_blank"
                  className="link font-bold text-accent"
                >
                  bug report
                </a>{" "}
                do Backoffice JogaJunto categoriza e prioriza os problemas
                identificados em cada cenário de teste. Os bugs são
                classificados por sua{" "}
                <span className="font-semibold">criticidade</span>,
                proporcionando uma visão clara dos aspectos do sistema que
                requerem correção imediata para melhorar a experiência do
                usuário e a eficiência operacional do sistema.
              </p>
              <p>
                Foram reportados um total de{" "}
                <span className="font-bold text-accent">50 bugs</span>,
                distribuídos por todo o sistema, cada um com diferentes níveis
                de criticidade. A maior parte dos bugs foram encontrada dentro
                do fluxo de
                <span className="font-semibold"> filtragem de produtos</span>,
                seguido pelo fluxo de{" "}
                <span className="font-semibold">cadastro de produto</span>, que
                é o principal fluxo da aplicação.
              </p>
              <ImageModal
                imageSrc="/projects/backoffice-jogajunto/testes-cadastro-produto.svg"
                caption="Testes com sucesso/falha no cenário de Cadastro de Produtos"
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
              <h2 className="text-accent text-3xl font-bold pb-1">
                TESTES AUTOMATIZADOS
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                Para garantir que as funcionalidades principais do Backoffice
                JogaJunto fossem testadas de maneira eficiente e consistente, a
                equipe implementou{" "}
                <a
                  href="https://github.com/rodrigomolter/backoffice-jogajunto"
                  target="_blank"
                  className="link font-bold text-accent"
                >
                  testes automatizados
                </a>{" "}
                utilizando <span className="font-semibold">Python</span>,{" "}
                <span className="font-semibold">Selenium</span> e{" "}
                <span className="font-semibold">Behave</span>, seguindo o padrão{" "}
                <span className="font-semibold">Page Objects</span>. Esses
                testes foram focados nos{" "}
                <span className="italic">happy paths</span>: caminhos que
                representam os fluxos ideais de uso do sistema, onde todas as
                ações dos usuários ocorrem conforme o esperado, sem erros ou
                exceções.
              </p>
              <p>
                O Selenium foi a ferramenta escolhida para automatizar as
                interações com o navegador, simulando ações de usuários como
                cliques, preenchimento de formulários e navegação entre páginas.
                Integrado ao Behave, que permite escrever testes com base nos
                casos de testes ja desenvolvidos, e que se baseiam no
                comportamento do usuário. Com o padrão Page Objects, cada página
                do sistema foi representada por uma classe, facilitando a
                manutenção e a reutilização dos testes. Ao concentrar os testes
                nos happy paths, a equipe assegurou que as funcionalidades
                essenciais do sistema fossem validadas de ponta a ponta,
                garantindo que o sistema funcionasse conforme o planejado no uso
                típico.
              </p>
              <ImageModal
                imageSrc="/projects/backoffice-jogajunto/page-objects.svg"
                caption="Encapsulamento das páginas com Page Objects"
              />
            </article>
            <header className="mt-8">
              <h2 className="text-accent text-3xl font-bold pb-1">
                TESTES DE API
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                Foram implementados testes automatizados para a API do
                Backoffice JogaJunto, focando também nos happy paths. Esses
                testes garantem que as funcionalidades principais da API
                funcionem corretamente. Além disso, foram implementados{" "}
                <span className="text-accent">testes de contrato</span>.
              </p>
              <p>
                Testes de contrato são realizados para garantir que a API esteja
                em conformidade com as especificações acordadas entre os
                serviços que se comunicam. Esses testes verificam os{" "}
                <span className="text-accent">formatos de dados</span>, os{" "}
                <span className="text-accent">tipos de resposta</span> e os{" "}
                <span className="text-accent">códigos de status HTTP</span>.
                Eles ajudam a assegurar que mudanças na API não quebrem a
                integração com outros sistemas e que as respostas sejam
                consistentes e previsíveis.
              </p>
              <ImageModal
                imageSrc="/projects/backoffice-jogajunto/teste-contrato.svg"
                caption="Testes de Contrato"
              />
              <p>
                Para complementar os testes automatizados, foi criada uma
                collection no{" "}
                <span className="text-accent font-bold">Postman</span> que cobre
                todos os fluxos possíveis da API, tanto positivos quanto
                negativos. Essa collection inclui uma série de solicitações e
                cenários de teste que exploram diferentes aspectos da API, desde
                respostas esperadas em situações normais até como a API lida com
                entradas inválidas ou inesperadas. Utilizando essa abordagem,
                foi possível testar a robustez e a confiabilidade da API,
                garantindo que ela funcionasse corretamente em uma ampla gama de
                condições e atendesse aos requisitos estabelecidos.
              </p>
              <div className="flex justify-center items-center py-4">
                <a href="https://app.getpostman.com/run-collection/29423847-be72a8cb-9dac-49d5-acda-af47c2667dcb?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D29423847-be72a8cb-9dac-49d5-acda-af47c2667dcb%26entityType%3Dcollection%26workspaceId%3D634d18e6-9a9f-45a7-a562-69e352023655">
                  <Image
                    src="https://run.pstmn.io/button.svg"
                    alt="Run In Postman"
                    width={172}
                    height={43}
                  />
                </a>
              </div>
            </article>
            <header className="mt-8">
              <h2 className="text-accent text-3xl font-bold pb-1">
                CONTINOUS INTEGRATION
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                Foi criada uma{" "}
                <span className="text-accent">pipeline no GitHub Actions</span>{" "}
                para o Backoffice JogaJunto, com o objetivo de automatizar a
                execução dos testes sempre que houver alterações no código. A
                ideia principal por trás dos testes automatizados é que eles
                sejam executados de forma automática e contínua, garantindo que
                a qualidade do software seja mantida a cada modificação
                realizada.
              </p>
              <ImageModal
                imageSrc="/projects/continuous-integration.svg"
                caption="Pipeline de CI"
              />
              <p>
                A pipeline é configurada para rodar os testes toda vez que um{" "}
                <span className="text-accent">push</span> é feito para o
                repositório. Ela executa os testes de maneira{" "}
                <span className="font-bold">paralela</span> em dois navegadores
                diferentes: Chrome e Firefox. Isso permite verificar a
                compatibilidade e o desempenho do sistema em diferentes
                ambientes de navegação, garantindo que o software funcione
                corretamente em ambos os casos. Esse processo automatizado ajuda
                a detectar problemas rapidamente e a manter a qualidade do
                código ao longo do desenvolvimento.
              </p>
            </article>
          </section>
          <footer>
            <SimilarProjects
              projects={[projects.bugbank, projects.motionhub, projects.lojaQA]}
            />
          </footer>
        </main>
      </FakeTerminalWindow>
    </div>
  )
}
