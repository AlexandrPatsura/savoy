// webpack
const gulpWebpack = require('webpack-stream'); // v4
// const webpack = require('webpack'); // v4
const webpackConfig = require('../../webpack.config');

module.exports = function () {
  $.gulp.task('scripts', function () {
    return $.gulp.src($.paths.scripts.src)
    .pipe($.glp.plumber({
      errorHandler: $.glp.notify.onError(function (error) {
        return {
          title: 'Scripts',
          message: error.message
        };
      })
    }))
    // .pipe(gulpWebpack(webpackConfig, webpack))
    .pipe(gulpWebpack(webpackConfig))
    .pipe($.gulp.dest($.paths.scripts.dest));
  });
}