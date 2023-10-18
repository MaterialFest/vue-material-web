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
    }),
    Markdown(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
})
