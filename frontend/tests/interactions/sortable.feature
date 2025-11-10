# language: pt

Funcionalidade: Sortable
  Como usuário do site DemoQA
  Eu quero testar a funcionalidade de drag and drop
  Para validar a ordenação de elementos

  Cenário: Reordenar elementos usando drag and drop
    Dado que eu estou dentro da plataforma DemoQA
    Quando eu clico no menu "Interactions"
    E clico no submenu "Sortable"
    E reordeno os elementos em ordem crescente
    Então os elementos estão ordenados corretamente
