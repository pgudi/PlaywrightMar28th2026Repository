@Execute
Feature: Login with valid credentails

  Scenario: Validate Login functionality with valid credentials
    # Given I launch chromium browser
    When I navigate application url
    Then I find login page
    When I enter username in username text field
    When I enter password in password text field
    When I click on signin button
    Then I find home page