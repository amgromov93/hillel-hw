const { src, dest, series, parallel, watch } = require('gulp');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const { path } = require('./gulp/const.js');
const babel = require("gulp-babel");

function cleanDist() {
    return src(path.dist, { read: false, allowEmpty: true }).pipe(clean());
}

function copyJs() {
    return src(path.jsSrc)
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(dest(path.dist));
}

function copyVendorJs() {
    return src([
        './node_modules/jquery/dist/jquery.min.js',
    ])
        .pipe(concat('vendor.js'))
        .pipe(dest(path.dist));
}

function copyCss() {
    return src('./src/*.css')
        .pipe(cleanCSS())
        .pipe(concat('app.css'))
        .pipe(dest(path.dist));
}

function copyHtml() {
    return src(path.srcHtml)
        .pipe(dest(path.dist));
}

function serve(done) {
    browserSync.init({
        server: {
        baseDir: path.dist
        }
    });

    watch('./src/index.html', series(copyHtml, reloadBrowser));
    watch('./src/**/*.js', series(copyJs, reloadBrowser));
    watch('./src/**/*.css', series(copyCss, reloadBrowser));

    done();
}

function reloadBrowser(done) {
    browserSync.reload();
    done();
}

function taskBuild() {
    return series(
        cleanDist,
        parallel(
        copyJs,
        copyVendorJs,
        copyCss,
        copyHtml,
        )
    );
}

exports.build = taskBuild();
exports.serve = series(taskBuild(), serve);