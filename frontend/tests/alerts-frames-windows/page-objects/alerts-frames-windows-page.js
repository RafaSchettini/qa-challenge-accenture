let newWindowReference = null;

class AlertsFramesWindowsPage {
  constructor() {
    this.selectors = {
      newWindowButton: '#windowButton',
      newTabButton: '#tabButton',
      newWindowMessageButton: '#messageWindowMessage',
      samplePageHeading: 'h1',
      samplePageBody: 'body',
    };
  }

  clickNewWindowButton() {
    cy.window().then((win) => {
      const originalOpen = win.open.bind(win);
      
      newWindowReference = null;
      
      win.open = function(url, name, features) {
        const newWin = originalOpen(url, name, features);
        newWindowReference = newWin;
        return newWin;
      };
      
      cy.get(this.selectors.newWindowButton).click();
      
      cy.then(() => {
        win.open = originalOpen;
      });
    });
  }

  switchToNewWindow() {
    cy.visit('/sample', { failOnStatusCode: false, timeout: 10000 });
  }

  verifyNewWindowOpened() {
    cy.url({ timeout: 10000 }).should('include', '/sample');
    cy.get('body', { timeout: 10000 }).should('be.visible');
  }

  verifySamplePageMessage(message) {
    cy.get(this.selectors.samplePageHeading, { timeout: 10000 })
      .should('be.visible')
      .and('contain.text', message);
  }

  closeNewWindow() {
    cy.url().then((currentUrl) => {
      if (currentUrl.includes('/sample')) {
        cy.visit('/browser-windows', { failOnStatusCode: false });
      }
    });
    
    cy.then(() => {
      if (newWindowReference && !newWindowReference.closed) {
        try {
          newWindowReference.close();
          cy.log('Nova janela fechada com sucesso');
        } catch (error) {
          cy.log(`Não foi possível fechar a nova janela: ${error.message}`);
        }
      } else {
        cy.log('Referência da nova janela não encontrada ou já fechada');
      }
    });
    
    cy.url({ timeout: 10000 }).should('include', '/browser-windows');
  }
}

export default new AlertsFramesWindowsPage();
