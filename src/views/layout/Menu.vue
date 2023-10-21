<script setup lang="ts">
const aboutRouterList = [
  { url: '/about/intro', name: '介绍' },
  { url: '/about/quick-start', name: '快速上手' },
  { url: '/about/support', name: '支持' },
  { url: '/about/resources', name: '资源' },
];
const componentRouterList = [
  { url: '/components/button', name: 'Buttons 按钮' },
  { url: '/components/checkbox', name: 'Checkbox 多选框' },
  { url: '/components/chips', name: 'Chips' },
  { url: '/components/dialogs', name: 'Dialogs' },
  { url: '/components/floating-action-button', name: 'Floating action button (FAB)' },
  { url: '/components/icon-buttons', name: 'Icon Buttons' },
  { url: '/components/icon', name: 'Icon' },
  { url: '/components/lists', name: 'Lists 列表' },
  { url: '/components/menus', name: 'Menus' },
  { url: '/components/progress-indicators', name: 'Progress indicators' },
  { url: '/components/radio', name: 'Radio 单选框' },
  { url: '/components/ripple', name: 'Ripple' },
  { url: '/components/select', name: 'Select 选择器' },
  { url: '/components/sliders', name: 'Sliders 滑动输入条' },
  { url: '/components/switch', name: 'Switch 开关' },
  { url: '/components/tabs', name: 'Tabs' },
  { url: '/components/text-field', name: 'Text Field' },
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

<style scoped lang="scss">
.menu-list {
  margin: 0 12px;

  a {
    margin-block: 5px;
  }

  md-item {
    margin-top: 10px;
    font-size: 20px;
    font-weight: 600;
  }
}

.menu-list-item {
  border-radius: 2rem;
}
</style>
