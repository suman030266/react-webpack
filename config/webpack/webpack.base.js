const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const alias = require('../alias');

module.exports = {
    entry: {
        vendor: ['react', 'react-dom', /*'redux',*/ 'react-router-dom'],
        index: './src/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: '/'
    },
    // mode: 'production',
    plugins: [
        new htmlWebpackPlugin({
            template: './view/index.html',
            filename: 'index.html',
            chunk: ['vender', 'index']
        }),
        // new webpack.HotModuleReplacementPlugin()
        new MiniCssExtractPlugin({
            filename: 'main.css'
        }),
    ],
    module: {
        rules: [
            { 
                test: /\.js[x]?$/,
                include: path.resolve('src'), // 只解析src下js文件
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-react-jsx']
                    }
                }
            },
            {
                test: /\.scss$/,
                include: path.resolve('src'),
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'] 
            
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 20 * 1024 // 小于200k转 base64格式
                    }
                }
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias
    },
    // plugins: [
	// 	new webpack.NoEmitOnErrorsPlugin(),
	// 	new FriendlyErrorsPlugin(),
	// 	new ExtractTextPlugin({
	// 		filename: 'css/[name].css'
	// 	}),
	// 	new webpack.optimize.CommonsChunkPlugin({
	// 		name: 'vendor',
	// 		filename: 'js/vendor.js',
	// 		minChunks: Infinity
	// 	})
    // ]
};

