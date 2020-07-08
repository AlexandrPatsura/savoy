// svg
const svgSprite      = require('gulp-svg-sprite');
const spriteConfig   = require('../../sprite.config.js');

module.exports = function () {
  $.gulp.task('sprites', function () {
    return $.gulp.src($.paths.sprites.src)
    .pipe($.glp.plumber({
      errorHandler: $.glp.notify.onError(function (error) {
        return {
          title: 'Sprites',
          message: error.message
        };
      })
    }))
    .pipe($.glp.svgmin({
      js2svg: {
        pretty: true
      }
    }))
    .pipe($.glp.cheerio({
      run: function ($) {
        $('[fill]').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
      },
      parserOptions: {
        xmlMode: true
      }
    }))
    // .pipe(replace('&gt;', '>'))
    .pipe(svgSprite(spriteConfig, svgSprite))
    .pipe($.gulp.dest($.paths.sprites.dest));
  });
}