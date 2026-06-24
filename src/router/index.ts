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
    },
    {
      path: '/produtos',
      name: 'Produtos',
      component: DashBoardView
    },
    {
      path: '/vendas',
      name: 'Vendas',
      component: DashBoardView
    },
    {
      path: '/categorias',
      name: 'Categorias',
      component: DashBoardView
    },
    {
      path: '/fornecedores',
      name: 'Fornecedores',
      component: DashBoardView
    },
    {
      path: '/estoque',
      name: 'Estoque',
      component: DashBoardView
    },
  ],
})

export default router
