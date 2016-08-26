## Webpack

### 资料

###### Babel

1. [阮一峰 Babel 入门教程](http://www.ruanyifeng.com/blog/2016/01/babel.html)
2. [有关babel插件的解释](https://www.zfanw.com/blog/babel-6.html)

###### webpack

1. [官方教程](http://webpack.github.io/docs/usage.html)
2. [阮一峰demo](https://github.com/ruanyf/webpack-demos)
3. [webpack 资源合集](https://github.com/naraku666/webpack-tutorial-collection)
4. [webpack中文文档](https://chenyiqiao.gitbooks.io/webpack/content/motivation_of_webpack.html)
5. [webpack+express 全栈刷新](http://acgtofe.com/posts/2016/02/full-live-reload-for-express-with-webpack)

###### ES6 

1. [阮一峰教程](http://es6.ruanyifeng.com/)

###### webpack 插件

1. CommonChunksLoader --- 用来提取公共模块的 
	
用法：在plugins 里面加入：
<code>new  webpack.optimize.CommonsChunkPlugin('common.js', ['main1', 'main2'])文件</code>

其中 common.js 是抽取出来的公共的部分， main1 main2 是多入口文件的文件名



#### Issue 

1. [Unknown option: …/.babelrc.presets](http://stackoverflow.com/questions/33685365/unknown-option-babelrc-presets)

2. 上面的babel学习的资料也提到，.babelrc 文件必须放到根目录的下面，presets里面有什么，就要注意将该文件架子啊进来 
3. import 和 require 
	1. 都是加载文件的，但是方式不同,引入一个 css 文件的话：这两者的方式分别是：
		* import: <code>import ./style.css</code>
		* require: <code>require("./style.css")</code>
	2. 当然加载其他的文件也是一样
		3. import 是es6的语法需要babel支持
4. [无法识别react 的语法](http://stackoverflow.com/questions/33460420/babel-loader-jsx-syntaxerror-unexpected-token)
5. 在 package.json 的"script"里面加入<code>"dev": "./node_modules/.bin/webpack-dev-server --progress --colors --content-base build"
</code> 同时在webpack.config.js里面配置好devServer。便可以直接使用 <code>npm run dev </code>来运行代码了	
6. 有关publicPath 的问题：
	* publicPath 是当浏览器引用时会制定输出文件的公共url地址，对于嵌入的<code>script</code>和<code>link</code>标签，如果path 和publicPath 不同的时候，publicPath 被作为文件的href或者url 当你想在不同域上处处文件或者在CDN上publicPath很有用，所以如果都不具备这些条件的话，可以直接一个path就够了 不写publicPath了。后面的遇到这个问题再继续搞吧~
	* 小伙伴给我找的两篇文章:
		1. [webpack配置解释](https://segmentfault.com/a/1190000002889630)
		2. [webpack配置解释](http://www.cnblogs.com/dh-dh/p/5165372.html)
7. 又出现一个问题：当我使用npm run dev 运行example-12的例子的时候显示的是<code>content is served from /xxx/xxx/Desktop/webpack/webpack-example</code> 然后显示的就是根目录 如下图所示：![contentBase](http://7xlqb6.com1.z0.glb.clouddn.com/contentBase.png)
	如果我想进入example-12 的话还得点进去 然后才可以看到结果~  
	* 问题： “ContentBase” 的设置问题
	* 解决方案：默认查找的是index.html 所以如果index.html在运行的文件夹下面的话那么就不用写<code>contentBase</code>如果是在里面的文件夹下面则：<code>contentBase: "build"</code>这种形式 PS: build 只是个例子。
8. 有关自动刷新的问题，webpack-dev-server 有两种模式支持自动刷新：
	* 贴链接就OK了。[自动刷新模式](http://guoyongfeng.github.io/idoc/html/React%E8%AF%BE%E7%A8%8B%E4%B8%93%E9%A2%98/%E4%BD%BF%E7%94%A8Webpack%E6%90%AD%E5%BB%BA%E5%BC%80%E5%8F%91%E6%80%81%E5%B7%A5%E4%BD%9C%E6%B5%81.html) 
	* PS: 模块的热替换和组件级热更新都是上面链接中提到的。
	* 一般上述条件做的话就是只刷新html 文件，但是在我们开发中需要刷新的一般不是index.html 也许是css 也许是jsx，所以要实现实时刷新的效果一般的方法是在<code>React/</code>下面的<code>refresh-real-time</code>文件下面写的哪两种方法。
		
		