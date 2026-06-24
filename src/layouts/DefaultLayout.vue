<template>
  <div class="layout-container">
    <header class="header">
      <h1>DuoStock</h1>
    </header>

    <div class="menu-principal">
      <aside class="sidebar">
        <h3 class="titulo-menu">Menu</h3>
        <nav>
          <ul class="lista-menu">
            <li><router-link :to="{ name: 'Dashboard' }">Dashboard</router-link></li>
            <li><router-link :to="{ name: 'Produtos' }">Produtos</router-link></li>
            <li><router-link :to="{ name: 'Vendas' }">Vendas</router-link></li>
            <li><router-link :to="{ name: 'Categorias' }">Categorias</router-link></li>
            <li><router-link :to="{ name: 'Fornecedores' }">Fornecedores</router-link></li>
            <li><router-link :to="{ name: 'Estoque' }">Estoque</router-link></li>
          </ul>
        </nav>
      </aside>

      <main class="content">
        <router-view>
          <h1>Sistema de controle de estoque DuoStock</h1>
          <p>Contéudo da página em construção...</p>
        </router-view>
      </main>
    </div>
  </div>
</template>
