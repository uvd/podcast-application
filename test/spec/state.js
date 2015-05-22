'use strict';

describe('State', function () {

    var $rootScope,
        $state,
        ItunesApi,
        GoogleFeedApi,
        searchStub,
        $injector,
        $stateParams,
        dummyResults;

    beforeEach(function () {

        module('uvdAngularPodcastTutorialApp');

        inject(function (_$rootScope_, _$state_, _ItunesApi_, _$injector_, _$stateParams_, _GoogleFeedApi_) {
            $rootScope = _$rootScope_;
            $state = _$state_;
            ItunesApi = _ItunesApi_;
            GoogleFeedApi = _GoogleFeedApi_;
            $injector = _$injector_;
            $stateParams = _$stateParams_;
        });

        dummyResults = [
            { name: 'Dummy result 1' },
            { name: 'Dummy result 2' }
        ];

        searchStub = {
            getList: function () {}
        };

        sinon.stub(ItunesApi, 'all', function () {
            return searchStub;
        });

        sinon.stub(searchStub, 'getList', function () {
            return dummyResults;
        });

        sinon.stub(GoogleFeedApi, 'all', function () {
            return {
                getList: function () {
                    return [
                        { title: 'episode' }
                    ];
                }
            }
        });
    });

    afterEach(function () {
        ItunesApi.all.restore();
        searchStub.getList.restore();
    });

    it('should have a search state', function () {
        expect($state.href('search')).to.equal('#/search');
        $state.go('search', { term: 'Angular Podcast' });
        $rootScope.$digest();
        expect($state.current.name).to.equal('search');
        expect(ItunesApi.all).to.have.been.calledOnce.and.calledWithExactly('search');
        expect(searchStub.getList).to.have.been.calledOnce.and.calledWithExactly({ term: 'Angular Podcast' });
        expect($injector.invoke($state.current.resolve.results)).to.equal(dummyResults);
        expect($stateParams.term).to.equal('Angular Podcast');
    });

    it('should have an episodes state', function () {
        expect($state.href('podcast')).to.equal('#/podcast');
        $state.go('podcast', { feed: 'http://feeds.com/feed.rss' });
        $rootScope.$digest();
        expect($state.current.name).to.equal('podcast');
        expect($stateParams.feed).to.equal('http://feeds.com/feed.rss');
        expect($injector.invoke($state.current.resolve.episodes)).to.deep.equal([
            { title: 'episode' }
        ]);
    });

});