'use strict';

/**
 * @ngdoc function
 * @name uvdAngularPodcastTutorialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the uvdAngularPodcastTutorialApp
 */
angular.module('uvdAngularPodcastTutorialApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
