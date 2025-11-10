import { Given, When } from '@badeball/cypress-cucumber-preprocessor';

Given('que eu acesso a plataforma DemoQA', () => {
  cy.visit('/', {
    failOnStatusCode: false,
    timeout: 240 * 1000,
  });

  cy.get('body', { timeout: 10000 }).should('be.visible');
});

When('eu clico no menu {string}', (menuName) => {
  cy.get('.card').contains(menuName, { timeout: 240 * 100 }).should('be.visible').click();
});
