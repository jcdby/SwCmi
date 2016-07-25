var gulp = require('./gulp_repo')();

gulp.task('default', ['webpack-watch']);
gulp.task('server', ['server-watch']);
gulp.task('dev', ['webpack-watch', 'server-watch']);

gulp.task('test', ['unit-tests']);