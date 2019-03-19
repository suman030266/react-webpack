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
        path: path.resolve(process.cwd(), 'dist'),
        filename: 'js/[name].js',
        publicPath: '/'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './view/index.html',
            filename: 'index.html',
            chunk: ['vender', 'index']
        }),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css'
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
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ],
                        plugins:[
                            '@babel/plugin-syntax-dynamic-import',
                            '@babel/plugin-transform-react-jsx'
                        ]
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
    }
};