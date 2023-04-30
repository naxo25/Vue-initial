import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/layout.vue'),
    children: [
      { path: '/', component: () => import('@/views/home.vue') },
      { path: '/about', component: () => import('@/views/about.vue') }
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('@/views/404.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export { router }
