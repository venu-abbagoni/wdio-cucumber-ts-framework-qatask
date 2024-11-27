import { ChainablePromiseElement } from 'webdriverio';

class TableSelectionPage {
  // Table input field
  private get tableInputField(): ChainablePromiseElement {
    return $('input#ion-input-0'); // Selector for the table number input field
  }

  // Continue button
  private get continueButton(): ChainablePromiseElement {
    return $('button.md.button.button-solid.ion-activatable.ion-focusable'); // Selector for the Continue button
  }

  // Method to enter table number
  public async enterTableNumber(tableNumber: string): Promise<void> {
    await (this.tableInputField).setValue(tableNumber);
  }

  // Method to click the Continue button
  public async clickContinue(): Promise<void> {
    await (this.continueButton).click();
  }
}

export default TableSelectionPage;
