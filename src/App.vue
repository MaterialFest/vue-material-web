<script setup lang="ts">
import Menu from './views/layout/Menu.vue';
</script>

<template>
  <div class="app-layout">
    <header class="layout-header">
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
        <a href="https://www.github.com/MaterialFE/vue-material-web/" target="_blank">
          <md-text-button trailing-icon>
            github
            <svg slot="icon" viewBox="0 0 48 48">
              <path
                d="M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h13.95v3H9v30h30V25.05h3V39q0 1.2-.9 2.1-.9.9-2.1.9Zm10.1-10.95L17 28.9 36.9 9H25.95V6H42v16.05h-3v-10.9Z" />
            </svg>
          </md-text-button>
        </a>
      </div>
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

<style scoped lang="scss">
.app-layout {
  background-color: #fef7ff;
}

.layout-header {
  position: sticky;
  top: 0;
  background-color: #fef7ff;
  color: #ffffff;
  padding: 1rem;
  z-index: 1000;
  display: flex;

  .layout-header-left {
    flex: 1;
  }
}


.layout-container {
  display: flex;
}

.layout-menu {
  width: 300px;
}

.layout-content {
  flex: 1;
  padding: 2rem;
  border-radius: 28px;
  background-color: #ffffff;
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