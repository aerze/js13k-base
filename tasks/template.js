const gulp = require('gulp');
const handlebars = require('handlebars');
const fs = require('fs');

function writeFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
}

function readFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) return reject(err);
      resolve(data.toString('utf8'));
    });
  });
}

gulp.task('build:template', async () => {
  const template = await readFile('./src/index.hbs');
  const result = handlebars.compile(template)();
  await writeFile('./build/index.html', result);
});

gulp.task('build:html', gulp.series(['build:js', 'build:css', 'build:assets', 'build:template']));

gulp.task('compile:template', async () => {
  const js = await readFile('./build/main.min.js');
  const css = await readFile('./build/main.min.css');
  const template = await readFile('./src/index.hbs');
  const result = handlebars.compile(template)({ js, css });
  await writeFile('./compiled/index.html', result);
});

gulp.task('compile:html', gulp.series(['compile:js', 'compile:css', 'compile:assets', 'compile:template']));
