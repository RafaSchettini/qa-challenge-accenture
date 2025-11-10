import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import WebTablesPage from '../page-objects/web-tables-page.js';
import WebTableDataGenerator from '../../../support/utils/web-table-data-generator.js';

When('seleciono {int} itens por página', (size) => {
  WebTablesPage.selectPageSize(size);
});

When('crio um novo registro', () => {
  const recordData = WebTableDataGenerator.generateTableRecord();
  cy.wrap(recordData).as('recordData');
  WebTablesPage.createRecord(recordData);
  WebTablesPage.verifyRecordExists(recordData.email);
});

When('crio {int} novos registros', (quantity) => {
  const records = [];
  for (let i = 0; i < quantity; i++) {
    const recordData = WebTableDataGenerator.generateTableRecord();
    records.push(recordData);
    WebTablesPage.createRecord(recordData);
    WebTablesPage.verifyRecordExists(recordData.email);
  }
  cy.wrap(records).as('createdRecords');
});

When('edito o registro criado', () => {
  cy.get('@recordData').then((originalData) => {
    const updatedData = WebTableDataGenerator.generateTableRecord();
    updatedData.email = originalData.email;
    cy.wrap(updatedData).as('updatedRecordData');
    WebTablesPage.editRecordByEmail(originalData.email, updatedData);
    WebTablesPage.verifyRecordExists(updatedData.email);
  });
});

Then('o registro é deletado com sucesso', () => {
  cy.get('@updatedRecordData').then((data) => {
    WebTablesPage.deleteRecordByEmail(data.email);
    WebTablesPage.verifyRecordNotExists(data.email);
  });
});

Then('todos os registros criados são deletados com sucesso', () => {
  cy.get('@createdRecords').then((records) => {
    const emails = records.map((record) => record.email);
    WebTablesPage.deleteAllRecordsByEmails(emails);
    emails.forEach((email) => {
      WebTablesPage.verifyRecordNotExists(email);
    });
  });
});
