var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    reload = browserSync.reload;

gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: 'src/'
        }
    });
    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch('src/*.html').on('change', reload);
    gulp.watch('src/js/*.js').on('change', reload);
});

gulp.task('sass', function(){
    gulp.src('src/sass/*.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('src/css'))
    .pipe(reload({
        stream: true
    }));
});
gulp.task('default', ['serve']);