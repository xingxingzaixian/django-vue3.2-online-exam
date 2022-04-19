import type { App } from 'vue'
import PermissionDirective from './permission'

export default {
  install(app: App): void {
    app.directive('permission', PermissionDirective)
  }
}
