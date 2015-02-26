'use strict';

describe('Service: ItunesApi', function () {

    // load the service's module
    beforeEach(module('uvdAngularPodcastTutorialApp'));

    // instantiate service
    var Restangular, callback, configurer;

    beforeEach(inject(function (_Restangular_) {

        Restangular = _Restangular_;

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

        it('should return Restangular with config', inject(function (ItunesApi) {
            expect(Restangular.withConfig).to.have.been.called;
        }));

        it('should set the base url to that of the itunes API', inject(function (ItunesApi) {
            callback(configurer);
            expect(configurer.setBaseUrl).to.have.been.calledWithExactly('https://itunes.apple.com/');
        }));

        it('should set Jsonp to true', inject(function (ItunesApi) {
            callback(configurer);
            expect(configurer.setJsonp).to.have.been.calledWithExactly(true);
        }));

        it('should set the default request params', inject(function (ItunesApi) {
            callback(configurer);
            expect(configurer.setDefaultRequestParams).to.have.been.calledWithExactly('jsonp', { callback: 'JSON_CALLBACK', media: 'podcast' });
        }));

    });

    it('should add a response interceptor for itunes search results', inject(function (ItunesApi) {
        var interceptor;
        var dummyResponse = {
            resultCount: 2,
            results: [
                { name: 'Podcast 1' },
                { name: 'Podcast 2' }
            ]
        };
        var interceptorResponse;
        callback(configurer);
        expect(configurer.setResponseInterceptor).to.have.been.calledOnce;
        //Get the callback we have added as a response intereceptor
        interceptor = configurer.setResponseInterceptor.getCall(0).args[0];
        interceptorResponse = interceptor(dummyResponse, 'getList', 'search', 'http://itunes.apple.com/search?term=test', {}, {});
        expect(interceptorResponse).to.deep.equal(dummyResponse.results);
    }));

});