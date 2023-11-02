<script setup lang="ts">
import Menu from './Menu.vue';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const layoutContent = ref(null);

// layout-content滚动至顶部
const goScrollTop = () => {
  if ((layoutContent.value as any)?.scrollTop) {
    (layoutContent.value as any).scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
}

onMounted(() => {
  // 路由切换后调用
  router.afterEach(() => {
    goScrollTop();
  });
});
</script>

<template>
  <nav class="layout-menu">
    <Menu />
  </nav>
  <div ref="layoutContent" class="layout-content">
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