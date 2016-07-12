const nodemon = require('gulp-nodemon');

module.exports = function () {
    return function () {
        nodemon({
            script: 'server/index.js'
        })
            .on('restart', function () {
                console.log('restarted!')
            })
    }

};
