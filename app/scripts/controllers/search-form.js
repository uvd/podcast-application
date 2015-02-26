'use strict';

function SearchFormCtrl($state) {

    this.submit = function (term) {
        $state.go('search', {term: term});
    };

}

/**
 * @ngdoc function
 * @name angularPodcastTutorialApp.controller:SearchformCtrl
 * @description
 * # SearchformCtrl
 * Controller of the angularPodcastTutorialApp
 */
angular.module('uvdAngularPodcastTutorialApp')
    .controller('SearchFormCtrl', SearchFormCtrl);