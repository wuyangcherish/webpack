## 资料

* Babel
	1. [阮一峰 Babel 入门教程](http://www.ruanyifeng.com/blog/2016/01/babel.html)


* webpack
	1. [官方教程](http://webpack.github.io/docs/usage.html)
	2. [阮一峰demo](https://github.com/ruanyf/webpack-demos)

* ES6 

	1. [阮一峰教程](http://es6.ruanyifeng.com/)


* 问题
	1. [Unknown option: …/.babelrc.presets](http://stackoverflow.com/questions/33685365/unknown-option-babelrc-presets)

	2. 上面的babel学习的资料也提到，.babelrc 文件必须放到根目录的下面，presets里面有什么，就要注意将该文件架子啊进来 
	3. import 和 require 
		1. 都是加载文件的，但是方式不同,引入一个 css 文件的话：这两者的方式分别是：
			* import: <code>import ./style.css</code>
			* require: <code>require("./style.css")</code>
		2. 当然加载其他的文件也是一样
		3. import 是es6的语法需要babel支持
		