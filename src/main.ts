import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import '@material/web/list/list.js'
import '@material/web/list/list-item.js'
import '@material/web/button/filled-button.js'
import '@material/web/button/outlined-button.js'

createApp(App)
  .use(router)
  .mount('#app')
