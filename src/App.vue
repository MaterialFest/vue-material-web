<script setup lang="ts">
import Menu from './views/layout/Menu.vue';
</script>

<template>
  <div class="app-layout">
    <header class="layout-header">
      <router-link to="/">
        <span>Vue Material Web</span>
      </router-link>
    </header>
    <main class="layout-container">
      <nav class="layout-menu">
        <Menu />
      </nav>
      <div class="layout-content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<style scoped>
.layout-header {
  position: sticky;
  top: 0;
  background-color: #00639b;
  color: #ffffff;
  padding: 1rem;
}

.layout-header a {
  color: #ffffff;
}

.layout-container {
  display: flex;
}

.layout-menu {
  width: 300px;
}

.layout-content {
  flex: 1;
  padding: 1rem;
}
</style>
