# language: pt

Funcionalidade: Abrir Nova Janela
  Como usuário do site DemoQA
  Eu quero abrir uma nova janela
  Para validar a funcionalidade de múltiplas janelas

  Cenário: Abrir e validar nova janela
    Dado que eu estou dentro da plataforma DemoQA
    Quando eu clico no menu "Alerts, Frame & Windows"
    E clico no submenu "Browser Windows"
    E clico no botão para abrir uma nova janela
    Então uma nova janela é aberta com a mensagem "This is a sample page"
    E fecho a nova janela
