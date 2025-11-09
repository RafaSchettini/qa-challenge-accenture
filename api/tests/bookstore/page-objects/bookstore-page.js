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

  addBooks(userId, isbns, token) {
    return cy.request({
      method: 'POST',
      url: `${this.baseUrl}/Books`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        userId: userId,
        collectionOfIsbns: isbns.map(isbn => ({ isbn: isbn })),
      },
      failOnStatusCode: false,
    });
  }
}

export default new BookStorePage();
