# language: pt

Funcionalidade: Preencher Practice Form
  Como um usuário do site DemoQA
  Eu quero preencher o formulário Practice Form
  Para que eu possa testar a funcionalidade de formulários

  Cenário: Acessar o Practice Form
    Dado que eu estou dentro da plataforma DemoQA
    Quando eu clico no menu "Forms"
    E clico no submenu "Practice Form"
    E preencho o formulário com dados aleatórios
    E submeto o formulário
    Então o popup de confirmação é exibido
    E fecho o popup
