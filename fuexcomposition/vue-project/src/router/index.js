import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompositionView from '../views/CompositionView.vue'
import WatchView from '../views/WatchView.vue'
import ParsingView from '../views/ParsingView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
    ,
    {
      path: '/composition',
      name: 'composition',
      component: CompositionView
    }
    ,{
      path: '/watch',
      name: 'watch',
      component: WatchView
    },
    {
      path: '/parsing',
      name: 'parsing',
      component: ParsingView
    },
    
  ]
})

export default router
