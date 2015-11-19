// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var inlineCss = require('gulp-inline-css');
var minifyHTML = require('gulp-minify-html');
var webp = require('gulp-webp');
var inlinesource = require('gulp-inline-source');

gulp.task('inlinesource', function () {
    return gulp.src('./build/*.html')
        .pipe(inlinesource())
        .pipe(gulp.dest('./'));
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src('./build/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
gulp.task('lint2', function() {
    return gulp.src('./build/views/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('./build/js/*.js')
        //.pipe(concat('perfmatters.js'))
        //.pipe(gulp.dest('./js'))
        //.pipe(rename('perfmatters.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js'));
});
gulp.task('scripts2', function() {
    return gulp.src('./build/views/js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./views/js'))
        .pipe(rename('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./views/js'));
});

//inline css and minify html
gulp.task('inline', function() {
  var opts = {
    conditionals: true,
    spare:true
  };
    return gulp.src('./build/*.html')
        .pipe(inlineCss())
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('./'));
});

gulp.task('minify', function() {
  var opts = {
    conditionals: true,
    spare:true
  };
    return gulp.src('./build/views/pizza.html')
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('./views/'));
});

//compress images with webp
gulp.task('shrink', function () {
    return gulp.src('./build/img/*.*')
        .pipe(webp())
        .pipe(gulp.dest('./img/'));
});

gulp.task('shrink2', function () {
    return gulp.src('./build/views/images/*.*')
        .pipe(webp())
        .pipe(gulp.dest('./views/images/'));
});
// Watch Files For Changes
//gulp.task('watch', function() {
//    gulp.watch('js/*.js', ['lint', 'scripts']);
    //gulp.watch('scss/*.scss', ['sass']);
//});

// Default Task
 gulp.task('default', ['inlinesource', 'scripts', 'scripts2', 'inline', 'minify', 'shrink', 'shrink2']);