import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import AlertsFramesWindowsPage from '../page-objects/alerts-frames-windows-page.js';

When('clico no botão para abrir uma nova janela', () => {
  AlertsFramesWindowsPage.clickNewWindowButton();
});

Then('uma nova janela é aberta com a mensagem {string}', (message) => {
  AlertsFramesWindowsPage.switchToNewWindow();
  AlertsFramesWindowsPage.verifyNewWindowOpened();
  AlertsFramesWindowsPage.verifySamplePageMessage(message);
});

Then('fecho a nova janela', () => {
  AlertsFramesWindowsPage.closeNewWindow();
});
