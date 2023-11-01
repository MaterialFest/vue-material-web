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
    component: () => import('../views/layout/Index.vue'),
    children: [
      {
        path: '',
        redirect: '/about/intro',
      },
      {
        path: 'intro',
        name: 'Intro',
        component: () => import('../views/about/intro/index.md'),
      },
      {
        path: 'quick-start',
        name: 'QuickStart',
        component: () => import('../views/about/quick-start/index.md'),
      },
      {
        path: 'roadmap',
        name: 'Roadmap',
        component: () => import('../views/about/roadmap/index.md'),
      },
      {
        path: 'support',
        name: 'Support',
        component: () => import('../views/about/support/index.md'),
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
    component: () => import('../views/layout/Index.vue'),
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
      {
        path: 'checkbox',
        name: 'Checkbox',
        component: () => import('../views/components/checkbox/index.md'),
      },
      {
        path: 'chips',
        name: 'Chips',
        component: () => import('../views/components/chips/index.md'),
      },
      {
        path: 'dialogs',
        name: 'Dialogs',
        component: () => import('../views/components/dialogs/index.md'),
      },
      {
        path: 'floating-action-button',
        name: 'FloatingActionButton',
        component: () => import('../views/components/floating-action-button/index.md'),
      },
      {
        path: 'icon-buttons',
        name: 'IconButtons',
        component: () => import('../views/components/icon-buttons/index.md'),
      },
      {
        path: 'icon',
        name: 'Icon',
        component: () => import('../views/components/icon/index.md'),
      },
      {
        path: 'lists',
        name: 'Lists',
        component: () => import('../views/components/lists/index.md'),
      },
      {
        path: 'menus',
        name: 'Menus',
        component: () => import('../views/components/menus/index.md'),
      },
      {
        path: 'progress-indicators',
        name: 'ProgressIndicators',
        component: () => import('../views/components/progress-indicators/index.md'),
      },
      {
        path: 'radio',
        name: 'Radio',
        component: () => import('../views/components/radio/index.md'),
      },
      {
        path: 'ripple',
        name: 'Ripple',
        component: () => import('../views/components/ripple/index.md'),
      },
      {
        path: 'select',
        name: 'Select',
        component: () => import('../views/components/select/index.md'),
      },
      {
        path: 'sliders',
        name: 'Sliders',
        component: () => import('../views/components/sliders/index.md'),
      },
      {
        path: 'switch',
        name: 'Switch',
        component: () => import('../views/components/switch/index.md'),
      },
      {
        path: 'tabs',
        name: 'Tabs',
        component: () => import('../views/components/tabs/index.md'),
      },
      {
        path: 'text-field',
        name: 'TextField',
        component: () => import('../views/components/text-field/index.md'),
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