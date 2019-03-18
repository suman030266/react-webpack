const path = require('path'),
    base = process.cwd(),
    joinPath = path.join,
    dist = joinPath(base, 'dist'),
    src = joinPath(base, 'src'),
    view = joinPath(base, 'view'),
    js = joinPath(src, 'js');

let alias = {
    base,
    src,
    dist,
    view,
    js
},
    pathArr = [
    {
        base: js,
        join: 'components'
    },{
        base: js,
        join: 'page'
    },
    {
        base: src,
        join: 'css'
    },
    {
        base: js,
        join: 'io'
    }
];
pathArr.forEach(item => {
    let {base, join} = item;
    alias[join] = joinPath(base, join);
});

module.exports = alias;

// const page = join(js, 'page');
// const io = join(js, 'io');
// const plugin = join(js, 'plugin');
// const common = join(js, 'common');
// const components = join(js, 'components');
// const css = join(src, 'css');
// const util = join(js, 'util');
// const widgets = join(js, 'widgets');
// const vendor = join(js, 'vendor');
// const redux = join(js, 'redux');
// const api = join(js, 'api');
// const pagebuild = join(contentBase, 'pagebuild');