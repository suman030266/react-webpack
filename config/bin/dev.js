const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
let {env, port} = require('./getArgs.js');
let webpackConfig = require('../webpack/webpack.base.js');
const host = '0.0.0.0';

webpackConfig = webpackMerge(webpackConfig, {
    mode: 'development',
});
const compiler = webpack(webpackConfig);

const server = new WebpackDevServer(compiler, {
    contentBase: './dist',
    port: port,
    host,
    hot: true,
    proxy: [
        {
            context:['/v1', '/food'], // 请求时直接  /v1 即可
            target: 'https://bird.ioliu.cn',
            changeOrigin: true,
            secure: false
        },
        {
            context:['/ajax/**'], // 请求时直接 /ajax/topic/hotRecommend 即可
            target: 'http://group.gome.com.cn',
            changeOrigin: true,
            secure: false
        }
    ]
});

server.listen(port, host, ()=>{
    console.log(`${env} :server is running at ${port}`);
});

// 端口被占用 将端口++ 重新启动
process.on('uncaughtException', (err)=>{
    let {message} = err;
    if(message.startsWith('listen EACCES')){
        server.listen(++port, host, ()=>{
            console.log(`server is running at ${port}`)
        });
    }
});