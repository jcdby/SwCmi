module.exports = function (config) {
    config.set({
        browsers: [ 'PhantomJS' ], // phantom = headless browser
        singleRun: true, //just run once by default
        frameworks: [ 'jasmine' ], //use the mocha test framework
        files: [
            'src/**/**.test.js'
        ],
        preprocessors: {
            'src/**/**.test.js': [ 'webpack', 'sourcemap' ]
        },
        reporters: [ 'spec' ], //report results in this format
        specReporter: {
            maxLogLines: 5,         // limit number of lines logged per test
            suppressErrorSummary: true,  // do not print error summary
            suppressFailed: false,  // do not print information about failed tests
            suppressPassed: false,  // do not print information about passed tests
            suppressSkipped: true,  // do not print information about skipped tests
            showSpecTiming: false // print the time elapsed for each spec
        },
        webpack: { //kind of a copy of your webpack config
            devtool: 'inline-source-map', //just do inline source maps instead of the default
            module: {
                loaders: [
                    { test: /\.js$/, loader: 'babel-loader' }
                ]
            }
        },
        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        }
    });
};