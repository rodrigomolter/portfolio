# 🎬 Motion HUB API

<div align="left">
  <a href="/portfolio"><strong>⬅️ VOLTAR AOS PROJETOS</strong></a>
  <br><br>
</div>

<div align="center">
  <img src="https://github.com/rodrigomolter/portfolio/assets/57466763/e19372d1-5caf-4ad4-ac48-6f19d92dbe47" width="500">
</div><br>

A Motion HUB API é uma API desenvolvida em JavaScript utilizando o framework [Fastify](https://fastify.dev/). Ela foi criada com o objetivo de praticar a construção de uma API de forma simples e eficiente. A API utiliza de um banco de dados em memória (in-memory database) para armazenar informações de filmes, como nome, descrição e duração. O projeto enfatiza boas práticas de desenvolvimento, incluindo padrões de código mantidos com ESLint e documentação clara gerada com Swagger

Foi desenvolvido um plano abrangente com testes manuais e automatizados utilizando Postman e Cypress junto com uma integração ao GitHub Actions para execução contínua dos testes. Esta experiência me ensinou sobre a importância de documentação eficiente e a utilização de testes automatizados para garantir a qualidade do software.

## SUMÁRIO
1. [BANCO DE DADOS EM MEMÓRIA](/projetos/MotionHubAPI.md#banco-de-dados-em-memória)
2. [DOCUMENTAÇÃO](/projetos/MotionHubAPI.md#documentação)
3. [PLANO DE TESTES](/projetos/MotionHubAPI.md#plano-de-testes)<br>
    3.1 [TESTES MANUAIS](/projetos/MotionHubAPI.md#testes-manuais)<br>
    3.2 [TESTES AUTOMATIZADOS](/projetos/MotionHubAPI.md#testes-automatizados)
4. [APRENDIZADOS](/projetos/MotionHubAPI.md#aprendizados)

# BANCO DE DADOS EM MEMÓRIA
A Motion HUB API utiliza um banco de dados em memória, o que significa que não requer configurações complexas para armazenar e acessar dados rapidamente. No entanto, é importante notar que os dados são perdidos quando a aplicação é encerrada ou reiniciada, pois são mantidos apenas na memória volátil do servidor.

# DOCUMENTAÇÃO
A documentação da API foi gerada utilizando o Swagger. Isso permite que qualquer desenvolvedor visualize e teste os endpoints da API de forma interativa. A documentação inclui descrições detalhadas dos parâmetros de entrada e saída, facilitando o entendimento do projeto a novas pessoas.

<div align="center">
  <img src="https://github.com/rodrigomolter/portfolio/assets/57466763/fe3e8976-da5d-41c4-b139-417aaf959e3e" width="700">
  <br><i>SwaggerUI do MotionHUB API</i>
</div><br>

# PLANO DE TESTES
Para garantir a qualidade e funcionalidade da API, desenvolvi um <a href="https://dynamic-keeper-66c.notion.site/Motion-Hub-fe69d08e0e23419baf06ceeb23e669c9">plano de testes</a>[^1] abrangente que inclui testes manuais e automatizados.

## TESTES MANUAIS
Os testes manuais foram planejados e executados para validar os principais fluxos da API. Cada teste foi documentado com os seguintes detalhes:

- Status do Teste: Indicação se o teste foi aprovado ou reprovado.
- Prioridade: Classificação da importância da funcionalidade no projeto.
- Severidade: Grau de impacto sobre outras tarefas.

<div align="center">
  <img src="https://github.com/rodrigomolter/portfolio/assets/57466763/6625fbb9-f569-45d1-bb07-6dfd7613f97a" width="700">
  <br><i>Escopo do <a href="https://dynamic-keeper-66c.notion.site/Motion-Hub-fe69d08e0e23419baf06ceeb23e669c9">Plano de Testes</a></i>
</div><br>

## TESTES AUTOMATIZADOS
Os testes automatizados foram implementados para garantir uma cobertura contínua e eficiente dos cenários de uso da API. 

A fim de estudos, desenvolvi os testes automatizados utilizando tanto Postman quanto Cypress. Em ambas as automações de testes, utilizei a biblioteca FakerJS para gerar massas de dados de forma dinâmica. Isso permite criar cenários variados e realistas, aumentando a robustez e abrangência dos testes.

Acesse o [repositório da Motion HUB API](https://github.com/rodrigomolter/MotionHub-API) para visualizar seu desenvolvimento e os testes.

<div align="center">
  <img src="https://github.com/rodrigomolter/portfolio/assets/57466763/f0a53fd5-73f3-4491-ad3f-65b54663257e" width="500">
  <br><i>Execução dos testes no Cypress</i>
</div><br>

Para garantir a qualidade contínua do projeto, integrei a suíte de testes automatizados do Cypress com o GitHub Actions. Toda vez que um push é feito no repositório, os testes são executados automaticamente, fornecendo feedback imediato sobre a saúde do projeto.

<div align="center">
  <img src="https://github.com/rodrigomolter/portfolio/assets/57466763/8bc18843-1f4a-4c39-8f1d-71c84b03a5fe" width="500">
  <br><i>Pipeline do Github Actions</i>
</div><br>

# APRENDIZADOS

Desenvolver a Motion HUB API foi bastante divertido e surpreendentemente mais fácil do que eu imaginava. Aprendi bastante sobre como estruturar e organizar uma API eficiente e funcional. A escolha do Fastify se demonstrou uma boa escolha, tornando o seu projeto algo simples e eficaz.

No entanto, trabalhar com o Swagger apresentou alguns desafios. Optei por introduzir o swagger no projeto no final do desenvolvimento da aplicação, e a configuração inicial e a integração com o projeto foram mais complicadas do que eu esperava. No entanto, depois de configurado, o Swagger foi ajuda a manter a documentação da API clara e acessível.

A implementação de testes foi um aspecto positivo. Desenvolver um plano de testes ajudou a garantir a qualidade e confiabilidade dos meus testes automatizados. O uso do Postman e do Cypress acabaram criando uma certa duplicidade de testes, mas foram valiosos no quesito de aprendizagem.

Um ponto de melhoria foi a ausência de testes unitários. Não ter implementado testes unitários durante o desenvolvimento foi um erro que percebi depois que os testes automatizados estavam integrados com o Github Actions em cada push. Testes unitários teriam me dado mais confiança ao realizar manutenções ou adicionar novas funcionalidades à API e reduziram a quantidade de tempo gasto em testes manuais.

Casos práticos como esse nos ajudam a aprender os valores de qualidade de software além da teoria e são importantissimos para entender e argumentar no dia-a-dia do mercado de trabalho.

<footer>
  <br><br>
  <div align="left">
    <a href="/portfolio"><strong>⬅️ VOLTAR AOS PROJETOS</strong></a>
  </div>
  <div align="center">
    <a href="#-motion-hub-api"><strong>⬆️ VOLTAR AO TOPO</strong></a>
  </div>
  <br>
</footer>

[^1]: A documentação do projeto se encontra atualmente em inglês. Foi realizada assim para aprimorar minhas habilidades na escrita.

___

Made with ❤️ by [Rodrigo Molter](https://www.linkedin.com/in/rodrigo-molter/).