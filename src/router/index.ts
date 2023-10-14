import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/Index.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/about/Index.vue'),
    children: [
      {
        path: 'intro',
        name: 'Intro',
        component: () => import('../views/about/intro/Index.vue'),
      },
      {
        path: 'quick-start',
        name: 'QuickStart',
        component: () => import('../views/about/quick-start/Index.vue'),
      },
    ]
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import('../views/components/Index.vue'),
    children: [
      {
        path: 'button',
        name: 'Button',
        component: () => import('../views/components/button/Index.vue'),
      },
    ]
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})