const gulp = require('gulp');
const sass = require('gulp-sass');
const webserver = require('gulp-webserver');
const path = require('path');
const url = require('url');
const fs = require('fs');

gulp.task('sass', () => {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
})

gulp.task('watch', () => {
    return gulp.watch('./src/scss/*.scss', gulp.series('sass'))
})

gulp.task('server', () => {
    return gulp.src('src')
        .pipe(webserver({
            port: 8886,
            open: true,
            livereload: true,
            // middleware: () => {

            // }
        }))
})

gulp.task('dev', gulp.series('sass', 'server', 'watch'))