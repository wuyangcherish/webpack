var path = require("path");

//var pathToReact = path.join(__dirname, './node_modules/react/dist/react.js');
//var pathToReactDOM = path.join(__dirname, './node_modules/react-dom/dist/react-dom.js');

module.exports = {
	entry:path.resolve(__dirname, 'src/index.js'),
	output:{
		path:path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
	},
	module:{
		loaders:[
			{test:/\.js$/,exclude: /node_modules/,loader:'babel-loader',}
		]
	},
	resolve:{
		extensions: ["", ".js", ".jsx", ".css", ".json"],
	},
	devServer:{
		publicPath: "/static/",
		stats: {colors: true},
		port: 8080,
		// contentBase: "build",
		inline:true
	}
}

/*
	devServer: 运行 webpack-dev-server 的时候带的一系列参数都可以放到这里面维护
	resolve:
		1. extension 不用在 require 或是 import 的时候加后缀名
		2. alias: 配置别名 加快webpack 的构建速度
*/