# 🛒 Loja do QA
<div align="center">
  <img src="https://github.com/rodrigomolter/portfolio/assets/57466763/1b3d6071-001f-4962-8b95-6d33bb8ec720" style="width: 80vw; max-width: 700px;">
</div>


A [Loja do QA](http://lojaqa.jogajuntoinstituto.com/) é o **projeto final** do módulo básico do curso **Bugou? QA TA ON** oferecido pelo [Instituto Joga Junto](https://www.jogajuntoinstituto.org/). Este case envolve uma jornada que abrange entender, compreender, planejar e executar. Trata-se de um e-commerce que segue o padrão de grandes plataformas como Amazon e Casas Bahia.

Durante o projeto, começamos com o planejamento inicial, onde compreendemos o problema, analisamos os fluxos e requisitos do cliente, exploramos o funcionamento do sistema e mapeamos suas principais funcionalidades. Em seguida, direcionamos nossa atenção para a execução prática, envolvendo o detalhamento de cenários e casos de teste, a condução dos testes propriamente ditos, a elaboração do bug report e, por fim, a análise dos problemas identificados.

Tanto os cenários/casos de teste, quanto o bug report foram escritos em Gherkin.

### SUMÁRIO

1. [SQUADS](/projetos/LojaDoQA.md#squads)<br>
   1.1 [GUARDIÕES DA QUALIDADE](/projetos/LojaDoQA.md#guardiões-da-qualidade)<br>
2. [FLUXUOGRAMA](/projetos/LojaDoQA.md#fluxuograma)<br>
3. [CENÁRIOS DE TESTES](/projetos/LojaDoQA.md#cenários-de-testes)<br>
4. [BUG REPORT](/projetos/LojaDoQA.md#bug-report)<br>
   4.1 [CRITICIDADE](/projetos/LojaDoQA.md#criticidade)<br>
   4.2 [NAVEGAÇÃO DO USUÁRIO](/projetos/LojaDoQA.md#navegação-do-usuário)<br>
   4.3 [CRIAÇÃO DE CONTA](/projetos/LojaDoQA.md#criação-de-conta)<br>
   4.4 [COMPRAS](/projetos/LojaDoQA.md#compras)<br>
   4.5 [PAGAMENTO](/projetos/LojaDoQA.md#pagamento)<br>
5. [APRENDIZADO](/projetos/LojaDoQA.md#aprendizado)<br>


## SQUADS
A divisão de equipes dentro do [Instituto Joga Junto](https://www.jogajuntoinstituto.org/) foi através de Squads. Esse conceito foi popularizado pela Spotify, embora muitas outras empresas também tenham adotado e adaptado esse modelo.

> Uma Squad é semelhante a uma equipe Scrum e é projetada para parecer uma mini-startup. Eles trabalham juntos e têm todas as habilidades e ferramentas necessárias para projetar, desenvolver, testar e lançar na produção. São uma equipe auto-organizada e decidem sua própria forma de trabalhar – algumas usam sprints de Scrum, outras usam Kanban, e algumas usam uma combinação dessas abordagens. <br> - [Scaling Agile @ Spotify, por Henrik Kniberg & Anders Ivarsson](https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf)

### Guardiões da Qualidade
Com isso, surgiu os **Guardiões da Qualidade**, que representam um marco crucial no desenvolvimento e aprendizado durante o curso. A criação desta identidade não apenas fortaleceu o sentimento de participação, mas também fomentou um ambiente de trabalho mais colaborativo e engajado.

<div align="center">
  <picture>
    <source srcset="https://github.com/rodrigomolter/portfolio/assets/57466763/8203fec7-931b-4392-b695-73bfbf2d3197" media="(prefers-color-scheme: light)">
    <img src="https://github.com/rodrigomolter/portfolio/assets/57466763/90e427e8-3aae-4a2a-b2e8-422967ef0dfc" alt="Logo Guardiões da Qualidade" width="300">
  </picture>
  <br><i>Logo Guardiões da Qualidade</i>
</div>
<br>
Este trabalho foi desenvolvido em conjunto com os <strong>Guardiões da Qualidade</strong>, e é devido a eles a grande qualidade que o projeto apresenta. Obrigado <a href="https://www.linkedin.com/in/annielle-crispim/">Annielle</a>, <a href="https://www.linkedin.com/in/juliarobaina/">Julia</a> e <a href="https://www.linkedin.com/in/matheusviniciusfp">Matheus</a>

## FLUXUOGRAMA
Antes da criação dos cenários de testes, foi elaborado um fluxuograma detalhado para mapear todos os possíveis caminhos e interações do usuário na Loja do QA. Esse processo foi fundamental para compreender o funcionamento completo do sistema e identificar os fluxos que precisavam ser validados durante os testes.

<div align="center">
  <img src="https://github.com/rodrigomolter/portfolio/assets/57466763/133a091d-30dd-4f64-b758-38947591e6fe" width="700">
  <br><a href="https://miro.com/app/board/uXjVKJtKCY8=/?share_link_id=6514805450"><i>Fluxuograma - Loja do QA</i></a>
</div>

As principais funcionalidades foram divididas **quatro** fluxos:
1. **Navegação do Usuário**:<br>
    Este fluxo cobre como os usuários navegam pelo site da Loja do QA. Inclui a entrada inicial no site e a navegação entre páginas. O objetivo é garantir que a navegação seja intuitiva, os links funcionem corretamente e os usuários encontrem facilmente o que procuram.

2. **Criação de Conta**:<br>
    Este fluxo se concentra no processo que os usuários seguem para criar uma conta na Loja do QA e o processo de autenticação. Inclui desde o preenchimento do formulário de registro até a confirmação por e-mail, se aplicável. O objetivo é garantir que o registro seja fácil de completar, que os dados sejam validados corretamente e que o usuário receba confirmações necessárias para acessar sua conta.

3. **Compras**:<br>
    Este fluxo abrange todas as etapas que um usuário segue ao realizar uma compra na Loja do QA. Isso inclui a busca por produtos, visualização das informações do produto, adicionar itens ao carrinho, gerenciar o carrinho (como editar quantidades ou remover itens), visualizar detalhes do pedido e confirmar a compra. O objetivo é assegurar que todo o processo de compra seja claro, eficiente e sem problemas.
4. **Pagamento**:<br>
    Este fluxo detalha como os usuários realizam o pagamento pelos produtos na Loja do QA. Inclui a seleção de métodos de pagamento (como cartão de crédito, boleto ou outros), inserção de informações de pagamento e finalização da transação. O objetivo é garantir que todas as opções de pagamento funcionem corretamente, que os dados sejam seguros e que o usuário receba confirmação da compra após o pagamento ser processado.


## CENÁRIOS DE TESTES
Os cenários de testes[^1] foram desenvolvidos com base no fluxuograma inicial da Loja do QA junto com os testes de acessibilidade, abrangendo todas as funcionalidades críticas do e-commerce.

Foram desenvolvidos um total de **67 casos de testes** divididos entre os principais fluxos junto com os testes de acessibilidade.
<div align="center">
  <img src="https://github.com/rodrigomolter/portfolio/assets/57466763/91956159-d86e-4761-93ed-718f851d9168" width="500">
  <br><i>Casos de Testes por Cenário de Teste</i>
</div>

## BUG REPORT
Após a execução dos testes, o bug report[^1] da Loja do QA categoriza e prioriza os problemas identificados em cada cenário de teste. Os bugs são classificados por sua criticidade, proporcionando uma visão clara dos aspectos do sistema que requerem correção imediata para melhorar a experiência do usuário e a eficiência operacional do e-commerce.

Foram reportados um total de **98 bugs**, distribuídos por todo o sistema, cada um com diferentes níveis de criticidade. A maior parte dos bugs **bloqueantes** foi encontrada dentro do **fluxo de compras**, que é o principal fluxo da aplicação.
<div align="center">
  <img src="https://github.com/rodrigomolter/portfolio/assets/57466763/473609a4-dad8-46be-a788-591e1b24a1bb" width="500">
  <br><i>Quantidades de Bugs por Cenário de Teste</i>
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

<div align="center">
  <img src="https://github.com/rodrigomolter/portfolio/assets/57466763/2355adb5-d302-4d67-ac93-b4fdf38cf569" width="500">
  <br><i>Contagem de Criticidade de Bugs</i>
</div>

### NAVEGAÇÃO DO USUÁRIO
Dentro do fluxo de navegação do usuário foram encontrados **21 bugs**, dos quais **nenhum** é considerado bloqueante para a aplicação.

<div align="center">
  <img src="https://github.com/rodrigomolter/portfolio/assets/57466763/a5fe5287-5a77-4b45-a59f-23d89d3a5dbd" width="500">
  <br><i>Bugs por criticidade no fluxo de Navegação do Usuário</i>
</div>

### CRIAÇÃO DE CONTA
Dentro do fluxo de criação de conta foram encontrados **06 bugs**, dos quais **nenhum** é considerado bloqueante para a aplicação.
<div align="center">
  <img src="https://github.com/rodrigomolter/portfolio/assets/57466763/c532d1f3-945a-43f1-b809-080e633e2575" width="500">
  <br><i>Bugs por criticidade no fluxo de Criação de Conta</i>
</div>

### COMPRAS
Dentro do fluxo de compras foram encontrados **25 bugs**, dos quais **08** são considerados **bloqueantes** para a aplicação.
<div align="center">
  <img src="https://github.com/rodrigomolter/portfolio/assets/57466763/f173c01d-c87c-49a3-b7ff-a506a0f74482" width="500">
  <br><i>Bugs por criticidade no fluxo de Compras</i>
</div>

### PAGAMENTO
Dentro do fluxo de pagamento foram encontrados **06 bugs**, dos quais **01** é considerado **bloqueante** para a aplicação.
<div align="center">
  <img src="https://github.com/rodrigomolter/portfolio/assets/57466763/c800c917-3e4c-45cc-86ec-70493b0f82c8" width="500">
  <br><i>Bugs por criticidade no fluxo de Pagamento</i>
</div>

### ACESSIBILIDADE
Ja na parte de acessibilidade foram encontrados **30 bugs**, dos quais **nenhum** é considerado bloqueante para a aplicação.
<div align="center">
  <img src="https://github.com/rodrigomolter/portfolio/assets/57466763/c890d4d8-8762-4395-86b3-ad1bb055b5ae" width="500">
  <br><i>Bugs por criticidade em acessibilidade</i>
</div>

## APRENDIZADO

Participar do case foi uma experiência muito enriquecedora. Aprendemos não só habilidades técnicas, mas também desenvolvemos de trabalhar em equipe. No começo, enfrentamos desafios para entender os requisitos do cliente e mapear os fluxos do sistema, o que foi um processo inicialmente lento. Porém, esse período foi fundamental para entender completamente como cada parte da aplicação funcionava e se conectava.

Durante o desenvolvimento, a comunicação eficaz e a colaboração entre a equipe criaram um ambiente de trabalho tranquilo e produtivo, onde ideias fluíam livremente e desafios eram superados em conjunto. A maturidade da equipe e as boas relações cultivadas durante o curso permitiram uma interação fluida e respeitosa entre todos os membros. A resolução de problemas se tornou uma atividade colaborativa, beneficiando-se da diversidade de perspectivas e experiências.

No geral, foi uma oportunidade valiosa para aplicar teoria na prática, consolidando habilidades técnicas e soft skills essenciais para o trabalho como QA. As lições aprendidas não só melhoraram nossa capacidade de trabalho em equipe e resolução de problemas complexos, mas também nos prepararam melhor para enfrentar desafios futuros no campo da qualidade de software.

[^1]: Por questões de regras do Instituto Joga Junto, alguns materiais não podem ser disponibilizados publicamente.
___
<div align="center">
  Feito com ❤️ pelos <strong>Guardiões da Qualidade</strong><br>
  <picture>
    <source srcset="https://github.com/rodrigomolter/portfolio/assets/57466763/8203fec7-931b-4392-b695-73bfbf2d3197" media="(prefers-color-scheme: light)">
    <img src="https://github.com/rodrigomolter/portfolio/assets/57466763/90e427e8-3aae-4a2a-b2e8-422967ef0dfc" alt="Logo Guardiões da Qualidade" title="Logo Guardiões da Qualidade" width="250">
  </picture>
  <br>
  <img src="https://github.com/rodrigomolter/portfolio/assets/57466763/0158702f-a50c-4019-9982-b0ca5e507639" alt="Annielle Crispim, Matheus Vinicius, Rodrigo Molter e Julia Robaina" title="Annielle Crispim, Matheus Vinicius, Rodrigo Molter e Julia Robaina" width="250">
  <p><i>
    <a href="https://www.linkedin.com/in/annielle-crispim/">Annielle Crispim</a>
     - 
    <a href="https://www.linkedin.com/in/matheusviniciusfp">Matheus Vinicius </a>
     - 
    <a href="https://www.linkedin.com/in/rodrigo-molter/">Rodrigo Molter</a>
     - 
    <a href="https://www.linkedin.com/in/juliarobaina/">Julia Robaina</a>
  </i></p>
</div>
