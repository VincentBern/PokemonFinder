
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var runSequence = require('run-sequence');
var del = require('del');
var paths = {
  build: './build/',
  src: './src/',
  img: 'img/',
  css: 'css/',
  font: 'font/',
  js: 'js/',
  cov: 'node_modules/coveo-search-ui/bin/',
  boo: 'node_modules/bootstrap/dist/',
};

// Delete the build folder
gulp.task('clean', function() {
  return del([paths.build]);
});

// Change server port for prod version
gulp.task('server', function() {
  gulp.src([paths.src + 'server.js'])
    .pipe(replace('3000', '3001'))
    .pipe(gulp.dest(paths.build));
  });

// Bundle and minimize the files needed for the client browser
gulp.task('js', function() {

  gulp.src([paths.src + paths.js + 'index.js'], {read: false})
    .pipe(browserify())
    .pipe(uglify())
    .pipe(rename('bundle.min.js'))
    .pipe(gulp.dest(paths.src + paths.js));

    gulp.src(paths.src + paths.js + 'bundle.min.js')
    .pipe(gulp.dest(paths.build + paths.js))
});

// Moving CSS files
gulp.task('css', function(){
  gulp.src(paths.cov + 'css/CoveoFullSearchNewDesign.css')
  .pipe(gulp.dest(paths.build + paths.css))
  gulp.src(paths.src + paths.css + 'poke.css')
  .pipe(gulp.dest(paths.build + paths.css))
});

// Moving images
gulp.task('img', function(){
  gulp.src(paths.cov + 'image/*')
  .pipe(gulp.dest(paths.build + paths.img))
  gulp.src(paths.src + paths.img + '/*')
  .pipe(gulp.dest(paths.build + paths.img))
});

// Moving fonts
gulp.task('font', function(){
  gulp.src(paths.src + paths.font + '/*')
  .pipe(gulp.dest(paths.build + paths.font))
});

// Moving html
gulp.task('html', function(){
  gulp.src(paths.src + '/*.html')
  .pipe(gulp.dest(paths.build))
});

// Complete build in order
gulp.task('build', function() {
  runSequence( 'clean', ['server', 'js', 'css', 'img', 'font', 'html'])
});
