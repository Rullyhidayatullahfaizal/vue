
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
// import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/index.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/pages/dashboardViews.vue')
    }

  ]
})



export default router
