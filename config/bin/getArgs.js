/*
    env: 
        dev
        pre
        prd
*/
const argv = require('yargs').argv;
let {env, port} = argv;
// 环境变量 env
// 端口号 port
module.exports = {
    env,
    port
};

