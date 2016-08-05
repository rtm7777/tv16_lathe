'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');
const less = require('gulp-less');

const webpackConfig = require('./webpack.config.js');

const onError = function(err) {
	gutil.log(gutil.colors.red('ERROR', 'less'), err);
	this.emit('end');
};

gulp.task('default', ['webpack', 'less', 'watch']);

gulp.task('webpack', function(callback) {
	webpack(webpackConfig, function(err, stats) {
		callback();
	});
});

gulp.task('less', () => {
	let lessTask = less();
	lessTask.on('error', onError);
	return gulp.src('app/less/main.less')
		.pipe(lessTask)
		.pipe(gulp.dest('app/public/'));
});

gulp.task('watch', () => {
	gulp.watch(['config.json', 'app/js/**/*.js'], ['webpack']);
	gulp.watch('app/less/**/*.less', ['less']);
});
