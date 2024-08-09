const gulp = require('gulp');
const connect = require('gulp-connect');

// Задача для запуска локального сервера
gulp.task('connect', function() {
  connect.server({
    root: 'src',
    livereload: true,
    port: 8080
  });
});

// Задача для перезагрузки страницы при изменении HTML
gulp.task('html', function() {
  return gulp.src('./src/*.html')
    .pipe(connect.reload());
});

// Задача для отслеживания изменений в HTML-файлах
gulp.task('watch', function() {
  gulp.watch(['./src/*.html'], gulp.series('html'));
});

// Задача по умолчанию
gulp.task('default', gulp.parallel('connect', 'watch'));
