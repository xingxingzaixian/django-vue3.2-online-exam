import { defineStore } from 'pinia'
import store from '../index'
import { UserInfoType } from './types'

const userStore = defineStore({
  id: 'user',
  state: (): UserInfoType => ({
    id: -1,
    name: '',
    token: '',
  }),
  getters: {
    isLoggedIn(): boolean {
      return this.token !== ''
    },
  },
  actions: {
    setUserInfo(): void {
      console.log('示例代码')
    },
  },
})

const useUserStore = () => {
  return userStore(store)
}

export default useUserStore
