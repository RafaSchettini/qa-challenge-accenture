# language: pt

Funcionalidade: Alugar livros
  Como um usuário autorizado do sistema
  Eu quero alugar livros da loja
  Para que eu possa ter acesso aos livros que desejo ler

  Cenário: Alugar dois livros aleatórios com sucesso
    Dado que eu tenho um usuário cadastrado e autorizado
    E que eu tenho uma lista de livros disponíveis
    Quando eu alugo dois livros aleatórios
    Então os livros devem ser alugados com sucesso
