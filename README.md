# Prova 2 bimestre
Nesta prova, foi desenvolviedo uma api em Nestjs

# Alunos
Pedro Afonso Cordeiro Sena
22013787-2

Renan Tonon de Oliveira
22188153-2

Emerson Tanno Brizotto
22048194-2

Kaik Dorvalo dos Santos
22093919-2

Willian Hideaki Kakihata
22015763-2

Lucas Niguti dos Santos
22019975-2

# Como rodar o trabalho

1. Clone o repositório e instale as depêndencias com `npm install`
2. Suba o container com `docker-compose up -d`
3. inicie o servidor com `npm run start:dev`

# Rotas

http://localhost:3000/users/adm_gen
`POST`
* Rota sem body apenas para criar o usuário admin

http://localhost:3000/auth/signin
`POST`
`
{
    "email": "admin@gmail.com",
    "password": "123"
}
`
* Essa rota faz o login do usuário admin que foi criado

http://localhost:3000/users/create
`POST`
``` json
{
    "name": "Kaik Santos",
    "email": "kaik@gmail.com",
    "password": "kaik123456",
    "role": "user"
}
```
* Essa rota cria um usuário. Somente um usuário com role de admin consegue criar usuários


http://localhost:3000/users/get/:id
`GET`

* Essa rota busca um usuário. Somente um usuário com role de admin consegue acessar todos os usuários.

http://localhost:3000/users/get
`GET`

* Essa rota busca todos usuário. Somente um usuário com role de admin consegue acessar todos os usuários.

http://localhost:3000/users/update/:id
`PUT`
``` json
{
    "name": "Kaik Santos",
    "email": "kaik@gmail.com",
    "password": "kaik123456",
}
```
* Essa rota atualiza um usuário. Somente um usuário com role de admin consegue atualizar qualquer usuários

http://localhost:3000/users/delete/:id
`DELETE`

* Essa rota deleta um usuário. Somente um usuário com role de admin consegue deletar um usuários.
