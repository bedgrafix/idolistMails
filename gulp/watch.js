var gulp = require('gulp');

gulp.task('watch',function(){
    gulp.watch([
        'source/*.mjml',
    ], ['mjml']);

    gulp.watch([
        'source/img/*.png',
        'source/img/**/*.png',
        'source/img/*.jpg',
        'source/img/**/*.jpg',
    ], ['copy']);
});
