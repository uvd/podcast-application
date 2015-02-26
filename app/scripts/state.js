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