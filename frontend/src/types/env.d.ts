/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_PORT: string
  readonly VITE_APP_BASE_URL: string
  readonly VITE_APP_AUTH_TOKEN: string
  readonly VITE_APP_PROXY: string
  readonly VITE_APP_CONTENT_TYPE: string
  readonly VITE_APP_LOGIN_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
