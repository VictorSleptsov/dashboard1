const { src, dest, watch } = require('gulp');


const scss = require('gulp-sass')(require('sass'));

function styles() {
    return src('scss/main.scss')
        .pipe(scss())
        .pipe(dest('css'))
}

function watching() {
    watch(['scss/**/*.scss'], styles)
}

exports.styles = styles;
exports.watching = watching;