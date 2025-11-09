# language: pt

Funcionalidade: Listar detalhes do usuário com livros escolhidos
  Como um usuário do sistema
  Eu quero visualizar meus detalhes e os livros que aluguei
  Para que eu possa verificar minhas informações e os livros em minha coleção

  Cenário: Listar detalhes do usuário com livros alugados
    Dado que eu tenho um usuário cadastrado e autorizado
    E que eu tenho uma lista de livros disponíveis
    Quando eu alugo dois livros aleatórios
    E eu busco os detalhes do usuário
    Então os detalhes do usuário e os livros alugados devem estar corretos
