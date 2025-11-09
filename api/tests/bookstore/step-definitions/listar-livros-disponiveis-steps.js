import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import BookStorePage from '../page-objects/bookstore-page.js';

When('eu envio uma requisição para listar os livros disponíveis', () => {
  BookStorePage.getBooks().then((response) => {
    cy.wrap(response).as('booksResponse');
  });
});

Then('a lista de livros deve ser retornada com sucesso', () => {
  cy.get('@booksResponse').then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('books');
  });
});

Then('a resposta deve conter uma lista de livros', () => {
  cy.get('@booksResponse').then((response) => {
    expect(response.body.books).to.be.an('array');
    expect(response.body.books.length).to.be.greaterThan(0);
    cy.log(`Total de livros encontrados: ${response.body.books.length}`);
  });
});

Then('cada livro deve conter informações básicas', () => {
  cy.get('@booksResponse').then((response) => {
    const books = response.body.books;
    
    books.forEach((book, index) => {
      expect(book).to.have.property('isbn');
      expect(book).to.have.property('title');
      expect(book).to.have.property('subTitle');
      expect(book).to.have.property('author');
      expect(book).to.have.property('publish_date');
      expect(book).to.have.property('publisher');
      expect(book).to.have.property('pages');
      expect(book).to.have.property('description');
      expect(book).to.have.property('website');
      
      cy.log(`Livro ${index + 1}: ${book.title} - ${book.author}`);
    });
  });
});
