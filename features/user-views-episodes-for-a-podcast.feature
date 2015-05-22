Feature: User views episodes for a podcast

  As a user of the podcast application
  I want to see the episodes for a particular podcast
  In order to select an episode that I want to listen to

  Scenario: User clicks through to the podcast view from search results
    Given that I am on the podcast search page
    When I search for the podcast "JavaScript"
    And I click to view episodes for the podcast "JavaScript Jabber"
    Then I should be on the episodes page for the podcast with feed "http://feeds.feedwrench.com/JavaScriptJabber.rss"

  Scenario: User views the episodes for a podcast
    When I am on the episodes view for the podcast with feed "http://feeds.feedwrench.com/JavaScriptJabber.rss"
    Then I should see the following podcast episodes:
      | Title                                                                | Date                            | Duration |
      | 018 AiA Style Guides                                                 | Thu, 27 Nov 2014 07:00:00 -0700 | 35:31    |
      | 017 AiA AtScript with Miško Hevery                                   | Thu, 20 Nov 2014 07:00:00 -0700 | 31:58    |
      | 016 AiA NG 1.3 and 2.0 with Brad Green, Igor Minar, and Miško Hevery | Thu, 13 Nov 2014 07:00:00 -0700 | 54:31    |