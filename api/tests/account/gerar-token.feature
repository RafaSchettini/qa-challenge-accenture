# language: pt

Funcionalidade: Geração de Token de Acesso
  Como um usuário cadastrado
  Eu quero gerar um token de acesso
  Para que eu possa autenticar minhas requisições

  Cenário: Gerar token de acesso com sucesso
    Dado que eu tenho um usuário cadastrado
    Quando eu envio uma requisição para gerar o token de acesso
    Então o token deve ser gerado com sucesso
    E eu devo receber um token válido na resposta
    E a resposta deve conter informações de expiração
