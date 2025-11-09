import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import AccountPage from '../page-objects/account-page.js';

When('eu envio uma requisição para gerar o token de acesso', () => {
  cy.get('@userData').then((userData) => {
    AccountPage.generateToken(userData).then((response) => {
      cy.wrap(response).as('generateTokenResponse');
    });
  });
});

Then('o token deve ser gerado com sucesso', () => {
  cy.get('@generateTokenResponse').then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('token');
    expect(response.body).to.have.property('expires');
    expect(response.body).to.have.property('status');
    expect(response.body).to.have.property('result');
    expect(response.body.status).to.eq('Success');
    expect(response.body.result).to.eq('User authorized successfully.');
  });
});

Then('eu devo receber um token válido na resposta', () => {
  cy.get('@generateTokenResponse').then((response) => {
    expect(response.body.token).to.exist;
    expect(response.body.token).to.be.a('string');
    expect(response.body.token.length).to.be.greaterThan(0);
    cy.log(`Token gerado: ${response.body.token.substring(0, 20)}...`);
  });
});

Then('a resposta deve conter informações de expiração', () => {
  cy.get('@generateTokenResponse').then((response) => {
    expect(response.body.expires).to.exist;
    expect(response.body.expires).to.be.a('string');
    const expiresDate = new Date(response.body.expires);
    expect(expiresDate.getTime()).to.be.greaterThan(Date.now());
  });
});
