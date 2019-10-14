import vueVm from '../../main'
import { isFunction } from '../../utils/index'
/**
 * popup
 * @param {*} param
 * param.type(单选/多选)(radio/multiple)
 * @param {*} fn
 */
export default function (params, fn) {
  if (vueVm) {
    let param = {}
    if (isFunction(params)) {
      param = {}
    } else {
      param = params
    }
    param.type = param.type || 'radio'
    const itemList = param.items || ['英文', '简体', '繁体']
    let simple = ''
    itemList.forEach((v, k) => {
      simple += `<li style="${param.index === k ? 'color: #f8b43e' : 'color: #999'}" class="item-link list-button">${v}</li>`
    })
    const resPopup = vueVm.$f7.popup.create({
      content: `
        <div style="top: inherit;display: block;max-height: 80%;bottom: 0;height: ${param.height || '3.49rem'}" class="popup ${param.class || 'popup-handler'}">
            <div class="view">
            <div class="page">
                <div class="navbar" style="height: 0.88rem;background: #fff">
                    <div class="navbar-inner">
                        <div class="left">
                        <a class="link popup-close" style="font-size: 0.28rem;color: #f8b43e;">${param.close || '取消'}</a>
                        </div>
                        <div class="title" style="font-size: 0.34rem;color: #333">${param.title || '语言'}</div>
                        <div class="right">
                        <a class="link popup-ok" style="color: #666;font-size: 0.28rem;">${param.Ok || '确定'}</a>
                        </div>
                    </div>
                </div>
                <div class="page-content" style="background: #fff;">
                    <div styls="overflow-y: scroll;height: 100%;">
                        <div class="list simple-list" style="margin: 0">
                            <ul>${simple}</ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
      `
    }).open()
    const childList = document.querySelector('.popup-handler .list ul').childNodes
    let setVal = param.index && param.index >= 0 ? [{
      key: param.index,
      value: childList[param.index].innerText
    }] : []
    for (let i = 0; i < childList.length; i++) {
      childList[i].index = i
      childList[i].onclick = function () {
        // 单选执行
        if (param.type === 'radio') {
          for (let j = 0; j < childList.length; j++) {
            childList[j].style.color = '#999'
          }
          setVal = [{
            key: this.index,
            value: childList[this.index].innerText
          }]
        } else {
          if (!setValQuery(setVal, this.index)) {
            setVal.push({
              key: this.index,
              value: childList[this.index].innerText
            })
          }
        }
        this.style.color = '#f8b43e'
      }
    }

    document.querySelector('.popup-ok').onclick = function () {
      resPopup.close()
      if (isFunction(params)) params(setVal, resPopup)
      if (fn) fn(setVal, resPopup)
      return setVal
    }
  }
}

function setValQuery (setVal, index) {
  let falg = false
  for (let j = 0; j < setVal.length; j++) {
    if (setVal[j].key === index) {
      falg = true
    }
  }
  return falg
}
