const gulp = require('gulp');
const rollup = require('rollup');
const { terser } = require('rollup-plugin-terser');
const localResolve = require('rollup-plugin-local-resolve');

gulp.task('build:js', async () => {
  const bundle = await rollup.rollup({
    input: './src/index.js',
    plugins: [localResolve(), terser()],
  });

  await bundle.write({
    file: './build/main.js',
    format: 'es',
    sourcemap: true,
  });
});

gulp.task('compile:js', async () => {
  const bundle = await rollup.rollup({
    input: './src/index.js',
    plugins: [localResolve(), terser()],
  });

  await bundle.write({
    file: './build/main.min.js',
    format: 'es',
    sourcemap: true,
  });
});
