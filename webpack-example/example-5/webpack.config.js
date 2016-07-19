module.exports = {
	entry: './src/app.js',
	output: {
		path: './bin',
		filename: 'app.bundle.js',
	},
	module: {
		loaders: [
			{
				test:/\.js$/,
				exclude: /node_modules/,
				loader:'babel-loader',
			},
			{
				test:/\.css$/,
				exclude:/node_modules/,
				loader:"style-loader!css-loader"
			}

		]
	}
}