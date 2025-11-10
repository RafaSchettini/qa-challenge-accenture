import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import PracticeFormPage from '../page-objects/practice-form-page.js';
import FormDataGenerator from '../../../support/utils/form-data-generator.js';

When('preencho o formulário com dados aleatórios', () => {
  const formData = FormDataGenerator.generatePracticeFormData();
  PracticeFormPage.fillForm(formData);
  PracticeFormPage.uploadFile('frontend/tests/forms/files/test-file.txt');
});

When('submeto o formulário', () => {
  PracticeFormPage.submitForm();
});

Then('o popup de confirmação é exibido', () => {
  PracticeFormPage.verifyModalIsVisible();
});

Then('fecho o popup', () => {
  PracticeFormPage.closeModal();
});
