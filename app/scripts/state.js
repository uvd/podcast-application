'use strict';

/**
 *
 * @param $stateProvider
 * @param $urlRouterProvider
 * @constructor
 */
function State ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('search', {
        url: '/search?term',
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
        controllerAs: 'searchCtrl',
        resolve: SearchCtrl.resolve
    });

    $stateProvider.state('podcast', {
        url: '/podcast?feed',
        templateUrl: 'views/podcast.html',
        controller: 'EpisodesCtrl',
        controllerAs: 'episodesCtrl',
        resolve: EpisodesCtrl.resolve
    });

    $urlRouterProvider.otherwise('/search');

}

/**
 * @ngdoc state
 * @name uvdAngularPodcastTutorialApp
 * @description
 * # uvdAngularPodcastTutorialApp
 *
 * States of the application.
 */
angular.module('uvdAngularPodcastTutorialApp').config(State);