Feature: Table selection and navigation to the main menu

  Scenario: User enters a valid table number and proceeds to the main menu
    Given the user is on the "Table Selection" page
    When the user enters a valid table number
    And the user clicks on the "Continue" button
    Then the user should be taken to the "Main Menu" page
