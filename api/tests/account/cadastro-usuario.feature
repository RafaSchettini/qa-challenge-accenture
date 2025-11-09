# language: pt

Funcionalidade: Cadastro de Usuário
  Como um usuário do sistema
  Eu quero cadastrar um novo usuário na API
  Para que eu possa ter acesso ao sistema

  Cenário: Cadastrar um novo usuário com sucesso
    Dado que eu tenho um nome de usuário e senha válidos
    Quando eu envio uma requisição para cadastrar o usuário
    Então o usuário deve ser cadastrado com sucesso
    E eu devo receber um ID de usuário na resposta
    E a resposta deve conter o nome de usuário cadastrado
