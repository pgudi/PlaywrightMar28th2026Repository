@Execute
Feature: Launch and Navigate Application

  Scenario: Navigate Application URL
    # Given I launch chromium browser
    When I navigate application url
    Then I find login page