import Image from "next/image"
import Link from "next/link"

import { CitationBlock } from "@/app/components/citation-block"
import { FakeTerminalWindow } from "@/app/components/terminal/fake-terminal-window"
import { ImageModal } from "@/app/components/image-modal"
import { SimilarProjects } from "@/app/(projects)/similar-projects"

import { projects } from "@/data/info"
import GuardioesQualidadeLogo from "@/app/components/logo/guardioes-qualidade-logo"

export const metadata = {
  title: "🏍️ Amigos Entregadores | Rodrigo Molter",
  description: projects.amigosEntregadores.description,
}

export default function AmigosEntregadores() {
  return (
    <div className="mt-12">
      <FakeTerminalWindow>
        <main>
          <section className="text-lg md:px-6 ">
            <header className="flex flex-col items-center justify-center my-8">
              <Image
                alt="Logo Amigos Entregadores"
                src="/projects/amigos-entregadores/amigos-entregadores-logo.png"
                width={500}
                height={500}
                className="h-[30vh] w-auto rounded-full"
              />
              <nav className="gap-8 flex just text-sm md:text-lg mt-4">
                <Link
                  href="https://docs.google.com/spreadsheets/d/1Q5EwyA6DXy30FTJNvyXudfLve0mSw88e-joxRvchfbQ/edit?gid=1226932340#gid=1226932340"
                  target="_blank"
                  className="link font-bold text-accent"
                >
                  Backlog
                </Link>
                |
                <Link
                  href="https://docs.google.com/document/d/1MUxXWrffiovuDRRBQW-RvozEni3LSvIoad-MWZ_SFd4/edit?usp=sharing"
                  target="_blank"
                  className="link font-bold text-accent"
                >
                  Relatório SCRUM
                </Link>
                |
                <Link
                  href="https://www.figma.com/design/pRhTYhcJViSd0ytTJGcZVg/Amigos-Entregadores---Guardi%C3%B5es-da-Qualidade"
                  target="_blank"
                  className="link font-bold text-accent"
                >
                  Protótipo
                </Link>
              </nav>
            </header>
            <h1 className="text-accent text-3xl md:text-4xl font-bold pb-1 pt-6">
              ONG AMIGOS ENTREGADORES
            </h1>
            <article className="space-y-4">
              <p>
                O Case da{" "}
                <span className="font-bold">ONG Amigos Entregadores</span> foi
                proposto e realizado durante o curso Bugou? QA TA ON do{" "}
                <a href="https://www.jogajuntoinstituto.org/" className="link">
                  Instituto Joga Junto
                </a>
                . Este desafio permitiu que nosso SQUAD aplicasse práticas de{" "}
                <span className="text-accent">gerenciamento de projetos</span> e{" "}
                <span className="text-accent">metodologias ágeis</span>{" "}
                aprendidas, além de promover a colaboração e comunicação entre
                os participantes.
              </p>
              <p>
                O projeto visa resolver o problema da ONG Amigos Entregadores,
                que necessita de{" "}
                <span className="font-bold">pontos de apoio</span> para seus
                entregadores de aplicativos parceiros. Estes pontos de apoio
                precisam ter algumas funcionalidades para fornecer conforto e
                segurança para os entregadores, como acesso a{" "}
                <span className="text-accent">água filtrada</span>,{" "}
                <span className="text-accent">protetor solar</span>,{" "}
                <span className="text-accent">capas de chuva</span>,{" "}
                <span className="text-accent">local para banho</span>, etc.
              </p>
              <p>
                O projeto foi desenvolvido em diversas etapas, incluindo o
                entendimento do público-alvo, criação de personas, identificação
                de requisitos e proposição de soluções para atender às demandas,
                culminando na entrega de um MVP (Produto Mínimo Viável) e sua
                prototipação.
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

            <header className="pt-8">
              <h2 className="text-accent text-3xl font-bold pb-1">PERSONAS</h2>
            </header>
            <article className="space-y-4">
              <p>
                A primeira etapa foi identificar as{" "}
                <span className="font-bold">personas</span>. Conhecer
                profundamente
                <span className="text-accent">
                  {" "}
                  quem são esses entregadores
                </span>{" "}
                é fundamental para oferecermos pontos de apoio que realmente
                façam a diferença em suas jornadas diárias de trabalho.
              </p>
              <ol className="flex flex-col gap-4">
                <li className="flex flex-row gap-4 items-center">
                  <Image
                    src="/projects/amigos-entregadores/carlos.png"
                    alt="Carlos"
                    width={64}
                    height={64}
                    className="rounded-full shrink-0"
                  />
                  <p>
                    <span className="font-bold text-accent">Carlos</span>: 28
                    anos, entregador dedicado, enfrenta longas horas de trabalho
                    exposto ao sol. Um ponto de apoio seria fundamental para ele
                    se proteger e recuperar suas energias durante as entregas.
                  </p>
                </li>
                <li className="flex flex-row gap-4 items-center">
                  <Image
                    src="/projects/amigos-entregadores/maria.jpg"
                    alt="Maria"
                    width={64}
                    height={64}
                    className="rounded-full shrink-0"
                  />
                  <p>
                    <span className="font-bold text-accent">Maria</span>:
                    Entregadora de 36 anos, trabalha entre 4 e 5 horas por dia
                    para sustentar sua família. Ela procura soluções práticas
                    que facilitem sua rotina e garanta sua segurança durante as
                    entregas. Utiliza aplicativos de entrega como fonte de renda
                    extra.
                  </p>
                </li>
                <li className="flex flex-row gap-4 items-center">
                  <Image
                    src="/projects/amigos-entregadores/pedro.png"
                    alt="Pedro"
                    width={64}
                    height={64}
                    className="rounded-full shrink-0"
                  />
                  <p>
                    <span className="font-bold text-accent">Pedro</span>: 55
                    anos, experiente entregador que migrou para aplicativos após
                    perder o emprego. Enfrenta desafios físicos e busca por
                    locais de apoio para descanso e proteção durante suas
                    jornadas, especialmente à tarde.
                  </p>
                </li>
              </ol>
            </article>
            <header className="pt-12">
              <h2 className="text-accent text-3xl font-bold pb-1">
                REQUISITOS
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                Durante a fase inicial do projeto, realizamos um detalhado
                levantamento de requisitos para{" "}
                <span className="text-accent">entender as necessidades</span> da
                ONG Amigos Entregadores. Isso foi essencial para garantir que
                nossa solução não apenas atendesse, mas também superasse as
                expectativas dos usuários finais e promovesse um impacto
                positivo tangível. Os principais requisitos levantados incluem:
              </p>
              <ol className="flex flex-col gap-4 px-12 list-decimal marker:text-amber-600 marker:font-bold">
                <li>
                  🔐 Funcionalidade para que os entregadores possam utilizar e
                  gerenciar as informações de suas contas pessoais na plataforma
                  da ONG.
                </li>
                <li>
                  📍 Permitir que os entregadores localizem e utilizem os pontos
                  de apoio conforme sua conveniência e necessidade durante as
                  entregas.
                </li>
                <li>
                  📶 Um baixo consumo de internet, evitando o gasto
                  desnecessário dos dados móveis dos entregadores.
                </li>
                <li>
                  🤝 Estabelecer integração com aplicativos de entrega para
                  fornecer suporte e benefícios adicionais aos entregadores que
                  utilizam essas plataformas.
                </li>
                <li>
                  🥵 Disponibilizar protetor solar nos pontos de apoio para
                  proteger os entregadores durante suas jornadas de trabalho.
                </li>
                <li>
                  🎮 Estabelecer um sistema de pontos, como uma gamificação,
                  oferecendo recompensas extras pela quantidade de entregas
                  realizadas.
                </li>
                <li>
                  🚿 Facilitar o agendamento de banhos nos pontos de apoio para
                  proporcionar conforto e higiene aos entregadores.
                </li>
              </ol>
            </article>
            <header className="pt-6">
              <h3 className="text-accent text-2xl">BACKLOG</h3>
            </header>
            <article className="space-y-4">
              <p>
                Junto aos requisitos foi gerado um{" "}
                <a
                  className="font-bold text-accent link"
                  href="https://docs.google.com/spreadsheets/d/1Q5EwyA6DXy30FTJNvyXudfLve0mSw88e-joxRvchfbQ/edit?gid=1226932340#gid=1226932340"
                  target="_blank"
                >
                  backlog
                </a>{" "}
                com as tarefas que seriam necessárias serem realizadas; sua
                divisão por sprints; user stories; pontos de complexidade e sua
                prioridade. A equipe utilizou{" "}
                <span className="italic text-accent">planning poker</span> para
                a classificação da complexidade.
              </p>
              <div className="overflow-x-auto pt-4">
                <table className="table table-xs md:table-md lg:table-lg">
                  <thead>
                    <tr className="text-accent bg-base-200">
                      <th>ID</th>
                      <th>Épico</th>
                      <th>Sprint</th>
                      <th>User Story</th>
                      <th>Complexidade</th>
                      <th>Prioridade</th>
                    </tr>
                  </thead>
                  <tbody className="bg-base-100">
                    <tr>
                      <td>AE009</td>
                      <td>Usar Serviço de Banho</td>
                      <td>2</td>
                      <td>
                        <p>Eu, como entregador cadastrado no app,</p>
                        <p>Desejo gerar token para ter acesso ao chuveiro,</p>
                        <p>
                          Para que eu possa me refrescar e ficar bem arrumado ao
                          tercontato com os clientes
                        </p>
                      </td>
                      <td>5</td>
                      <td>Alta</td>
                    </tr>
                  </tbody>
                </table>
                <p className="flex justify-center mt-2 italic">
                  Exemplo de uma User Storie
                </p>
              </div>
            </article>
            <header className="pt-10">
              <h2 className="text-accent text-3xl font-bold pb-1">SCRUM</h2>
            </header>
            <article className="space-y-4">
              <p>
                Durante a execução do projeto, utilizamos o framework{" "}
                <span className="text-accent">SCRUM</span> para gerenciar nossas
                atividades e garantir um desenvolvimento eficiente e
                colaborativo. O projeto conta com o planejamento de todoa
                escopo, mas o desenvolvimento de apenas a primeira sprint, ou
                seja, apenas da etapa de{" "}
                <span className="text-accent">
                  discovery e planejamento do projeto
                </span>
                .
              </p>
              <p>
                Como requisito dos facilitadores do Instituto Joga Junto, o
                gerenciamento das sprints, backlog e quadro Kanban foram
                realizados utilizando a ferramenta{" "}
                <a
                  href="https://www.bitrix24.com.br/"
                  className="link font-semibold"
                >
                  Bitrix24
                </a>
                .
              </p>
              <ImageModal
                imageSrc="/projects/amigos-entregadores/bitrix.png"
                caption="Interface do Bitrix24"
              />
            </article>
            <header className="pt-8">
              <h2 className="text-accent text-3xl font-bold pb-1">PROTÓTIPO</h2>
            </header>
            <article className="space-y-4">
              <p>
                O processo de{" "}
                <a
                  className="text-accent link"
                  href="https://www.figma.com/design/pRhTYhcJViSd0ytTJGcZVg/Amigos-Entregadores---Guardi%C3%B5es-da-Qualidade"
                  target="_blank"
                >
                  prototipagem de alta fidelidade
                </a>{" "}
                no Figma desempenha um papel essencial na materialização e
                refinamento de conceitos de design, como{" "}
                <span className="font-semibold">
                  transformar ideias abstratas em interfaces práticas e
                  funcionais
                </span>
                , destacando os principais aspectos do projeto.
              </p>
              <p>
                No projeto da ONG Amigos Entregadores o desenvolvimento do
                protótipo foi de extrema importância para validarmos e
                identificar possíveis falhas e problemas no decorrer do
                andamento do projeto. A usabilidade intuitiva e fácil de usar,
                junto com a proposta de um baixo consumo de internet, nos
                fizeram repensar e buscar novas estratégias e tecnologias que
                pudessem solucionar os problemas do cliente sem adicionar muita
                complexidade na utilização do aplicativo pelo usuário final. Um
                dos exemplos é a liberção do sistema de banho e de produtos
                extras através de um código de uso único.
              </p>
              <p>
                É possível acessar a{" "}
                <a
                  href="https://www.figma.com/proto/pRhTYhcJViSd0ytTJGcZVg/Amigos-Entregadores---Guardi%C3%B5es-da-Qualidade?type=design&node-id=803-122&t=HB8FGDxAtteOiOcV-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=803%3A122"
                  target="_blank"
                  className="link font-bold text-accent"
                >
                  apresentação do protótipo
                </a>
                , onde é possível navegar entre as funcionalidades propostas.
              </p>
              <ImageModal
                imageSrc="/projects/amigos-entregadores/figma.png"
                caption="Projeto no Figma"
                captionSrc="https://www.figma.com/design/pRhTYhcJViSd0ytTJGcZVg/Amigos-Entregadores---Guardi%C3%B5es-da-Qualidade"
              />
            </article>
            <header className="mt-8">
              <h2 className="text-accent text-3xl font-bold pb-1">
                PESQUISA DE USABILIDADE
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                Com base no protótipo,{" "}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScEx5y695M7cEV8_APd20kbqXvUn0wZtql4vRMwClMEAC2mBg/formResponse"
                  className="text-accent link"
                >
                  uma pesquisa de usabilidade foi conduzida
                </a>{" "}
                para analisar facilidade de utilizar a interface construída,
                assim como sua curva de aprendizagem. Utilizando o método{" "}
                <span className="font-semibold">SUS</span> (System Usability
                Scale), essa pesquisa visa avaliar a usabilidade do produto e
                identificar áreas de melhoria.
              </p>
            </article>
            <header className="mt-8">
              <h2 className="text-accent text-3xl font-bold pb-1">ENTREGAS</h2>
            </header>
            <article className="space-y-4">
              <p>
                O projeto proposto seria feito em entregas de diversos{" "}
                <span className="text-accent">MVPs</span>, com o primeiro MVP
                após 04 semanas. As funcionalidades desenvolvidas foram
                priorizadas de acordo com a prioridade dos requisitos. O
                primeiro MVP conta com o mínimo necessário para que o entregador
                possa utilizar os pontos de apoio.
              </p>
              <div className="space-y-4 pt-4">
                <p className="font-bold text-xl text-accent">Primeiro MVP</p>
                <ol className="flex flex-col gap-4 px-12 list-decimal marker:text-amber-600 marker:font-bold">
                  <li>
                    📱 Possibilidade do usuário se cadastrar na plataforma.
                  </li>
                  <li>🔓 Login na aplicação.</li>
                  <li>
                    🔄 Possibilidade do usuário poder recuperar sua conta.
                  </li>
                  <li>📍 Visualização da localização dos pontos de apoio.</li>
                  <li>
                    👀 Visualização dos serviços disponíveis no ponto de apoio.
                  </li>
                  <li>🚪 Liberação da catraca por QR Code.</li>
                </ol>
              </div>
              <div className="space-y-4 pt-4">
                <p className="font-bold text-xl text-accent">
                  Entregas Incrementais
                </p>
                <ol className="flex flex-col gap-4 px-12 list-decimal marker:text-amber-600 marker:font-bold">
                  <li>
                    🥵 Liberação de protetor solar por um dispenser, utilizando
                    bluetooth.
                  </li>
                  <li>
                    🌧️ Liberação de capa de chuva e outros produtos através de
                    uma vending machine utilizando os pontos extras.
                  </li>
                  <li>
                    💆‍♂️ Utilização da cadeira de massagem através de pontos
                    extras.
                  </li>
                  <li>
                    🚿 Agendamento de um horário para o entregador utilizar os
                    chuveiros no ponto de apoio.
                  </li>
                  <li>
                    ⭐ Sistema de Avaliação dos serviços e do ponto de apoio.
                  </li>
                  <li>
                    🔧 Sistema de Gestão de Pontos de Apoio, para adicionar,
                    editar e remover pontos de apoio.
                  </li>
                  <li>🧪 Testes de Usabilidade.</li>
                </ol>
              </div>
              <div className="space-y-4 pt-4">
                <p className="font-bold text-xl text-accent">Pontos Críticos</p>
                <ol className="flex flex-col gap-4 px-12 list-decimal marker:text-amber-600 marker:font-bold">
                  <li>🤝🍕 Parceria com empresas de delivery.</li>
                  <li>🤝🏛️ Parceria com órgãos públicos. </li>
                </ol>
              </div>
            </article>
            <header className="mt-8">
              <h2 className="text-accent text-3xl font-bold pb-1">
                APRENDIZADO
              </h2>
            </header>
            <article className="space-y-4">
              <p>
                Participar do projeto da ONG Amigos Entregadores foi uma ótima
                experiência. Aplicamos práticas de{" "}
                <span className="text-accent">gerenciamento de projetos</span> e{" "}
                <span className="text-accent">metodologias ágeis</span>, o que
                me ajudou muito a desenvolver habilidades como{" "}
                <span className="font-bold">comunicação</span>,{" "}
                <span className="font-bold">resolução de problemas</span> e{" "}
                <span className="font-bold">trabalho em equipe</span>. Melhorei
                minha escuta ativa, como expressar minhas ideias de forma clara
                e colaborar melhor com os colegas.
              </p>
              <p>
                A diversidade de perspectivas e especializações da equipe foi
                essencial para o projeto. Ter{" "}
                <span className="font-semibold">
                  pontos de vista diferentes
                </span>
                , vindos de áreas como negócios, tecnologia e usabilidade,
                trouxe soluções criativas e me ajudou a melhorar minha
                argumentação e exposição de ideias.
              </p>
              <p>
                Enfrentamos alguns desafios, como a falta de contato frequente
                com os stakeholders, o que gerou suposições sobre alguns
                requisitos e suas prioridades, impactando um pouco as entregas.
                Além disso, no começo tivemos dificuldades com a plataforma de
                gerenciamento Bitrix, por falta de familiaridade.
              </p>
              <p>
                No geral, foi uma experiência muito positiva, que reforçou
                nossas habilidades e nos preparou melhor para desafios futuros.
              </p>
            </article>
          </section>
          <footer>
            <SimilarProjects
              projects={[
                projects.lojaQA,
                projects.beedoo,
                projects.backofficeJogajunto,
              ]}
            />
          </footer>
        </main>
      </FakeTerminalWindow>
    </div>
  )
}
