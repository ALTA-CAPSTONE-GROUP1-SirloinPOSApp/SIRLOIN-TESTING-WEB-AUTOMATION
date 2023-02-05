@Login @Capstone
  Feature: Login

    Scenario: Login with valid email dan password
      Given user on the sirloinPOS website
      When user click email field
      And user input email "mukhlisanshori123@gmail.com"
      When user click password field
      And user input "Mukhlis123" as password
      Then user click login button