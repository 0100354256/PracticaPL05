// Karma configuration
// Generated on Tue Mar 17 2015 22:32:44 GMT+0000 (WET)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['requirejs', 'mocha', 'chai', 'jasmine'],


    // list of files / patterns to load in the browser
    files: [
       {pattern: 'test/mocha.css', included: true, served: true},
       'javascripts/underscore-min.js',
       'javascripts/jquery.min.js',
       'index.html',
       'javascripts/csv.js',
       'test/test_index.html',
       'test/chai.js',
       'test/mocha.js',
       'test-main.js',
       'test/*.js'
    ],

    client: {
      mocha: {
        ui: 'tdd'
      }
    },

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'index.html': ['html2js'],
      'test/test_index.html': ['html2js']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};