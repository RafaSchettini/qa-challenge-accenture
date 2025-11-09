import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import AccountPage from '../page-objects/account-page.js';

When('eu busco os detalhes do usuário', () => {
  cy.get('@userCreated').then((userCreated) => {
    cy.get('@authToken').then((token) => {
      AccountPage.getUserDetails(userCreated.body.userID, token).then((response) => {
        cy.wrap(response).as('userDetailsResponse');
      });
    });
  });
});

Then('os detalhes do usuário e os livros alugados devem estar corretos', () => {
  cy.get('@userDetailsResponse').then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('userId');
    expect(response.body).to.have.property('username');
    expect(response.body).to.have.property('books');
    expect(response.body.books).to.be.an('array');

    cy.get('@userCreated').then((userCreated) => {
      cy.get('@userData').then((userData) => {
        expect(response.body.userId).to.eq(userCreated.body.userID);
        expect(response.body.username).to.eq(userData.userName);
      });
    });

    cy.get('@selectedIsbns').then((selectedIsbns) => {
      expect(response.body.books.length).to.eq(2);
      const userBookIsbns = response.body.books.map(book => book.isbn);
      selectedIsbns.forEach((isbn) => {
        expect(userBookIsbns).to.include(isbn);
      });
    });
  });
});
