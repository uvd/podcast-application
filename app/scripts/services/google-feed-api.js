'use strict';
/**
 * GoogleFeedApi
 *
 * @param Restangular
 * @param GOOGLE_FEED_BASE_URL
 * @returns {*}
 * @constructor
 */
function GoogleFeedApi (Restangular, GOOGLE_FEED_BASE_URL) {

    /**
     * Configurer the Restangular instance
     *
     * @param Configurer
     * @constructor
     */
    function GoogleFeedApiConfigurer (Configurer) {

        var x2js = new X2JS();

        /**
         * Parse xml string to our expected episode format
         *
         * @param response
         * @returns {*}
         */
        function googleFeedRssParser(response) {

            var parsedJson = x2js.xml_str2json(response.responseData.xmlString);

            return _.map(parsedJson.rss.channel.item, function (episodeData) {
                return {
                    title: episodeData.title,
                    date: episodeData.date.__text,
                    url: episodeData.enclosure._url,
                    duration: episodeData.duration.__text
                }
            });

        }

        Configurer.setJsonp(true);
        Configurer.setDefaultRequestParams('jsonp', { callback: 'JSON_CALLBACK', v: '1.0', output: 'xml', num: -1 });
        Configurer.setBaseUrl(GOOGLE_FEED_BASE_URL);
        Configurer.setResponseInterceptor(googleFeedRssParser);
    }

    return Restangular.withConfig(GoogleFeedApiConfigurer);
}

/**
 * @ngdoc service
 * @name uvdAngularPodcastTutorialApp.GoogleFeedApi
 * @description
 * # GoogleFeedApi
 * Factory in the uvdAngularPodcastTutorialApp.
 */
angular.module('uvdAngularPodcastTutorialApp')
    .factory('GoogleFeedApi', GoogleFeedApi);