module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    module:{
        loaders: [
            {test: /\.less/, loader:'style-loader!less-loader'},
            {test:/\.css/, loader:'style-loader!css-loader'},
            {test:/\.(png|jpg)$/, loader:"url-loader?limit = 8192"}
        ]
    }
};