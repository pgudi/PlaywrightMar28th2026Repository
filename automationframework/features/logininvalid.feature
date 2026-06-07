Feature: Login with invalid credentials

  Scenario: Validate Login with invalid credentials
    Given I launch chromium browser
    When I navigate application url
    Then I find the login page
    When I enter invalid username in username text field
    When I enter invalid password in password text field
    When I click on signin button
    Then I find message Invalid username or password