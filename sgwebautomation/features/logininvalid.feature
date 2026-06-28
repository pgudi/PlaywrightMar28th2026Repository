@Execute
Feature: Login with Invalid credentails

  Scenario: Validate Login functionality with invalid credentials
    # Given I launch chromium browser
    When I navigate application url
    Then I find login page
    When I enter invalid username in username text field
    When I enter invalid password in password text field
    When I click on signin button
    Then I find error message Invalid username or password