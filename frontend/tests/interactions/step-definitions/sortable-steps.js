import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SortablePage from '../page-objects/sortable-page.js';

When('reordeno os elementos em ordem crescente', () => {
  SortablePage.sortItemsToCorrectOrder();
});

Then('os elementos estão ordenados corretamente', () => {
  SortablePage.verifyItemsOrder();
});
