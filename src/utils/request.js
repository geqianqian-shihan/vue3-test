import axios from 'axios';

const service = axios.create({
  // url = base url + request url
  baseURL: '/api',
  timeout: 10000
})

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    config.data = qs.stringify(config.data);
    return config;
  },
  (error) => {
    return Promise.error(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  (config) => {
    config.data = qs.stringify(config.data);
    return config;
  },
  (error) => {
    return Promise.error(error);
  }
);

// get请求
export function get(url, params = {}) {
  return service.get(url, params);
}
// post请求
export function post(url, data, config = { showErr: true }) {
  // 根据showErr字段 判断请求出错时是否进行提示
  return service.post(url, data, config);
}
