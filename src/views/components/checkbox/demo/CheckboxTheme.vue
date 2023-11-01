<script setup lang="ts">
</script>

<template>
  <div class="checkbox-theme">
    <md-checkbox touch-target="wrapper"></md-checkbox>
    <md-checkbox touch-target="wrapper" checked></md-checkbox>
  </div>
</template>

<style scoped>
.checkbox-theme {
  /* System tokens */
  --md-sys-color-primary: #006a6a;
  --md-sys-color-on-primary: #ffffff;
  --md-sys-color-on-surface-variant: #3f4948;

  /* Component tokens */
  --md-checkbox-container-shape: 0px;
}
</style>
