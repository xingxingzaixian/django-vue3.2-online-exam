export interface LoginData {
  username: string
  password: string
}

export interface UserInfo {
  id: number
  username: string
  email: string
  nickname: string
  avatar: Nullable<string>
  description: Nullable<string>
  telephone: Nullable<string>
  role: Nullable<string>
}
