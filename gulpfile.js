import gulp from 'gulp';
import sass from 'gulp-sass';
import uglify from 'gulp-uglify';
import imagemin from 'gulp-imagemin';
import dartSass from 'sass';

const sassCompiler = sass(dartSass);

const paths = {
  styles: {
    src: 'source/scss/**/*.scss',
    dest: 'build/css'
  },
  scripts: {
    src: 'source/js/**/*.js',
    dest: 'build/js'
  },
  images: {
    src: 'source/images/*',
    dest: 'build/images'
  }
};

function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sassCompiler({ outputStyle: 'compressed' }).on('error', sassCompiler.logError))
    .pipe(gulp.dest(paths.styles.dest));
}


function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest));
}


function images() {
  return gulp.src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));
}


export const buildStyles = styles;
export const buildScripts = scripts;
export const buildImages = images;


export default gulp.series(styles, scripts, images);
