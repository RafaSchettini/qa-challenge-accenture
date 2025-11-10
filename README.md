# QA Challenge Accenture

Este projeto é um desafio técnico desenvolvido para o processo seletivo de uma vaga de QA na Accenture. O objetivo é demonstrar habilidades em automação de testes, utilizando boas práticas e padrões de desenvolvimento.

## 📋 Sobre o Projeto

O desafio consiste na automação de testes para API e Frontend, utilizando **Cypress** com **Cucumber** para implementação de testes BDD (Behavior-Driven Development).

### Tecnologias Utilizadas

- **Cypress** - Framework de automação de testes
- **Cucumber** - Framework BDD para escrita de testes em linguagem natural
- **JavaScript** - Linguagem de programação
- **Faker.js** - Geração de dados aleatórios para testes

## 🏗️ Estrutura do Projeto

```
qa-challenge-accenture/
├── api/                          # Testes de API
│   ├── tests/
│   │   ├── account/              # Testes de conta de usuário
│   │   └── bookstore/            # Testes de livraria
│   └── support/
│       └── utils/                # Utilitários e geradores de dados
├── frontend/                     # Testes de Frontend
│   ├── tests/
│   │   ├── alerts-frames-windows/ # Testes de janelas e alertas
│   │   ├── elements/             # Testes de elementos (Web Tables)
│   │   ├── forms/                # Testes de formulários
│   │   ├── interactions/         # Testes de interações (Drag and Drop)
│   │   └── widgets/              # Testes de widgets (Progress Bar)
│   └── support/
│       └── utils/                # Utilitários e geradores de dados
├── reports/                      # Relatórios de execução (API e Frontend)
├── cypress.config.js             # Configuração do Cypress
└── package.json                  # Dependências e scripts
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Extensões Recomendadas (VS Code)

Para uma melhor experiência de desenvolvimento, recomendo a instalação das seguintes extensões no VS Code:

- **Cucumber (Gherkin) Full Support** - Fornece suporte completo para sintaxe Gherkin, destacando features, cenários e steps
- **ESLint** - Ferramenta de linting para JavaScript, ajudando a manter a qualidade e consistência do código

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd qa-challenge-accenture
```

2. Instale as dependências:
```bash
npm install
```

### Executar os Testes

#### Executar todos os testes
```bash
npm test
```

#### Executar apenas testes de API
```bash
npm run test:api
```

#### Executar apenas testes de Frontend
```bash
npm run test:frontend
```

#### Abrir o Cypress em modo interativo
```bash
npm run open
```

## 📝 Funcionalidades Testadas

### API Tests
- Cadastro de usuário
- Geração de token de autenticação
- Confirmação de usuário autorizado
- Listagem de detalhes do usuário
- Listagem de livros disponíveis
- Aluguel de livros

### Frontend Tests
- Preenchimento de formulários (Practice Form)
- Abertura e validação de novas janelas
- Gerenciamento de tabelas web (CRUD)
- Teste de Progress Bar
- Ordenação de elementos (Drag and Drop)

## 🎯 Padrões e Boas Práticas Implementadas

### BDD (Behavior-Driven Development)
- Uso do **Cucumber** para escrita de testes em linguagem natural (Gherkin)
- Features escritas em português para melhor compreensão
- Separação clara entre cenários de teste e implementação

### Page Object Pattern
- Implementação do padrão Page Object para melhor organização e manutenibilidade
- Separação de responsabilidades entre page objects e step definitions
- Reutilização de código através de métodos encapsulados

### Estrutura e Organização
- Código organizado por funcionalidade
- Separação entre testes de API e Frontend
- Utilitários centralizados para geração de dados
- Step definitions organizados por feature

### Geração de Dados
- Uso do **Faker.js** para geração de dados aleatórios
- Dados dinâmicos para garantir variabilidade nos testes
- Geradores específicos por tipo de teste

## 📊 Relatórios

Os relatórios de execução são gerados automaticamente na pasta `reports/` na raiz do projeto:
- `reports/cucumber-messages.ndjson`
- `reports/cucumber-report.json`

Os relatórios incluem resultados tanto dos testes de API quanto dos testes de Frontend.

## 🔧 Configuração

O arquivo `cypress.config.js` contém as configurações principais:
- Base URL: `https://demoqa.com`
- Timeouts configurados
- Padrões de arquivos de teste
- Configuração do Cucumber preprocessor

## 📦 Dependências Principais

- `cypress`: ^13.6.0
- `@badeball/cypress-cucumber-preprocessor`: ^20.0.0
- `@faker-js/faker`: ^10.1.0

## 📄 Licença

Este projeto foi desenvolvido como parte de um desafio técnico para o processo seletivo da Accenture.
