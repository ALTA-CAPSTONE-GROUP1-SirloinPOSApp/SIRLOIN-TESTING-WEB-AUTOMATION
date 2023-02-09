Feature: Laporan Transaksi
  @ProductTenant @Positive @Capstone
  Scenario: Verify menu laporan transaksi is enable
    Given user on the sirloinPOS website
    When user login with input "mukhlisanshori1997@gmail.com" as email and "Mukhlis11111" as password
    And verify succes login title "Berhasil Login"
    And user click menu laporan transaksi
    Then verify title menu "Laporan Transaksi"

  @ProductTenant @Positive @Capstone
  Scenario: Verify menu date is enable
    Given user on the sirloinPOS website
    When user login with input "mukhlisanshori1997@gmail.com" as email and "Mukhlis11111" as password
    And verify succes login title "Berhasil Login"
    And user click menu laporan transaksi
    Then verify title menu "Laporan Transaksi"
    And user click date from
    And user set date from
    And user click date until
    And user set date until