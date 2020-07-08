// watch src
const watch = function () {
  $.gulp.task('watch', function () {
    $.gulp.watch($.paths.fonts.src, $.gulp.series('fonts'));
    $.gulp.watch($.paths.templates.src, $.gulp.series('templates'));
    $.gulp.watch($.paths.styles.src, $.gulp.series('styles'));
    $.gulp.watch($.paths.images.src, $.gulp.series('images'));
    $.gulp.watch($.paths.sprites.src, $.gulp.series('sprites'));
    $.gulp.watch($.paths.scripts.src, $.gulp.series('scripts'));
  });
}
module.exports = watch;

