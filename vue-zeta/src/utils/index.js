export const setHtmlFontSize = () => {
  try {
    window.onload = function () {
      setFontSize()
    }
    window.onresize = function () {
      setFontSize()
    }
  } catch (err) {}
}

/**
 * 根据设计图规范设计像素单位
 * 用法：例如div宽度为300px，在组件使用应为3rem
 */
function setFontSize () {
  const El = document.documentElement
  const CW = El.clientWidth
  El.style.fontSize = CW >= 750 ? '100px' : 100 * (CW / 750) + 'px'
}
