var webpack = require('webpack-stream');
const babel = require('gulp-babel');

module.exports = function (gulp) {
    return function () {
        gulp.src('app/app.jsx')
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
                    filename: 'bundle.js'
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
            .pipe(gulp.dest('public/'));
    }
};
