'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync');
var stylish = require('jshint-stylish');


// hinting and linting js files
gulp.task('js', function () {
    return gulp.src('*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

//init browser sync via live reloads
gulp.task('browser', function () {
    browserSync.init(['*.html', '*.js'], {
        server: {
            baseDir: './'
        }
    });
});

// watch file changes
gulp.task('watch', function () {
    gulp.watch('*.js', ['js']);
});


gulp.task('default', ['js', 'watch', 'browser']);