import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/HomeLayout.vue'),
      children: [
        {
          path:'',
          name: 'home',
          component: () => import('../views/home/HomePage.vue'),
        }
      ]
    },
  ]
})

export default router
