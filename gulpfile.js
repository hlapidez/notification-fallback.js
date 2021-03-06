'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync');
var stylish = require('jshint-stylish');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


// hinting and linting js files
gulp.task('js', function () {
    return gulp.src('*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('compress', function () {
	return gulp.src('dist/notification.js')
		.pipe(uglify())
		.pipe(rename({
			extname: '.min.js'
		}))
		.pipe(gulp.dest('dist/'));
});

// init browser sync via live reloads
gulp.task('browser', function () {
    browserSync.init(['*.html', 'dist/*.js'], {
        server: {
            baseDir: ['./']
        }
    });
});

// watch file changes
gulp.task('watch', function () {
    gulp.watch('dist/*.js', ['js']);
});


gulp.task('default', ['js', 'watch', 'browser']);