import vueVm from '../../main'

const texts = 'Hello Zetar'
const titles = 'Zetar'

/**
 * 根据ui设计图自定义样式
 * @param { object } params
 * @param { fn } callback
 */
const dialog = (params = {}, callback) => {
  if (vueVm) {
    vueVm.$f7.dialog
      .create({
        title: params.title || titles,
        text: params.text || texts,
        content: params.content || '',
        cssClass: `verticalDialog ${params.class}`,
        buttons: params.button || [],
        verticalButtons: params.vertical || true,
        onClick: function (dialog, e) {
          if (callback) callback(e, dialog)
        }
      })
      .open()
  }
}

/**
 * Alert
 * @param { object } params
 * @param { fn } callback
 */
const Alert = (params = {}, callback) => {
  if (vueVm) {
    vueVm.$f7.dialog.alert(params.text || texts, params.title || titles, (res) => {
      if (callback) {
        callback(res)
      }
    })
  }
}

/**
 * Confirm
 * @param { object } params
 * @param { fn } callbackOk ok回调
 * @param { fn } callbackCancel 取消回调
 */
const Confirm = (params = {}, callbackOk, callbackCancel) => {
  if (vueVm) {
    vueVm.$f7.dialog.confirm(params.text || texts, params.title || titles, (res) => {
      if (callbackOk) callbackOk('Ok')
    }, (res) => {
      if (callbackCancel) callbackCancel('Cancel')
    })
  }
}

/**
 * Prompt
 * @param { object } params
 * @param { fn } callbackOk 确定回调
 * @param { * } defaultValue 默认值
 */
const Prompt = (params = {}, callbackOk, defaultValue = '') => {
  if (vueVm) {
    vueVm.$f7.dialog.prompt(params.text || texts, params.title || titles, (ok) => {
      if (callbackOk) callbackOk(ok)
    }, (cancel) => {}, defaultValue)
  }
}

/**
 * Preloader
 * @param { object } params
 * params.title { string } 标题
 * params.color { string }
 * params.time { number } 关闭时间
 */
const Preloader = (params = {}) => {
  if (vueVm) {
    const preloader = vueVm.$f7.dialog
    preloader.preloader(params.title || titles, params.color)
    closeDialog(preloader, params.time)
    return preloader
  }
}

/**
 * Progress
 * @param { object } params
 * params.title { string } 标题
 * params.progress { number }
 * params.color { string }
 * params.time { number } 关闭时间
 */
const Progress = (params = {}) => {
  if (vueVm) {
    const progress = vueVm.$f7.dialog
    progress.progress(params.title || titles, params.progress || 10, params.color)
    closeDialog(progress, params.time)
    return progress
  }
}

function closeDialog (dialog, time = 3000) {
  setTimeout(() => {
    dialog.close()
  }, time)
}

export { Alert, Confirm, Prompt, Preloader, Progress, dialog }
