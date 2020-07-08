// images
// const webp = require('gulp-webp');
const cache = require('gulp-cache');

module.exports = function () {
  $.gulp.task('images', function () {
    return $.gulp.src($.paths.images.src) // {since: $.glp.gulp.lastRun('images')})
    .pipe(cache($.glp.imagemin([
      // $.glp.imagemin.gifsicle({ interlaced: true }),
      $.glp.imagemin.jpegtran({ progressive: true }),
      $.glp.imagemin.optipng({ optimizationLevel: 5 }),
      // $.glp.imagemin.svgo({
      //   plugins: [
      //     { removeViewBox: true },
      //     { cleanupIDs: false }
      //   ]
      // })
    ], {
      verbose: true
    })))
    .pipe($.glp.webp({ quality: 85 }))
    .pipe($.gulp.dest($.paths.images.dest));
  });
}