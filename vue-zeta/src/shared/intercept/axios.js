import axios from 'axios'
import config from '../../config/index'
// let loading = null

// 创建axios实例，设置默认配置
const instance = axios.create({
  timeout: config.timeout,
  baseURL: config.baseInfo.domain,
  headers: {
    token: sessionStorage.getItem('token') || ''
  }
})
// 配置http状态码信息
let httpCode = {
  400: '请求参数格式错误',
  401: '权限不足, 请重新登录',
  403: '服务器拒绝本次访问',
  404: '请求资源未找到',
  500: '内部服务器错误',
  501: '服务器不支持该请求中使用的方法',
  502: '网关错误',
  504: '网关超时'
}
/** 添加请求拦截器 **/
instance.interceptors.request.use(config => {
  console.log(config.headers.loading)
  // 发起请求时加载全局loading，请求失败或有响应时会关闭
  // loadingInstance = Loading.service({
  //   spinner: 'fa fa-spinner fa-spin fa-3x fa-fw',
  //   text: '拼命加载中...'
  // })
  // 导出文件
  if (config.url.includes('pur/contract/export')) {
    config.headers['responseType'] = 'blob'
  }
  // 文件上传
  if (config.url.includes('pur/contract/upload')) {
    config.headers['Content-Type'] = 'multipart/form-data'
  }
  return config
}, error => {
  return Promise.reject(error)
})

/** 添加响应拦截器  **/
instance.interceptors.response.use(response => {
  // loadingInstance.close()
  if (response.data.status === 200) {
    return Promise.resolve(response.data)
  } else {
    // Message({
    //   message: response.data.message,
    //   type: 'error'
    // })
    return Promise.reject(response.data.message)
  }
}, error => {
  // loadingInstance.close()
  if (error.response) { // 根据请求失败的http状态码去给用户相应的提示
    let tips = error.response.status in httpCode ? httpCode[error.response.status] : error.response.data.message
    console.log(tips)
    // Message({
    //   message: tips,
    //   type: 'error'
    // })
    if (error.response.status === 401) { // token或者登陆失效情况下跳转到登录页面
      // router.push({
      //   path: `/login`
      // })
    }
    return Promise.reject(error)
  } else {
    // Message({
    //   message: '请求超时, 请刷新重试',
    //   type: 'error'
    // })
    return Promise.reject(new Error('请求超时, 请刷新重试'))
  }
})

export default instance
