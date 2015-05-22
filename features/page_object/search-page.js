var SearchPage = {

    form: $('input[ng-model="term"]'),

    searchResults: by.repeater('podcast in searchCtrl.results'),

    errorMessage: $('#search-error-message'),

    visit: function () {
        return browser.get('#/search');
    },

    search: function (term) {
        return this.form.sendKeys(term + protractor.Key.ENTER);
    },

    getSearchResults: function () {
        return getRepeaterColumns(this.searchResults, ['collectionName', 'feedUrl']);
    },

    countSearchResults: function () {
        return getRepeaterCount(this.searchResults);
    },

    getAlertText: function () {
        return this.errorMessage.getText();
    },

    hasAlert: function () {
        return this.errorMessage.isPresent();
    },

    viewEpisodes: function (podcastName) {
        return element(by.cssContainingText('h4.media-heading', podcastName))
            .element(by.xpath('..'))
            .element(by.cssContainingText('a[ui-sref="podcast({ feed: podcast.feedUrl })"]', 'View episodes'))
            .click();
    }

};


module.exports = SearchPage;