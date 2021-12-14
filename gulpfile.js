const gulp = require('gulp')
const sass = require('gulp-sass')

const compiler = sass(require('sass'))

const compileScss = () => {
    return gulp.src('./src/scss/**/*.scss', {sourcemaps: true})
    .pipe(compiler().on('error', compiler.logError))
    .pipe(gulp.dest('./src/styles', {sourcemaps: '.'}))
}

const watch = () => {
    gulp.watch('./src/scss/**/*.scss', compileScss)
}

exports.default = watch
exports.compile = compileScss