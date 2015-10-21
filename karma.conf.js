module.exports = function(config) {
    'use strict';
    config.set({
        basePath: './',
        frameworks: [ 'jspm', 'jasmine' ],
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-babel-preprocessor',
            'karma-sourcemap-loader',
            'karma-coverage',
            'karma-jspm'
        ],
        files: [
            'test/mock-ajax.js'
        ],
        exclude: [
            'karma.conf.js',
            'index.js',
            'geniuslink.js',
            'gulpfile.js'
        ],
        jspm: {
            loadFiles: [
                'test/mock/*.js',
                'test/search.test.js'
            ],
            serveFiles: [
                'search.js'
            ]
        },
        preprocessors: {
            'search.js': [ 'babel', 'sourcemap', 'coverage' ],
            // 'user.js':  [ 'babel', 'sourcemap', 'coverage' ],
            'test/*.test.js': [ 'babel' ],
            'test/mock/*.mock.js': [ 'babel' ],
            'test/**/*.test.js': [ 'babel' ]
        }, 
        babelPreprocessor: {
            options: {
                modules: 'system',
                sourceMap: 'inline'
            },
            sourceFileName: function(file) {
                return file.originalPath;
            }
        },
        reporters: [ 'progress', 'coverage' ],
        coverageReporter: {
            instrumenters: { isparta: require('isparta') },
            instrumenter: {
                '*.js': 'isparta'
            },
            reporters: [
                { type: 'text' }
            ]
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true 
    });
};
