'use strict';

describe('Controller: SearchformCtrl', function () {

    // load the controller's module
    beforeEach(module('uvdAngularPodcastTutorialApp'));

    var SearchformCtrl,
        scope,
        $state;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, _$state_) {
        $state = _$state_;
        scope = $rootScope.$new();
        SearchformCtrl = $controller('SearchFormCtrl as searchFormCtrl', {
            $scope: scope,
            $state: $state
        });

    }));

    it('should change the route when submitting the values', function () {
        expect(scope.searchFormCtrl.submit).to.be.a('function');
        sinon.stub($state, 'go', function () {
        }); //Stub instead of spy to prevent us from actually attempting to change state
        scope.searchFormCtrl.submit('Angular Podcasts');
        expect($state.go).to.have.been.calledOnce.and.calledWithExactly('search', {term: 'Angular Podcasts'});
        $state.go.restore();
    });

});