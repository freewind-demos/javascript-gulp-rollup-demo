const gulp = require('gulp')
const rollup = require('gulp-rollup');
const rename = require('gulp-rename');
const { default: runCommand } = require('gulp-run-command');

gulp.task('rollup', async () => {
    return gulp.src('src/**/*.js')
        .pipe(rollup({
            // any option supported by Rollup can be set here.
            input: 'src/hello.js',
            output: {
                format: 'cjs'
            }
        }))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('build/'))
});

gulp.task('default', gulp.series(['rollup', async () => {
    return runCommand('node ./build/bundle.js')
}]))


