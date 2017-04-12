// webpack.config.js
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
module.exports = {
    entry: [
        'webpack/hot/dev-server',
        './dev/js/entry'
    ],
    output: {
        path: path.join(__dirname, 'bundle/'),
        filename: 'js/bundle.js',
        publicPath:"/bundle/"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
              warnings: false,
            }
        }),
        new ExtractTextPlugin("css/index.css", {
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            { //
              test: /\.scss$/,
              loader: ExtractTextPlugin.extract("style-loader", 'css-loader!sass-loader')
            },
            {// less
              test: /\.less$/,
              loader: ExtractTextPlugin.extract("style-loader", 'css-loader!less-loader')
            },
            {
              test: /\.css$/,
              loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=css/i/[hash:8].[name].[ext]'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    devServer: {
        inline: false,
        contentBase: './',
        port: 8000,
        hot: false,
        progress: false,
        watch:false,
        histroyApiFallback : false,
        colors:true
    }
}













