import { defineStore } from 'pinia'
import store from '../index'
import type { UserInfoStore } from './types'
import { login, getUserInfo } from '/@/api/user'
import type { LoginData, UserInfo } from '/@/api/user/types'
import router from '/@/router'

const userStore = defineStore({
  id: 'user',
  state: (): UserInfoStore => ({
    token: '',
    info: null
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

    userInfo(): Nullable<UserInfo> {
      if (this.info !== null) {
        return this.info
      }

      const user = JSON.parse(localStorage.getItem('userInfo') || '{}')
      if (user.id !== undefined) {
        this.info = user
      } else {
        this.info = null
      }

      return this.info ? this.info : null
    }
  },
  actions: {
    setToken(token: string): void {
      this.token = token
      localStorage.setItem('token', token)
    },

    async login(data: LoginData): Promise<Nullable<UserInfo>> {
      try {
        const resp = await login(data)
        this.setToken(resp)

        return this.getUserInfo()
      } catch (err) {
        console.log(err)
        return null
      }
    },

    logout(): void {
      this.token = ''
      localStorage.removeItem('token')

      if (router) {
        router.push({
          name: 'Login'
        })
      }

      this.info = null
      localStorage.removeItem('userInfo')
    },

    async getUserInfo(): Promise<Nullable<UserInfo>> {
      try {
        const resp = await getUserInfo()
        localStorage.setItem('userInfo', JSON.stringify(resp))
        this.info = resp
        console.log(resp)
        console.log(this.info)
        return resp
      } catch (err) {
        console.log(err)
        return null
      }
    },
  },
})

const useUserStore = () => {
  return userStore(store)
}

export default useUserStore
