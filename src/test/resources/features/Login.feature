@Login @Capstone
  Feature: Login
    As a user i want login to website sirloinPOS

  Scenario: Login with valid email and password
    Given user open the website SirloinPOS
    When user click Email field
    And user input email "mukhlisanshori123@gmail.com"
    When user click password field
    And user input password "Mukhlis123"
    And user click login button