var EpisodesPage = {

    episodes: by.repeater('episode in episodesCtrl.episodes'),

    getEpisodes: function () {
        return getRepeaterColumns(this.episodes, ['title', 'date', 'duration']);
    },

    visit: function (feed) {
        return browser.get('#/podcast?feed='+feed);
    }

};

module.exports = EpisodesPage;