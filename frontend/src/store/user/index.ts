import { defineStore } from 'pinia'
import store from '../index'
import type { UserInfoStore } from './types'
import { login, getUserInfo } from '/@/api/user'
import type { LoginData, UserInfo } from '/@/api/user/types'
import { useRouter } from 'vue-router'

const userStore = defineStore({
  id: 'user',
  state: (): UserInfoStore => ({
    token: '',
    info: {
      id: -1,
      username: '',
      nickname: '',
      email: ''
    }
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

    userInfo(): UserInfo {
      if (this.userInfo !== null) {
        return this.userInfo
      }

      const user = JSON.parse(localStorage.getItem('userInfo') || '{}')
      if (user.id !== undefined) {
        this.info = user
      } else {
        this.info = null
      }

      return this.info ? this.info : {} as UserInfo
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
      const router = useRouter()
      if (router) {
        router.push({
          name: 'Login'
        })
      }

      this.info = null
      localStorage.removeItem('token')
      localStorage.removeItem('userInfo')
    },

    async getUserInfo(): Promise<Nullable<UserInfo>> {
      try {
        const resp = await getUserInfo()
        localStorage.setItem('userInfo', JSON.stringify(resp))
        this.info = resp
        console.log(resp)
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
