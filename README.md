# wdio-cucumber-ts-framework-qatask

Page Object Model (POM): The project is structured to use POM.

# Tools Used:

WebdriverIO
Cucumber Framework
TypeScript 
appium

# Setup Instructions

Clone the repository:
 git clone <repository-url>
 cd <repository-directory>


Install dependencies:
npm install


Ensure Appium is installed globally:
npm install -g appium


Start the Appium server:
appium


 Set up a device/emulator:
    * For Android: Create an Android Virtual Device (AVD) using Android Studio.
    * For iOS: Use Xcode to set up a simulator.
    * for ios Simulator Use an available device and runtime combination in your **wdio.conf.ts** capabilities 
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

