var webpack = require("webpack");

module.exports = {
	entry:"./index.js",
	output:{
		path:'build/',
		filename:'bundle.js'
	},
	module:{
		loaders:[
			{test:/\.js[x]?$/, loader:"babel-loader", exclude: /node_modules/}
		]
	}
}