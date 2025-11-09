import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import AccountPage from '../page-objects/account-page.js';
import DataGenerator from '../../../support/utils/data-generator.js';

let userData;

Given('que eu tenho um nome de usuário e senha válidos', () => {
  userData = DataGenerator.generateUserData();
  cy.log(`Dados do usuário gerados - Username: ${userData.userName}, Password: ${userData.password}`);
});

When('eu envio uma requisição para cadastrar o usuário', () => {
  AccountPage.createUser(userData).then((res) => {
    cy.wrap(res).as('createUserResponse');
  });
});

Then('o usuário deve ser cadastrado com sucesso', () => {
  cy.get('@createUserResponse').then((res) => {
    expect(res.status).to.eq(201);
    expect(res.body).to.have.property('userID');
    expect(res.body).to.have.property('username');
  });
});

Then('eu devo receber um ID de usuário na resposta', () => {
  cy.get('@createUserResponse').then((res) => {
    expect(res.body.userID).to.exist;
    expect(res.body.userID).to.be.a('string');
    expect(res.body.userID.length).to.be.greaterThan(0);
    cy.log(`ID do usuário criado: ${res.body.userID}`);
  });
});

Then('a resposta deve conter o nome de usuário cadastrado', () => {
  cy.get('@createUserResponse').then((res) => {
    expect(res.body.username).to.exist;
    expect(res.body.username).to.be.a('string');
    expect(res.body.username).to.eq(userData.userName);
  });
});
