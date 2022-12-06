const { src, dest, series, parallel } = require('gulp');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const replace = require('gulp-replace');

function cleanDist() {
  return src('./dist', { read: false, allowEmpty: true }).pipe(clean());
}

function copyJs() {
  return src([
    './src/GalleryApi.js',
    './src/index.js',
  ])
    .pipe(concat('app.js'))
    .pipe(dest('dist'));
}

function copyCss() {
  return src('./src/*.css')
    .pipe(concat('app.css'))
    .pipe(dest('dist'));
}

function copyHtml() {
  return src('./src/index.html')
    .pipe(replace('style.css', 'app.css'))
    .pipe(replace('index.js', 'app.js'))
    .pipe(dest('dist'));
}


exports.default = series(cleanDist, parallel(copyJs, copyCss, copyHtml));