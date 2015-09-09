var World = function World(callback) {

    'use strict';

    var chai = require('chai');
    var chaiAsPromised = require('chai-as-promised');

    chai.use(chaiAsPromised);

    global.expect = chai.expect;
    global.Q = require('Q');
    global._ = require('lodash');

    /**
     *
     * @param results
     * @param column
     * @returns {!Promise.<RESULT>|*|!webdriver.promise.Promise.<R>}
     */
    global.getRepeaterColumn = function getRepeaterColumn(results, column) {
        return element.all(results.column(column)).then(function (c) {
            return Q.all(c.map(function (e) {
                return e.getText();
            }));
        });
    };

    /**
     *
     * @param results
     * @param table
     * @returns {*|!Promise.<RESULT>|webdriver.promise.Promise|Rx.IPromise<R>|!webdriver.promise.Promise.<R>}
     */
    global.getRepeaterColumns = function getRepeaterColumns(results, columns) {

        return Q.all(columns.map(function (e) {
            return getRepeaterColumn(results, e);
        }))
        .then(function (resolvedColumns) {
            return resolvedColumns.map(function (e, i) {
                return _.pluck(resolvedColumns, i);
            });
        });
    };

    /**
     *
     * @param results
     * @returns {Rx.Observable<number>|!webdriver.promise.Promise}
     */
    global.getRepeaterCount = function getRepeaterCount(results) {
        return element.all(results).count();
    };

    callback();

};


module.exports.World = World;
