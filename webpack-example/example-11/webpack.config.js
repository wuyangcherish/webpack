var path = require("path");

var pathToReact = path.join(__dirname, './node_modules/react/dist/react.js');
var pathToReactDOM = path.join(__dirname, './node_modules/react-dom/dist/react-dom.js');

var entryPath = path.resolve(__dirname, 'src/index.js');
var buildPath = path.resolve(__dirname, "build");

module.exports = {
	entry:entryPath,
	output:{
		path:"./src/index.js",
		filename: 'bundle.js',
		// publicPath:'/static/'
	},
	module:{
		loaders:[
			{test:/\.js$/,exclude: /node_modules/,loader:'babel-loader',}
		]
	},
	resolve:{
		extensions: ["", ".js", ".jsx", ".css", ".json"],
		alias:{
			'react': pathToReact,
			'react-dom': pathToReactDOM
		}
	},
	devServer: {
      // publicPath: "/static/",I
      stats: { colors: true },
      port: 8080,
      contentBase: 'build',
      inline: true
     },
     noParse:[pathToReact, pathToReactDOM]
}

/*
	devServer: 运行 webpack-dev-server 的时候带的一系列参数都可以放到这里面维护
		1. publicPath: 公共路径或者CDN 
		2. contentBase: 静态资源的目录 默认是当前路径
		3. hot: 自动刷新？ true: false;
	resolve:
		1. extension 不用在 require 或是 import 的时候加后缀名
		2. alias: 配置别名 加快webpack 的构建速度
*/