# 🐞 BugBank

<div align="left">
  <a href="/"><strong>⬅️ VOLTAR AOS PROJETOS</strong></a>
  <br><br>
</div>

<div align="center">
  <img src="https://github.com/rodrigomolter/portfolio/assets/57466763/8789f6df-6469-4a61-a737-1268caee58fa" width="800">
</div><br>

O projeto **BugBank** foca na análise, escrita e automação de testes para a aplicação de banco online [Bug Bank](https://bugbank.netlify.app/). Os casos de testes, escritos em `Gherkin`, são fortemente embasados em cima dos requisitos impostos pela aplicação. A automação dos testes é desenvolvida em `Python`, utilizando de `Selenium` com o padrão de design Page Objects para organização e encapsulamento das informações das páginas. Os casos de testes, utilizam do framework `Behave` para o suporte ao desenvolvimento orientado ao comportamento.

## SUMÁRIO
1. [BUG BANK UI](/projetos/BugBank.md#bug-bank-ui)
2. [FEATURES FILES](/projetos/BugBank.md#features-files)
3. [TESTES AUTOMATIZADOS](/projetos/BugBank.md#testes-automatizados)<br>
    3.1 [VIRTUAL ENVIRONMENT](/projetos/BugBank.md#virtual-environment)<br>
    3.2 [SELENIUM + BEHAVE](/projetos/BugBank.md#selenium--behave)
4. [PAGE OBJECT MODEL](/projetos/BugBank.md#page-objects-model)
5. [RESULTADOS](/projetos/BugBank.md#resultados)

# BUG BANK UI
O BugBank é uma aplicação de um banco online, projetado para práticas de planejamento e execução de testes manuais e automatizados. Ele oferece funcionalidades similares a um banco real, como criação de contas, login, transferências e extratos. O objetivo deste projeto é proporcionar um ambiente similar a um ambiente real com bugs e falhas para serem detectadas.
>Pensando em uma aplicação que seja semelhante a projetos reais, Bug Bank foi pensado para que você pratique planejamento de testes e automação de testes.<br>- [Bug Bank](https://github.com/jhonatasmatos/bugbank-ui/tree/main)

<div align="center">
  <img src="https://github.com/rodrigomolter/portfolio/assets/57466763/866ec70f-a7d0-4f81-96a1-0d31c8ad516d" width="500px">
  <br><i><a href="https://www.notion.so/dynamic-keeper-66c/User-Stories-491da01d74b94342acdf5a1166315f24">BugBank</a> - Página de Extrato</i>
</div><br>

# PLANEJAMENTO
Inicialmente, os requisitos da aplicação foram analisados para entender as funcionalidades e as expectativas do sistema. O planejamento do projeto se baseava no processo de entender, compreender, planejar e executar.

Com base nos [requisitos](https://bugbank.netlify.app/requirements) estabelecidos pelo BugBank, as funcionalidades foram definidas:

- Login: Autenticação de usuários existentes.
- Cadastro: Permite a criação de novas contas bancárias.
- Transferência entre contas: Realiza a transferência de dinheiro entre contas do BugBank.
- Extratos: Exibe o histórico de transações do usuário.

 A partir disso foram criados os casos de testes, escritos em Gherkin para que facilitassem a criação de testes automatizados posteriormente.

# FEATURES FILES
Os arquivos `.feature` são a base para a implementação dos testes no BugBank. Esses arquivos, escritos em Gherkin, descrevem os cenários de teste em uma linguagem próxima ao natural, facilitando a compreensão e a comunicação entre diferentes partes interessadas. Cada arquivo `.feature` contém um ou mais cenários que definem os passos necessários para validar uma funcionalidade específica da aplicação.

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

Essa abordagem permite que os testes sejam facilmente compreendidos por desenvolvedores, testadores e stakeholders.

# TESTES AUTOMATIZADOS
Os testes automatizados garantem que as funcionalidades do BugBank sejam verificadas de maneira consistente e eficiente. A automação de testes ajuda a identificar rapidamente problemas e regressões, mantendo a qualidade do software. Para atingir esse objetivo, utilizei uma combinação de ferramentas e padrões, que são detalhados a seguir.

<div align="center">
  <img src="https://github.com/rodrigomolter/portfolio/assets/57466763/9a06d09f-edbb-42f7-beeb-d3819e2293bf" width="500px">
  <br><i>Execução da <a href="https://github.com/rodrigomolter/bugbank-selenium">suite de testes</a> do Bugbank</i>
</div>

Acesse o [repositório do Bug Bank](https://github.com/rodrigomolter/bugbank-selenium) para visualizar os testes e como executa-los.

## VIRTUAL ENVIRONMENT
Para garantir que todas as dependências fossem isoladas e bem gerenciadas, utilizei um ambiente virtual. O uso de ambientes virtuais permite o isolamento de cada projeto, podendo ter suas próprias dependências, evitando conflitos entre bibliotecas e garantindo de que todos que utilizarem do projeto estarão utilizando as mesmas versões das ferramentas e bibliotecas.

## SELENIUM + BEHAVE
O Selenium é uma ferramenta amplamente utilizada para automação de testes em aplicações web usando Python e outras linguagens. Ele permite que os desenvolvedores simulem interações humanas com um navegador web, como clicar em botões, preencher formulários e navegar por diferentes páginas. Isso é essencial para testar a funcionalidade de uma aplicação web de ponta a ponta de forma automatizada, garantindo que tudo funcione conforme esperado antes de ser lançado para os usuários.

Integrar o Selenium com o Behave melhora ainda mais a estrutura de automação de testes. O Behave é um framework de BDD (Behavior-Driven Development) que permite escrever testes em linguagem natural usando a sintaxe Gherkin. Com o Gherkin, é possível descrever o comportamento esperado da aplicação em termos de cenários de teste, utilizando palavras-chave como "Dado que", "Quando" e "Então". Isso facilita a comunicação entre desenvolvedores, testadores e stakeholders, garantindo que todos tenham uma compreensão clara dos requisitos e comportamentos esperados.

<div align="center">
  <img src="https://github.com/rodrigomolter/portfolio/assets/57466763/f0e96ae4-f8c9-400d-8f26-108f3efcfcce" width="700px">
  <br><i>Step da <a href="https://github.com/rodrigomolter/bugbank-selenium/blob/main/features/steps/transferencia_steps.py">feature de Transferência</a>: função do Behave para transformar uma frase em Gherkin para código</i>
</div><br>

Uma prática recomendada ao usar Selenium é o padrão de design Page Objects. Page Objects é a representação de cada página web que esta sendo testada em sua respectiva classe. Elas encapsulam os elementos específicos da página (como botões, campos de texto) e os comportamentos esperados (como preencher um formulário, clicar em um botão de submissão). Ao adotar Page Objects, os testes se tornam mais modulares, reutilizáveis e fáceis de manter. Isso porque qualquer alteração na interface da aplicação só requer atualizações na Page Object correspondente, em vez de em todos os testes que interagem com essa página.

Cada página do BugBank é representada por uma classe que encapsula os elementos da interface e as ações que podem ser realizadas. Uma classe base chamada `BasePage` foi criada para conter métodos comuns a todas as páginas, como inicialização do WebDriver, navegação e localização de elementos na página. Isso evita a duplicação de código e facilita a manutenção.

Combinar Selenium, Page Objects, Behave e Gherkin não apenas melhora a eficiência na automação de testes, mas também promove uma colaboração mais eficaz entre equipes. Os testes se tornam mais centrados no comportamento do usuário, o que ajuda a validar não apenas a funcionalidade técnica, mas também os requisitos de negócio. Essa abordagem não só acelera o ciclo de desenvolvimento, mas também aumenta a confiança na qualidade do software entregue, resultando em uma experiência mais confiável e alinhada com as expectativas dos usuários finais.

<div align="center">
  <img src="https://github.com/rodrigomolter/portfolio/assets/57466763/0794d8dc-e7c8-4682-a87e-869a4299f7c0" width="500px">
  <br><i>Home do BugBank.</i>
</div><br>

Como o BugBank não utiliza de um banco de dados tradicional, a aplicação armazena os dados do usuário no *local storage* do navegador. Para simular interações com uma API externa da aplicação, manipulei diretamente os dados no *local storage*. Isso garante que os testes não sejam dependentes e que apenas a função desejada esteje sendo testada. Esta ação reduziu consideravelmente o tempo total de execução da suite de testes, pois agora não é mais necessário realizar ações na interface para efetuar cadastro/login em cenários de testes que não estavam testando essas funcionalidades.


# RESULTADOS

Iniciei o projeto com o objetivo de aprender mais sobre automação de testes, principalmente utilizando python. O uso do padrão Page Objects facilitou a manutenção e a escalabilidade dos testes, embora tenha apresentado desafios iniciais na sua implementação.

No quesito de melhorias, há espaços para adicionar uma documentação ao código com [Docstrings](https://www.programiz.com/python-programming/docstrings). Também seria interessante integrar a geração de relatórios e bug reports para análise e entendimento mais aprofundado dos problemas.

Por fim, reconheço que este projeto está em constante evolução, aplicando novos conceitos à medida que os aprendo. Foi uma experiência muito interessante que me permitiu aplicar e evoluir muito minhas habilidades.

<footer>
  <br><br>
  <div align="left">
    <a href="/"><strong>⬅️ VOLTAR AOS PROJETOS</strong></a>
  </div>
  <div align="center">
    <a href="#-bugbank"><strong>⬆️ VOLTAR AO TOPO</strong></a>
  </div>
  <br>
</footer>
___

Made with ❤️ by [Rodrigo Molter](https://www.linkedin.com/in/rodrigo-molter/).
