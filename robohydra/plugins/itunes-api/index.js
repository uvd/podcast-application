var RoboHydraHead = require("robohydra").heads.RoboHydraHead;

exports.getBodyParts = function (conf) {
    return {
        heads: [
            new RoboHydraHead({
                path: '/search',
                handler: function (req, res) {

                    var response,
                        responseData;

                    if (req.queryParams.term === 'JavaScript') {

                        responseData = {
                            resultCount: 2,
                            results: [
                                {"wrapperType": "track", "kind": "podcast", "collectionId": 442109513, "trackId": 442109513, "artistName": "hi@javascriptshow.com (The Javascript Show)", "collectionName": "The Javascript Show", "trackName": "The Javascript Show", "collectionCensoredName": "The Javascript Show", "trackCensoredName": "The Javascript Show", "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-javascript-show/id442109513?mt=2&uo=4", "feedUrl": "http://feeds.feedburner.com/the-javascript-show", "trackViewUrl": "https://itunes.apple.com/us/podcast/the-javascript-show/id442109513?mt=2&uo=4", "artworkUrl30": "http://a4.mzstatic.com/us/r30/Podcasts/6a/ba/86/ps.kgrwrfsj.30x30-50.jpg", "artworkUrl60": "http://a3.mzstatic.com/us/r30/Podcasts/6a/ba/86/ps.kgrwrfsj.60x60-50.jpg", "artworkUrl100": "http://a2.mzstatic.com/us/r30/Podcasts/6a/ba/86/ps.kgrwrfsj.100x100-75.jpg", "collectionPrice": 0.00, "trackPrice": 0.00, "trackRentalPrice": 0, "collectionHdPrice": 0, "trackHdPrice": 0, "trackHdRentalPrice": 0, "releaseDate": "2013-03-01T23:16:00Z", "collectionExplicitness": "notExplicit", "trackExplicitness": "notExplicit", "trackCount": 8, "country": "USA", "currency": "USD", "primaryGenreName": "Tech News", "radioStationUrl": "https://itunes.apple.com/station/idra.442109513", "artworkUrl600": "http://a3.mzstatic.com/us/r30/Podcasts/6a/ba/86/ps.kgrwrfsj.600x600-75.jpg", "genreIds": ["1448", "26", "1318"], "genres": ["Tech News", "Podcasts", "Technology"]},
                                {"wrapperType": "track", "kind": "podcast", "artistId": 825701899, "collectionId": 496893300, "trackId": 496893300, "artistName": "DevChat.tv", "collectionName": "JavaScript Jabber", "trackName": "JavaScript Jabber", "collectionCensoredName": "JavaScript Jabber", "trackCensoredName": "JavaScript Jabber", "artistViewUrl": "https://itunes.apple.com/us/artist/devchat.tv/id825701899?mt=2&uo=4", "collectionViewUrl": "https://itunes.apple.com/us/podcast/javascript-jabber/id496893300?mt=2&uo=4", "feedUrl": "http://feeds.feedwrench.com/JavaScriptJabber.rss", "trackViewUrl": "https://itunes.apple.com/us/podcast/javascript-jabber/id496893300?mt=2&uo=4", "artworkUrl30": "http://a3.mzstatic.com/us/r30/Podcasts/v4/42/f8/13/42f813c0-0de4-0609-e2c5-9954f543eaf9/mza_3131735023717016958.30x30-50.jpg", "artworkUrl60": "http://a5.mzstatic.com/us/r30/Podcasts/v4/42/f8/13/42f813c0-0de4-0609-e2c5-9954f543eaf9/mza_3131735023717016958.60x60-50.jpg", "artworkUrl100": "http://a4.mzstatic.com/us/r30/Podcasts/v4/42/f8/13/42f813c0-0de4-0609-e2c5-9954f543eaf9/mza_3131735023717016958.100x100-75.jpg", "collectionPrice": 0.00, "trackPrice": 0.00, "trackRentalPrice": 0, "collectionHdPrice": 0, "trackHdPrice": 0, "trackHdRentalPrice": 0, "releaseDate": "2014-10-29T13:00:00Z", "collectionExplicitness": "notExplicit", "trackExplicitness": "notExplicit", "trackCount": 131, "country": "USA", "currency": "USD", "primaryGenreName": "Training", "radioStationUrl": "https://itunes.apple.com/station/idra.496893300", "artworkUrl600": "http://a2.mzstatic.com/us/r30/Podcasts/v4/42/f8/13/42f813c0-0de4-0609-e2c5-9954f543eaf9/mza_3131735023717016958.600x600-75.jpg", "genreIds": ["1470", "26", "1304", "1318", "1480"], "genres": ["Training", "Podcasts", "Education", "Technology", "Software How-To"]}
                            ]
                        }

                    } else {

                        responseData = {
                            resultCount: 0,
                            results: []
                        };

                    }

                    response = req.queryParams.callback + '(' + JSON.stringify(responseData) + ');';

                    res.send(response);
                }
            })
        ]
    };
};