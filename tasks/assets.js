const gulp = require('gulp');
const rename = require('gulp-rename');

const imagePath = './src/assets/*.png';

gulp.task('build:assets', () => gulp.src(imagePath).pipe(rename('images.png')).pipe(gulp.dest('./build')));

gulp.task('compile:assets', () => gulp.src(imagePath).pipe(rename('images.png')).pipe(gulp.dest('./compiled')));
