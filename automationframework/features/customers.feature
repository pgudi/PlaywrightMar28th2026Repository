Feature: Login and Logout functionality

  Scenario: Validate Login and Logout functionality
    When I navigate application url
    Then I find the login page
    When I enter username in username text field
    When I enter password in password text field
    When I click on signin button
    Then I find the home page
    When I click on Customer Menu
    When I click on Add Customer button
    When I enter customername in customer Name text field
    When I enter emailid in emailID text field
    When I enter location in location text field
    When I enter description in description text field
    When I click on save button
    Then I find newly created customername in List Customer Page
    When I delete the newly created customername from List Customer Page
    When I click on Logout Link
    Then I find the login page