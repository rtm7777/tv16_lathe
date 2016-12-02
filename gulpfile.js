'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack-stream');
const less = require('gulp-less');

const webpackConfig = require('./webpack.config.js');

const onError = function(err) {
	gutil.log(gutil.colors.red('ERROR', 'less'), err);
	this.emit('end');
};

const sourceFiles = [ 'app/fonts/**/*', 'app/images/*.*' ];

gulp.task('default', ['webpack:watch', 'copy', 'less', 'watch']);

gulp.task('webpack:watch', function(){
	let webpackTask = webpack(Object.create(webpackConfig));

	return gulp.src('app/js/app.js')
		.pipe(webpackTask)
		.on('error', function handleError() {
			this.emit('end'); // Recover from errors
		})
		.pipe(gulp.dest('app/public/'));
});

gulp.task('copy', () => {
	return gulp.src(sourceFiles)
		.pipe(gulp.dest('app/public/'));
});

gulp.task('less', () => {
	let lessTask = less();
	lessTask.on('error', onError);
	return gulp.src('app/less/main.less')
		.pipe(lessTask)
		.pipe(gulp.dest('app/public/'));
});

gulp.task('watch', () => {
	gulp.watch('app/less/**/*.less', ['less']);
});
