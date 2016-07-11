const nodemon = require('gulp-nodemon');

module.exports = function (gulp) {
    return function () {
        nodemon({
            script: 'server/index.js'
        })
            .on('restart', function () {
                console.log('restarted!')
            })
    }

};
