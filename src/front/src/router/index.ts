import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/home/HomePage.vue'),
      children: [
        {
          path:'',
          name: 'home',
          component: () => import('../layouts/HomeLayout.vue')
        }
      ]
    },
  ]
})

export default router
