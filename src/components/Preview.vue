<template>
  <div class="preview-section">
    <component :is="props.comp"></component>
    <div class="preview-tab">
      <div class="preview-btn">
        <md-icon-button @click="showOrhideCode">
          <md-icon>code</md-icon>
        </md-icon-button>
        <md-icon-button @click="copyContent(sourceCode)">
          <md-icon>content_copy</md-icon>
        </md-icon-button>
      </div>
      <transition name="slide-fade">
        <highlightjs language="js" :code="sourceCode" v-if="showCode" />
      </transition>
    </div>
  </div>
</template>
   
<script setup lang="ts">
import { onMounted, ref } from "vue"
import 'highlight.js/lib/common'
import hljsVuePlugin from "@highlightjs/vue-plugin"

const highlightjs = hljsVuePlugin.component

const props = defineProps({
  comp: null,
  compPath: {
    type: String,
    default: "",
    require: true,
  },
})

const showCode = ref(false)
const sourceCode = ref("")

const showOrhideCode = () => {
  showCode.value = !showCode.value
}

const copyContent = (text: string) => {
  navigator.clipboard.writeText(text)
}

const getSourceCode = () => {
  let components = import.meta.glob(`/src/views/components/*/demo/*.vue`, { as: 'raw', eager: true })
  for (let componentKey in components) {
    if (componentKey.indexOf(props.compPath) !== -1) {
      sourceCode.value = components[componentKey]
    }
  }
};

onMounted(() => {
  getSourceCode();
})
</script>

<style scoped lang="scss">
.preview-section {
  border: 1px solid #707882;
  padding: 20px;
  border-radius: 20px;
}

.preview-btn {
  text-align: right;
  border-top: 1px dashed #707882;
  margin-top: 20px;
  padding-top: 20px;
}

pre {
  margin-bottom: 0;
}
</style>
