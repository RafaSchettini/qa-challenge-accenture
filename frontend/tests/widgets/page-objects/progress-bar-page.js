class ProgressBarPage {
  constructor() {
    this.selectors = {
      startButton: '#startStopButton',
      resetButton: '#resetButton',
      progressBar: '#progressBar',
      progressBarValue: '.progress-bar',
    };
  }

  clickStartButton() {
    cy.get(this.selectors.startButton).click();
  }

  getProgressValue() {
    return cy.get(this.selectors.progressBarValue).invoke('attr', 'aria-valuenow');
  }

  waitForProgressToReach(targetValue) {
    cy.get(this.selectors.progressBarValue, { timeout: 60000 }).should(($el) => {
      const currentValue = parseInt($el.attr('aria-valuenow'));
      expect(currentValue).to.be.at.least(targetValue);
    });
  }

  stopBeforePercentage(targetPercentage) {
    const stopThreshold = targetPercentage - 5;
    cy.get(this.selectors.progressBarValue, { timeout: 30000 }).should(($el) => {
      const currentValue = parseInt($el.attr('aria-valuenow'));
      return currentValue >= stopThreshold && currentValue < targetPercentage;
    });
    cy.get(this.selectors.startButton).click();
  }

  verifyProgressIsLessOrEqual(percentage) {
    cy.get(this.selectors.progressBarValue).should(($el) => {
      const currentValue = parseInt($el.attr('aria-valuenow'));
      expect(currentValue).to.be.at.most(percentage);
    });
  }

  verifyProgressIs(percentage) {
    cy.get(this.selectors.progressBarValue).should(($el) => {
      const currentValue = parseInt($el.attr('aria-valuenow'));
      expect(currentValue).to.equal(percentage);
    });
  }

  startAndStopBefore(percentage) {
    this.clickStartButton();
    this.stopBeforePercentage(percentage);
  }

  restartAndWaitFor(percentage) {
    this.clickStartButton();
    this.waitForProgressToReach(percentage);
  }

  resetProgressBar() {
    cy.get(this.selectors.resetButton).click();
  }
}

export default new ProgressBarPage();
