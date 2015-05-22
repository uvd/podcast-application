var RoboHydraHead = require("robohydra").heads.RoboHydraHead,
    fs = require('fs');

exports.getBodyParts = function () {
    return {
        heads: [
            new RoboHydraHead({
                path: '/load',
                handler: function (req, res) {

                    fs.readFile('test/spec/fixtures/googleFeedResponse.json', "utf8", function(error, data) {
                        var response = req.queryParams.callback + '(' + JSON.stringify(data) + ');';
                        res.send(response);
                    });

                }
            })
        ]
    };
};