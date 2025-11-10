import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ProgressBarPage from '../page-objects/progress-bar-page.js';

When('inicio a progress bar e paro antes dos {int}%', (percentage) => {
  ProgressBarPage.startAndStopBefore(percentage);
});

When('reinicio e aguardo a progress bar chegar a {int}%', (percentage) => {
  ProgressBarPage.restartAndWaitFor(percentage);
});

Then('o valor da progress bar é menor ou igual a {int}%', (percentage) => {
  ProgressBarPage.verifyProgressIsLessOrEqual(percentage);
});

Then('o valor da progress bar é {int}%', (percentage) => {
  ProgressBarPage.verifyProgressIs(percentage);
});

Then('a progress bar é resetada', () => {
  ProgressBarPage.resetProgressBar();
});
