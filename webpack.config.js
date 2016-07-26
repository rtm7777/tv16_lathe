module.exports = {
	entry: './app/js/app.js',
	output: {
		path: './app/public',
		filename: 'main.js',
	},
	target : 'node-webkit',
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel'
		}]
	}
};
