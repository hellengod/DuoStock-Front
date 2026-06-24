import { createRouter, createWebHistory } from 'vue-router'

// Já estou adicionando as rotas do menu porque estou usando routerlink ;)
import DashBoardView from '@/pages/DashBoard.vue'
import Produtos from '@/pages/Produtos.vue'
import Vendas from '@/pages/vendas.vue'
import Categorias from '@/pages/Categorias.vue'
import Fornecedores from '@/pages/Fornecedores.vue'
import Estoque from '@/pages/Estoque.vue'

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
      component: Produtos
    },
    {
      path: '/vendas',
      name: 'Vendas',
      component: Vendas
    },
    {
      path: '/categorias',
      name: 'Categorias',
      component: Categorias
    },
    {
      path: '/fornecedores',
      name: 'Fornecedores',
      component: Fornecedores
    },
    {
      path: '/estoque',
      name: 'Estoque',
      component: Estoque
    },
  ],
})

export default router
