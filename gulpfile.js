(() => {

  'use strict';

 /**************** Gulp.js 4 configuration ****************/
const gulp = require('gulp');
const sass = require('gulp-sass');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const csso = require('gulp-csso');
const browserSync = require("browser-sync").create()
const source = "./src/"
const destination = "./build/"
 
sass.compiler = require('node-sass');

function html() {
	return gulp
		.src(source + "**/*.html")
		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments:true
		}))
		.pipe(gulp.dest(destination))
}

function js() {
	return gulp
		.src(source + "js/**/*.js")
		.pipe(uglify())
		.pipe(gulp.dest(destination + 'js'))
}


function css() {
	  return gulp
	  	.src(source + 'scss/**/*.scss')
	    .pipe(
	    	sass().on('error', sass.logError))
	    .pipe(csso())
	    .pipe(gulp.dest(destination +'css'));
	
}

function image() {
	return gulp
		.src(source + 'img/*')
        .pipe(imagemin([
		    imagemin.gifsicle({interlaced: true}),
		    imagemin.jpegtran({progressive: true}),
		    imagemin.optipng({optimizationLevel: 5}),
		    imagemin.svgo({
		        plugins: [
		            {removeViewBox: true},
		            {cleanupIDs: false}
		        ]})]))
        .pipe(gulp.dest(destination + 'img'))
}

function watch() {
	gulp.watch(source + 'js/**/*.js',js).on("change",browserSync.reload)
	gulp.watch(source + 'scss/**/*.scss',css).on("change",browserSync.reload)
	gulp.watch(source + 'img/*',image).on("change",browserSync.reload)
	gulp.watch(source + 'index.html',html).on("change",browserSync.reload)
}

function server() {
	browserSync.init({
		ghostMode:false,
		notify:false,
		server: {
			baseDir:destination,
			serveStaticOptions: {
		        extensions: ["html"]
		    }
		},
		open:false,
		port: process.env.PORT || 3000

	})

	gulp
	.watch(source + 'scss/**/*.scss',css)
	.on("change", browserSync.reload)
	gulp.watch(source + 'js/**/*.js',js).on("change",browserSync.reload)
	gulp.watch(source + 'img/*',image).on("change",browserSync.reload)
	gulp.watch(source + 'index.html',html).on("change",browserSync.reload)
}

var build = gulp.series(gulp.parallel(js,css,html,image),server,watch)
gulp.task("default", build)


})();