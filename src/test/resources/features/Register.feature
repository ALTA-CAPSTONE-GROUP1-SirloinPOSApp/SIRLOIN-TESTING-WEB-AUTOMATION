@Register @Capstone
  Feature: Sirloin register user
    Scenario: Register with valid input
      When user click register field
      When user click nama bisnis/toko fields
      And user input nama bisnis / toko "Toko Barokah"
      When user click email field on register
      And user input "mukhlisanshori1997@gmail.com" as email
      When user click password field on register
      And user input "Mukhlis123" as password on register
      When user click alamat fields
      And user input "jl malang" as alamat
      And user click register button

