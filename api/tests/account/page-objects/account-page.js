class AccountPage {
  constructor() {
    this.baseUrl = '/Account/v1';
  }

  createUser(userData) {
    return cy.request({
      method: 'POST',
      url: `${this.baseUrl}/User`,
      body: {
        userName: userData.userName,
        password: userData.password,
      },
      failOnStatusCode: false,
    });
  }

  generateToken(credentials) {
    return cy.request({
      method: 'POST',
      url: `${this.baseUrl}/GenerateToken`,
      body: {
        userName: credentials.userName,
        password: credentials.password,
      },
      failOnStatusCode: false,
    });
  }

  isAuthorized(credentials) {
    return cy.request({
      method: 'POST',
      url: `${this.baseUrl}/Authorized`,
      body: {
        userName: credentials.userName,
        password: credentials.password,
      },
      failOnStatusCode: false,
    });
  }

  getUserDetails(userId, token) {
    return cy.request({
      method: 'GET',
      url: `${this.baseUrl}/User/${userId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      failOnStatusCode: false,
    });
  }
}

export default new AccountPage();
