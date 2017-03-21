var path = require('path');
const webpack = require('webpack');

const config = {
	entry: {
		main: './index.js',
		vendor: 'moment'
	},
	output: {
		filename: '[chunkhash].[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		})
	]
}

module.exports = config