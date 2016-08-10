module.exports = {
	entry: './app/js/app.js',
	devtool: 'inline-source-map',
	watch: true,
	cache: true,
	output: {
		filename: 'main.js',
	},
	target : 'node-webkit',
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel',
			exclude: /node_modules/,
			query: {
				cacheDirectory: true
			}
		}]
	}
};
