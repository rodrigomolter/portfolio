# ✍ Todo MVC

<div align="center">
  <img src="https://github.com/rodrigomolter/portfolio/assets/57466763/d45b13ce-2fa7-40b8-b10b-a66636b1d834" width="600">
</div><br>

O projeto consiste no desenvolvimento de uma suíte de testes manuais e automatizados para a aplicação <a href="https://todomvc.com/">TodoMVC</a>. Ele inclui user stories com seus requisitos e regras de negócio; um plano de testes para garantir cobertura das funcionalidades e testes manuais com evidências documentadas. Além disso, implementei automação de testes usando Cypress junto com uma integração contínua via Github Actions para manter a estabilidade e qualidade do código.

### SUMÁRIO

1. [TodoMVC](/projetos/TodoMVC.md#todo-mvc)
2. [User Stories](/projetos/TodoMVC.md#user-stories)
3. [Plano de Teste](/projetos/TodoMVC.md#plano-de-teste)
4. [Testes Manuais](/projetos/TodoMVC.md#testes-manuais)
5. [Testes Automatizados](/projetos/TodoMVC.md#testes-automatizados)

# TODOMVC
O [TodoMVC](https://todomvc.com/) é um projeto que apresenta o mesmo aplicativo de lista de tarefas implementado em diferentes frameworks JavaScript. É uma ferramenta útil para comparar sintaxes, soluções e desempenho entre os principais frameworks, sendo amplamente utilizado para benchmarks de compatibilidade entre navegadores.

Por mais que a interface gráfica e as funcionalidades sejam iguais entre as diferentes implementações, neste projeto eu utilizo apenas a interface do [exemplo do TodoMVC implementado em **React**](https://todomvc.com/examples/react/dist/).

# USER STORIES
O primeiro passo do projeto foi a analise do funcionamento da aplicação TodoMVC, que me permitiu compreender suas funcionalidades principais; definir requisitos e gerar user stories com suas respectivas regras de negócio e critérios de aceitação.

Confira a página com todas as [**User Stories**](https://www.notion.so/dynamic-keeper-66c/User-Stories-491da01d74b94342acdf5a1166315f24) [^1]


<div align="center">
  <img src="https://github.com/rodrigomolter/portfolio/assets/57466763/2a036d7a-78e3-4691-ba33-3160d7c0d34f" width="250">
  <br><i>Escopo das <a href="https://www.notion.so/dynamic-keeper-66c/User-Stories-491da01d74b94342acdf5a1166315f24">User Stories</i></a>
</div>

# PLANO DE TESTE
Com as user stories definidas como nosso guia, passei para a elaboração do plano de teste. Este plano foi estruturado para cobrir a maior parte dos cenários possíveis de uso do TodoMVC. Cada cenário de teste foi elaborado para validar as funcionalidades conforme descrito nas user stories, assegurando que todos os aspectos críticos da aplicação fossem testados de maneira eficaz.

Confira a página com o [**Plano de Testes**](https://www.notion.so/dynamic-keeper-66c/TodoMVC-32d7b72188dd445180511f338a19462c) [^1]
<div align="center">
  <img src="https://github.com/rodrigomolter/portfolio/assets/57466763/bf48a83c-3e56-43a7-aa47-ac69cd62cca5" width="800">
  <br><i>Escopo do <a href="https://www.notion.so/dynamic-keeper-66c/TodoMVC-32d7b72188dd445180511f338a19462c">Plano de Testes</i></a>
</div>

# TESTES MANUAIS
A etapa seguinte envolveu a execução dos casos de testes definidos anteriormente no plano de teste. Executei os testes e documentei as evidências dos testes realizados, fornecendo uma documentação visual do processo de teste manual.

Você pode verificar as evidências [**aqui**](https://github.com/rodrigomolter/TodoMVC/tree/main/Test%20Plan/Screenshots)

# TESTES AUTOMATIZADOS
Por fim, implementei a automação dos cenários de teste utilizando o framework **Cypress**. Esse processo permitiu a criação de scripts automatizados que reproduzem os mesmos cenários de teste de forma consistente e repetível. Os testes automatizados permitem uma detecção precoce de possíveis regressões mantendo a estabilidade da aplicação ao longo do tempo.

Acesse o [repositório do TodoMVC](https://github.com/rodrigomolter/TodoMVC) para visualizar seu desenvolvimento e os testes.

Também fiz a integração dos testes automatizados com o Github Actions, garantindo que os testes fossem executados automaticamente sempre que houvesse uma alteração no código. Integrei ESLint ao projeto para manter a qualidade e consistência do código, assegurando conformidade com as melhores práticas de desenvolvimento.

<div align="center">
  <img src="https://github.com/rodrigomolter/portfolio/assets/57466763/6afeac9a-f4ef-43d5-9400-c40c476ba05d" width="500">
  <br><i>Pipeline no Github Actions</i>
</div><br>

Para gerar dados aleatórios de forma dinâmica em cada execução dos testes, utilizei a biblioteca FakerJS, o que permitiu uma maior variedade de cenários de teste e uma cobertura mais ampla.

Para melhorar a usabilidade e a clareza do código, criei comandos customizáveis no Cypress. Cada comando foi devidamente documentado, incluindo exemplos claros de como usá-los efetivamente. Essa abordagem não apenas facilitou a manutenção dos testes, mas também promoveu uma colaboração mais eficiente dentro da equipe.
<div align="center">
  <img src="https://github.com/rodrigomolter/portfolio/assets/57466763/0e565402-c697-491b-86ae-a10e80d7653c" width="650">
  <br><i>Documentação do comando customizável <samp>cy.createNewTaskbyGUI()</samp> no IntelliSense </i>
</div><br>

Caso queira visualizar o projeto, você pode visualizar o [repositório da minha suíte de testes](https://github.com/rodrigomolter/TodoMVC). Lá além do código, você também encontra detalhadamente como executar os testes na sua própria máquina. 

[^1]: A documentação do projeto se encontra atualmente em inglês. Foi realizada assim para aprimorar minhas habilidades na escrita.

___

Made with ❤️ by [Rodrigo Molter](https://www.linkedin.com/in/rodrigo-molter/).
