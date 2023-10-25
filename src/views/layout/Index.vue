<script setup lang="ts">
import Menu from './Menu.vue';
</script>

<template>
  <nav class="layout-menu">
    <Menu />
  </nav>
  <div class="layout-content">
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
.layout-menu {
  width: 300px;
  overflow: auto;
}

.layout-content {
  flex: 1;
  padding: 2rem;
  border-radius: 28px;
  background-color: #ffffff;
  overflow: auto;
}
</style>