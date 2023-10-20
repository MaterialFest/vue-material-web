import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue-material-web/',
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // <--
      template: {
        compilerOptions: {
          // 将所有 md- 的标签名都视为自定义元素
          isCustomElement: (tag) => tag.includes('md-')
        }
      }
    }),
    Markdown(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
})
