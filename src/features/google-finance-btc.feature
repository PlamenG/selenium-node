Feature: Evaluate BTC price

  @run  
  Scenario Outline: Scenario Outline name: Evaluate BTC price
    Given Google finance page for BTC-USD is opened
    When BTC-USD price is observed every <N> seconds for <M> minutes
    Then BTC-USD price is evaluated for 30 seconds
    Examples:
    | N | M   |
    | 1 | 1  |
    # | 3 | 10  |
    # | 5 | 10  |