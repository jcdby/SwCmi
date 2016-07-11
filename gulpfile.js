var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack-stream');
const babel = require('gulp-babel');
const nodemon = require('gulp-nodemon');

var nodeExternals = require('webpack-node-externals');




gulp.task('jsxcompile', function () {
  return gulp.src('app/app.jsx')
    .pipe(webpack({
      watch: true,
      externals: {
        'React': 'react'
      },
      resolve: {
        root: 'app',
        extensions: ['', '.jsx', '.js']
      },
      output: {
        filename: 'bundle.js',
      },
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
              presets: ['es2015', 'stage-0', 'react']
            }
          },
          {
            test: /\.json/,
            loader: 'json'
          }
        ]
      }
    }))
    .pipe(gulp.dest('public/'))
    .pipe(nodemon({
      script: 'server/index.js'
    })
      .on('restart', function () {
        console.log('restarted!')
      })
    )

});

gulp.task('default', ['jsxcompile'])


