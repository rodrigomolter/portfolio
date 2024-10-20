import Image from "next/image"
import Link from "next/link"
import { FaGithub } from "react-icons/fa6"

import { CitationBlock } from "@/app/(projects)/citation-block"
import { FakeTerminalWindow } from "@/app/components/terminal/fake-terminal-window"
import { TransferenciaEntreContasFeature } from "./transferencia.feature"
import { ImageModal } from "@/app/components/image-modal"
import { SimilarProjects } from "@/app/(projects)/similar-projects"
import { parseURL } from "@/app/lib/utils"

import { myself, projects } from "@/data/info"

const thisProject = projects.bugbank
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

export default function Bugbank() {
  return (
    <div className="mt-12">
      <FakeTerminalWindow>
        <main>
          <section className="text-lg md:px-6 ">
            <header className="flex flex-col items-center justify-center my-8">
              <Image
                alt="BugBank"
                src="/projects/bugbank/banner-bugbank.png"
                width={1080}
                height={120}
                className="px-4 w-[80vw] md:w-[60vw] xl:w-[40vw] h-auto"
              />
              <nav className="text-4xl pt-6">
                <Link
                  href="https://github.com/rodrigomolter/bugbank-selenium"
                  target="_blank"
                  className="hover:scale-125 hover:text-accent transition-all ease-in-out tooltip"
                  data-tip="GitHub"
                >
                  <FaGithub />
                </Link>
              </nav>
            </header>
            <h1 className="text-accent text-3xl md:text-4xl font-bold pb-1">
              BUG BANK
            </h1>
            <article className="space-y-4">
              <p>
                O projeto Bug Bank foca na análise, escrita e automação de
                testes para a aplicação de banco online{" "}
                <a
                  href="https://bugbank.netlify.app/"
                  target="_blank"
                  className="link font-bold text-accent"
                >
                  Bug Bank.
                </a>{" "}
                Os casos de testes, escritos em Gherkin, são fortemente
                embasados em cima dos requisitos impostos pela aplicação.
              </p>
              <p>
                A automação dos testes é desenvolvida em{" "}
                <span className="text-accent font-semibold">Python</span>,
                utilizando de{" "}
                <span className="text-accent font-semibold">Selenium</span> com
                o padrão de design Page Objects para organização e
                encapsulamento das informações das páginas. Os casos de testes,
                utilizam do framework Behave para o suporte ao desenvolvimento
                orientado ao comportamento.
              </p>
              <ImageModal
                imageSrc="/projects/bugbank/bugbank-home.png"
                caption="Home do BugBank"
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
                <a
                  href="https://github.com/jhonatasmatos/bugbank-ui/tree/main"
                  className="link"
                >
                  Bug Bank UI
                </a>{" "}
                é uma aplicação de um banco online, projetado para práticas de
                planejamento e execução de testes manuais e automatizados. Ele
                oferece funcionalidades similares a um banco real, como{" "}
                <span className="font-semibold">criação de contas</span>,{" "}
                <span className="font-semibold">login</span>,{" "}
                <span className="font-semibold">transferências</span> e{" "}
                <span className="font-semibold">extratos</span>. O objetivo
                deste projeto é proporcionar um{" "}
                <span className="font-semibold text-accent">
                  ambiente similar a um ambiente real
                </span>{" "}
                com bugs e falhas para serem detectadas.
              </p>

              <CitationBlock
                Quote="Pensando em uma aplicação que seja semelhante a projetos reais, Bug Bank foi pensado para que você pratique planejamento de testes e automação de testes."
                Author="Jhonatas Matos"
                Title="Bug Bank CEO"
                Reference="https://github.com/jhonatasmatos/bugbank-ui/tree/main"
              />
              <h2 className="text-accent text-3xl font-bold pb-1">
                PLANEJAMENTO
              </h2>
              <p>
                Inicialmente, os requisitos da aplicação foram analisados para
                entender as funcionalidades e as expectativas do sistema. O
                planejamento do projeto se baseava no processo de entender,
                compreender, planejar e executar.
              </p>
              <p>
                Com base nos{" "}
                <a
                  href="https://bugbank.netlify.app/requirements"
                  target="_blank"
                  className="link text-accent"
                >
                  requisitos
                </a>{" "}
                estabelecidos pelo BugBank, as funcionalidades foram definidas:
              </p>
              <ul className="flex gap-4 flex-col">
                <li>
                  <span className="font-bold text-accent">🔒 Login</span>:
                  Autenticação de usuários existentes.
                </li>
                <li>
                  <span className="font-bold text-accent">🆕 Cadastro</span>:
                  Permite a criação de novas contas bancárias.
                </li>
                <li>
                  <span className="font-bold text-accent">
                    🔁 Transferência entre contas
                  </span>
                  : Realiza a transferência de dinheiro entre contas do BugBank.
                </li>
                <li>
                  <span className="font-bold text-accent">📊 Extratos</span>:
                  Exibe o histórico de transações do usuário.
                </li>
              </ul>
              <p>
                A partir disso foram criados os casos de testes, escritos em
                Gherkin para que facilitassem a criação de testes automatizados
                posteriormente.
              </p>
            </article>

            <header className="mt-8">
              <h2 className="text-accent text-3xl font-bold pb-1">
                FEATURES FILES
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                Os arquivos <code className="text-accent">.feature</code> são a
                base para a implementação dos testes no BugBank. Esses arquivos,
                escritos em <span className="font-bold">Gherkin</span>,{" "}
                descrevem os cenários de teste em uma linguagem próxima ao
                natural, facilitando a compreensão e a comunicação entre
                diferentes partes interessadas. Cada arquivo{" "}
                <code className="text-accent">.feature</code> contém um ou mais
                cenários que definem os passos necessários para validar uma
                funcionalidade específica da aplicação.
              </p>
              <div className="flex flex-col gap-4 justify-center items-center">
                <TransferenciaEntreContasFeature />
                <p className="italic">Parte do arquivo transferencia.feature</p>
              </div>
              <p>
                Essa abordagem permite que os testes sejam facilmente
                compreendidos por desenvolvedores, testadores e stakeholders.
              </p>
            </article>
            <header className="pt-6">
              <h2 className="text-accent text-3xl font-bold pb-1">
                TESTES AUTOMATIZADOS
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                Os{" "}
                <a
                  href="https://github.com/jhonatasmatos/bugbank-ui/tree/main"
                  className="link"
                  target="_blank"
                >
                  testes automatizados
                </a>{" "}
                garantem que as funcionalidades do BugBank sejam verificadas de
                maneira consistente e eficiente. A automação de testes ajuda a
                identificar rapidamente problemas e regressões, mantendo a
                qualidade do software. Para atingir esse objetivo, utilizei uma
                combinação de ferramentas e padrões, que são detalhados a
                seguir.
              </p>
              <ImageModal
                imageSrc="/projects/bugbank/test-result.png"
                caption="Execução da suíte de testes do Bug Bank"
              />
            </article>
            <header className="mt-4">
              <h2 className="text-accent text-3xl pb-1">VIRTUAL ENVIRONMENT</h2>
            </header>
            <article className="space-y-4">
              <p>
                Para garantir que todas as dependências fossem isoladas e bem
                gerenciadas, utilizei um{" "}
                <a
                  href="https://docs.python.org/3/library/venv.html"
                  target="_blank"
                  className="link"
                >
                  ambiente virtual
                </a>
                . O uso de ambientes virtuais permite o isolamento de cada
                projeto, podendo ter suas próprias dependências, evitando
                conflitos entre bibliotecas e garantindo de que todos que
                utilizarem do projeto estarão utilizando as mesmas versões das
                ferramentas e bibliotecas.
              </p>
            </article>
            <header className="mt-8">
              <h2 className="text-accent text-3xl pb-1">SELENIUM + BEHAVE</h2>
            </header>
            <article className="space-y-4">
              <p>
                O{" "}
                <a
                  href="https://www.selenium.dev/"
                  target="_blank"
                  className="link"
                >
                  Selenium
                </a>{" "}
                é uma ferramenta amplamente utilizada para automação de testes
                em aplicações web com suporte a{" "}
                <span className="text-accent">Python</span> e outras linguagens.
                Ele permite que os desenvolvedores simulem interações humanas
                com um navegador web, como clicar em botões, preencher
                formulários e navegar por diferentes páginas. Integrar o{" "}
                <span className="font-bold">Selenium com o Behave</span> melhora
                ainda mais a estrutura de automação de testes.
              </p>
              <p>
                <a
                  href="https://behave.readthedocs.io/en/latest/ "
                  target="_blank"
                  className="link text-accent font-bold"
                >
                  Behave
                </a>{" "}
                é um framework de BDD (Behavior-Driven Development) que permite
                escrever testes em linguagem natural usando a sintaxe Gherkin.
                Com o Gherkin, é possível descrever o comportamento esperado da
                aplicação em termos de cenários de teste, utilizando
                palavras-chave como "Dado que", "Quando" e "Então". Isso
                facilita a comunicação entre desenvolvedores, testadores e
                stakeholders, garantindo que todos tenham uma compreensão clara
                dos requisitos e comportamentos esperados.
              </p>
              <ImageModal
                imageSrc="/projects/bugbank/transferencia_steps.png"
                caption="Step da feature de Transferência"
                captionSrc="https://github.com/rodrigomolter/bugbank-selenium/blob/main/features/steps/transferencia_steps.py"
              />
              <p>
                Uma prática recomendada ao usar Selenium é o padrão de design
                Page Objects. Page Objects é a representação de cada página web
                que esta sendo testada em sua respectiva classe. Elas encapsulam
                os elementos específicos da página (como botões, campos de
                texto) e os comportamentos esperados (como preencher um
                formulário, clicar em um botão de submissão). Ao adotar Page
                Objects, os testes se tornam mais modulares, reutilizáveis e
                fáceis de manter. Isso porque qualquer alteração na interface da
                aplicação só requer atualizações na Page Object correspondente,
                em vez de em todos os testes que interagem com essa página.
              </p>
            </article>
            <header className="mt-8">
              <h2 className="text-accent text-3xl pb-1">SIMULAÇÃO DE API</h2>
            </header>
            <article className="space-y-4">
              <p>
                Como o BugBank não utiliza de um banco de dados tradicional, a
                aplicação armazena os dados do usuário no{" "}
                <span className="italic text-accent">local storage</span> do
                navegador. Para simular interações com uma API externa da
                aplicação, manipulei diretamente os dados no{" "}
                <span className="italic">local storage</span>. Isso garante que
                os testes não sejam dependentes e que apenas a função desejada
                esteje sendo testada. Esta ação reduziu consideravelmente o
                tempo total de execução da suite de testes, pois agora não é
                mais necessário realizar ações na interface para efetuar
                cadastro/login em cenários de testes que não estavam testando
                essas funcionalidades.
              </p>
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
                para o projeto BugBank, com o objetivo de automatizar a execução
                dos testes sempre que houver alterações no código. A ideia
                principal por trás dos testes automatizados é que eles sejam
                executados de forma automática e contínua, garantindo que a
                qualidade do software seja mantida a cada modificação realizada.
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
            <header className="mt-8">
              <h2 className="text-accent text-3xl font-bold pb-1">
                RESULTADOS
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                Iniciei o projeto com o objetivo de aprender mais sobre
                automação de testes, principalmente utilizando{" "}
                <span className="text-accent">python</span>. O uso do padrão{" "}
                <span className="font-semibold">Page Objects</span> facilita a
                manutenção e a escalabilidade dos testes, embora possua uma
                certa complexidade no seu desenvolvimento inicial.
              </p>
              <p>
                Ainda há espaço para melhorias no projeto, como a adição de{" "}
                <a
                  href="https://www.programiz.com/python-programming/docstrings"
                  target="_blank"
                  className="link"
                >
                  Docstrings
                </a>
                . Também seria interessante integrar a geração de relatórios aos
                bug reports e um sistema de logs para melhor depuração de
                problemas.
              </p>
            </article>
          </section>
          <footer>
            <SimilarProjects
              projects={[
                projects.backofficeJogajunto,
                projects.motionhub,
                projects.todoMVC,
              ]}
            />
          </footer>
        </main>
      </FakeTerminalWindow>
    </div>
  )
}
