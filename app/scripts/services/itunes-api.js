'use strict';


function ItunesApi(Restangular, ITUNES_BASE_URL) {

    /**
     * If search results, only return the results.
     *
     * @param data          the response data
     * @param operation
     * @param what
     * @returns Array
     */
    function searchResponseInterceptor (data, operation, what) {

        if (operation === 'getList' && what === 'search') {
            return data.results;
        }

        return data;
    }

    return Restangular.withConfig(function (RestangularConfigurer) {
        RestangularConfigurer.setBaseUrl(ITUNES_BASE_URL);
        RestangularConfigurer.setJsonp(true);
        RestangularConfigurer.setDefaultRequestParams('jsonp', { callback: 'JSON_CALLBACK', media: 'podcast' });
        RestangularConfigurer.setResponseInterceptor(searchResponseInterceptor);
    });

}

/**
 * @ngdoc service
 * @name uvdAngularPodcastTutorialApp.ItunesApi
 * @description
 * # ItunesApi
 * Service in the uvdAngularPodcastTutorialApp.
 */
angular.module('uvdAngularPodcastTutorialApp')
    .service('ItunesApi', ItunesApi);
