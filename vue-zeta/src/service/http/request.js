import instance from '../../shared/intercept/axios'
import qs from 'qs'
/**
 * 封装get请求
 * @param { string } url
 * @param { object } params
 */
export const get = (url, params = {}, config) => {
  return isPromise('get', url, params, config)
}

/**
 * 封装post请求
 * @param { string } url
 * @param { object } data
 */
export const post = (url, data = {}, config) => {
  return isPromise('post', url, data, config)
}

function isPromise (type, url, param, config = {}) {
  const paramType = {
    get: {
      method: type,
      url,
      params: param,
      headers: {
        // 控制加载提示
        loading: config.loading || true
      }
    },
    post: {
      method: type,
      url,
      data: qs.stringify(param),
      headers: {
        'content-type': config.contentType || 'application/x-www-form-urlencoded',
        // 控制加载提示
        loading: config.loading || true
      }
    }
  }

  return new Promise((resolve, reject) => {
    instance(paramType[type]).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}
