class BookStorePage {
  constructor() {
    this.baseUrl = '/BookStore/v1';
  }

  getBooks() {
    return cy.request({
      method: 'GET',
      url: `${this.baseUrl}/Books`,
      failOnStatusCode: false,
    });
  }
}

export default new BookStorePage();
