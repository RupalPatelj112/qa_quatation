@qaquatation
Feature: QA Quotation Engine - Verify that a member is entitle to get a loan.

  As a  admin
  I want to utilise endpoint of the QA Quotation Engine API's
  So I can verify the loan been given to a member

  @sanity @interest_rate
  Scenario Outline: Verify interest rate is return
    Given Create a new member using the POST request
    When Create a new quote for the member using POST request with "<amount_to_borrow>" for "<current_salary>"
    Then Interest rate is verified from the response and not null

    Examples:
      | current_salary | amount_to_borrow |
      | 30000          | 15000            |


  @sanity @quote_offered
  Scenario Outline: Verify quoteOffered as false
#    Given registered member using the POST request
    Given Create a new member using the POST request
    When Create a new quote for the member using POST request with "<amount_to_borrow>" for "<current_salary>"
    Then quoteOffered return false
    Examples:
      | current_salary | amount_to_borrow |
      | 1000           | 2500             |

  @sanity @non_exist_member
  Scenario Outline: Verify a non-existent member
    Given Create a new quote for the non existent member using POST request with "<amount_to_borrow>" for "<current_salary>"
    Then error message appeared with 404
    Examples:
      | current_salary | amount_to_borrow |
      | 100000          | 24000            |
