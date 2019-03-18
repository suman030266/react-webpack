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
    fetch.interceptors.request.use(config => {
        console.log(config);
        return config;
    }, err => Promise.reject(err))
};

const responseInter = fetch => {
    fetch.interceptors.response.use(res=> {
        console.log(res);
        return res.data;
    }, err => Promise.reject(err))
};

requestInter(fetch);
responseInter(fetch);

export default fetch;

// export const requestInter = (fetch)=>{
//     fetch.interceptors.request.use(function (config) {
//         if (config.loading) {
//             let $loadingBox = document.querySelector('.pgc-loading-box');
//             $loadingBox && ($loadingBox.style.display = 'flex');
//             setTimeout(function(){
//                 if($loadingBox && $loadingBox.style.display == 'flex'){
//                     $loadingBox.style.display = 'none';
//                 }
//             },10000);
//         }
//         return config;
//     }, function (error) {
//         return Promise.reject(error);
//     });
// }

// export const responseInter = (fetch)=> {
//     fetch.interceptors.response.use(function (response) {
//         if (response.data.message === "auth failed") {
//             window.location.href = '/';
//         }
//         let $loadingBox = document.querySelector('.pgc-loading-box');
//         $loadingBox && ($loadingBox.style.display = 'none');
//         return response;
//     }, function (error) {
//         return Promise.reject(error);
//     });
// }