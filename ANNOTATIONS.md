# Aplicação SASS

um usuário pode fazer parte da mesma empresa.

varias empresas no mesmo ambiente, mas dados e contas diferentes. EX: discord e digitalocean.

## server

- singotenan
  copia da aplicação e do banco de dados p/ cada cliente
- mulitenan
  copia da aplicação e do banco de dados mais com varios clientes usando a mesma aplicação.

### adonis

porque usa essa ferramenta.

adonis new backend --api-only
backend/ > adonis serve --dev

adonis make:model Project -m -c // roda a migration e o controle do model

adonis make:model Team -m -c

adonis make:model UserTeam -m // n*n, foi criado para caso quiser alterar dados da tabela pivô

adonis make:model Invite -m -c

* configurar o eslint do projeto
❯ yarn add eslint --dev
❯ npx eslint --init //use style with standard
