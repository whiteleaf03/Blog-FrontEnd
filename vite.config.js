import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    extensions: ['.js', '.vue']
  },
  server: {
    port: 80
  },
  preview: {
    port: 80
  },
  build: {
    outDir: 'Blog-FontEnd'
  }
})
