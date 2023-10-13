import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/Index.vue'),
  },
  {
    path: '/button',
    name: 'Button',
    component: () => import('../views/button/Index.vue'),
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})