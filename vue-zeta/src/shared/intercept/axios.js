import axios from 'axios'
import config from '../../config/index'
import { Preloader } from '../../components/F7/dialog'
import { toast } from '../../components/F7/toast'
import vueVm from '../../main'

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

let loading

/** 添加请求拦截器 **/
instance.interceptors.request.use(config => {
  loading = Preloader()
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
  loading.close()
  if (response.data.status === 200) {
    return Promise.resolve(response.data)
  } else {
    toast({
      text: response.data.message
    })
    return Promise.reject(response.data.message)
  }
}, error => {
  loading.close()
  if (error.response) {
    let tips = error.response.status in httpCode ? httpCode[error.response.status] : error.response.data.message
    toast({
      text: tips
    })
    // token或者登陆失效情况
    if (error.response.status === 401) {
      vueVm.$f7.views.main.router.navigate('/login')
    }
    return Promise.reject(error)
  } else {
    toast({
      text: '请求超时, 请刷新重试'
    })
    return Promise.reject(new Error('请求超时, 请刷新重试'))
  }
})

export default instance
