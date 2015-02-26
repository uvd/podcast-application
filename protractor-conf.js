// A reference configuration file.
exports.config = {
    // ----- How to setup Selenium -----
    //
    // There are three ways to specify how to use Selenium. Specify one of the
    // following:
    //
    // 1. seleniumServerJar - to start Selenium Standalone locally.
    // 2. seleniumAddress - to connect to a Selenium server which is already
    //    running.
    // 3. sauceUser/sauceKey - to use remote Selenium servers via SauceLabs.
    //
    // If the chromeOnly option is specified, no Selenium server will be started,
    // and chromeDriver will be used directly (from the location specified in
    // chromeDriver)

    // The location of the selenium standalone server .jar file, relative
    // to the location of this config. If no other method of starting selenium
    // is found, this will default to
    // node_modules/protractor/selenium/selenium-server...
    // seleniumServerJar: null,
    // The port to start the selenium server on, or null if the server should
    // find its own unused port.
    // seleniumPort: null,
    // Chromedriver location is used to help the selenium standalone server
    // find chromedriver. This will be passed to the selenium jar as
    // the system property webdriver.chrome.driver. If null, selenium will
    // attempt to find chromedriver using PATH.
    // chromeDriver: './selenium/chromedriver',
    // If true, only chromedriver will be started, not a standalone selenium.
    // Tests for browsers other than chrome will not run.
    chromeOnly: false,
    // Additional command line options to pass to selenium. For example,
    // if you need to change the browser timeout, use
    // seleniumArgs: ['-browserTimeout=60'],
    seleniumArgs: [],

    // If sauceUser and sauceKey are specified, seleniumServerJar will be ignored.
    // The tests will be run remotely using SauceLabs.
    // sauceUser: null,
    // sauceKey: null,

    // The address of a running selenium server. If specified, Protractor will
    // connect to an already running instance of selenium. This usually looks like
    // seleniumAddress: 'http://localhost:4444/wd/hub'
    seleniumAddress: null,

    // The timeout for each script run on the browser. This should be longer
    // than the maximum time your application needs to stabilize between tasks.
    allScriptsTimeout: 11000,

    // ----- What tests to run -----
    //
    // Spec patterns are relative to the location of this config.
    specs: [
        'features/*.feature',
        // 'features/user_archives_a_user_story.feature'
    ],

    // Patterns to exclude.
    exclude: [],

    // Alternatively, suites may be used. When run without a command line parameter,
    // all suites will run. If run with --suite=smoke, only the patterns matched
    // by that suite will run.
    // suites: {
    //     smoke: 'spec/smoketests/*.js',
    //     full: 'spec/*.js'
    // },

    // Maximum number of total browser sessions to run. Tests are queued in
    // sequence if number of browser sessions is limited by this parameter.
    // Use a number less than 1 to denote unlimited. Default is unlimited.
    maxSessions: -1,

    // ----- Capabilities to be passed to the webdriver instance ----
    //
    // For a list of available capabilities, see
    // https://code.google.com/p/selenium/wiki/DesiredCapabilities
    // and
    // https://code.google.com/p/selenium/source/browse/javascript/webdriver/capabilities.js
    // Additionally, you may specify count, shardTestFiles, and maxInstances.
    capabilities: {
        browserName: 'chrome',

        // Number of times to run this set of capabilities (in parallel, unless
        // limited by maxSessions). Default is 1.
        count: 1,

        // If this is set to be true, specs will be sharded by file (i.e. all
        // files to be run by this set of capabilities will run in parallel).
        // Default is false.
        shardTestFiles: false,

        // Maximum number of browser instances that can run in parallel for this
        // set of capabilities. This is only needed if shardTestFiles is true.
        // Default is 1.
        maxInstances: 1
    },

    // If you would like to run more than one instance of webdriver on the same
    // tests, use multiCapabilities, which takes an array of capabilities.
    // If this is specified, capabilities will be ignored.
    multiCapabilities: [],

    // ----- More information for your tests ----
    //
    // A base URL for your application under test. Calls to protractor.get()
    // with relative paths will be prepended with this.
    baseUrl: 'http://127.0.0.1:9003',

    // Selector for the element housing the angular app - this defaults to
    // body, but is necessary if ng-app is on a descendant of <body>
    rootElement: 'body',

    // A callback function called once protractor is ready and available, and
    // before the specs are executed
    // You can specify a file containing code to run by setting onPrepare to
    // the filename string.
    onPrepare: function () {
        // Disable animations so e2e tests run more quickly
        'use strict';
        var width = 1280;
        var height = 800;
        browser.driver.manage().window().setSize(width, height);
        var disableNgAnimate = function () {

            jQuery.fn.animate = function () {
                return this;
            };

            angular.module('disableNgAnimate', []).run(function ($animate) {
                $animate.enabled(false);
            });

        };

        browser.addMockModule('disableNgAnimate', disableNgAnimate);

    },

    // The params object will be passed directly to the protractor instance,
    // and can be accessed from your test. It is an arbitrary object and can
    // contain anything you may need in your test.
    // This can be changed via the command line as:
    //   --params.login.user 'Joe'
    // params: {
    //     login: {
    //         user: 'Jane',
    //         password: '1234'
    //     }
    // },

    // ----- The test framework -----
    //
    // Jasmine and Cucumber are fully supported as a test and assertion framework.
    // Mocha has limited beta support. You will need to include your own
    // assertion framework if working with mocha.

    framework: 'cucumber',

    // ----- Options to be passed to cucumber -----
    cucumberOpts: {
        // Require files before executing the features.
        require: ['features/support/hooks.js', 'features/step_definitions/*.js'],
        // Only execute the features or scenarios with tags matching @dev.
        // This may be an array of sttags: '@dev',rings to specify multiple tags to include.
        //
        // How to format features (default: progress)
        format: 'pretty'
    },

    // ----- The cleanup step -----
    //
    // A callback function called once the tests have finished running and
    // the webdriver instance has been shut down. It is passed the exit code
    // (0 if the tests passed or 1 if not).
    onCleanUp: function () {
    }
};
