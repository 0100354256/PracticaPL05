var gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat');
var shell = require('gulp-shell');
var del     = require('del');
var minifyHTML = require('gulp-minify-html');
var minifyCSS  = require('gulp-minify-css');
var karma   = require('gulp-karma');

gulp.task('minify', function () {
  gulp.src('javascripts/csv.js')
  .pipe(uglify())
  .pipe(gulp.dest('minified'));

  gulp.src('./index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./minified/'))

  gulp.src('./*.css')
   .pipe(minifyCSS({keepBreaks:true}))
   .pipe(gulp.dest('./minified/'))
});

gulp.task('clean', function(cb) {
  del(['minified/*'], cb);
});

gulp.task('test', function() {
  // Be sure to return the stream
  return gulp.src([])
    .pipe(karma({
      configFile: 'conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});

gulp.task('default', ['server']);

gulp.task('server', function () {
  return gulp.src('').pipe(shell([ 'node-supervisor app.js' ]));
});

gulp.task('open', function() {
  return gulp.src('').
  pipe(shell("open https://github.com/crguezl/how-jquery-works-tutorial/tree/getallparams"));
});