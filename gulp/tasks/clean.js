// clean
const del = require('del');

const clean = function () {
  $.gulp.task('clean', function () {
    return del($.paths.root)
  });
}

module.exports = clean;