import { Given, When, Then } from '@wdio/cucumber-framework';
import TableSelectionPage from '../../src/pages/TableSelectionPage';
import MainMenuPage from '../../src/pages/MainMenuPage';

const tableSelectionPage = new TableSelectionPage();
const mainMenuPage = new MainMenuPage();

Given('the user is on the {string} page', async (page: string) => {
  if (page === "Table Selection") {
    await browser.url('https://order.jdwetherspoon.com/venue/pubs/95/tables');
  }
});

When('the user enters a valid table number', async () => {
  await tableSelectionPage.enterTableNumber('102'); // Replace with the actual valid table number
});

When('the user clicks on the {string} button', async (button: string) => {
  if (button === "Continue") {
    await tableSelectionPage.clickContinue();
  }
});

Then('the user should be taken to the {string} page', async (page: string) => {
  if (page === "Main Menu") {
    await mainMenuPage.validateOnMainMenuPage(); // Ensure we're on the Main Menu page
  }
});

Then('the main menu title should be displayed', async () => {
  await mainMenuPage.validateOnMainMenuPage();
});
