'use strict';

describe('State', function () {

    var $rootScope,
        $state;

    beforeEach(function () {

        module('uvdAngularPodcastTutorialApp');

        inject(function (_$rootScope_, _$state_) {
            $rootScope = _$rootScope_;
            $state = _$state_;
        });

    });

    it('should have a search state', function () {
        expect($state.href('search')).to.equal('#/search');
        $state.go('search');
        $rootScope.$digest();
        expect($state.current.name).to.equal('search');
    });

});