var path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
	entry: {
		main: './index.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	module:{
		// rules:[{
		// 	test:/\.css$/,
		// 	use:"css-loader"
		// }]
		rules:[{
			test:/\.css$/,
			use: ExtractTextPlugin.extract({               
				use: 'css-loader'
          	})
		}]
	},
	plugins:[
		new ExtractTextPlugin('index.css'),
	]
}

module.exports = config