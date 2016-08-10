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

gulp.task('default', ['webpack:watch', 'less', 'watch']);

gulp.task('webpack:watch', function(){
	var watch = Object.create(webpackConfig);
	watch.watch = true;
	return gulp.src('app/js/app.js')
		.pipe(webpack(watch))
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
