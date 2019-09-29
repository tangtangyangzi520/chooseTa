import Vue from 'Vue'
import VueI18n from 'vue-i18n'
import { getStorage, getBrowserLang } from '@/utils'
import enUS from './en-US'
import zhCN from './zh-CN'

Vue.use(VueI18n)

const lang = getStorage('lang') || getBrowserLang()
const messages = {
  'en-US': {
    ...enUS
  },
  'zh-CN': {
    ...zhCN
  }
}
const i18n = new VueI18n({
  locale: lang,
  messages
})
export default i18n
