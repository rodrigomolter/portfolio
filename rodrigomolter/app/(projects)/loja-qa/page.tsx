import Image from "next/image"
import Link from "next/link"

import { CitationBlock } from "@/app/(projects)/citation-block"
import { ImageModal } from "@/app/components/image-modal"
import { FakeTerminalWindow } from "@/app/components/terminal/fake-terminal-window"
import { SimilarProjects } from "@/app/(projects)/similar-projects"
import { parseURL } from "@/app/lib/utils"

import GuardioesQualidadeLogo from "@/app/components/logo/guardioes-qualidade-logo"
import { myself, projects } from "@/data/info"

const thisProject = projects.lojaQA
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

export default function LojaQA() {
  return (
    <div className="mt-12">
      <FakeTerminalWindow>
        <main>
          <section className="text-lg md:px-6 ">
            <header className="flex flex-col items-center justify-center my-8 lg:mb-16">
              <Image
                alt="Loja do QA"
                src="/projects/loja-qa/home-lojaqa.svg"
                width={1080}
                height={120}
                className="w-[80vw] h-full max-h-[400px] object-cover"
              />
              <nav className="gap-4 flex text-sm md:text-lg mt-4">
                <Link
                  className="link font-bold text-accent"
                  href="https://docs.google.com/spreadsheets/d/1FaA6fsicI19vWN7ZYa_3jQkqCzUa1xuBjrhlEywY9A0/edit?usp=drive_link"
                  target="_blank"
                >
                  Cenários de Teste
                </Link>
                |
                <Link
                  className="link font-bold text-accent"
                  href="https://docs.google.com/spreadsheets/d/1rjub14owQebOiPGstyix-G-ulYaY37GV/edit?usp=drive_link&ouid=103488550512610870019&rtpof=true&sd=true"
                  target="_blank"
                >
                  Reporte de Bugs
                </Link>
                |
                <Link
                  className="link font-bold text-accent"
                  href="https://miro.com/app/board/uXjVKJtKCY8=/?share_link_id=6514805450"
                  target="_blank"
                >
                  Fluxuograma
                </Link>
              </nav>
            </header>
            <h1 className="text-accent text-4xl font-bold pb-1">LOJA DO QA</h1>
            <article className="space-y-4">
              <p>
                A{" "}
                <a
                  href="https://lojaqa.jogajuntoinstituto.com/"
                  target="_blank"
                  className="link"
                >
                  Loja do QA
                </a>{" "}
                é o <span className="font-bold">projeto final</span> do módulo
                básico do curso{" "}
                <span className="font-bold">Bugou? QA TA ON</span> oferecido
                pelo Instituto Joga Junto. Este case envolve uma jornada que
                abrange{" "}
                <span className="text-accent font-bold">
                  entender, compreender, planejar e executar
                </span>
                . Trata-se da{" "}
                <span className="text-accent">
                  criação e excução de cenários de testes
                </span>{" "}
                para um e-commerce que segue o padrão de grandes plataformas
                como Amazon e Casas Bahia.
              </p>
              <p>
                Durante o projeto, começamos com o planejamento inicial, onde
                compreendemos o problema, analisamos os fluxos e requisitos do
                cliente, exploramos o funcionamento do sistema e mapeamos suas
                principais funcionalidades. Em seguida, direcionamos nossa
                atenção para a execução prática, envolvendo o detalhamento de
                cenários e casos de teste, a condução dos testes propriamente
                ditos, a elaboração do bug report e, por fim, a análise dos
                problemas identificados.
              </p>
              <p>
                Tanto os cenários/casos de teste, quanto o bug report foram
                escritos em Gherkin.
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
                Quote="Uma squad é semelhante a uma equipe Scrum e é projetada para parecer uma mini-startup. Eles trabalham juntos e têm todas as habilidades e ferramentas necessárias para projetar, desenvolver, testar e lançar na produção. São uma equipe auto-organizada e decidem sua própria forma de trabalhar – algumas usam sprints de Scrum, outras usam Kanban, e algumas usam uma combinação dessas abordagens."
                Author="Henrik Kniberg & Anders Ivarsson"
                Title="Scaling Agile @ Spotify (2012)"
                Reference="https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf"
              />
              <div className="space-y-4 pt-4">
                <h3 className="text-accent text-2xl">GUARDIÕES DA QUALIDADE</h3>
                <p>
                  Com isso, surgiu os{" "}
                  <span className="font-bold text-accent">
                    Guardiões da Qualidade
                  </span>
                  . Esse foi o nome escolhido ao nosso squad pelos
                  participantes. A escolha de um nome foi o pontapé inicial de
                  algo que representam um marco crucial no desenvolvimento e
                  aprendizado durante o curso. A utilização do nome em
                  apresentações e pequenos projetos, culminou, pouco a pouco, na
                  criação de uma identidade visual para os Guardiões da
                  Qualidade. A criação desta identidade não apenas fortaleceu o
                  sentimento de participação, mas também fomentou um ambiente de
                  trabalho mais colaborativo e engajado. A utilização quase que
                  diaria da identidade do squad trazia um sentimento de equipe e
                  colaboração que fico muito grato de ter a oportunidade de ter
                  feito parte.
                </p>
                <div className="flex flex-col items-center">
                  <GuardioesQualidadeLogo />
                  <p className="pt-4 italic">Logo Guardiões da Qualidade</p>
                </div>
              </div>
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
                  className="link "
                  href="https://miro.com/app/board/uXjVKJtKCY8=/?share_link_id=6514805450"
                  target="_blank"
                >
                  fluxuograma
                </a>{" "}
                detalhado para mapear todos os possíveis caminhos e interações
                do usuário na Loja do QA. Esse processo foi fundamental para
                compreender o funcionamento completo do sistema e identificar os
                fluxos que precisavam ser validados durante os testes.
              </p>
              <ImageModal
                imageSrc="/projects/loja-qa/fluxuograma.png"
                caption="Fluxuograma - Loja do QA"
                captionSrc="https://miro.com/app/board/uXjVKJtKCY8=/?share_link_id=6514805450"
              />

              <p>
                As principais funcionalidades foram divididas
                <span className="font-bold text-accent"> quatro</span> fluxos:
              </p>
              <ol className="flex flex-col gap-4">
                <li>
                  <span className="text-accent font-bold">
                    🔍 Navegação do Usuário
                  </span>
                  : Este fluxo cobre como os usuários navegam pelo site da Loja
                  do QA. Inclui a entrada inicial no site e a navegação entre
                  páginas. O objetivo é garantir que a navegação seja intuitiva,
                  os links funcionem corretamente e os usuários encontrem
                  facilmente o que procuram.
                </li>
                <li>
                  <span className="text-accent font-bold">
                    🔐 Criação de Conta
                  </span>
                  : Este fluxo se concentra no processo que os usuários seguem
                  para criar uma conta na Loja do QA e o processo de
                  autenticação. Inclui desde o preenchimento do formulário de
                  registro até a confirmação por e-mail. O objetivo é garantir
                  que o registro seja fácil de completar, que os dados sejam
                  validados corretamente e que o usuário receba as confirmações
                  necessárias para acessar a sua conta.
                </li>
                <li>
                  <span className="text-accent font-bold">🛒 Compras</span>:
                  Este fluxo abrange todas as etapas que um usuário segue ao
                  realizar uma compra na Loja do QA. Isso inclui a busca por
                  produtos, visualização das informações do produto, adicionar
                  itens ao carrinho, gerenciar o carrinho (como editar
                  quantidades ou remover itens), visualizar detalhes do pedido e
                  confirmar a compra. O objetivo é assegurar que todo o processo
                  de compra seja claro, eficiente e sem problemas.
                </li>
                <li>
                  <span className="text-accent font-bold">💳 Pagamento</span>:
                  Este fluxo detalha como os usuários realizam o pagamento pelos
                  produtos na Loja do QA. Inclui a seleção de métodos de
                  pagamento (como cartão de crédito, boleto ou outros), inserção
                  de informações de pagamento e finalização da transação. O
                  objetivo é garantir que todas as opções de pagamento funcionem
                  corretamente, que os dados sejam seguros e que o usuário
                  receba confirmação da compra após o pagamento ser processado.
                </li>
              </ol>
            </article>
            <header className="mt-6">
              <h2 className="text-accent text-3xl font-bold pb-1">
                CENÁRIOS DE TESTES
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                Os{" "}
                <a
                  className="link text-accent"
                  href="https://docs.google.com/spreadsheets/d/1FaA6fsicI19vWN7ZYa_3jQkqCzUa1xuBjrhlEywY9A0/edit?usp=drive_link"
                  target="_blank"
                >
                  cenários de teste
                </a>{" "}
                foram desenvolvidos com base no fluxuograma inicial da Loja do
                QA junto com os testes de acessibilidade, abrangendo todas as
                funcionalidades críticas do e-commerce.
              </p>
              <p>
                Foram desenvolvidos um total de
                <span className="font-bold text-accent">
                  {" "}
                  67 casos de testes
                </span>{" "}
                divididos entre os principais fluxos junto com os testes de
                acessibilidade.
              </p>
              <ImageModal
                imageSrc="/projects/loja-qa/casos-cenario.svg"
                caption="Casos de Testes por Cenário de Teste"
              />
              <p>
                Os casos de teste, escritos em Gherkin, são elaborados a partir
                da perspectiva do usuário e seu comportamento. Essa abordagem
                garante que os testes reflitam as necessidades reais dos
                usuários e ajudem a alinhar as expectativas dos stakeholders com
                a funcionalidade do sistema.
              </p>
            </article>
            <header className="mt-6">
              <h2 className="text-accent text-3xl font-bold pb-1">
                TESTES DE ACESSIBILIDADE
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                Para os testes de acessibilidade, utilizamos as{" "}
                <a
                  href="https://www.w3c.br/traducoes/wcag/wcag21-pt-BR/"
                  className="text-accent link"
                >
                  diretrizes da WCAG
                </a>{" "}
                (Web Content Accessibility Guidelines) para validar a
                acessibilidade do e-commerce. A WCAG fornece um conjunto de
                recomendações para tornar o conteúdo web mais{" "}
                <span className="font-bold">acessível</span> a pessoas com
                deficiências, incluindo deficiências visuais, auditivas, motoras
                e cognitivas.
              </p>
              <p>
                Durante o processo de testes, verificamos se a Loja do QA
                atendia aos critérios da WCAG em vários níveis de conformidade.
                Isso incluiu a verificação de elementos como contraste de cores,
                navegação via teclado, descrição de imagens (atributos alt), e a
                estrutura semântica do HTML. Além disso, testamos a
                compatibilidade do site com leitores de tela para garantir que
                todos os usuários pudessem acessar e utilizar o e-commerce de
                maneira eficiente.
              </p>
              <CitationBlock
                Quote="O poder da Web está em sua universalidade. O acesso de todos, independentemente da deficiência, é um aspecto essencial."
                Author="Tim Berners-Lee"
                Title="diretor da W3C."
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
                  className="link text-accent"
                  href="https://docs.google.com/spreadsheets/d/1rjub14owQebOiPGstyix-G-ulYaY37GV/edit?usp=drive_link&ouid=103488550512610870019&rtpof=true&sd=true"
                  target="_blank"
                >
                  bug report
                </a>{" "}
                da Loja do QA categoriza e prioriza os problemas identificados
                em cada cenário de teste. Os bugs são classificados por sua
                criticidade, proporcionando uma visão clara dos aspectos do
                sistema que requerem correção imediata para melhorar a
                experiência do usuário e a eficiência operacional do e-commerce.
              </p>
              <p>
                Foram reportados um total de
                <span className="font-bold text-accent"> 98 bugs</span>,
                distribuídos por todo o sistema, cada um com diferentes níveis
                de criticidade. A maior parte dos bugs{" "}
                <span className="font-bold"> bloqueantes </span>
                foi encontrada dentro do
                <span className="font-bold"> fluxo de compras</span>, que é o
                principal fluxo da aplicação.
              </p>
              <ImageModal
                imageSrc="/projects/loja-qa/bugs-cenario.svg"
                caption="Quantidades de Bugs por Cenário de Teste"
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
              <ImageModal
                imageSrc="/projects/loja-qa/contagem-criticidade-bugs.svg"
                caption="Contagem de Criticidade de Bugs"
              />
            </article>
            <header className="mt-8">
              <h2 className="text-accent text-3xl font-bold pb-1">
                NAVEGAÇÃO DO USUÁRIO
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                Dentro do fluxo de navegação do usuário foram encontrados{" "}
                <span className="font-bold text-accent">21 bugs</span>, dos
                quais <span className="font-bold">nenhum</span> é considerado
                bloqueante para a aplicação.
              </p>
              <ImageModal
                imageSrc="/projects/loja-qa/bugs-navegacao-de-usuario.svg"
                caption="Bugs por criticidade no fluxo de Navegação do Usuário"
              />
            </article>
            <header className="mt-8">
              <h2 className="text-accent text-3xl font-bold pb-1">
                CRIAÇÃO DE CONTA
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                Dentro do fluxo de criação de conta foram encontrados{" "}
                <span className="font-bold text-accent">06 bugs</span>, dos
                quais <span className="font-bold">nenhum</span> é considerado
                bloqueante para a aplicação.
              </p>
              <ImageModal
                imageSrc="/projects/loja-qa/bugs-criacao-de-conta.svg"
                caption="Bugs por criticidade no fluxo de Criação de Conta"
              />
            </article>
            <header className="mt-8">
              <h2 className="text-accent text-3xl font-bold pb-1">COMPRAS</h2>
            </header>
            <article className="space-y-4">
              <p>
                Dentro do fluxo de compras foram encontrados{" "}
                <span className="font-bold text-accent">25 bugs</span>, dos
                quais <span className="font-bold">08</span> são considerado
                bloqueantes para a aplicação.
              </p>
              <ImageModal
                imageSrc="/projects/loja-qa/bugs-compras.svg"
                caption="Bugs por criticidade no fluxo de Compras"
              />
            </article>
            <header className="mt-8">
              <h2 className="text-accent text-3xl font-bold pb-1">PAGAMENTO</h2>
            </header>
            <article className="space-y-4">
              <p>
                Dentro do fluxo de pagamento foram encontrados{" "}
                <span className="font-bold text-accent">06 bugs</span>, dos
                quais <span className="font-bold">01</span> é considerado
                bloqueante para a aplicação.
              </p>
              <ImageModal
                imageSrc="/projects/loja-qa/bugs-pagamento.svg"
                caption="Bugs por criticidade no fluxo de Pagamento"
              />
            </article>
            <header className="mt-8">
              <h2 className="text-accent text-3xl font-bold pb-1">
                ACESSIBILIDADE
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                Ja na parte de acessibilidade foram encontrados
                <span className="font-bold text-accent"> 30 bugs</span>, dos
                quais <span className="font-bold">nenhum</span> é considerado
                bloqueante para a aplicação.
              </p>
              <ImageModal
                imageSrc="/projects/loja-qa/bugs-acessibilidade.svg"
                caption="Bugs por criticidade em acessibilidade"
              />
            </article>
            <header className="mt-8">
              <h2 className="text-accent text-3xl font-bold pb-1">
                APRENDIZADO
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                Participar do case foi uma experiência enriquecedora, onde
                desenvolvi habilidades técnicas e aprendi a trabalhar em equipe.
                No início, nossa Squad enfrentou desafios para entender os
                requisitos do cliente e mapear os fluxos do sistema. Esse
                processo, embora lento, foi crucial para compreendermos as
                conexões da aplicação.
              </p>
              <p>
                Durante o desenvolvimento, a comunicação e colaboração criaram
                um ambiente produtivo, onde ideias fluíam e desafios eram
                superados juntos. Essa interação respeitosa fortaleceu nossa
                capacidade de resolver problemas de forma colaborativa,
                aproveitando a diversidade de perspectivas.
              </p>
              <p>
                Essa experiência foi uma valiosa oportunidade de aplicar teoria
                na prática, consolidando hard e soft skills essenciais para o
                trabalho como QA, e nos preparando para desafios futuros na
                qualidade de software.
              </p>
            </article>
          </section>
          <footer>
            <SimilarProjects
              projects={[
                projects.backofficeJogajunto,
                projects.amigosEntregadores,
                projects.docunder,
              ]}
            />
          </footer>
        </main>
      </FakeTerminalWindow>
    </div>
  )
}
