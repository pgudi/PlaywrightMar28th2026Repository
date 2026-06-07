Feature: Login and Logout functionality

  Scenario: Validate Login and Logout functionality
    Given I launch chromium browser
    When I navigate application url
    Then I find the login page
    When I enter username in username text field
    When I enter password in password text field
    When I click on signin button
    Then I find the home page
    When I click on Logout Link
    Then I find the login page
