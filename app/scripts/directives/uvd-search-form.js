'use strict';

/**
 *
 * @returns {{scope: {}, templateUrl: string, controller: string, controllerAs: string, restrict: string}}
 */
function uvdSearchForm() {
    return {
        scope: {},
        templateUrl: 'views/directives/uvd-search-form.html',
        controller: 'SearchFormCtrl',
        controllerAs: 'searchFormCtrl',
        restrict: 'E'
    };
}

/**
 * @ngdoc directive
 * @name angularPodcastTutorialApp.directive:uvdSearchForm
 * @description
 * # uvdSearchForm
 */
angular.module('uvdAngularPodcastTutorialApp')
    .directive('uvdSearchForm', uvdSearchForm);