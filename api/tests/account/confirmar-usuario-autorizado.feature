# language: pt

Funcionalidade: Confirmar se o usuário criado está autorizado
  Como um usuário cadastrado
  Eu quero verificar se estou autorizado
  Para que eu possa confirmar meu acesso ao sistema

  Cenário: Verificar se usuário criado está autorizado
    Dado que eu tenho um usuário cadastrado
    E eu gero um token de acesso para o usuário
    Quando eu envio uma requisição para verificar a autorização do usuário
    Então o usuário deve estar autorizado
    E a resposta deve confirmar que o usuário está autorizado
