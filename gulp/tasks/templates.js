// pug
module.exports = function () {
  $.gulp.task('templates', function () {
    return $.gulp.src($.paths.templates.pages)
    .pipe($.glp.plumber({
      errorHandler: $.glp.notify.onError(function (error) {
        return {
          title: 'HTML',
          message: error.message
        };
      })
    }))
    .pipe($.glp.pug({ pretty: true }))
    .pipe($.gulp.dest($.paths.root));
  });
}