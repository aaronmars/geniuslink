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
'use strict';

var jspm = require('jspm');
var gulp = require('gulp');
var cached = require('gulp-cached');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var KarmaServer = require('karma').Server;

/*** sub tasks ***/
gulp.task('build', function(cb) {
    var out = 'dist/geniuslink.js';
    jspm.bundleSFX('index', out, {
        minify: false,
        sourceMaps: true,
        sourceMapContents: true
    }).then(function() {
        gulp.src(out)
            .pipe(plumber())
            .pipe(sourcemaps.init({ loadMaps: true }))
            .pipe(uglify())
            .pipe(rename({ extname: '.min.js' }))
            .pipe(sourcemaps.write('/'))
            .pipe(gulp.dest('dist'));
        cb();
    }).catch(function(err) {
        cb(err);
    });
});

gulp.task('test', function(done) {
    new KarmaServer({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('inspect', function() {
    var eslint = require('gulp-eslint');
    return gulp.src([ '*.js', 'test/*.js' ])
        .pipe(cached('inspect'))
        .pipe(eslint({ rulePaths: [ 'eslint-rules/' ], configFile: '.eslintrc' }))
        .pipe(eslint.format('stylish'));
});

/*** main tasks ***/
gulp.task('default', [ 'inspect', 'build', 'test' ]);
