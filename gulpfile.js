var gulp = require('gulp');
var babel = require('gulp-babel');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

var jsPaths = [
    'js/*/**.js'
];

gulp.task('js', function(){
    return gulp.src(jsPaths)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('assets/js'));
});

gulp.task('default', function(){
    gulp.start('js');
});

gulp.task('watch', function(){
    gulp.start('default');
    gulp.watch('js/**/*.js', ['js']);
});
