# 📝 Blog Pessoal — API REST com NestJS

Projeto back-end desenvolvido durante o **Bootcamp Generation Brasil — Desenvolvimento Full Stack JavaScript**, com o objetivo de praticar a construção de APIs RESTful utilizando NestJS e TypeScript.

---

## 🚀 Sobre o Projeto

O **Blog Pessoal** é uma API que permite gerenciar postagens de um blog, organizadas por temas, com autenticação de usuários. O projeto foi desenvolvido como exercício de aprendizado, aplicando conceitos de arquitetura modular, injeção de dependência, autenticação com JWT e integração com banco de dados via TypeORM.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia  | Descrição                                      |
|-------------|------------------------------------------------|
| Node.js     | Ambiente de execução JavaScript no servidor    |
| NestJS      | Framework para construção de APIs escaláveis   |
| TypeScript  | Superset do JavaScript com tipagem estática    |
| TypeORM     | ORM para integração com banco de dados         |
| JWT         | Autenticação baseada em tokens                 |
| Passport.js | Middleware de autenticação                     |
| PostgreSQL  | Banco de dados relacional                      |
| Swagger     | Documentação interativa da API                 |

---

## 📁 Estrutura do Projeto

```
src/
├── auth/         # Módulo de autenticação (JWT + Passport)
├── postagem/     # Módulo de postagens (CRUD)
├── tema/         # Módulo de temas (CRUD)
├── usuario/      # Módulo de usuários (CRUD)
├── data/         # Configuração de conexão com o banco de dados
├── app.module.ts # Módulo raiz da aplicação
└── main.ts       # Ponto de entrada da aplicação
```

---

## ⚙️ Funcionalidades

- ✅ Cadastro e login de usuários com autenticação JWT
- ✅ CRUD completo de **Postagens**
- ✅ CRUD completo de **Temas**
- ✅ Relacionamento entre Postagens, Temas e Usuários
- ✅ Proteção de rotas com Guards do NestJS
- ✅ Documentação via Swagger

---

## ▶️ Como Executar Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/)
- Banco de dados PostgreSQL configurado

### Passo a Passo

```bash
# 1. Clone o repositório
git clone https://github.com/BiaNascimento/blogpessoal_nest.git

# 2. Acesse a pasta do projeto
cd blogpessoal_nest

# 3. Instale as dependências
npm install

# 4. Configure as variáveis de ambiente
# Crie um arquivo .env na raiz com base no exemplo abaixo
```

### Variáveis de Ambiente (`.env`)

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=blogpessoal
JWT_SECRET=sua_chave_secreta
```

```bash
# 5. Execute a aplicação
npm run start:dev
```

A API estará disponível em: `http://localhost:4000`

A documentação Swagger estará em: `http://localhost:4000/swagger`

---

## 🔗 Endpoints Principais

### Usuário

| Método | Rota                    | Descrição                |
|--------|-------------------------|--------------------------|
| POST   | `/usuarios/cadastrar`   | Cadastrar novo usuário   |
| POST   | `/usuarios/logar`       | Autenticar usuário       |
| GET    | `/usuarios/all`         | Listar todos os usuários |
| PUT    | `/usuarios/atualizar`   | Atualizar usuário        |

### Postagem

| Método | Rota                          | Descrição                 |
|--------|-------------------------------|---------------------------|
| GET    | `/postagens`                  | Listar todas as postagens |
| GET    | `/postagens/:id`              | Buscar postagem por ID    |
| GET    | `/postagens/titulo/:titulo`   | Buscar por título         |
| POST   | `/postagens`                  | Criar nova postagem       |
| PUT    | `/postagens`                  | Atualizar postagem        |
| DELETE | `/postagens/:id`              | Deletar postagem          |

### Tema

| Método | Rota                              | Descrição              |
|--------|-----------------------------------|------------------------|
| GET    | `/temas`                          | Listar todos os temas  |
| GET    | `/temas/:id`                      | Buscar tema por ID     |
| GET    | `/temas/descricao/:descricao`     | Buscar por descrição   |
| POST   | `/temas`                          | Criar novo tema        |
| PUT    | `/temas`                          | Atualizar tema         |
| DELETE | `/temas/:id`                      | Deletar tema           |

---

## 🎓 Contexto de Aprendizado

Este projeto foi desenvolvido como parte do currículo do **Bootcamp Generation Brasil — Desenvolvimento Full Stack JavaScript**, com foco em:

- Arquitetura de aplicações back-end com NestJS
- Boas práticas de desenvolvimento com TypeScript
- Implementação de autenticação e autorização
- Integração com banco de dados usando TypeORM
- Organização modular de projetos

---

## 👩‍💻 Autora

**Bianca Nascimento**  
Desenvolvido durante o Bootcamp Generation Brasil 🚀

[![GitHub](https://img.shields.io/badge/GitHub-BiaNascimento-181717?style=flat&logo=github)](https://github.com/BiaNascimento)
