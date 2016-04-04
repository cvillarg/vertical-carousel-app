'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var historyApiFallback = require('connect-history-api-fallback');


// Watch files for changes & reload
gulp.task('serve', [], function() {
  browserSync({
    port: 5000,
    notify: false,
    logPrefix: 'PSK',
    snippetOptions: {
      rule: {
        match: '<span id="browser-sync-binding"></span>',
        fn: function(snippet) {
          return snippet;
        }
      }
    },
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: {
      baseDir: ['.tmp', './'],
      middleware: [historyApiFallback()]
    }
  });

  gulp.watch(['**/*.html', '!app/bower_components/**/*.html'], reload);
  //gulp.watch(['app/styles/**/*.css'], ['styles', reload]);
  gulp.watch(['**/*.js'], reload);
  //gulp.watch(['app/images/**/*'], reload);
});
