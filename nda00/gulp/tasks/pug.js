// Pug -> HTML
// npm i gulpjs/gulp#4.0 gulp-if gulp-pug emitty
var gulp = require('gulp');
var gulpif = require('gulp-if');
var pug = require('gulp-pug');
var emitty = require('emitty').setup('src', 'pug');
var htmlbeautify = require('gulp-html-beautify');

// Your "watch" task
gulp.task('watch-pug', () => {
    // Shows that run "watch" mode
    global.watch = true;

    gulp.watch('src/**/*.pug', ['pug'])
        .on('all', (event, filepath) => {
            global.emittyChangedFile = filepath;
        });
});

gulp.task('pug', () =>
    new Promise((resolve, reject) => {
        emitty.scan(global.emittyChangedFile).then(() => {
            gulp.src('src/*.pug')
                .pipe(gulpif(global.watch, emitty.filter(global.emittyChangedFile)))
                .pipe(pug())
                .pipe(htmlbeautify(
                    {
                        "indent_size": 4,
                        "indent_char": " ",
                        "eol": "\n",
                        "indent_level": 0,
                        "indent_with_tabs": false,
                        "preserve_newlines": true,
                        "max_preserve_newlines": 10,
                        "jslint_happy": false,
                        "space_after_anon_function": false,
                        "brace_style": "collapse",
                        "keep_array_indentation": false,
                        "keep_function_indentation": false,
                        "space_before_conditional": true,
                        "break_chained_methods": false,
                        "eval_code": false,
                        "unescape_strings": false,
                        "wrap_line_length": 0,
                        "wrap_attributes": "auto",
                        "wrap_attributes_indent_size": 4,
                        "end_with_newline": false,
                        "extra_liners": ['head', 'body', 'main', 'section'],
                        "inline": ['abbr', 'area', 'audio', 'b', 'bdi', 'bdo', 'br', 'canvas', 'cite',
                        'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'iframe', 'input',
                        'ins', 'kbd', 'keygen', 'label', 'map', 'mark', 'math', 'meter', 'noscript',
                        'object', 'output', 'progress', 'q', 'ruby', 's', 'samp', 'select', 'small',
                        'span', 'strong', 'sub', 'sup', 'template', 'textarea', 'time', 'u', 'var',
                        'video', 'wbr', 'text', 'acronym', 'big', 'dt', 'ins', 'strike', 'tt']
                    }
                ))
                .pipe(gulp.dest('build'))
                .on('end', resolve)
                .on('error', reject);
        });
    })
);
