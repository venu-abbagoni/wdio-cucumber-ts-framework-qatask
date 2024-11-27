# wdio-cucumber-ts-framework-qatask

Page Object Model (POM): The project is structured to use POM.

# Tools and Technologies Used:

WebdriverIO,
Cucumber Framework,
TypeScript, 
Node.js
appium,


# Setup and Installation
Follow these steps to set up the project locally:

Clone the repository:
 git clone <repository-url>
 cd <repository-directory>


Install dependencies:
npm install


Ensure Appium is installed globally:
npm install -g appium


 Running the Test Start Appium Server:       
 [Run appium on your terminal to ensure the server is up and running.(for mobile simulation)]
 
 appuim

or
 Set up a device/emulator:
    * For Android: Create an Android Virtual Device (AVD) using Android Studio.
    * For iOS: Use Xcode to set up a simulator.
    * for ios Simulator Use an available device. for runtime combination in your **wdio.conf.ts** capabilities 
       capabilities: [
  {
    platformName: 'iOS',
    'appium:deviceName': 'iPhone 13',
    'appium:platformVersion': '15.5',
    'appium:automationName': 'XCUITest',
  },
];

# Running the Tests

npm test    


# How It Works
Feature File: The tableSelection.feature contains the Gherkin scenario to simulate user actions on the table selection page.
Step Definitions: The tableSelection.steps.ts file implements the Gherkin steps to automate the scenario.
Page Objects:
TableSelectionPage.ts: Contains methods for interacting with the table selection page.
MainMenuPage.ts: Contains methods for verifying the main menu page.
