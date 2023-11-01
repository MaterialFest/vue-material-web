<script setup lang="ts">
import { ref } from "vue"

const disabledStatus = ref("default")
</script>

<template>
  <div>
    <md-elevated-button :disabled="disabledStatus === 'disabled'">
      Elevated
    </md-elevated-button>
    <md-filled-button :disabled="disabledStatus === 'disabled'">
      Filled
    </md-filled-button>
    <md-filled-tonal-button :disabled="disabledStatus === 'disabled'">
      Tonal
    </md-filled-tonal-button>
    <md-outlined-button :disabled="disabledStatus === 'disabled'">
      Outlined
    </md-outlined-button>
    <md-text-button :disabled="disabledStatus === 'disabled'">
      Text
    </md-text-button>
  </div>
  <div class="radio-tab">
    <md-radio id="default-radio" name="buttonDisabled" value="default" :checked="disabledStatus === 'default'"
      @change="disabledStatus = 'default'"></md-radio>
    <label for="default-radio">Default</label>

    <md-radio id="disabled-radio" name="buttonDisabled" value="disabled" :checked="disabledStatus === 'disabled'"
      @change="disabledStatus = 'disabled'"></md-radio>
    <label for="disabled-radio">Disabled</label>
  </div>
</template>

<style scoped>
md-elevated-button,
md-filled-button,
md-filled-tonal-button,
md-outlined-button,
md-text-button {
  margin-right: 10px;
}

.radio-tab {
  margin-top: 20px;
}

label {
  margin: 0 20px 0 10px;
}
</style>
