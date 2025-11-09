import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import AccountPage from '../page-objects/account-page.js';
import DataGenerator from '../../../support/utils/data-generator.js';

let userData;
let userId;

Given('que eu tenho um usuário cadastrado', () => {
  userData = DataGenerator.generateUserData();
  cy.log(`Dados do usuário gerados - Username: ${userData.userName}, Password: ${userData.password}`);

  AccountPage.createUser(userData).then((response) => {
    if (response.status === 201) {
      userId = response.body.userID;
      cy.log(`Usuário criado com ID: ${userId}`);
      cy.wrap(response).as('userCreated');
    } else {
      throw new Error(`Falha ao criar usuário: ${response.status} - ${JSON.stringify(response.body)}`);
    }
  });
});

When('eu envio uma requisição para gerar o token de acesso', () => {
  AccountPage.generateToken(userData).then((response) => {
    cy.wrap(response).as('generateTokenResponse');
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
