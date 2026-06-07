Feature: Customer Scenarios

  Scenario: Validate Display Customer 
    Given I execute authenticate POST HTTP method
    Given I capture the authentication token
    When I execute display customer GET HTTP method
    When I capture response body of specific customer
    Then I validate 200 status code for display customer