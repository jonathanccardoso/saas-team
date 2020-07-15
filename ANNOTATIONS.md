# Aplicação SASS

- Um usuário pode fazer parte da mesma empresa.
- Varias empresas no mesmo ambiente, mas com dados e contas diferentes. Ex: discord, digitalocean, dentre outros.

## Server

- singotenan
  Cópia da aplicação e do banco de dados para cada cliente
- mulitenan
  Cópia da aplicação e do banco de dados, mas com vários clientes usando a mesma aplicação.

### Adonis

- (?) porque usa essa ferramenta.

```console
adonis new backend --api-only
adonis serve --dev
```

```console
adonis make:model Project -m -c // roda a migration e o controle do model

adonis make:model Team -m -c

adonis make:model UserTeam -m // n*n, foi criado para caso quiser alterar dados da tabela pivot

adonis make:model Invite -m -c
```

```console
* configurar o eslint do projeto
❯ yarn add eslint --dev
❯ npx eslint --init //use style with standard
```

## db

configurações relacionadas ao banco pode fazer diretamente nas migrações.
e o acesso ao banco se da no .env

- com o postgres, precisa adicionar, mencionado em config/database.js

npm i --save pg

rodando as migrações

adonis migration:run

\*\* lembre-se que a ordem das migrações é a ordem de criação das tabelas no banco

## criar seed

para alimentar o banco sem precisar sempre inserir, com o comando

adonis make:seed

### adonis tem plugin

são proveiders e precisam de configuração.

criar controle 

adonis make:controller Session

### envio de email

para escultar alteações nos models e enviar um email, precisamos de um hook.

adonis make:hook Invite

para adicionar associação do hook com o model, precisa colocar metodo boot com addHook() no model respectivo.

* para envio de email, para rodar em background, precisa usar o adonis-kue (disparo de job), um o job (com make:job) e @adonisjs/redis


