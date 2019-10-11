// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App'
import VueCordova from 'vue-cordova'
import Framework7 from 'framework7/framework7.esm.bundle.js'
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js'
import Framework7Theme from 'framework7/css/framework7.bundle.css'
import './assets/css/icons.css'
import i18n from './i18n'
import config from './config'
// 全局注册公共组件
import { useCommonComponents } from './components/index'
useCommonComponents(Vue)

Vue.use(VueI18n)
Vue.config.productionTip = false
// 全局配置
Vue.prototype.environments = config

/**
 * 映入cordova相关
 * 自动添加cordov文件
 */
Vue.use(VueCordova, {
  optionTestKey: 'optionTestValue'
})

// UI组件使用
Framework7.use(Framework7Vue)
Framework7.use(Framework7Theme)

/* eslint-disable no-new */
const vue = new Vue({
  el: '#app',
  i18n,
  render: h => h(App)
})

export default vue
