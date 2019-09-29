const ls = window.localStorage
/**
 * 设置localStorage本地缓存
 * @param {*} key: string
 * @param {*} obj: obj
 */
export const setStorage = (key, obj) => {
  const json = JSON.stringify(obj)
  ls.setItem(key, json)
}

/**
 * 获取localStorage本地缓存
 * @param {*} key: string
 */
export const getStorage = key => {
  const res = ls.getItem(key)
  return res ? JSON.parse(res) : null
}

/**
 * 删除localStorage本地缓存
 * @param {*} key: string
 */
export const removeStorage = key => {
  ls.removeItem(key)
}

/**
 * 获取浏览器默认语言
 */
export const getBrowserLang = () => {
  const navigator = window.navigator
  const lang = navigator.language
    ? navigator.language
    : navigator.browserLanguage
  let defaultLang
  const langCase = lang.toLowerCase()
  if (langCase === 'cn' || langCase === 'zh' || langCase === 'zh-cn') {
    defaultLang = 'zh-CN'
  } else {
    defaultLang = 'en-US'
  }
  return defaultLang
}
