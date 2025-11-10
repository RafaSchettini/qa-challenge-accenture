# language: pt

Funcionalidade: Progress Bar
  Como usuário do site DemoQA
  Eu quero testar a funcionalidade de Progress Bar
  Para validar o controle de progresso

  Cenário: Validar progresso da barra
    Dado que eu estou dentro da plataforma DemoQA
    Quando eu clico no menu "Widgets"
    E clico no submenu "Progress Bar"
    E inicio a progress bar e paro antes dos 25%
    Então o valor da progress bar é menor ou igual a 25%
    Quando reinicio e aguardo a progress bar chegar a 100%
    Então o valor da progress bar é 100%
    E a progress bar é resetada
