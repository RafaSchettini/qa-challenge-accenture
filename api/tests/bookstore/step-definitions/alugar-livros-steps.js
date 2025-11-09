import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import BookStorePage from '../page-objects/bookstore-page.js';

Given('que eu tenho uma lista de livros disponíveis', () => {
  BookStorePage.getBooks().then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('books');
    expect(response.body.books).to.be.an('array');
    expect(response.body.books.length).to.be.greaterThan(0);
    cy.wrap(response.body.books).as('availableBooks');
    cy.log(`Total de livros disponíveis: ${response.body.books.length}`);
  });
});

When('eu alugo dois livros aleatórios', () => {
  cy.get('@availableBooks').then((books) => {
    expect(books.length).to.be.at.least(2, 'Deve haver pelo menos 2 livros disponíveis');

    // Selecionar dois livros aleatórios
    const shuffled = [...books].sort(() => 0.5 - Math.random());
    const selectedBooks = shuffled.slice(0, 2);
    const selectedIsbns = selectedBooks.map(book => book.isbn);

    cy.log(`Livros selecionados: ${selectedBooks.map(b => b.title).join(', ')}`);

    // Alugar os livros
    cy.get('@userCreated').then((userCreated) => {
      cy.get('@authToken').then((token) => {
        BookStorePage.addBooks(userCreated.body.userID, selectedIsbns, token).then((response) => {
          cy.wrap(response).as('rentBooksResponse');
          cy.wrap(selectedIsbns).as('selectedIsbns');
        });
      });
    });
  });
});

Then('os livros devem ser alugados com sucesso', () => {
  cy.get('@rentBooksResponse').then((response) => {
    expect(response.status).to.eq(201);
    expect(response.body).to.have.property('books');
    expect(response.body.books).to.be.an('array');
    expect(response.body.books.length).to.be.greaterThan(0);

    // Verificar se os livros alugados correspondem aos selecionados
    cy.get('@selectedIsbns').then((selectedIsbns) => {
      const rentedIsbns = response.body.books.map(book => book.isbn);
      selectedIsbns.forEach((isbn) => {
        expect(rentedIsbns).to.include(isbn);
      });
    });

    cy.log(`Livros alugados com sucesso: ${response.body.books.length}`);
  });
});
