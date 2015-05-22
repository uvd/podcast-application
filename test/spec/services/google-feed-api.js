'use strict';

describe('Service: GoogleFeedApi', function () {

    // load the service's module
    beforeEach(module('uvdAngularPodcastTutorialApp'));

    // instantiate service
    var Restangular, callback, configurer, $http;

    beforeEach(inject(function (_Restangular_, _$http_) {

        Restangular = _Restangular_;
        $http = _$http_;

        configurer = {
            setJsonp: sinon.spy(),
            setDefaultRequestParams: sinon.spy(),
            setBaseUrl: sinon.spy(),
            setResponseInterceptor: sinon.spy()
        };

        sinon.stub(Restangular, 'withConfig', function (_callback_) {
            callback = _callback_;
            return true;
        });

    }));

    describe('Basic configuration', function () {

        it('should return Restangular with config', inject(function (GoogleFeedApi) {
            expect(Restangular.withConfig).to.have.been.called;
        }));

        it('should set Jsonp to true', inject(function (GoogleFeedApi) {
            callback(configurer);
            expect(configurer.setJsonp).to.have.been.calledWithExactly(true);
        }));

        it('should set the default request params', inject(function (GoogleFeedApi) {
            callback(configurer);
            expect(configurer.setDefaultRequestParams).to.have.been.calledWithExactly('jsonp', {
                callback: 'JSON_CALLBACK',
                v: '1.0',
                output: 'xml',
                num: -1
            });
        }));

        it('should set the base url to that specified in a constant', inject(function (GoogleFeedApi) {
            callback(configurer);
            expect(configurer.setBaseUrl).to.have.been.calledWithExactly('//ajax.googleapis.com/ajax/services/feed/');
        }));

    });

    describe('Parsing XML', function () {

        it('should parse a googleFeedApi XML response', inject(function (GoogleFeedApi) {

            var interceptor,
                parsedResponse;

            callback(configurer);
            expect(configurer.setResponseInterceptor).to.have.been.calledOnce;
            //Get the callback we have added as a response interceptor
            interceptor = configurer.setResponseInterceptor.getCall(0).args[0];

            parsedResponse = interceptor(jsonFixtures['test/spec/fixtures/googleFeedResponse'], 'getList', 'load', '//ajax.googleapis.com/ajax/services/feed/?q=test', {}, {});

            expect(parsedResponse).to.deep.equal([
                {title: '018 AiA Style Guides', date: 'Thu, 27 Nov 2014 07:00:00 -0700', url: 'http://devchat.cachefly.net/angular/AiA018StyleGuides.mp3', duration: '35:31'},
                {title: '017 AiA AtScript with Miško Hevery', date: 'Thu, 20 Nov 2014 07:00:00 -0700', url: 'http://devchat.cachefly.net/angular/AiA017AtScript.mp3', duration: '31:58'},
                {title: '016 AiA NG 1.3 and 2.0 with Brad Green, Igor Minar, and Miško Hevery', date: 'Thu, 13 Nov 2014 07:00:00 -0700', url: 'http://devchat.cachefly.net/angular/AiA016NG13&20.mp3', duration: '54:31'},
                {title: '015 AiA Angular and Kendo UI with Jesse Liberty', date: 'Thu, 06 Nov 2014 06:00:00 -0700', url: 'http://media.devchat.tv/adventures-in-angular/AiA015KendoUI.mp3', duration: '34:11'},
                {title: '014 AiA Using ES6 with Angular with Scott Allen', date: 'Thu, 30 Oct 2014 07:00:00 -0600', url: 'http://media.devchat.tv/adventures-in-angular/AiA014ES6.mp3?rss=true', duration: '38:25'},
                {title: '013 AiA Modern Web and Open Source with Scott Hanselman', date: 'Thu, 23 Oct 2014 07:00:00 -0600', url: 'http://media.devchat.tv/adventures-in-angular/AiA013ScottHanselman.mp3?rss=true', duration: '38:33'},
                {title: '012 AiA Directives', date: 'Thu, 16 Oct 2014 08:00:00 -0600', url: 'http://media.devchat.tv/adventures-in-angular/AiA012Directives.mp3?rss=true', duration: '32:25'},
                {title: '011 AiA Angular Fire with David East and Kato Wulf', date: 'Thu, 09 Oct 2014 07:00:00 -0600', url: 'http://media.devchat.tv/adventures-in-angular/AiA011AngularFire.mp3?rss=true', duration: '34:56'},
                {title: '010 AiA Preferred Backends', date: 'Thu, 02 Oct 2014 07:00:00 -0600', url: 'http://media.devchat.tv/adventures-in-angular/AiA010Backends.mp3?rss=true', duration: '34:13'},
                {title: '009 AiA ng 2.0 with Rob Eisenberg', date: 'Thu, 25 Sep 2014 07:00:00 -0600', url: 'http://media.devchat.tv/adventures-in-angular/AiA009NG2.mp3?rss=true', duration: '54:38'},
                {title: '008 AiA Angular & WebGL with Sean Griffin', date: 'Thu, 18 Sep 2014 07:00:00 -0600', url: 'http://media.devchat.tv/adventures-in-angular/AiA008WebGL.mp3?rss=true', duration: '27:40'},
                {title: '007 AiA HabitRPG', date: 'Thu, 11 Sep 2014 07:00:00 -0600', url: 'http://media.devchat.tv/adventures-in-angular/AiA007HabitRPG.mp3?rss=true', duration: '37:11'},
                {title: '006 AiA Build Processes', date: 'Thu, 04 Sep 2014 07:00:00 -0600', url: 'http://media.devchat.tv/adventures-in-angular/AiA006BuildPipelines.mp3?rss=true', duration: '38:19'},
                {title: '005 AiA Teaching Angular', date: 'Thu, 28 Aug 2014 07:00:00 -0600', url: 'http://media.devchat.tv/adventures-in-angular/AiA005Teaching.mp3?rss=true', duration: '37:33'},
                {title: '004 AiA Resources & Learning Angular', date: 'Thu, 21 Aug 2014 07:00:00 -0600', url: 'http://media.devchat.tv/adventures-in-angular/AiA004Learning.mp3?rss=true', duration: '24:01'},
                {title: '003 AiA GDEs', date: 'Thu, 14 Aug 2014 07:00:00 -0600', url: 'http://media.devchat.tv/adventures-in-angular/AiA003GDEs.mp3?rss=true', duration: '33:30'},
                {title: '002 AiA Angular Meetups with Matt Zabriskie and Sharon DiOrio', date: 'Thu, 07 Aug 2014 07:00:00 -0600', url: 'http://media.devchat.tv/adventures-in-angular/AiA002AngularMeetups.mp3?rss=true', duration: '34:37'},
                {title: '001 AiA The Birth of Angular', date: 'Thu, 31 Jul 2014 07:00:00 -0600', url: 'http://media.devchat.tv/adventures-in-angular/AiA001BirthofAngular.mp3?rss=true', duration: '47:55'}
            ]);
        }));
    });

});
