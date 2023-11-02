import { createI18n } from 'vue-i18n'
import zh from './zh-cn'
import en from './en-us'

const messages = {
  zh,
  en
}

// 获取浏览器的语言
const language = (navigator.language || 'zh').toLocaleLowerCase()
const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || language.split('-')[0] || 'zh', // 首先从缓存中获取，没有的话就用浏览器语言
  fallbackLocale: 'zh', // 设置备用语言
  messages
})

export default i18n