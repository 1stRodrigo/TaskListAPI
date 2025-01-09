# Task List API

A Task List API é uma API RESTful que permite gerenciar tarefas de forma prática e organizada. Ela fornece endpoints para criar, visualizar, finalizar e deletar tarefas em uma lista. Criada no padrão MVC (Model-View-Controller)

### Tecnologias Utilizadas

- NodeJS para criar a estrutura da API;
- PostgreSQL banco de dados relacional;
- Insomnia usado para testar os endpoints;
- JWT token de autenticação e autorização em formato JSON;
- Sequelize ORM para traduzir a linguagem de desenvolvimento para o formato do banco de dados;
- YUP para construir schemas e validar os campos da API;

## Dependências

Todas as dependências necessárias para rodar o projeto estão listadas abaixo.

* [NodeJS](https://nodejs.org/en) 
* [PostgreSQL](https://www.postgresql.org/)
* [Insomnia](https://insomnia.rest/download)
* [Express](https://expressjs.com/pt-br/)
* [Sucrase](https://www.npmjs.com/package/sucrase)
* [Sequelize](https://sequelize.org/)
* [Sequelize-CLI](https://github.com/sequelize/cli)
* [JWT](https://jwt.io/)
* [CORS](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)
* [YUP](https://www.npmjs.com/package/yup)
* [Postgre HStore](https://www.npmjs.com/package/pg-hstore)
* [bcrypt](https://github.com/kelektiv/node.bcrypt.js#readme)
* [nodemon](https://nodemon.io)

## Como rodar o projeto ✅

Antes de iniciarmos a instalação do projeto, devemos instalar as ferramentas para testarmos os endpoints e o banco de dados par verificarmos os dados inseridos.

- Instale a ferramenta [Insomnia](https://insomnia.rest/download)

* Faça o download do banco de dados [PostgreSQL](https://www.postgresql.org/download/) e instale no seu computador.

Feito as intalações acima, siga as etapas abaixo para poder instalar o projeto e as dependências.

Crie uma nova pasta no seu computador, podendo ser na área de trabalho ou onde você preferir.

Dentro da pasta, abra o prompt de comando e digite os comandos a seguir:

```` 
mkdir tasklistApi

cd tasklistApi
````

Dentro da pasta, cloe este repositório:

```bash
# clonando repositório
git clone <https://github.com/1stRodrigo/TaskListAPI>

# instale as dependências
npm install

```
O **script** para inicializar o servidor, ja está configurado no arquivo `package.json`, não sendo necessário alterar nada.
```
  "scripts": {
    "dev": "nodemon src/server.js"
  },
```

Execute o projeto localhost:
`yarn dev`

Se tudo ocorreu bem, no terminal você verá escrito:

`[nodemon] starting node -r sucrase/register src/server.js`

## Como rodar os testes

Explique como rodar os testes da aplicação. Exemplo de um comando usando Makefile para rodar os testes:

```
make test
```

## 📌 (Título) - Informações importantes sobre a aplicação (exemplo) 📌

Esse é o local para você preencher com outras informações que possam ser importantes para a aplicação. Coloquei um exemplo de título, mas você deve preencher de acordo com a necessidade do projeto. Pode ser que não seja necessário.

Um bom exemplo: se você estiver construindo uma API, liste as rotas da aplicação e quais serão os seus retornos. Isso facilita para quem vai consumir a API.


## ⚠️ Problemas enfrentados

Liste os problemas que você enfrentou construindo a aplicação e como você resolveu cada um deles. Você que desenvolveu o projeto é a pessoa que mais conhece/entende os possíveis problemas que uma pessoa pode enfrentar rodando a aplicação. Compartilhe esse conhecimento e facilite a vida da pessoa descrevendo-os.

Exemplo:

### Problema 1:
Descrição do problema
* Como solucionar: explicar a solução.

### Problema 2:
Descrição do problema
* Como solucionar: explicar a solução.

## ⏭️ Próximos passos

Descreva se você pretende, pensou ou gostaria de elaborar uma nova feature para o seu projeto definindo os próximos passos.