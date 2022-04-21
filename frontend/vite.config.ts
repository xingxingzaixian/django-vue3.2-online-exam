import type { UserConfigExport, ConfigEnv, ProxyOptions } from 'vite'
import { loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfigExport => {
  const { VITE_APP_PORT, VITE_APP_PROXY, VITE_APP_BASE_PATH } = loadEnv(mode, process.cwd())

  const createProxy = (propxyList) => {
    const ret = {} as Record<string, ProxyOptions>
    for (const [prefix, target] of propxyList) {
      ret[prefix] = {
        target: target,
        changeOrigin: true,
        rewrite: (path) => path.replace(new RegExp(`^${prefix}`), '')
      }
    }

    return ret
  }

  return {
    base: VITE_APP_BASE_PATH,
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      })
    ],
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
    server: {
      // 是否开启 https
      https: false,
      port: Number(VITE_APP_PORT),
      host: '0.0.0.0',
      open: false,
      proxy: createProxy(JSON.parse(VITE_APP_PROXY))
    },
    build: {
      target: 'es2015',
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          }
        }
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${resolve('src/styles/variables.module.less')}";`
          },
          javascriptEnabled: true
        }
      }
    }
  }
};
