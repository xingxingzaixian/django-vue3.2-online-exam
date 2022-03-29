export interface LoginData {
  username: string
  password: string
}

export interface UserInfo {
  id: number
  username: string
  email: string
  nickname: string
  avatar?: string
  description?: string
  telephone?: string
  role?: string
}
