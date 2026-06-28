@Execute
Feature: Create Customer Functionality

  Scenario Outline: Validate Create Custoemr and Delete Customer Functionality
    # Given I launch chromium browser
    When I navigate application url
    Then I find login page
    When I enter username in username text field
    When I enter password in password text field
    When I click on signin button
    Then I find home page
    Given I click on customers menu
    Given I click on add customer button
    When I enter "<customername>" in customername text field
    When I enter "<customeremail>" in emailid text field
    When I enter "<customerlocation>" in location text field
    When I enter "<customerdescription>" in description text field
    When I click on save button in add customer page
    Then I find newly created "<customername>" in list customer page
    When I delete newly created "<customername>" from list customer page
    When I click on logout link
    Then I find login page
 Examples:
     | customername | customeremail | customerlocation | customerdescription |
     | auto_demo_cust1  | auto_cust1@sg.com  | Bangalore  | Automation Purpose |
