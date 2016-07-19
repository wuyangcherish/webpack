module.exports = {
	entry:"./entry.js",
	output:{
		filename: 'bundle.js'
	},
	module: {
		loaders:[
			{test: /\.(png|jpg)$/, loader:"url-loader?limit=8192"},
			{test: /\.css$/, loader: 'style!css'},
		]
	}
};