import { LoginData, UserInfo } from './types'
import apiHttp from '/@/utils/http'

// 获取页面数据
export const loginApi = async (data: LoginData): Promise<string> => {
  return apiHttp.post<string>({
    url: '/api/user/login',
    data,
  })
}

// 获取当前用户信息
export const getUserInfoApi = async (): Promise<UserInfo> => {
  return apiHttp.get<UserInfo>({
    url: '/api/user/user/get-info/',
  })
}
