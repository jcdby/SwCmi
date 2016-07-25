/**
 * Created by fwavresky on 7/25/2016.
 */

var path = require('path');
var rootDir = require('../util/get-root-dir')();
const eslint = require('gulp-eslint');

module.exports = function (gulp) {
    return function () {
        var configFilePath = path.join(rootDir, '.eslintrc.js');
        var jsFiles = path.join(rootDir, 'app', '**/*.js');
        var jsxFiles = path.join(rootDir, 'app', '**/*.jsx');
        return gulp
            .src([jsFiles,jsxFiles])
            .pipe(eslint(
                {
                    'configFile': configFilePath
                }
            ))
            .pipe(eslint.format());
    }
};
