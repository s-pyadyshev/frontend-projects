var gulp = require("gulp");
var config = require("../config");

gulp.task(
    "html",
    config.wrapPipe(function (success, error) {
        return gulp
            .src(config.pug.src)
            .pipe(
                changed(config.pug.dest, {
                    extension: ".html",
                })
            )
            .pipe(gulp.dest(config.pug.dest));
    })
);
