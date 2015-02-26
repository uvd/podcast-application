function UserSearchesForAPodcast() {

    'use strict';
    this.World = require('../support/world.js').World;
    var searchPage = require('../page_object/search-page');

    this.Given(/^that I am on the podcast search page$/, function (callback) {
        searchPage.visit().then(callback);
    });

    this.When(/^I search for the podcast "([^"]*)"$/, function (term, callback) {
        searchPage.search(term).then(callback);
    });

    this.Then(/^I should see the following search results:$/, function (table, callback) {
        expect(searchPage.getSearchResults()).to.eventually.deep.equal(table.rows()).notify(callback);
    });

    this.Then(/^I should see no search results$/, function (callback) {
        expect(searchPage.countSearchResults()).to.eventually.equal(0).notify(callback);
    });

    this.Then(/^I should see the alert "([^"]*)"$/, function (message, callback) {
        expect(searchPage.getAlertText()).to.eventually.equal(message).notify(callback);
    });

    this.Then(/^I should not see an alert$/, function (callback) {
        expect(searchPage.hasAlert()).to.eventually.be.false.notify(callback);
    });
}

module.exports = UserSearchesForAPodcast;