import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/MainView.vue'),
    },
    {
      path:'/mypage',
      name : 'myPage',
      component : () => import('@/views/MyPageView.vue')    
    },
    {
      path:'/login',
      name : 'login',
      component : () => import('@/views/LoginView.vue')    
    },

  ]
})

export default router
