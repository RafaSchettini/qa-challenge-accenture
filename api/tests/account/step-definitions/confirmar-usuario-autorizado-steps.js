import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import AccountPage from '../page-objects/account-page.js';

When('eu gero um token de acesso para o usuário', () => {
  cy.get('@userData').then((userData) => {
    AccountPage.generateToken(userData).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('token');
      cy.wrap(response).as('tokenResponse');
    });
  });
});

When('eu envio uma requisição para verificar a autorização do usuário', () => {
  cy.get('@userData').then((userData) => {
    AccountPage.isAuthorized(userData).then((response) => {
      cy.wrap(response).as('authorizedResponse');
    });
  });
});

Then('o usuário deve estar autorizado', () => {
  cy.get('@authorizedResponse').then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.be.true;
  });
});

Then('a resposta deve confirmar que o usuário está autorizado', () => {
  cy.get('@authorizedResponse').then((response) => {
    expect(response.body).to.be.true;
    cy.log('Usuário confirmado como autorizado');
  });
});
