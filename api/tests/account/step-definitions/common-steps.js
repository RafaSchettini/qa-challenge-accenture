import { Given } from '@badeball/cypress-cucumber-preprocessor';
import AccountPage from '../page-objects/account-page.js';
import DataGenerator from '../../../support/utils/data-generator.js';

Given('que eu tenho um usuário cadastrado', () => {
  const userData = DataGenerator.generateUserData();
  cy.log(`Dados do usuário gerados - Username: ${userData.userName}, Password: ${userData.password}`);

  cy.wrap(userData).as('userData');

  AccountPage.createUser(userData).then((response) => {
    if (response.status === 201) {
      const userId = response.body.userID;
      cy.log(`Usuário criado com ID: ${userId}`);
      cy.wrap(response).as('userCreated');
    } else {
      throw new Error(`Falha ao criar usuário: ${response.status} - ${JSON.stringify(response.body)}`);
    }
  });
});
