'use strict';

/**
 *
 * @param $stateProvider
 * @param $urlRouterProvider
 * @constructor
 */
function State ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('search', {
        url: '/search',
        templateUrl: 'views/search.html'
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