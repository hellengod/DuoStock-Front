import { createRouter, createWebHistory } from 'vue-router'

// Já estou adicionando as rotas do menu porque estou usando routerlink ;)
import DashBoardView from '@/pages/DashBoard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashBoardView
    }
  ],
})

export default router
