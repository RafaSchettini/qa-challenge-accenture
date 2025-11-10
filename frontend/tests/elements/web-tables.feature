# language: pt

Funcionalidade: Gerenciar Web Tables
  Como usuário do site DemoQA
  Eu quero gerenciar registros em uma tabela web
  Para validar operações CRUD em tabelas

  Contexto:
    Dado que eu estou dentro da plataforma DemoQA
    Quando eu clico no menu "Elements"
    E clico no submenu "Web Tables"

  Cenário: Criar, editar e deletar registro
    Quando crio um novo registro
    E edito o registro criado
    Então o registro é deletado com sucesso

Cenário: Criar e deletar múltiplos registros
    Quando seleciono 20 itens por página
    E crio 12 novos registros
    Então todos os registros criados são deletados com sucesso
