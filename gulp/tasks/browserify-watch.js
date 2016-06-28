var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var path = require('path');
var rootDir = require('../util/get-root-dir')();



module.exports = function (gulp) {

    var destFolder = path.join(rootDir, "public");
    var entryFile = path.join(rootDir, "app", 'app.jsx');
    console.log("rootDir " + rootDir);
    console.log("entryFile " + entryFile);
    console.log("destFolder " + destFolder);

    var bundler_Index = browserify({
        entries: [entryFile],
        extensions: ['.jsx', '.js'],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    });

    var bundle_Index = function (file) {
        if (file) gutil.log('Recompiling ' + file);
        return bundler_Index
            .transform("babelify", {presets: ["es2015", "stage-2", "react"]})
            .bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source('bundle.js'))
            .pipe(gulp.dest(destFolder));
    };

    bundle_Index();

    var watchifyBundler = watchify(bundler_Index);
    watchifyBundler.on('update', bundle_Index);

};

