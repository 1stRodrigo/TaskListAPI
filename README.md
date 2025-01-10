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

## Configurando Ambiente ✅

Antes de iniciarmos a instalação do projeto, devemos instalar as ferramentas para testarmos os endpoints e o banco de dados.

1. Instale a ferramenta [Insomnia](https://insomnia.rest/download)

2. Instale no seu computador o [PostgreSQL](https://www.postgresql.org/download/).

Com as ferramentas acima instaladas, siga as etapas a seguir para instalar o projeto e as dependências.

Crie uma nova pasta no seu computador.

Dentro dessa nova pasta abra o cmd e digite os comandos a seguir:

```bash
# criando pasta
mkdir tasklistApi

# acessando a pasta criada
cd tasklistApi
```

Clone este repositório:

```bash
# clonando repositório
git clone <https://github.com/1stRodrigo/TaskListAPI>

# instalando as dependências
npm install
```

O **script** para inicializar o servidor, ja está configurado no arquivo `package.json`, não sendo necessário alterar nada.
```
  "scripts": {
    "dev": "nodemon src/server.js"
  },
```

Execute o comando abaixo para inicializar o servidor:
`yarn dev`

Se tudo ocorreu bem, no terminal você verá escrito:

`[nodemon] starting node -r sucrase/register src/server.js`

Para fechar a conexão do servidor basta realizar o comando ``Ctrl + C``

## Como rodar a API

Após instalar as dependencias e as ferramentas, siga os passos a seguir para rodar o projeto:

Primeiro abra o banco de dados, pesquisando por **pgAdmin4** (Este é o nome dado ao PostgreSQL) e configure usando o mesmo nome do projeto ``tasklistApi``.

Execute o programa **Insomnia** e importe o arquivo ``Insomnia_2025-01-09.json`` localizado dentro da pasta do projeto.

Abra o terminal dentro da pasta do projeto e execute o comando para iniciar conexão do servidor local:
```bash
#executando servidor
yarn dev
```

### Teste a API utilizando o **Insomnia**, e faça a checagem dos dados no **PostgreSQL**.


## 📌 JWT (Json Web Token) - Importante 📌

Ao testar a API, crie primeiro um "usuário teste" e copie o token gerado na resposta, esse token é usado para fazer a autenticação de usuário. 
As únicas rotas que **não necessitam** de adicionar o token são:
```bash
POST /users
POST /sessions
```

