@Login @Capstone
  Feature: Login


    @Positif
    Scenario: Login with valid email dan password
      Given user on the sirloinPOS website
      When user click email field
     And user input email "mukhlisanshori123@gmail.com"
      When user click password field
      And user input "Mukhlis123" as password
      And user click login button

    @Negatif
    Scenario: Login with invalid email dan password
      Given user on the sirloinPOS website
      When user click email field
      And user input email "suka@example.com"
      When user click password field
      And user input "Qwerty123" as password
      And user click login button