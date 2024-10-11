import Image from "next/image"
import { FakeTerminalWindow } from "@/app/components/terminal/fake-terminal-window"
import { ImageTerminalWindow } from "@/app/components/terminal/image-terminal-window"

// export const metadata = {
//   title: "Sobre o Rodrigo | Rodrigo Molter",
//   description: "Um pouco mais sobre quem é Rodrigo Molter",
// }

export default function About() {
  return (
    <div id="about" className="mx-4 mt-12">
      <FakeTerminalWindow>
        <main>
          <section className="text-lg md:px-6">
            <h1 className="text-accent text-3xl md:text-4xl font-roboto mb-8 mt-2">
              Sobre mim.
            </h1>
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-2/5 flex items-center">
                <ImageTerminalWindow>
                  <Image
                    src="/about/rodrigo.jpg"
                    alt="Foto minha no Abusado do Skyglass de Canela."
                    width={1080}
                    height={1080}
                    className="rounded-b-xl bg-base-200 max-h-[500px] w-auto"
                  />
                </ImageTerminalWindow>
              </div>
              <div className="px-4 md:w-2/3 space-y-4">
                <p>
                  Oi, aceita um chá?{" "}
                  <Image
                    src="/emojis/tea.png"
                    alt="Chá"
                    height={30}
                    width={30}
                    className="inline -translate-y-2"
                    unoptimized
                  />
                  <br />
                </p>
                <p>
                  Me chamo Rodrigo, moro no{" "}
                  <a
                    href="https://www.youtube.com/shorts/Y80_IYTARyg"
                    target="_blank"
                    className="link hover:text-accent"
                  >
                    Rio Grande do Sul
                  </a>{" "}
                  <Image
                    src="/emojis/mate.png"
                    alt="Chimarrão"
                    height={25}
                    width={25}
                    className="inline -translate-y-1"
                    unoptimized
                  />{" "}
                  e atuo com QA voluntário na{" "}
                  <a
                    href="/docunder"
                    target="_blank"
                    className="link hover:text-accent"
                  >
                    Docunder
                  </a>
                  , contribuindo com a execução de testes manuais, automatizados
                  e na resolução de bugs. Também sou responsável pela
                  infraestrutura e deploy da aplicação.
                </p>
                <p>
                  Gosto de explorar formas eficientes de garantir qualidade e
                  acredito muito na metodologia de QAs que colocam a mão na
                  massa, codando e solucionando os problemas de ponta a ponta.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8 mt-12 lg:mt-20">
              <div className="md:w-2/5 flex justify-start items-center">
                <ImageTerminalWindow>
                  <Image
                    src="/about/tearex.webp"
                    alt="Uma imagem de um Tiranossauro-rex (T-REX) tomando chá, imitando a logo do Jurassic Park. E no centro escrito em letras garrafais TEA REX"
                    width={1080}
                    height={1080}
                    unoptimized
                    className="rounded-b-xl max-h-[500px] w-auto"
                  />
                </ImageTerminalWindow>
              </div>
              <div className="md:w-2/3 space-y-4">
                <p>
                  Além de tecnologia, sou apaixonado por{" "}
                  <a
                    className="link hover:text-accent"
                    href="https://www.youtube.com/watch?v=LL75xQGXhOM"
                    target="_blank"
                  >
                    chás e infusões
                  </a>
                  , gosto de experimentar novos blends e aprender sobre a
                  história e a origem do chá.
                </p>
                <p>
                  Tenho um lado criativo que cultivo na área de design gráfico,
                  onde brinco tipografias, formas e imagens para criar layouts e
                  visuais. Esses hobbies me ajudam a manter a criatividade
                  fluindo.
                </p>
              </div>
            </div>
          </section>
        </main>
      </FakeTerminalWindow>
    </div>
  )
}
