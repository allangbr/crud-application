Projeto de CRUD desenvolvido para a disciplina de Engenharia de Software II

## Sobre o projeto

<p>
  Esse projeto é um CRUD de Jogos e foi desenvolvido para a disciplina de Engenharia de Software II
</p>

## Dependência

- [![node-current](https://img.shields.io/node/v/next?label=Node&color=%23339933&style=for-the-badge&logo=node-dot-js)](https://nodejs.org/en/)

## Instalação

1. Após clonar o projeto na máquina, navegue até a pasta "client" e execute o comando abaixo para instalar as dependências:

```console
npm install
```

2. Após instalar as dependencias do Client, navegue até a pasta "server" e utilize o mesmo comando do passo anterior.

3. Após a instalação das dependências da aplicação server, dentro da pasta "server", crie o arquivo .env e defina o DATABASEURL da seguinte forma:
 
```console
DATABASE_URL="postgresql://myuser:mypassword@localhost:5432/mydb?schema=public"
```

4. Após isso, ainda na pasta "server" execute o seguinte comando:

```console
npx prisma generate
```

5. Após as dependências terem sido instaladas, ainda na pasta "server" execute o BackEnd:

```console
npm start devStart
```

6. Após isso, ja na pasta "client" execute o FrontEnd:

```console
npm start
```

7. Só isso! O projeto já está rodando na sua máquina! 🎉
