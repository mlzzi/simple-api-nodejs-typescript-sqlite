# Criando uma API REST com Node.js, TypeScript e SQLite

Este projeto cria uma aplicação REST API com Node.js e TypeScript usando o framework Express e SQLite como banco de dados. Ele cobre desde a criação de um projeto Node básico até a implementação de funcionalidades como rotas para operações CRUD (Create, Read, Update, Delete) para gerenciar itens em uma base de dados SQLite.

## Estrutura do Projeto

```bash
├─ 📁 node_modules/
├─ 📁 src/
│   ├─ 📄 index.ts
│   ├─ 📁 models/
│   │   └─ 📄 item.ts
│   ├─ 📁 routers/
│   │   └─ 📄 itens-router.ts
│   ├─ 📁 repositories/
│   │   └─ 📄 itens-repository.ts
│   └─ 📄 database.ts
├─ 📄 package.json
├─ 📄 tsconfig.json
└─ 📄 yarn.lock

Fonte: https://medium.com/@eldes.com/tutorial-aplica%C3%A7%C3%A3o-rest-api-com-node-em-typescript-usando-express-e-sqlite-a4ea6a7c3563
