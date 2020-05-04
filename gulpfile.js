const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

gulp.task('hello', (done) => {
  console.log('Привет, мир');
  done();
});

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('min-css', (done) => {
  gulp.src('./css/*.css')
    .pipe(cssmin())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest((file) => {
      return file.base;
    }));
  done();
});