import { fileURLToPath, URL } from 'node:url'
import { DEFAULT_FRONT_PORT, DEFAULT_PORT } from '@packages/common/consts/ports.cjs'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const API_URL = env.API_URL ?? `http://localhost:${DEFAULT_PORT}`
  const port = env.VITE_PORT ? +env.VITE_PORT : DEFAULT_FRONT_PORT

  return {
    plugins: [vue(), vueDevTools()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@modules': fileURLToPath(new URL('./src/assets/scss/modules', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: `
            @use '@/assets/scss/variables' as *;
            @use '@/assets/scss/mixins' as *;
          `,
        },
      },
    },
    define: {
      APP_MODE: JSON.stringify(mode),
    },
    server: {
      proxy: {
        '/api': API_URL,
      },
      port,
    },
  }
})
