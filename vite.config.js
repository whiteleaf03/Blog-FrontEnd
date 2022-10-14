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
    port: 80,
    proxy: {
      '/bs/api': {
        target: 'http://127.0.0.1:8080'
      }
    }
  },
  build: {
    outDir: 'Blog-FontEnd'
  }
})