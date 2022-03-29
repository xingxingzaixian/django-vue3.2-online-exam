import { UserInfo } from '/@/api/user/types'

export interface UserInfoStore {
  token: string
  info: Nullable<UserInfo>
}
