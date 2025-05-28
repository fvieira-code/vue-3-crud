<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand"
        >Projeto - Portal do Fornecedor</router-link
      >
      <div class="navbar-nav mr-auto">
        <!--<li class="nav-item">
          <router-link to="/atividade/adicionar" class="nav-link"
            >Adicionar atividade</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/atividades" class="nav-link"
            >Lista de Atividades</router-link
          >
        </li>-->
        <li class="nav-item">
          <router-link to="/consultor/adicionar" class="nav-link"
            >Adicionar consultores</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/consultores" class="nav-link"
            >Lista de Consultores</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/cliente/adicionar" class="nav-link"
            >Adicionar clientes</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/clientes" class="nav-link"
            >Lista de Clientes</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/pontos/adicionar" class="nav-link"
            >Adicionar pontos</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/pontos" class="nav-link"
            >Lista de Pontos</router-link
          >
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>
