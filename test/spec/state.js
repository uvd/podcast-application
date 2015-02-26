'use strict';

describe('State', function () {

    var $rootScope,
        $state,
        $injector,
        ItunesApi,

        searchResults,
        searchStub;

    beforeEach(function () {

        module('uvdAngularPodcastTutorialApp');

        searchResults = [
            { name: 'Dummy result 1' },
            { name: 'Dummy result 2' }
        ];

        searchStub = {
            getList: function () {}
        };

        sinon.stub(searchStub, 'getList', function () {
            return searchResults;
        });

        inject(function (_$rootScope_, _$state_, _$injector_, _ItunesApi_) {
            $rootScope = _$rootScope_;
            $state = _$state_;
            $injector = _$injector_;
            ItunesApi = _ItunesApi_;

            sinon.stub(ItunesApi, 'all', function () {
                return searchStub;
            });

        });

    });

    it('should have a search state', function () {
        expect($state.href('search')).to.equal('#/search');
        $state.go('search', { term: 'Angular Podcast' });
        $rootScope.$digest();
        expect($state.current.name).to.equal('search');
        expect(ItunesApi.all).to.have.been.calledOnce.and.calledWithExactly('search');
        expect(searchStub.getList).to.have.been.calledOnce.and.calledWithExactly({ term: 'Angular Podcast' });
        expect($injector.invoke($state.current.resolve.results)).to.equal(searchResults);
    });

});