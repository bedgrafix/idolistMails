var gulp = require('gulp');

gulp.task('default', function() {
    return gulp.start('watch', 'connect', 'mjml', 'copy');
});
