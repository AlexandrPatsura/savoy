// watch bulid & livereload
const browserSync = require('browser-sync').create();

const server = function () {
  $.gulp.task('server', function () {
    browserSync.init({
      server: $.paths.root,
    });
    browserSync.watch('./build/**/*.*', browserSync.reload);
  });
}

module.exports = server;