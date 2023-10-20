import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
// 引入路由
import router from './router'
// 引入@material/web组件
import '@material/web/list/list.js'
import '@material/web/list/list-item.js'
import '@material/web/divider/divider.js'
import '@material/web/button/filled-button.js'
import '@material/web/button/outlined-button.js'
import '@material/web/button/text-button.js'
import '@material/web/iconbutton/icon-button.js'
import '@material/web/iconbutton/filled-icon-button.js'
import '@material/web/icon/icon.js'
// 引入代码高亮highlight.js
import 'highlight.js/styles/stackoverflow-light.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from "@highlightjs/vue-plugin"

createApp(App)
  .use(router)
  .use(hljsVuePlugin)
  .mount('#app')
