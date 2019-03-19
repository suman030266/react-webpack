const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
let webpackConfig = require('../webpack/webpack.base.js');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
webpackConfig = webpackMerge(webpackConfig, {
    mode: 'production',
    plugins: [
		// new webpack.NoEmitOnErrorsPlugin(),
		new FriendlyErrorsPlugin(),
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: 'vendor',
		// 	filename: 'js/vendor.js',
		// 	minChunks: Infinity
		// })
    ]
});

webpack(webpackConfig, ()=>{
    console.log('build complete');
});