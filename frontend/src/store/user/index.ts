import { defineStore } from 'pinia'
import store from '../index'
import { UserInfoType } from './types'
import { login, getUserInfo } from '/@/api/user'
import type { LoginData } from '/@/api/user/types'

const userStore = defineStore({
  id: 'user',
  state: (): UserInfoType => ({
    id: -1,
    name: '',
    token: '',
  }),
  getters: {
    isLoggedIn(): boolean {
      if (this.token === '') {
        this.token = localStorage.getItem('token') || ''
      }
      return this.token !== ''
    },

    userToken(): string {
      if (this.token === '') {
        this.token = localStorage.getItem('token') || ''
      }
      return this.token
    },
  },
  actions: {
    setToken(token: string): void {
      this.token = token
      localStorage.setItem('token', token)
    },

    setUserInfo(): void {
      console.log('示例代码')
    },

    async login(data: LoginData): Promise<void> {
      try {
        const resp = await login(data)
        this.setToken(resp)
        return Promise.resolve()
      } catch (err) {
        console.log(err)
        return Promise.reject()
      }
    },

    logout(): void {
      this.token = ''
      localStorage.removeItem('token')
    },

    async getUserInfo(): Promise<void> {
      try {
        const resp = await getUserInfo()
        this.id = resp.id
        this.name = resp.username
        return Promise.resolve()
      } catch (err) {
        return Promise.reject(err)
      }
    },
  },
})

const useUserStore = () => {
  return userStore(store)
}

export default useUserStore
