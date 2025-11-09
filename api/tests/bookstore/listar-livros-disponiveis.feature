# language: pt

Funcionalidade: Listar os livros disponíveis
  Como um usuário do sistema
  Eu quero listar os livros disponíveis na loja
  Para que eu possa visualizar o catálogo de livros

  Cenário: Listar todos os livros disponíveis com sucesso
    Quando eu envio uma requisição para listar os livros disponíveis
    Então a lista de livros deve ser retornada com sucesso
    E a resposta deve conter uma lista de livros
    E cada livro deve conter informações básicas
