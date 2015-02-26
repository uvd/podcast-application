function UserSearchesForAPodcast () {

    this.Given(/^that I am on the podcast search page$/, function (callback) {
        browser.get('#/search').then(callback);
    });

    this.When(/^I search for the podcast "([^"]*)"$/, function (arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending();
    });

    this.Then(/^I should see the following search results:$/, function (table, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending();
    });

    this.Then(/^I should see the message "([^"]*)"$/, function (arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending();
    });

    this.Then(/^I should see no search results$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending();
    });

}

module.exports = UserSearchesForAPodcast;