var webpack = require('webpack');

var path = require('path');

module.exports = {
  entry:{
     main1:'./src/main1',
     main2:'./src/main2'    
  },
  output:{
    path: path.join(__dirname, 'dist'),
    filename:'bundle.[name].js',
    publicPath:'/static/'
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin('common.js', ['main1', 'main2'])
  ],
  module:{
    loaders:[

      {test:/\.js[x]?$/, loaders:['react-hot', 'babel-loader'], include:path.resolve(__dirname, 'src')},
      {test:/\.css$/, loader:'style!css',}
    ]
  },
  resolve:{
    extensions:['','.js','.jsx','.json','css']
  },
  devtool:'cheap-module-source-map',

}