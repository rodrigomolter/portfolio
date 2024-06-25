# 🐞 BugBank

<div align="center">
  <img src="https://github.com/rodrigomolter/portfolio/assets/57466763/8789f6df-6469-4a61-a737-1268caee58fa" heigh="400px">
</div><br>

O projeto BugBank foca na análise, escrita e automação de testes para a aplicação BugBank, uma plataforma que simula um banco online. Inicialmente, os requisitos foram analisados e os casos de teste foram escritos em Gherkin. Testes manuais foram realizados para verificar funcionalidades básicas e identificar problemas. A automação dos testes foi desenvolvida em Python utilizando Selenium e Behave. A aplicação do padrão de design Page Objects organizou o código dos testes, facilitando a manutenção e a escalabilidade. A manipulação do local storage foi essencial para simular interações com uma API e economizar tempo nos testes. O projeto envolveu também a utilização de ambientes virtuais para isolar dependências, uso de type hints para melhorar a clareza do código, e planejei melhorias futuras na documentação e a utilização de CI.

## SUMÁRIO
1. [BUG BANK UI](/projetos/BugBank.md#bug-bank-ui)
2. [FEATURES](/projetos/BugBank.md#features)
3. [TESTES AUTOMATIZADOS](/projetos/BugBank.md#testes-automatizados)<br>
    3.1 [VIRTUAL ENVIRONMENT](/projetos/BugBank.md#virtual-environment)<br>
    3.2 [SELENIUM + BEHAVE](/projetos/BugBank.md#selenium--behave)
4. [PAGE OBJECT MODEL](/projetos/BugBank.md#page-objects-model)
5. [RESULTADOS](/projetos/BugBank.md#resultados)

# BUG BANK UI
O BugBank é um site que simula um banco online, projetado para práticas de planejamento e execução de testes manuais e automatizados. Ele oferece funcionalidades similares a um banco real, como criação de contas, login, transferências de fundos e visualização de saldos e extratos. O objetivo deste projeto é proporcionar um ambiente similar a um ambiente real com bugs e falhas para serem detectadas.
>Pensando em uma aplicação que seja semelhante a projetos reais, Bug Bank foi pensado para que você pratique planejamento de testes e automação de testes.<br>- [Bug Bank](https://github.com/jhonatasmatos/bugbank-ui/tree/main)

<div align="center">
  <img src="https://github.com/rodrigomolter/portfolio/assets/57466763/866ec70f-a7d0-4f81-96a1-0d31c8ad516d" width="500px">
  <br><i><a href="https://www.notion.so/dynamic-keeper-66c/User-Stories-491da01d74b94342acdf5a1166315f24">BugBank</a> - Página de Extrato</i>
</div><br>

# PLANEJAMENTO

A aplicação já estava pronta e com os requisitos definidos. Meu trabalho focou na análise, escrita de casos de teste e automação desses testes. 

Primeiramente, os requisitos da aplicação foram analisados para entender as funcionalidades e as expectativas do sistema. Baseado nos requisitos, os casos de teste foram escritos em Gherkin. Esta linguagem estruturada facilita a criação de testes compreensíveis e bem definidos. 

Antes de automatizar, os testes manuais foram realizados para verificar se as funcionalidades básicas estavam operando corretamente e alguns problemas ja foram identificados. Com base nos casos de teste, desenvolvi a automação dos testes utilizando Selenium e Behave. Este processo garantiu que os testes fossem replicáveis e que qualquer regressão pudesse ser detectada rapidamente.

Com base nos [requisitos](https://bugbank.netlify.app/requirements) estabelecidos pelo BugBank, as funcionalidades foram definidas:

- Login: Autenticação de usuários existentes.
- Cadastro: Permite a criação de novas contas bancárias.
- Transferência entre contas: Realiza a transferência de dinheiro entre contas do BugBank.
- Extratos: Exibe o histórico de transações do usuário.

# FEATURES FILES
Os arquivos .feature são a base para a implementação dos testes no BugBank. Esses arquivos, escritos em Gherkin, descrevem os cenários de teste em uma linguagem próxima ao natural, facilitando a compreensão e a comunicação entre diferentes partes interessadas. Cada arquivo `.feature` contém um ou mais cenários que definem os passos necessários para validar uma funcionalidade específica da aplicação.

```gherkin
Funcionalidade: Transferência entre contas

  Como um usuário do BugBank,
  Eu quero transferir fundos para outra conta,
  Para que eu possa realizar transações financeiras com facilidade.

  Contexto: Usuário na tela de Transferência
    Dado que o usuário está na tela de transferência do BugBank

  Cenário: Transferência com sucesso
    E o saldo da conta do usuário é de "R$ 1.500,00"
    Quando o usuário preencher todos os campos corretamente
    E tentar realizar a transferência
    Então o sistema deve debitar o valor transferido da conta do usuário
    E a mensagem "Transferencia realizada com sucesso" deve ser exibida
    E o sistema deve redirecionar o usuário para a página de extrato
```
<p align="center"><i>Parte do arquivo transferencia.feature</i></p>

Essa abordagem permite que os testes sejam facilmente compreendidos por desenvolvedores, testadores e stakeholders, além de proporcionar uma base clara para a automação com o Behave.

# TESTES AUTOMATIZADOS
Os testes automatizados garantem que as funcionalidades do BugBank sejam verificadas de maneira consistente e eficiente. A automação de testes ajuda a identificar rapidamente problemas e regressões, mantendo a qualidade do software. Para atingir esse objetivo, utilizei uma combinação de ferramentas e padrões, que são detalhados a seguir.

<div align="center">
  <img src="https://github.com/rodrigomolter/portfolio/assets/57466763/9a06d09f-edbb-42f7-beeb-d3819e2293bf" width="500px">
  <br><i>Execução da suite de testes do Bugbank</i>
</div>

## VIRTUAL ENVIRONMENT
Para garantir que todas as dependências fossem isoladas e bem gerenciadas, utilizei um ambiente virtual. O uso de ambientes virtuais permite o isolamento de cada projeto, podendo ter suas próprias dependências, evitando conflitos entre bibliotecas e garante de que todos que utilizarem do projeto estarão utilizando as mesmas versões das ferramentas e bibliotecas.

## SELENIUM + BEHAVE
Para a automação dos testes, utilizei duas principais ferramentas:

- **Selenium**: Uma ferramenta de automação de navegadores que permite interagir com elementos da interface do usuário, como cliques, entradas de texto e navegação entre páginas. O Selenium é amplamente utilizado devido à sua flexibilidade e suporte a múltiplos navegadores.

- **Behave**: Uma biblioteca que suporta a metodologia de Desenvolvimento Orientado por Comportamento (BDD). Com o Behave, os testes são escritos em Gherkin, o que facilita a leitura e a escrita de cenários de teste claros e compreensíveis.

<div align="center">
  <img src="https://github.com/rodrigomolter/portfolio/assets/57466763/f0e96ae4-f8c9-400d-8f26-108f3efcfcce" width="500px">
  <br><i>Step da <a href="https://github.com/rodrigomolter/bugbank-selenium/blob/main/features/steps/transferencia_steps.py">feature de Transferência</a></i>
</div><br>

O uso de [type hints](https://docs.python.org/3/library/typing.html) no projeto ajudou a melhorar a clareza e a manutenção do código. Também utilizei o Faker.js para gerar dados fictícios, o que enriqueceu os testes e garantiu uma melhor simulação de um ambiente real.

Outro aspecto importante foi a manipulação do local storage da aplicação. Como o BugBank não possui um banco de dados tradicional e armazena dados no local storage do navegador, precisei manipular diretamente esses dados para simular interações com uma API. Isso economizou tempo ao evitar repetir ações na interface gráfica, como recriar uma conta ou fazer login para testar uma transferência.


## PAGE OBJECTS MODEL

O [Page Object Model](https://www.selenium.dev/pt-br/documentation/test_practices/encouraged/page_object_models/) (POM) é um padrão de design utilizado para criar uma camada de abstração sobre os elementos da interface do usuário. Cada página da aplicação é representada por uma classe em POM, encapsulando a estrutura e o comportamento da página.

Implementei o padrão POM para organizar o código dos testes. Cada página do BugBank é representada por uma classe que encapsula os elementos da interface e as ações que podem ser realizadas. Esta abordagem facilita a manutenção e a reutilização do código. No entanto, enfrentei algumas dificuldades na estruturação inicial dos page objects, como garantir que o padrão de design estivesse sendo corretamente aplicado e as abstrações estivessem nas páginas correspondentes.

<div align="center">
  <img src="https://github.com/rodrigomolter/portfolio/assets/57466763/0794d8dc-e7c8-4682-a87e-869a4299f7c0" width="500px">
  <br><i>Home do BugBank.</i>
</div><br>

Uma classe base chamada `BasePage` foi criada para conter métodos comuns a todas as páginas, como inicialização do WebDriver, navegação e localização de elementos na página. Isso evita a duplicação de código e facilita a manutenção.


# RESULTADOS

Iniciei o projeto com o objetivo de aprender mais sobre automação de testes, principalmente utilizando python. O uso do padrão Page Objects facilitou a manutenção e a escalabilidade dos testes, embora tenha apresentado desafios iniciais na sua implementação. Manipulei o local storage do BugBank para simular interações com uma API, o que economizou drasticamente o tempo da execução dos testes E2E[^1].

Percebi também que poderia melhorar a documentação do código com [Docstrings](https://www.programiz.com/python-programming/docstrings) e aproveitar mais as fixtures para configurar e limpar estados necessários para os testes. Para a integração contínua (CI), pretendo futuramente utilizar o GitHub Actions e talvez o Jenkins para gerar relatórios. Outro ponto importante foi a necessidade de desenvolver melhor a parte de bug report e apresentação dos dados. 

Por fim, reconheço que este projeto está em constante evolução, aplicando novos conceitos à medida que os aprendo. Foi uma experiência muito interessante que me permitiu aplicar e evoluir muito minhas habilidades.


[^1]: Testes end-to-end (E2E) são uma forma de garantir que uma aplicação funciona corretamente do início ao fim, simulando o comportamento real do usuário. Eles verificam a integração e a comunicação entre diferentes partes do sistema, assegurando que tudo está funcionando como esperado.
___

Made with ❤️ by [Rodrigo Molter](https://www.linkedin.com/in/rodrigo-molter/).