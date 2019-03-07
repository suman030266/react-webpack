const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'boundle.js'
    },
    mode: 'production',
    devServer: {
        contentBase: './dist',
        port: 4000,
        host: '0.0.0.0',
        // hot: true
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './view/index.html',
            filename: 'index.html'
        }),
        // new webpack.HotModuleReplacementPlugin()
        new MiniCssExtractPlugin({
            filename: 'main.css'
        }),
    ],
    module: {
        rules: [
            { 
                test: /\.js$/,
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
                // include: path.resolve('src'),
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'] 
            
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 200 * 1024 // 小于200k转 base64格式
                    }
                }
            },
        ]
    }
};

