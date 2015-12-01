/**
 * MindTouch GeniusLink SDK
 * Copyright (C) 2006-2015 MindTouch, Inc.
 * www.mindtouch.com  oss@mindtouch.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
module.exports = function(config) {
    'use strict';
    config.set({
        basePath: './',
        frameworks: [ 'jspm', 'jasmine', 'phantomjs-shim' ],
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-babel-preprocessor',
            'karma-sourcemap-loader',
            'karma-coverage',
            'karma-jspm',
            'karma-phantomjs-shim'
        ],
        files: [
            'node_modules/sinon/pkg/sinon.js'
        ],
        jspm: {
            config: 'config.js',
            packages: 'jspm_packages/',
            loadFiles: [
                'test/*.test.js'
            ],
            serveFiles: [
                'geniuslink.js',
                'search.js',
                'user.js'
            ]
        },
        preprocessors: {
            'test/*.test.js': [ 'babel' ],
            'geniuslink.js': [ 'babel', 'sourcemap', 'coverage' ],
            'search.js': [ 'babel', 'sourcemap', 'coverage' ],
            'user.js': [ 'babel', 'sourcemap', 'coverage' ]
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
        browsers: [ 'PhantomJS' ],
        singleRun: true 
    });
};
