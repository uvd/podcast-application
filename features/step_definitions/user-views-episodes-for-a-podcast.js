function UserViewsEpisodesForAPodcast() {

    'use strict';
    this.World = require('../support/world.js').World;
    var searchPage = require('../page_object/search-page');
    var episodePage = require('../page_object/episodes-page');

    this.When(/^I click to view episodes for the podcast "([^"]*)"$/, function (podcastTitle, callback) {
        searchPage.viewEpisodes(podcastTitle).then(callback);
    });

    this.Then(/^I should be on the episodes page for the podcast with feed "([^"]*)"$/, function (feed, callback) {
        browser.getLocationAbsUrl().then(function (url) {
            expect(decodeURIComponent(url)).to.equal('http://127.0.0.1:9003/#/podcast?feed=' + feed);
            callback();
        });
    });

    this.When(/^I am on the episodes view for the podcast with feed "([^"]*)"$/, function (feed, callback) {
        episodePage.visit(feed).then(callback);
    });

    this.Then(/^I should see the following podcast episodes:$/, function (table, callback) {
        expect(episodePage.getEpisodes()).to.eventually.deep.equal(table.rows()).notify(callback);
    });

}

module.exports = UserViewsEpisodesForAPodcast;