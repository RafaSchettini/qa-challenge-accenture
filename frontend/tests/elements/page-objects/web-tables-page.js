class WebTablesPage {
  constructor() {
    this.selectors = {
      addButton: '#addNewRecordButton',
      firstNameInput: '#firstName',
      lastNameInput: '#lastName',
      emailInput: '#userEmail',
      ageInput: '#age',
      salaryInput: '#salary',
      departmentInput: '#department',
      submitButton: '#submit',
      editButton: '[title="Edit"]',
      deleteButton: '[title="Delete"]',
      tableRow: '.rt-tr-group',
      tableCell: '.rt-td',
      modal: '.modal-content',
      pageSizeSelect: 'select[aria-label="rows per page"]',
    };
  }

  selectPageSize(size) {
    cy.get(this.selectors.pageSizeSelect).select(size.toString());
  }

  clickAddButton() {
    cy.get(this.selectors.addButton).click();
    cy.get(this.selectors.modal, { timeout: 10000 }).should('be.visible');
  }

  fillRegistrationForm(data) {
    cy.get(this.selectors.firstNameInput, { timeout: 10000 }).should('be.visible').clear().type(data.firstName);
    cy.get(this.selectors.lastNameInput).clear().type(data.lastName);
    cy.get(this.selectors.emailInput).clear().type(data.email);
    cy.get(this.selectors.ageInput).clear().type(data.age);
    cy.get(this.selectors.salaryInput).clear().type(data.salary);
    cy.get(this.selectors.departmentInput).clear().type(data.department);
  }

  submitForm() {
    cy.get(this.selectors.submitButton).click();
  }

  createRecord(data) {
    this.clickAddButton();
    this.fillRegistrationForm(data);
    this.submitForm();
  }

  findRowByEmail(email) {
    return cy.get(this.selectors.tableRow).contains(email).closest(this.selectors.tableRow);
  }

  editRecordByEmail(email, newData) {
    this.findRowByEmail(email).within(() => {
      cy.get(this.selectors.editButton).click();
    });
    this.fillRegistrationForm(newData);
    this.submitForm();
  }

  deleteRecordByEmail(email) {
    this.findRowByEmail(email).within(() => {
      cy.get(this.selectors.deleteButton).click();
    });
  }

  verifyRecordExists(email) {
    cy.get(this.selectors.tableRow).contains(email).should('be.visible');
  }

  verifyRecordNotExists(email) {
    cy.get('body').should('not.contain', email);
  }

  deleteAllRecordsByEmails(emails) {
    emails.forEach((email) => {
      this.deleteRecordByEmail(email);
    });
  }
}

export default new WebTablesPage();
