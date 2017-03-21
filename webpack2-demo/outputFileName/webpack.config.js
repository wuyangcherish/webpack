var path = require('path');

const config = {
	entry:{
		index:"./index.js",
		hello:'./hello.js'
	},
	output:{
		filename:'[name].js',
		path: path.resolve(__dirname ,'build')
	}
}


module.exports = config;