class SortablePage {
  constructor() {
    this.selectors = {
      listItem: '.list-group-item',
      gridTab: '#demo-tab-grid',
      listTab: '#demo-tab-list',
    };
  }

  dragAndDrop(sourceIndex, targetIndex) {
    cy.get(this.selectors.listItem).eq(sourceIndex).trigger('mousedown', { button: 0, force: true });
    cy.get(this.selectors.listItem).eq(targetIndex).trigger('mousemove', { force: true }).trigger('mouseup', { force: true });
  }

  dragAndDropByText(sourceText, targetText) {
    cy.get(this.selectors.listItem).contains(sourceText).trigger('mousedown', { button: 0, force: true });
    cy.get(this.selectors.listItem).contains(targetText).trigger('mousemove', { force: true }).trigger('mouseup', { force: true });
  }

  sortItemsToCorrectOrder() {
    const expectedOrder = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
    
    const sortItem = (index) => {
      if (index >= expectedOrder.length) {
        return;
      }
      
      const expectedText = expectedOrder[index];
      const targetIndex = index;
      
      cy.get(this.selectors.listItem).then(($items) => {
        const currentOrder = Array.from($items).map((item) => item.textContent.trim());
        const currentIndex = currentOrder.findIndex((text) => text.includes(expectedText));
        
        if (currentIndex !== targetIndex && currentIndex !== -1) {
          this.dragAndDrop(currentIndex, targetIndex);
          cy.get(this.selectors.listItem).eq(targetIndex).should('contain.text', expectedText);
        }
        
        cy.then(() => {
          sortItem(index + 1);
        });
      });
    };
    
    sortItem(0);
  }

  verifyItemPosition(itemText, expectedIndex) {
    cy.get(this.selectors.listItem).eq(expectedIndex).should('contain.text', itemText);
  }

  verifyItemsOrder() {
    const expectedOrder = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
    cy.get(this.selectors.listItem).filter(':visible').each(($el, index) => {
      cy.wrap($el).should('contain.text', expectedOrder[index]);
    });
  }

  clickGridTab() {
    cy.get(this.selectors.gridTab).click();
  }

  clickListTab() {
    cy.get(this.selectors.listTab).click();
  }
}

export default new SortablePage();
