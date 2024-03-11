// browserUtils.js
export class BrowserUtils {
    static launchBrowser(url) {
      cy.visit(url);
    }
  
    static closeBrowser() {
      // No direct way to close browser in Cypress
      // Cypress automatically handles browser lifecycle
      cy.window().then(win => {
        win.close();
      });
    }
  }
  
  Cypress.Commands.add('launchBrowser', (url) => {
    BrowserUtils.launchBrowser(url);
  });
  
  Cypress.Commands.add('closeBrowser', () => {
    BrowserUtils.closeBrowser();
  });
  