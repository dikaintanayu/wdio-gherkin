Feature: Login to the kasirdemo Website

  Scenario Outline: As a user, I can log into the kasirdemo

    Given I am on the login page
    When I login with <email> and <password>
    Then I login the dashboard without error

    Examples:
      | email                           | password            | 
      | dikaayudi@gmail.com             | 1234                |
