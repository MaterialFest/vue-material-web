<script setup lang="ts">
const aboutRouterList = [
  { url: '/about/intro', name: '介绍' },
  { url: '/about/quick-start', name: '快速上手' },
];
const componentRouterList = [
  { url: '/components/button', name: 'Button 按钮' },
  { url: '/components', name: 'Checkbox 多选框' },
  { url: './chips', name: 'Chips' },
  { url: './dialogs', name: 'Dialogs' },
  { url: './floating-action-button', name: 'Floating action button (FAB)' },
  { url: './icon-buttons', name: 'Icon Buttons' },
  { url: './lists', name: 'Lists 列表' },
  { url: './menus', name: 'Menus' },
  { url: './progress-indicators', name: 'Progress indicators' },
  { url: './radio', name: 'Radio 单选框' },
  { url: './ripple', name: 'Ripple' },
  { url: './select', name: 'Select 选择器' },
  { url: './sliders', name: 'Sliders 滑动输入条' },
  { url: './switch', name: 'Switch 开关' },
  { url: './tabs', name: 'Tabs' },
  { url: './text-field', name: 'Text Field' },
];
</script>

<template>
  <md-list class="menu-list">
    <md-item>关于</md-item>
    <router-link :to="routerItem.url" v-for="(routerItem, i) of aboutRouterList" :key="i">
      <md-list-item type="link" class="menu-list-item">
        {{ routerItem.name }}
      </md-list-item>
    </router-link>
    <md-divider></md-divider>
    <md-item>组件</md-item>
    <router-link :to="routerItem.url" v-for="(routerItem, i) of componentRouterList" :key="i">
      <md-list-item type="link" class="menu-list-item">
        {{ routerItem.name }}
      </md-list-item>
    </router-link>
  </md-list>
</template>

<style scoped>
.menu-list {
  margin: 0 12px;
}

.menu-list-item {
  border-radius: 2rem;
}
</style>
