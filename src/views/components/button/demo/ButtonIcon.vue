<script setup lang="ts">
</script>

<template>
  <div>
    <md-filled-tonal-button>
      Send
      <svg slot="icon" viewBox="0 0 48 48">
        <path d="M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z" />
      </svg>
    </md-filled-tonal-button>

    <md-text-button trailing-icon>
      Open
      <svg slot="icon" viewBox="0 0 48 48">
        <path
          d="M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h13.95v3H9v30h30V25.05h3V39q0 1.2-.9 2.1-.9.9-2.1.9Zm10.1-10.95L17 28.9 36.9 9H25.95V6H42v16.05h-3v-10.9Z" />
      </svg>
    </md-text-button>
  </div>
</template>

<style scoped>
md-filled-tonal-button,
md-text-button {
  margin-right: 10px;
}
</style>
