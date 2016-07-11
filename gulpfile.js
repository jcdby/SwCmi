var gulp = require('./gulp_repo')();

gulp.task('default', ['webpack-watch']);
gulp.task('server', ['server-watch']);
