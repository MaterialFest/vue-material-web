<script setup lang="ts">
const routerList = [
  { url: './button', name: 'Button 按钮' },
  { url: './checkbox', name: 'Checkbox' },
  { url: './chips', name: 'Chips' },
  { url: './dialogs', name: 'Dialogs' },
  { url: './floating-action-button', name: 'Floating action button (FAB)' },
  { url: './icon-buttons', name: 'Icon Buttons' },
  { url: './lists', name: 'Lists' },
  { url: './menus', name: 'Menus' },
  { url: './progress-indicators', name: 'Progress indicators' },
  { url: './radio', name: 'Radio' },
  { url: './ripple', name: 'Ripple' },
  { url: './select', name: 'Select' },
  { url: './sliders', name: 'Sliders' },
  { url: './switch', name: 'Switch' },
  { url: './tabs', name: 'Tabs' },
  { url: './text-field', name: 'Text Field' },
];
</script>

<template>
  <md-list>
    <md-item>组件</md-item>
    <router-link :to="routerItem.url" v-for="(routerItem, i) of routerList" :key="i">
      <md-list-item type="link">
        {{ routerItem.name }}
      </md-list-item>
    </router-link>
  </md-list>
</template>

<style scoped></style>
