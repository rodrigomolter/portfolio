import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa6"
import DocunderLogo from "@/app/components/icons/docunder-logo"

export const metadata = {
  title: "Docunder | Rodrigo Molter",
  description:
    "O Docunder ajuda profissionais de tecnologia que precisam documentar seu trabalho de forma colaborativa, simples e intuitiva.",
}

export default function Docunder() {
  return (
    <div>
      <main id="docunder" className="my-6 mx-2 md:mx-4">
        <section className="text-lg bg-base-300 rounded-xl px-8 py-6 md:px-16 pb-24">
          <header className="my-8 flex flex-col items-center justify-center">
            <div className="bg-blue-100 pr-2 py-1 rounded-[40px]">
              <DocunderLogo width={360} height={180} />
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
          <h1 className="text-accent text-3xl text-bold pb-1">DOCUNDER</h1>
          <article className="space-y-6">
            <p>
              O projeto tem objetivo a criação de uma plataforma de
              compartilhamento de documentos técnicos na área de desenvolvimento
              e compartilhamento de códigos para um grupo específico. Além
              disso, ser de fácil utilização sem que haja cursos externos para o
              uso da plataforma gerando oportunidades para iniciantes e
              empresas. Este produto ajuda desenvolvedores de tecnologia que
              precisam documentar seu trabalho de forma colaborativa para obter
              um registro dos processos ao proporcionar uma navegação simples e
              intuitiva. Essa ideia se diferencia das soluções existentes porque
              é open source e tem uma interface simples.
            </p>
            <p>
              Desenvolvida de forma voluntária, o projeto consiste de setores
              como agilistas, product menager, ux/ui designers e desenvolvedores
              front e back end.
            </p>
            <div className="flex flex-col items-center">
              <Image
                alt="Análise de Persona da Docunder"
                src="https://github.com/rodrigomolter/portfolio/assets/57466763/8884e8c0-0f36-4b72-9cee-58af557cffdd"
                width={1080}
                height={1080}
                className="w-[80%]"
              />
              <p className="pt-4 italic">Análise de Persona</p>
            </div>
          </article>
          <header className="mt-6">
            <h2 className="text-accent text-3xl text-bold pb-1">SOUJUNIOR</h2>
          </header>
          <article className="space-y-6">
            <p>
              A{" "}
              <a
                href="https://www.linkedin.com/company/soujunior"
                target="_blank"
                className="link"
              >
                SouJunior
              </a>{" "}
              é um projeto OpenSource com o objetivo de preparar quem esta em
              transição de carreira, colaborando em projetos reais de alta
              visibilidade. Com diversos projetos em andamento atualmente, a
              SouJunior junta profissionais de diversas áreas que tem um
              objetivo em comum: aprender.
            </p>
            <p>
              O objetivo é ganhar experiência colocando a mão na massa,
              desenvolvendo soft e hard skills. Além disso, também proporciona
              um networking incrível.
            </p>
            <p>
              A Docunder é um dos projetos criados através da SouJunior, que
              ajuda no encontro de profissionais e da o apoio necessário para a
              evolução da ideia em algo real.
            </p>
          </article>
          <header className="mt-6">
            <h2 className="text-accent text-3xl text-bold pb-1">ARQUITETURA</h2>
          </header>
          <article className="space-y-6">
            <p>
              O projeto utiliza Docker para gerenciar e isolar os diferentes
              componentes da aplicação, garantindo um ambiente de
              desenvolvimento consistente e replicável. A arquitetura é composta
              por três containers principais: um para o frontend, outro para o
              backend e um terceiro para o banco de dados.
            </p>
            <p>
              O frontend é desenvolvido em Next.js e executado em um container
              dedicado, enquanto o backend, desenvolvido em TypeScript com
              Prisma, é executado em outro container. O banco de dados,
              utilizando PostgreSQL, reside em um terceiro container. Essa
              separação permite que cada parte do sistema funcione de forma
              independente, facilitando a manutenção, a escalabilidade e a
              implantação.
            </p>
            <div className="flex flex-col items-center">
              <Image
                alt="Arquitetura dos containers Docker"
                src="https://github.com/rodrigomolter/portfolio/assets/57466763/f6b3c070-78a2-4ea3-96bd-2211f594915b"
                width={1080}
                height={1080}
                className="w-[80%]"
              />
              <p className="pt-4 italic">Arquitetura dos containers Docker</p>
            </div>
          </article>
          <header className="mt-6">
            <h2 className="text-accent text-3xl text-bold pb-1">
              DESENVOLVIMENTO
            </h2>
          </header>
          <article className="space-y-6">
            <p>
              O processo de desenvolvimento do projeto começa com a definição de
              requisitos e user stories pelos Product Owners (POs). Nesta fase
              inicial, os POs estabelecem o que precisa ser feito e quais são as
              necessidades dos usuários. Com base nesses requisitos, é criado um
              protótipo inicial da funcionalidade. Esse protótipo serve como uma
              representação visual e funcional da solução proposta, ajudando a
              equipe a visualizar o resultado final e identificar possíveis
              ajustes.
            </p>
            <p>
              Depois de criar o protótipo, os requisitos e as user stories são
              refinados em colaboração entre a equipe de UX e os POs. Essa etapa
              é crucial para garantir que todos os aspectos da funcionalidade
              sejam claros e compreendidos por toda a equipe, promovendo uma
              visão compartilhada do que precisa ser desenvolvido.
            </p>
            <div className="flex flex-col items-center">
              <Image
                alt="Protótipo da tela Home"
                src="https://github.com/rodrigomolter/portfolio/assets/57466763/cc8e46fc-f974-4367-a32a-0728f19281f2"
                width={1080}
                height={1080}
                className="w-[80%]"
              />
              <p className="pt-4 italic">Protótipo da tela Home</p>
            </div>
            <p>
              Com os requisitos refinados e o protótipo aprovado, a
              funcionalidade é então apresentada para a equipe de
              desenvolvimento no início da sprint. Nesse momento, a equipe
              revisa a funcionalidade, discute o escopo e planeja as tarefas
              necessárias para a implementação durante o ciclo da sprint.
            </p>
            <p>
              Durante a sprint, a equipe de desenvolvimento trabalha nas tarefas
              planejadas para construir a funcionalidade conforme os requisitos
              definidos e o protótipo criado. Paralelamente, a equipe de QA atua
              em todas as etapas do fluxo de desenvolvimento, procurando
              inconsistências e problemas.
            </p>
            <p>
              Ao final da sprint, a equipe de QA realiza uma validação completa
              da funcionalidade desenvolvida, garantindo que todas as
              especificações sejam atendidas e que o produto esteja pronto para
              ser lançado ou integrado à próxima fase do projeto.
            </p>
          </article>
          <header className="mt-6">
            <h2 className="text-accent text-3xl text-bold pb-1">FUTURO</h2>
          </header>
          <article className="space-y-6">
            <p>
              O projeto Docunder ainda se encontra em fase de desenvolvimento e
              em constante melhorias na sua forma de organização e processos.
              Toda sprint é uma oportunidade de melhorias e aprendizados.
            </p>
          </article>
        </section>
      </main>
    </div>
  )
}
