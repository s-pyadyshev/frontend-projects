// SVG sprite generation
var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')();
var path = require('path');

gulp.task('svg-sprite', function () {
  return gulp
    .src(config.svg.src)
    .pipe($.svgmin(function (file) {
        var prefix = path.basename(file.relative, path.extname(file.relative));
        return {
            plugins: [{
                cleanupIDs: {
                    prefix: prefix + '-',
                    minify: true
                }
            }]
        }
    }))
    .pipe($.svgstore({inlineSvg: true}))
    .pipe($.svg2string())
    .pipe(gulp.dest(config.svgSprite.dest));
});
