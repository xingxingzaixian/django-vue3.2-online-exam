import { defineStore } from 'pinia'
import store from '../index'
import { UserInfoType } from './types'
import { login, getUserInfo } from '/@/api/user'
import type { LoginData, UserInfo } from '/@/api/user/types'
import { useRouter } from 'vue-router'

const userStore = defineStore({
  id: 'user',
  state: (): UserInfoType => ({
    id: -1,
    username: '',
    nickname: '',
    email: '',
    avatar: '',
    description: '',
    telephone: '',
    role: '',
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

    userInfo(): UserInfo {
      if (this.username !== '') {
        return this
      }

      const user = JSON.parse(localStorage.getItem('userInfo') || '{}')
      this.id = user.id
      this.username = user.username
      this.nickname = user.nickname
      this.email = user.email
      this.avatar = user.avatar || 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
      this.description = user.description
      this.telephone = user.telephone
      this.role = user.role
      return this
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
      this.username = ''
      localStorage.removeItem('token')
      localStorage.removeItem('userInfo')
      const router = useRouter()
      if (router) {
        router.push({
          name: 'Login'
        })
      }
    },

    async getUserInfo(): Promise<Nullable<UserInfo>> {
      try {
        const resp = await getUserInfo()
        localStorage.setItem('userInfo', JSON.stringify(resp))
        this.id = resp.id
        this.username = resp.username
        this.nickname = resp.nickname
        this.avatar = resp.avatar || 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
        this.description = resp.description
        this.telephone = resp.telephone
        this.role = resp.role
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
