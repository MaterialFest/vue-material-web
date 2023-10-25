<script setup lang="ts">
const aboutRouterList = [
  { url: '/about/intro', name: '介绍' },
  { url: '/about/quick-start', name: '快速上手' },
  { url: '/about/roadmap', name: '路线图' },
  { url: '/about/support', name: '支持' },
  { url: '/about/resources', name: '资源' },
];
const componentRouterList = [
  { url: '/components/button', name: 'Buttons 按钮' },
  { url: '/components/checkbox', name: 'Checkbox 多选框' },
  { url: '/components/chips', name: 'Chips 纸片' },
  { url: '/components/dialogs', name: 'Dialogs 对话框' },
  { url: '/components/floating-action-button', name: 'Floating action button (FAB) 浮动按钮' },
  { url: '/components/icon', name: 'Icon 图标' },
  { url: '/components/icon-buttons', name: 'Icon Buttons 图标按钮' },
  { url: '/components/lists', name: 'Lists 列表' },
  { url: '/components/menus', name: 'Menus 菜单' },
  { url: '/components/progress-indicators', name: 'Progress indicators 进度条' },
  { url: '/components/radio', name: 'Radio 单选框' },
  { url: '/components/ripple', name: 'Ripple 涟漪' },
  { url: '/components/select', name: 'Select 选择框' },
  { url: '/components/sliders', name: 'Sliders 滑杆' },
  { url: '/components/switch', name: 'Switch 开关' },
  { url: '/components/tabs', name: 'Tabs 选项卡' },
  { url: '/components/text-field', name: 'Text Field 输入框' },
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

.router-link-active .menu-list-item {
  background-color: #ffe4e4;
}
</style>
