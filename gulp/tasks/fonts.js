// fonts
module.exports = function () {
  $.gulp.task('fonts', function () {
    return $.gulp.src($.paths.fonts.src)
    .pipe($.gulp.dest($.paths.fonts.dest));
  });
}