<script setup lang="ts">
</script>

<template>
  <div class="checkbox-tab">
    <label style="display: flex; align-items: center;">
      <md-checkbox touch-target="wrapper"></md-checkbox>
      Checkbox one
    </label>

    <md-checkbox id="checkbox-two" touch-target="wrapper"></md-checkbox>
    <label for="checkbox-two">Checkbox two</label>
  </div>
</template>

<style scoped>
.checkbox-tab {
  display: flex;
  align-items: center;
}
</style>
