@Register @Capstone
  Feature: Sirloin register user
    Scenario: Register with valid input
      When user click register field
      And user input nama bisnis / toko "Toko Barokah"
      And user input "mukhlisanshori1997@gmail.com" as email
      And user input password register have value "Mukhlis11111"
      And user input nomor telephone "08111111111"
      And user input "jl malang" as alamat

