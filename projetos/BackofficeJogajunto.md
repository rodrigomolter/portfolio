# 👖 Backoffice JogaJunto

<div align="left">
  <a href="/"><strong>⬅️ VOLTAR AOS PROJETOS</strong></a>
  <br><br>
</div>

<div align="center">
  <img src="https://github.com/user-attachments/assets/9669611c-974d-4836-be64-709098758200" width="700">
</div><br>

O [Backoffice JogaJunto](https://projetofinal.jogajuntoinstituto.org/) é o **projeto final** do módulo AVANÇADO do curso **Bugou? QA TA ON** oferecido pelo [Instituto Joga Junto](https://www.jogajuntoinstituto.org/). Trata-se de um sistema de controle de estoque de produtos para os colaboradores do Instituto Joga Junto, no qual é possível realizar o cadastro, pesquisa e filtragem de produtos adicionados.

Durante o projeto, começamos com o planejamento inicial, onde compreendemos o problema, analisamos os fluxos e requisitos do cliente, exploramos o funcionamento do sistema e mapeamos suas principais funcionalidades. Direcionamos nossa atenção para a definição de cronogramas e divisão de tarefas que seriam realizadas nessa sprint.
Em seguida focamos na parte da execução prática, envolvendo o detalhamento de cenários e casos de testes, a condução dos testes manuais, a elaboração do bug report e a criação de testes de API e de testes automatizados. Por fim, foi realizado uma análise dos problemas identificados e a apresentação dos resultados para o cliente.

Tanto os cenários/casos de teste, quanto o bug report foram escritos em Gherkin.

### SUMÁRIO

1. [SQUADS](#squads)  
2. [FLUXUOGRAMA](#fluxuograma)  
3. [PLANEJAMENTO DOS TESTES](#planejamento-dos-testes)  
4. [CENÁRIOS DE TESTES](#cenários-de-testes)  
5. [BUG REPORT](#bug-report)  
   5.1 [CRITICIDADE](#criticidade)  
6. [TESTES AUTOMATIZADOS](#testes-automatizados)  
7. [TESTES DE API](#testes-de-api)  
8. [CONTINOUS INTEGRATION](#continous-integration)  


## SQUADS
A divisão de equipes dentro do [Instituto Joga Junto](https://www.jogajuntoinstituto.org/) foi através de Squads. Esse conceito foi popularizado pela Spotify, embora muitas outras empresas também tenham adotado e adaptado esse modelo.

> Uma Squad é semelhante a uma equipe Scrum e é projetada para parecer uma mini-startup. Eles trabalham juntos e têm todas as habilidades e ferramentas necessárias para projetar, desenvolver, testar e lançar na produção. São uma equipe auto-organizada e decidem sua própria forma de trabalhar – algumas usam sprints de Scrum, outras usam Kanban, e algumas usam uma combinação dessas abordagens. <br> - [Scaling Agile @ Spotify, por Henrik Kniberg & Anders Ivarsson](https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf)

Com isso, surgiu os **Aspirantes da Automação**. Esse foi o nome escolhido ao nosso squad pelos participantes - uma sugestão que foi rapidamente abraçada pela equipe, tendo em vista que o principal tópico do módulo avançado do curso era o seu foco em automação de testes.

## FLUXUOGRAMA
Antes da criação dos cenários de testes, foi elaborado um fluxuograma detalhado para mapear todos os possíveis caminhos e interações do usuário no Backoffice JogaJunto. Esse processo foi fundamental para compreender o funcionamento completo do sistema e identificar os fluxos que precisavam ser validados durante os testes.

<div align="center">
  <img src="https://github.com/user-attachments/assets/ad54d111-c377-4d28-b343-641d6d564279" width="700">
  <br><a href="https://miro.com/app/board/uXjVKxtmeHU=/"><i>Fluxuograma - Backoffice JogaJunto</i></a>
</div>
<br>

## PLANEJAMENTO DOS TESTES
No planejamento de testes para o Backoffice JogaJunto, começamos com uma reunião para definir o que seria testado, focando nas funções de cadastro, pesquisa e filtragem de produtos. Durante essa reunião, discutimos como realizar os testes e dividimos as tarefas entre os membros da equipe, de acordo com as habilidades de cada um.

Depois de dividir as tarefas, criamos um cronograma com prazos para cada etapa do projeto. Isso nos ajudou a organizar o trabalho e garantir que todas as fases fossem concluídas dentro do tempo planejado, mantendo a qualidade do projeto.

## CENÁRIOS DE TESTES
Os cenários de testes foram desenvolvidos com base nos requisitos estabelecidos e executados nos navegadores Google Chrome (Windows e Android) e Safari (iOS e iPadOS).

Foram desenvolvidos um total de **69 casos de testes** divididos entre os fluxos de Login/Logout, Cadastro de Produto, Filtragens de Produtos, Pesquisa de Produtos e entre outros requisitos funcionais e não funcionais.

<div align="center">
  <img src="https://github.com/user-attachments/assets/c1467927-dec7-46aa-8cde-f9b67462d2a2" width="500">
  <br><i>Casos de Testes por Cenário de Teste</i>
</div>

Os casos de teste, escritos em Gherkin, são elaborados a partir da perspectiva do usuário e seu comportamento. Essa abordagem garante que os testes reflitam as necessidades reais dos usuários e ajudem a alinhar as expectativas dos stakeholders com a funcionalidade do sistema.


## BUG REPORT
Após a execução dos testes, o bug report do Backoffice Joga Junto categoriza e prioriza os problemas identificados em cada cenário de teste. Os bugs são classificados por sua criticidade, proporcionando uma visão clara dos aspectos do sistema que requerem correção imediata para melhorar a experiência do usuário e a eficiência operacional do sistema.

Foram reportados um total de **50 bugs**, distribuídos por todo o sistema, cada um com diferentes níveis de criticidade. A maior parte dos bugs foram encontrada dentro do **fluxo de filtragem de produtos**, seguido pelo **fluxo de cadastro de produto**, que é o principal fluxo da aplicação.

<div align="center">
  <img src="https://github.com/user-attachments/assets/c29e7a05-a7af-4fd6-855a-dddefc7865b9" width="500">
  <br><i>Testes com sucesso/falha no cenário de Cadastro de Produtos</i>
</div>

### CRITICIDADE

A criticidade dos bugs foi categorizada em quatro níveis, cada um refletindo a severidade do impacto no funcionamento do sistema e na experiência do usuário. Abaixo estão as definições de cada nível de criticidade:

- **Leve**:
  Bugs que causam pequenos inconvenientes ou problemas estéticos, sem afetar significativamente a funcionalidade do sistema.

- **Moderada**:
  Bugs que afetam algumas funcionalidades, mas possuem soluções alternativas, permitindo o uso contínuo do sistema.

- **Grave**:
  Bugs que comprometem funcionalidades importantes, tornando o sistema difícil de usar ou causando erros significativos que afetam a experiência do usuário.

- **Blocker**:
  Bugs críticos que interrompem completamente o funcionamento do sistema, impedindo a realização de ações essenciais e tornando o sistema inutilizável até serem corrigidos.

## TESTES AUTOMATIZADOS

Para garantir que as funcionalidades principais do Backoffice JogaJunto fossem testadas de maneira eficiente e consistente, a equipe implementou testes automatizados utilizando Python, Selenium e Behave, seguindo o padrão Page Objects. Esses testes foram focados nos happy paths, que representam os fluxos ideais de uso do sistema, onde todas as ações dos usuários ocorrem conforme o esperado, sem erros ou exceções.
  
<div align="center">
  <a href="https://github.com/rodrigomolter/backoffice-jogajunto">
    <picture>
      <source srcset="https://img.shields.io/badge/Github_Repo-%23181717?style=for-the-badge&logo=github" media="(prefers-color-scheme: light)">
      <img alt="GITHUB REPO" src="https://img.shields.io/badge/Github_Repo-white?style=for-the-badge&logo=github&logoColor=black">
    </picture>
  </a>
</div>
  
O Selenium foi a ferramenta escolhida para automatizar as interações com o navegador, simulando ações de usuários como cliques, preenchimento de formulários e navegação entre páginas. Integrado ao Behave, que permite escrever testes com base nos casos de testes ja desenvolvidos, e que se baseiam no comportamento do usuário. Com o padrão Page Objects, cada página do sistema foi representada por uma classe, facilitando a manutenção e a reutilização dos testes. Ao concentrar os testes nos happy paths, a equipe assegurou que as funcionalidades essenciais do sistema fossem validadas de ponta a ponta, garantindo que o sistema funcionasse conforme o planejado no uso típico.

<div align="center">
  <img src="https://github.com/user-attachments/assets/6bdd20b1-a698-499c-87aa-433e28f4e379" width="500">
  <br><i>Encapsulamento das páginas com Page Objects </i>
</div>

## TESTES DE API

Foram implementados testes automatizados de API para o Backoffice JogaJunto, focando inicialmente nos happy paths, que representam os fluxos ideais onde todas as interações com a API seguem o caminho esperado e sem problemas. Esses testes garantem que as funcionalidades principais da API funcionem corretamente quando usadas da maneira prevista, validando que as respostas da API atendam às expectativas para cenários típicos.

Além dos testes de happy path, foram realizados testes de contrato. Testes de contrato são realizados para garantir que a API esteja em conformidade com as especificações acordadas entre os serviços que se comunicam. Esses testes validam que a API respeita o contrato definido, o que inclui verificar os formatos de dados, os tipos de resposta e os códigos de status HTTP. Eles ajudam a assegurar que mudanças na API não quebrem a integração com outros sistemas e que as respostas sejam consistentes e previsíveis.

<div align="center">
  <img src="https://github.com/user-attachments/assets/2e185a9e-011b-49be-8ae3-34f452f754c6" width="500">
  <br><i>Testes de Contrato</i>
</div>

Para complementar os testes automatizados, foi criada uma collection no Postman que cobre todos os fluxos possíveis da API, tanto positivos quanto negativos. Essa collection inclui uma série de solicitações e cenários de teste que exploram diferentes aspectos da API, desde respostas esperadas em situações normais até como a API lida com entradas inválidas ou inesperadas. Utilizando essa abordagem, foi possível testar a robustez e a confiabilidade da API, garantindo que ela funcionasse corretamente em uma ampla gama de condições e atendesse aos requisitos estabelecidos.

<div align="center">
  <a href="https://app.getpostman.com/run-collection/29423847-be72a8cb-9dac-49d5-acda-af47c2667dcb?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D29423847-be72a8cb-9dac-49d5-acda-af47c2667dcb%26entityType%3Dcollection%26workspaceId%3D634d18e6-9a9f-45a7-a562-69e352023655">
    <img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">
  </a>
</div>

## CONTINOUS INTEGRATION

Foi criada uma pipeline no GitHub Actions para o Backoffice JogaJunto, com o objetivo de automatizar a execução dos testes sempre que houver alterações no código. A ideia principal por trás dos testes automatizados é que eles sejam executados de forma automática e contínua, garantindo que a qualidade do software seja mantida a cada modificação realizada.

<div align="center">
  <img src="https://github.com/user-attachments/assets/f6b91d75-5bf6-47ee-942b-cb67cfab3536" width="500">
  <br><i>Pipeline de CI</i>
</div>

A pipeline no GitHub Actions é configurada para rodar os testes toda vez que um push é feito para o repositório. Ela executa os testes de maneira paralela em dois navegadores diferentes: Chrome e Firefox. Isso permite verificar a compatibilidade e o desempenho do sistema em diferentes ambientes de navegação, garantindo que o software funcione corretamente em ambos os casos. Esse processo automatizado ajuda a detectar problemas rapidamente e a manter a qualidade do código ao longo do desenvolvimento.

<footer>
  <br><br>
  <div align="left">
    <a href="/"><strong>⬅️ VOLTAR AOS PROJETOS</strong></a>
  </div>
  <div align="center">
    <a href="#-backoffice-jogajunto"><strong>⬆️ VOLTAR AO TOPO</strong></a>
  </div>
  <br>
</footer>
___
<div align="center">
  Feito com ❤️ pelos <strong>Aspirantes da Automação</strong><br>
  <picture>
    <source srcset="https://github.com/user-attachments/assets/3a2798cf-8348-44c0-a025-315260996d95" media="(prefers-color-scheme: light)">
    <img src="https://github.com/user-attachments/assets/0568c321-31c9-4fc6-84b1-90ae7520b965" alt="Logo Aspirantes da Automação" title="Logo Aspirantes da Automação" width="250">
  </picture>
  <br>

  [Diogo Reis](https://www.linkedin.com/in/diogorreis/) • 
  [George Neres](https://www.linkedin.com/in/george-neres-gsneres/)  • 
  [Isadora Silva](https://www.linkedin.com/in/isadorarsilva/)  • 
  [Julia Bragada](https://www.linkedin.com/in/juliabragada/)  • 
  [Rodrigo Molter](https://www.linkedin.com/in/rodrigo-molter/)
</div>
