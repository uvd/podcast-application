'use strict';

describe('Controller: EpisodesCtrl', function () {

    // load the controller's module
    beforeEach(module('uvdAngularPodcastTutorialApp'));

    var EpisodesCtrl,
        scope,
        episodes =  [
            {
                title: '018 AiA Style Guides',
                date: 'Thu, 27 Nov 2014 07:00:00 -0700',
                src: 'http://devchat.cachefly.net/angular/AiA018StyleGuides.mp3',
                duration: '35:31'
            },
            {
                title: '017 AiA AtScript with Miško Hevery',
                date: 'Thu, 20 Nov 2014 07:00:00 -0700',
                src: 'http://devchat.cachefly.net/angular/AiA017AtScript.mp3',
                duration: '31:58'
            }
        ];

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        EpisodesCtrl = $controller('EpisodesCtrl as episodesCtrl', {
            $scope: scope,
            episodes: episodes
        });
    }));

    it('should assign episodes to scope', function () {
        expect(scope.episodesCtrl.episodes).to.deep.equal(episodes);
    })

});