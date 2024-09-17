# Projeto em node utilizando padrão MVC

- Para realizar teste na aplicação crie um banco de dados com o nome nodemvc ou altere o nome do banco no arquivo ./db/conn.js

## Tecnologias Utilizadas

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

## Status do Projeto

![Em Desenvolvimento](https://img.shields.io/badge/Status-Em_Desenvolvimento-orange?style=for-the-badge)

# Indíce

- [O que é MVC](#o-que-é-mvc-model-view-controller)
  - [Model](#model-modelo)
  - [View](#view-visão)
  - [Controller](#controller-controlador)

## O que é MVC (Model-View-Controller)?

O MVC (Model-View-Controller) é um padrão de arquitetura de software utilizado para organizar a estrutura de aplicações, separando responsabilidades de forma clara:

- ### **Model (Modelo):**
  Responsável por gerenciar os dados e a lógica de negócios. Ele acessa o banco de dados, processa as informações e fornece os dados necessários ao controlador.
- ### **View (Visão):**

  Representa a interface do usuário, ou seja, o que ele vê na tela. A View exibe as informações fornecidas pelo Model de maneira visual.

- ### **Controller (Controlador):**
  Faz a ponte entre o Model e a View. Ele recebe as ações do usuário, interage com o Model para manipular os dados e atualiza a View com os resultados.

Esse padrão ajuda a manter a aplicação organizada, facilitando o desenvolvimento, a manutenção e a escalabilidade do sistema.
