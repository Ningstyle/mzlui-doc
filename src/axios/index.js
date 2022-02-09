import axios from 'axios'
import {showFullScreenLoading,tryHideFullScreenLoading} from '@/api/serverLoading.js'
axios.defaults.timeout = 10000;
//返回其他状态吗
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500; // 默认的
};
//跨域请求，允许保存cookie
axios.defaults.withCredentials = true;

//HTTPrequest拦截
axios.interceptors.request.use(config => {
	if(config.showLoading!=false){
		showFullScreenLoading()
	}
  return config
}, error => {
  return Promise.reject(error)
});
//HTTPresponse拦截
axios.interceptors.response.use(res => {
	tryHideFullScreenLoading()
  const status = res.data.statuCode || 200;
  const message = res.data.message || '未知错误';
  if (status !== 200) {
		tryHideFullScreenLoading()
    return Promise.reject(new Error(message))
  }
  return res;
}, error => {
	tryHideFullScreenLoading()
  return Promise.reject(new Error(error));
});

export default axios;
