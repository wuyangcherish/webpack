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





