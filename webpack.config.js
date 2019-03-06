const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'boundle.js'
    },
    mode: 'production',
    devServer: {
        contentBase: './dist',
        port: 4000,
        host: '0.0.0.0',
        proxy: []
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
};

