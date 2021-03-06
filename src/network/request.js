import axios from 'axios'

export function request(config) {
  //创建axios实例
  const instance = axios.create({
    baseURL: "http://10.35.94.207:8080",
    timeout: 5000
  })
  //axios拦截器
  instance.interceptors.request.use(config => {
    return config
  },err => {
    console.log(err);
  })
  //响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  //发送请求
  return instance(config)
}
