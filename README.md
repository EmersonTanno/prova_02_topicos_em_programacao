# Trabalho 2 bimestre
Neste trabalho, foi desenvolviedo uma api em Nestjs que possui as seguinte funcionalidades:

1. Criação de usuários
2. Utilização de permissões (roles) para cada usuário
3. Autenticação com JWT para as requisições
4. Encriptação de senha por meio do algoritmo de hash bcrypt
5. Criação de um usuário administrador
6. Criação de usuários comuns

# Como rodar o trabalho

1. Intale o mongodb community
2. clone o repositório e instale as depêndencias com `npm install`
3. inicie o servidor com `npm run start:dev`

#Rotas

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
`
{
    "name": "Kaik Santos",
    "email": "kaik@gmail.com",
    "password": "kaik123456",
    "roles": "user"
}
`
* Essa rota cria um usuário. Somente um usuário com role de admin consegue criar usuários


