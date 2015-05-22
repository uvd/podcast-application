'use strict';

/**
 * EpisodesCtrl
 *
 * @param episodes
 * @constructor
 */
function EpisodesCtrl(episodes) {
    this.episodes = episodes;
}

/**
 * Get the episodes
 *
 * @type {{episodes: episodes}}
 */
EpisodesCtrl.resolve = {
    episodes: function ($stateParams, GoogleFeedApi) {
        return GoogleFeedApi.all('load').getList({ q: $stateParams.feed });
    }
};

/**
 * @ngdoc function
 * @name uvdAngularPodcastTutorialApp.controller:EpisodesCtrl
 * @description
 * # EpisodesCtrl
 * Controller of the uvdAngularPodcastTutorialApp
 */
angular.module('uvdAngularPodcastTutorialApp')
    .controller('EpisodesCtrl', EpisodesCtrl);