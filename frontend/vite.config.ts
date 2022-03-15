import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      // /@/xxxx => src/xxxx
      {
        find: /\/@\//,
        replacement: resolve(__dirname, 'src') + '/',
      },
    ],
    // 使用别名时忽略文件后缀，官方不建议忽略.vue后缀，因此这里不配置
    extensions: ['.ts', '.js', '.jsx', '.tsx'],
  },
});
