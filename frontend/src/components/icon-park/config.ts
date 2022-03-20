import type { App } from 'vue'
import { User, Lock, Unlock } from '@icon-park/vue-next'

export const useIconPark = (app: App) => {
  app.component('IconParkUser', User)
  app.component('IconParkLock', Lock)
  app.component('IconParkUnlock', Unlock)
}
