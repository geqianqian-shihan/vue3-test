import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
  resolve: {
    alias : [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  },
  plugins: [vue(), WindiCSS()],
  // 解决接口跨域问题
  server: {
    proxy: {
      '/api': {
        target: 'http://hrsample.huorong.cn/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})