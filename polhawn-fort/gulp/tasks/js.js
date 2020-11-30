var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')();
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var fileinclude = require('gulp-file-include');
var prod = gutil.env.prod;

gulp.task('js', ['js-app']);

gulp.task('js-app', function() {
    return gulp.src(config.js.src.app)
        .pipe($.plumber())
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file',
            indent: true
        }))
        .pipe(prod ? gutil.noop() : $.sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        // .pipe(prod ? $.rename({suffix: '.min'}) : gutil.noop())
        .pipe(prod ? uglify() : gutil.noop())
        // .pipe(prod ? gutil.noop() : $.sourcemaps.write() )
        .pipe(gulp.dest(config.js.dest))
});

gulp.task('js-vendor', function() {
    return gulp.src(config.js.src.vendor)
        .pipe($.plumber())
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file',
            indent: true
        }))
        .pipe(prod ? gutil.noop() : $.sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        // .pipe(prod ? $.rename({suffix: '.min'}) : gutil.noop())
        .pipe(prod ? uglify() : gutil.noop())
        // .pipe(prod ? gutil.noop() : $.sourcemaps.write() )
        .pipe(gulp.dest(config.js.dest))
});

// gulp.task('uikit-icons', function() {
//     return gulp.src(config.js.src.vendor)
//         .pipe(fileinclude({
//             prefix: '@@',
//             basepath: '@file',
//             indent: true
//         }))
//         .pipe($.rename({suffix: '.min'}))
//         .pipe(gulp.dest(config.js.dest))
// });
