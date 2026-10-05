var gulp = require('gulp');
var mjml = require('gulp-mjml');
var connect = require('gulp-connect');

gulp.task('mjml', function () {
  gulp.src('source/*.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('build'))
    .pipe(connect.reload());
});
