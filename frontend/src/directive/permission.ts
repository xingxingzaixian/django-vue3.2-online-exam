import type { Directive, DirectiveBinding } from 'vue'

const ownPermission = ['user', 'order'];

const PermissionDirective: Directive = {
  created(el: HTMLElement, binding: DirectiveBinding) {
    const permission: string = binding.value
    console.log(binding)
    if (permission && !ownPermission.includes(permission)) {
      el.parentNode?.removeChild(el); // 关键代码, 没有权限则删除元素
    }
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    const permission: string = binding.value
    console.log(binding)
    if (permission && !ownPermission.includes(permission)) {
      el.parentNode?.removeChild(el); // 关键代码, 没有权限则删除元素
    }
  }
}

export default PermissionDirective