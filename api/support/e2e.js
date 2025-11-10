import './commands';

Cypress.on('uncaught:exception', (err) => {
  if (
    err.message.includes('Script error') ||
    err.message.includes('cross origin') ||
    err.message.includes('ResizeObserver loop limit exceeded') ||
    err.message.includes('Non-Error promise rejection') ||
    err.message.includes('cross-origin')
  ) {
    return false;
  }
  return true;
});

const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');
  app.document.head.appendChild(style);
}
