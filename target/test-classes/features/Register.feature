@Register @Capstone @Positive
  Feature: Sirloin register user
    Scenario: Register with valid input
      When user click register field
      And user input nama bisnis / toko "Toko Barokah"
      And user input "mukhlisanshori1997@gmail.com" as email
      And user input password register have value "Mukhlis11111"
      And user input nomor telephone "08111111111"
      And user input "jl malang" as alamat

@Register @Capstone @Negative
    Scenario: Register with null values nama bisnis atau toko
      When user click register field
      And user input "mukhlisanshori1997@gmail.com" as email
      And user input password register have value "Mukhlis11111"
      And user input nomor telephone "08111111111"
      And user input "jl malang" as alamat
      Then button register should be disable

    @Register @Capstone @Negative
    Scenario: Register with null values email
      When user click register field
      And user input nama bisnis / toko "Toko Barokah"
      And user input password register have value "Mukhlis11111"
      And user input nomor telephone "08111111111"
      And user input "jl malang" as alamat
      Then button register should be disable

    @Register @Capstone @Negative
    Scenario: Register with null values password
      When user click register field
      And user input nama bisnis / toko "Toko Barokah"
      And user input "mukhlisanshori1997@gmail.com" as email
      And user input nomor telephone "08111111111"
      And user input "jl malang" as alamat
      Then button register should be disable

    @Register @Capstone @Negative
    Scenario: Register with null values nomor telephone
      When user click register field
      And user input nama bisnis / toko "Toko Barokah"
      And user input "mukhlisanshori1997@gmail.com" as email
      And user input password register have value "Mukhlis11111"
      And user input "jl malang" as alamat
      Then button register should be disable

    @Register @Capstone @Negative
    Scenario: Register with null values alamat
      When user click register field
      And user input nama bisnis / toko "Toko Barokah"
      And user input "mukhlisanshori1997@gmail.com" as email
      And user input password register have value "Mukhlis11111"
      And user input nomor telephone "08111111111"
      Then button register should be disable

