import type { Directive, DirectiveBinding } from 'vue'

const ownPermission = ['user', 'order'];

const PermissionDirective: Directive = {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    const permission: string = binding.value
    if (permission && !ownPermission.includes(permission)) {
      el.style.display = 'none'
    }
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    const permission: string = binding.value
    if (permission && !ownPermission.includes(permission)) {
      el.style.display = 'none'
    }
  }
}

export default PermissionDirective