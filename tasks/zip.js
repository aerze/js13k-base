const gulp = require('gulp');
const zip = require('gulp-zip');
const size = require('gulp-size');
const packageJson = require('../package.json');
const name = packageJson.project || 'game';

gulp.task('zip', () =>
  gulp
    .src('./compiled/**/*')
    .pipe(zip(`${name}.zip`))
    .pipe(size())
    .pipe(gulp.dest('./releases'))
);

gulp.task('compile:zip', gulp.series(['compile:html', 'zip']));
