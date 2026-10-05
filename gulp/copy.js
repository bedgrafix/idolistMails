var gulp = require('gulp');

gulp.task('copy', function() {
  gulp.src([
      'source/img/*.png',
      'source/img/**/*.png',
      'source/img/*.jpg',
      'source/img/**/*.jpg',
  ])
  .pipe(gulp.dest('build/img'));
});
