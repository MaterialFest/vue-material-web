import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/index.md'),
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
      {
        path: 'resources',
        name: 'Resources',
        component: () => import('../views/about/resources.md'),
      },
    ]
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import('../views/components/Index.vue'),
    children: [
      {
        path: '',
        redirect: '/components/button',
      },
      {
        path: 'button',
        name: 'Button',
        component: () => import('../views/components/button/index.md'),
      },
    ]
  },
  {
    path: '/docs/blog',
    name: 'DocsBlog',
    component: () => import('../views/docs/blog/index.md'),
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})