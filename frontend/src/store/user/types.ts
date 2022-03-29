import { UserInfo } from '/@/api/user/types'
export interface UserInfoType extends UserInfo {
  token: string
}
