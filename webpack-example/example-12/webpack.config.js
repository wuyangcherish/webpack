var path = require("path");

module.exports = {
	entry:path.resolve(__dirname, "src/index.js"),
	output:{
		path: path.resolve(__dirname, "build"),
		filename: "bundle.js"
	},
	module:{
		loaders:[
			{test:/\.js$/, exclude:/node_modules/, loader:'babel-loader'}
		],
	},
	devServer:{
		stats: { colors: true },
      	port: 8080,
      	contentBase: '',
      	inline: true
	},
	resolve:{
		extensions:['','.js','.jsx','.json','css']
	},
	devtool:'cheap-module-source-map',
}


/*
	devtool: 设置为source-map的话 可以直接在浏览器上面调试自己的源码；
*/