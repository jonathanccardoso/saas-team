# Aplicação SaaS

- Um usuário pode fazer parte da mesma empresa.
- Varias empresas no mesmo ambiente, mas com dados e contas diferentes. Ex: discord, digitalocean, dentre outros.
- **SaaS** é a sigla para Software as a Service — ou Software como Serviço, em português. Nesse modelo, o sistema não é comercializado como um produto, mas sim como serviço, como o próprio nome sugere. Assim, não é feita a instalação de nenhum programa nos equipamentos e as aplicações são usadas pela internet.

## Server

![Which To Choose](https://blog.rocketseat.com.br/content/images/2019/03/SaaS_Single_tenant_ou_Multi-tenant_qual_escolher.png)

- Single tenant

  Cópia da aplicação e do banco de dados para cada cliente

- Multi-tenant

  Cópia da aplicação e do banco de dados, mas com vários clientes usando a mesma aplicação.

### Adonis

- Porque usar?

  É um framework mais robusto com uma série de funcionalidades prontas, extremamente baseado em frameworks famosos de outras linguagens como o Laravel, Rails ou Django.

  O Adonis assim que instalado já vem com uma estrutura pronta e o desenvolvedor é limitado a utilizar essa organização para seus arquivos, além de já possuir uma série de funcionalidades pré-implementadas como autenticação, ORM, validação, envio de e-mail, logging, etc...

```console
❯ adonis new backend --api-only
❯ adonis serve --dev
```

```console
❯ adonis make:model Project -m -c // roda a migration e o controle do model

❯ adonis make:model Team -m -c

❯ adonis make:model UserTeam -m // n*n, foi criado para caso quiser alterar dados da tabela pivot

❯ adonis make:model Invite -m -c
```

- Configurando o eslint

```console
❯ yarn add eslint --dev
❯ npx eslint --init //use style with standard
```

### Banco de Dados

- Configurações realizadas diretamente nas migrações. E o acesso ao banco se da no .env

- Com o postgres, precisa adicionar, mencionado em config/database.js

```console
npm i --save pg
```

- Rodando as migrações

```console
❯ adonis migration:run
```

Lembre-se que a ordem das migrações é a ordem de criação das tabelas no banco de dados.

#### SEED

Para alimentar o banco sem precisar sempre inserir tudo manualmente, usa-se o comando

```console
❯ adonis make:seed
```

### Plugins no Adonis

São providers e precisam de configuração, instalados com:

```console
❯ adonis install @adonisjs/validator
```

Criar controle

```console
❯ adonis make:controller Session
```

### Envio de Email

Para ouvir alteações nos models e enviar um email, precisamos de um **hook**.

```console
❯ adonis make:hook Invite
```

Para adicionar associação do hook com o model, precisa colocar metodo boot com **addHook()** no respectivo model.

- O envio de email, para rodar em background, precisa usar o **adonis-kue** (disparo de job), um o job (com make:job) e @adonisjs/redis.

- Para a autorização no projeto usamos o package https://github.com/enniel/adonis-acl, e configuramos no userTeam. Com o acl:setup vai configurar finalizar as migrations.

- Rodar migrations e seed novamente.

```console
❯ adonis migration:refresh
❯ adonis seed
```

## Web

Use essa documentaçao para eslint e prettier
https://www.youtube.com/watch?v=TI4v4Y8yRjw

vscode.config

"editor.formatOnSave": true,
"prettier.eslintIntegration": true

### gerenciamento de estados

utilizando:

- redux
- redux saga

instalações:

```console
yarn add redux react-redux redux-saga axios
```
