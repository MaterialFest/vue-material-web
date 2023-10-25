<script setup lang="ts">
import Menu from './views/layout/Menu.vue';
</script>

<template>
  <div class="app-layout">
    <header class="layout-header">
      <md-elevation></md-elevation>
      <div class="layout-header-left">
        <router-link to="/">
          <md-icon-button>
            <svg viewBox="0 96 960 960" fill="currentColor">
              <path
                d="M480 1016q-91 0-171-34.5T169 887q-60-60-94.5-140T40 576q0-91 34.5-171T169 265q60-60 140-94.5T480 136q91 0 171 34.5T791 265q60 60 94.5 140T920 576q0 91-34.5 171T791 887q-60 60-140 94.5T480 1016ZM200 802V351q-38 47-59 104t-21 121q0 65 21 122t59 104Zm54-506h452q-47-38-104-59t-122-21q-65 0-122 21t-104 59Zm226 381 151-301H330l150 301Zm40 99h160V456L520 776Zm-240 0h160L280 456v320Zm200 160q64 0 121.5-21T706 856H254q47 38 104.5 59T480 936Zm280-134q38-47 59-104t21-122q0-64-21-121t-59-104v451Z">
              </path>
            </svg>
          </md-icon-button>
        </router-link>
        <router-link to="/">
          <md-text-button>Vue Material Web</md-text-button>
        </router-link>
      </div>
      <div class="layout-header-right">
        <router-link to="/components">
          <md-text-button>组件</md-text-button>
        </router-link>
        <router-link to="/docs/blog">
          <md-text-button>博客</md-text-button>
        </router-link>
        <!-- 打开github地址 -->
        <a href="https://www.github.com/MaterialFE/vue-material-web/" target="_blank">
          <md-icon-button><md-icon>open_in_new</md-icon></md-icon-button>
        </a>
      </div>
    </header>
    <main class="layout-container">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped lang="scss">
.app-layout {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #fef7ff;
}

.layout-header {
  position: sticky;
  top: 0;
  background-color: #fef7ff;
  color: #ffffff;
  padding: 10px;
  z-index: 1000;
  display: flex;

  .layout-header-left {
    flex: 1;
  }

  md-icon {
    color: #6750a4;
  }
}

.layout-container {
  flex: 1;
  display: flex;
  overflow: auto;
}

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

<style lang="scss">
md-text-button::shadow .button {
  background: #f2eaf8;
}

md-text-button {
  border: 1px solid transparent;
}

.router-link-active md-text-button {
  border: 1px solid #6750a4;
  border-radius: 20px;
}
</style>