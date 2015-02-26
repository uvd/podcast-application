'use strict';

/**
 *
 * @param results
 * @constructor
 */
function SearchCtrl (results) {
    this.results = results;
}

/**
 * Get the results
 *
 * @type {{results: results}}
 */
SearchCtrl.resolve = {

    results: function ($stateParams, ItunesApi) {
        return ItunesApi.all('search').getList({ term: $stateParams.term });
    }

};

/**
 * @ngdoc function
 * @name uvdAngularPodcastTutorialApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the uvdAngularPodcastTutorialApp
 */
angular.module('uvdAngularPodcastTutorialApp')
    .controller('SearchCtrl', SearchCtrl);
