import { ChainablePromiseElement } from 'webdriverio';

class MainMenuPage {
  // Main menu title
  private get mainMenuHeader(): ChainablePromiseElement {
    return $('ion-title > #shadow-root slot'); // Selector for the menu title inside the shadow DOM
  }

  // Method to validate the Main Menu page
  public async validateOnMainMenuPage(): Promise<void> {
    const headerText = await (this.mainMenuHeader).getText();
    expect(headerText).toEqual('Menu'); 
  }
}

export default MainMenuPage;
