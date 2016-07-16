var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var path = require('path');
var rootDir = require('../util/get-root-dir')();
var rename = require('gulp-rename');
//var streamify = require('gulp-streamify');
//var uglify = require('gulp-uglify');

module.exports = function (gulp) {
    return function () {
        var destFolder = path.join(rootDir, 'public');
        var entryFile = path.join(rootDir, 'app', 'app.jsx');
        console.log('rootDir ' + rootDir);
        console.log('entryFile ' + entryFile);
        console.log('destFolder ' + destFolder);

        var bundler_Index = browserify({
            entries: [entryFile],
            extensions: ['.jsx', '.js'],
            cache: {},
            packageCache: {},
        });

        var bundle_Index = function (file) {
            if (file) gutil.log('Recompiling ' + file);
            return bundler_Index
                .transform('babelify', {presets: ['es2015', 'stage-0', 'react']})
                .bundle()
                .on('error', gutil.log.bind(gutil, 'Browserify Error'))
                .pipe(source('index.js'))
                //.pipe(streamify(uglify()))
                .pipe(rename('bundle.js'))
                .pipe(gulp.dest(destFolder))
        };

        bundle_Index();

        var watchifyBundler = watchify(bundler_Index);
        watchifyBundler.on('update', bundle_Index);
        watchifyBundler.on('log', function (msg) {gutil.log('Recompiled Successfully with ' + msg)})
    }


};
