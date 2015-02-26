Feature: User searches for a podcast

  As a user of the podcast application
  I want to search for podcasts that I know
  In order to be able to find episodes to listen to

  Background:
    Given that I am on the podcast search page

  Scenario: User finds positive results for their search query
    When I search for the podcast "JavaScript"
    Then I should see the following search results:
      | Title                   | Feed                                             |
      | The Javascript Show     | http://feeds.feedburner.com/the-javascript-show  |
      | JavaScript Jabber       | http://feeds.feedwrench.com/JavaScriptJabber.rss |
    And I should not see an alert

  Scenario: User finds no results for their podcast query
    When I search for the podcast "07yfabOAgiuae"
    Then I should see no search results
    And I should see the alert "No search results"