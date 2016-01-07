// Include gulp
var gulp = require('gulp');

// Include Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var inlineCss = require('gulp-inline-css');
var minifyHTML = require('gulp-minify-html');
var webp = require('gulp-webp');
var inlinesource = require('gulp-inline-source');

gulp.task('inlinesource', function () {
    return gulp.src('./src/*.html')
        .pipe(inlinesource())
        .pipe(gulp.dest('./dist'));
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src('./src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
gulp.task('lint2', function() {
    return gulp.src('./src/views/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});
gulp.task('scripts2', function() {
    return gulp.src('./src/views/js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./dist/views/js'))
        .pipe(rename('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/views/js'));
});

//inline css and minify html
gulp.task('inline', function() {
  var opts = {
    conditionals: true,
    spare:true
  };
    return gulp.src('./src/*.html')
        .pipe(inlineCss())
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('./dist'));
});

gulp.task('minify', function() {
  var opts = {
    conditionals: true,
    spare:true
  };
    return gulp.src('./src/views/pizza.html')
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('./dist/views/'));
});

//compress images with webp
gulp.task('shrink', function () {
    return gulp.src('./src/img/*.*')
        .pipe(webp())
        .pipe(gulp.dest('./dist/img/'));
});

gulp.task('shrink2', function () {
    return gulp.src('./src/views/images/*.*')
        .pipe(webp())
        .pipe(gulp.dest('./dist/views/images/'));
});

// Default Task
 gulp.task('default', ['inlinesource', 'scripts', 'scripts2', 'inline', 'minify', 'shrink', 'shrink2']);