import axios from 'axios';
import qs from 'qs';

const httpConfig = {
    lcdev: 'http://10.112.170.139:9090/mock/597961c4588f7c09fde7576c',
    lcvdev: 'http://search.dev.video.api:8080',
    dev: "http://search.dev.video.api:8080",
    pre: 'http://mp.pre.atguat.com.cn',
    production: 'https://mp.gome.com.cn'
};

const config = {
    timeout: 30000,
    // baseURL: httpConfig[process.env.NODE_ENV] + '/api',
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    },
    transformRequest: [
        (data)=>qs.stringify(data)
    ]
};

let fetch = axios.create(config);
const requestInter = fetch => {
    fetch.interceptors.request.use(req => {
        console.log(req);
        if (req.loading) {
            let $loadingBox = document.querySelector('.loading-box');
            $loadingBox && ($loadingBox.style.display = 'block');
            setTimeout(function(){
                if($loadingBox && $loadingBox.style.display == 'block'){
                    $loadingBox.style.display = 'none';
                }
            }, 5000);
        }
        return req;
    }, err => Promise.reject(err))
};

const responseInter = fetch => {
    fetch.interceptors.response.use(res=> {
        console.log(res);
        let $loadingBox = document.querySelector('.loading-box');
        $loadingBox && ($loadingBox.style.display = 'none');
        return res.data;
    }, err => Promise.reject(err))
};

requestInter(fetch);
responseInter(fetch);

export default fetch;