const gulp = require('gulp');
require('./tasks/assets');
require('./tasks/css');
require('./tasks/js');
require('./tasks/template');
require('./tasks/watch');
require('./tasks/zip');

gulp.task('default', () => {
  console.log("\nPlease use npm run <script>, don't use gulp directly.\n");
});
