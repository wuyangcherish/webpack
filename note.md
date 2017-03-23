## webpack2

### 资料 

* [webpack2 中文文档](https://doc.webpack-china.org/guides/get-started/)


### note

* 对于多页面的加载，引用对应的js 的话可以在**entry**里面写出多个**js** 的入口，然后在**ouput** 的 **filename** 写上 **[name].js** 它会根据入口指定的文件来生成对应的文件名。

例子【ouputfileName】 所示

除此之外，输出还有很多的写法[见这里](webpack --display-error-details)

**output.path** 导出的目录是绝对路径

**output.publicPath** 是用于加载外部资源的等来设置的，比如加载 CDN 的资源,如下：

```
path :path.resolve(__dirname,'build/assets'),
publicPath: "https://cdn.example.com/assets"
```

* 插件 CommonChunks 是提取代码中的公共模块然后将公共的模块打包成一个独立的文件，以便在其他的入口和模块中使用。

例子【CommonChunks-demo】所示

**<font color="red">切记：在页面上引入js文件的时候一定要是公共文件在上面，其次才是其他的文件，不然会报错</font>**

* 插件 extract-text-webpack-plugin 是防止某个css 文件和 javascript 文件打包在一起
> 为了用 webpack 对 CSS 文件进行打包，你可以像其它模块一样将 CSS 引入到你的 JavaScript 代码中，同时用 css-loader (像 JS 模块一样输出 CSS)，也可以选择使用 ExtractTextWebpackPlugin (将打好包的 CSS 提出出来并输出成 CSS 文件)


* webpack 通过输出占位符【一个唯一的哈希值】来构成文件名，这样当文件更新的时候就会重新生成一个哈希值，来防止缓存的问题

**[hash] && [chunkhash]**

用 [hash] 构建的话，有一个问题就是无论哪个文件更改了，都会更新所有文件的文件名，然后客户端就必须重新下载代码。浪费流量

所以会用到 [chunkhash] 来根据内容生成哈希值。

在页面上引用js文件

生成的 stats.json 文件中有很多的属性，可以直接用[webpack-manifest-plugin](https://www.npmjs.com/package/webpack-manifest-plugin) 这个插件来得到hash之后的文件名

* webpack-manifest-plugin 用法

**用法**

```
	var ManifestPlugin = require('webpack-manifest-plugin')
	
	//plugins 里面实例化：
	new ManifestPlugin()
```

在 Vue 中，默认build 之后生成的所有文件都在 ``dist/`` 目录下面，所以实例化之后 build 生成的 **manifest.json**会生成在这个目录下面

build 之后就会发现dist 文件目录下面多了一个 manifest.json 的文件

默认文件的路径是从这个 ``manifest.json`` 的文件来看的一个相对路径，可以通过 参数**publicPath** 来修改这个

**参数**

``fileName`` : 生成这个的 manifest文件的文件名

``basePath``: 是在生成的每个文件的文件名前面加上一个路径前缀，比如 设置 ``basePath:'dist'`` 这个属性之后 **main.css**  在manifest.json 中的文件名会显示成 
```
	{
		"dist/main.css" :"static/css/main.[hash].css"
	}
```

``publicPath``: 这个属性是来在每个生成的文件的路径的前面，加上一个统一的路径前缀，如果同时设置了 **basePath** && **publicPath** 的话，它会被忽略

例如下面生成的文件中 publicPath:'dist/' 就被忽略了

```
{
  "build/app.css": "build/static/css/app.2fbc1542e57f593f561aa4f32b9868c7.css",
  "build/app.css.map": "build/static/css/app.2fbc1542e57f593f561aa4f32b9868c7.css.map",
  "build/app.js": "build/static/js/app.f5d8de741e0b9b2d4dc7.js",
  "build/app.js.map": "build/static/js/app.f5d8de741e0b9b2d4dc7.js.map",
  "build/manifest.js": "build/static/js/manifest.510cfe5b991186a5654c.js",
  "build/manifest.js.map": "build/static/js/manifest.510cfe5b991186a5654c.js.map",
  "build/vendor.js": "build/static/js/vendor.28270987fcda3a9ff17f.js",
  "build/vendor.js.map": "build/static/js/vendor.28270987fcda3a9ff17f.js.map"
}
```
















 




