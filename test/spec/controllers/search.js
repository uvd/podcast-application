'use strict';

describe('Controller: SearchCtrl', function () {

    // load the controller's module
    beforeEach(module('uvdAngularPodcastTutorialApp'));

    var SearchCtrl,
        scope,
        results;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {

        results = [
            {name: 'One'},
            {name: 'Two'}
        ];

        scope = $rootScope.$new();
        SearchCtrl = $controller('SearchCtrl as searchCtrl', {
            $scope: scope,
            results: results
        });

    }));

    it('should set the results on to scope', function () {
        expect(scope.searchCtrl.results).to.equal(results);
    });

});