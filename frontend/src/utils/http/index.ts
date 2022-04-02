import useUserStore from '/@/store/user'
import Axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance, AxiosResponse, AxiosError } from 'axios'
import { defaultConfig } from './types'

class AxiosHttp {
  private axiosInstance: AxiosInstance

  constructor() {
    this.axiosInstance = Axios.create(defaultConfig)
    this.httpHookRequest()
    this.httpHookResponse()
  }

  // 请求拦截
  private httpHookRequest(): void {
    this.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const userStore = useUserStore()

        // 如果已经登录了，就把登录信息放到请求头中
        if (userStore.isLoggedIn && config.headers) {
          config.headers[import.meta.env.VITE_APP_AUTH_TOKEN] = `Bearer ${userStore.userToken}`
        }

        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }

  // 响应拦截
  private httpHookResponse(): void {
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response.data
      },
      (error: AxiosError) => {
        const { response } = error
        if (response) {
          AxiosHttp.errorHandler(response.status, (response.data as any).message)
        }

        return Promise.reject(error)
      }
    )
  }

  // 异常请求处理
  static errorHandler(status: number, message?: string): void {
    const userStore = useUserStore()
    switch (status) {
      case 401: {
        // 未登录或者登录过期，清除登录信息
        userStore.logout()
        break
      }
      case 403: {
        // 没有权限
        break
      }
      default: {
        console.log(message)
      }
    }
  }

  public get<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  public post<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }

  public put<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'PUT' })
  }

  public patch<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }

  public delete<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }

  private request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.axiosInstance
        .request(config)
        .then((resp: AxiosResponse) => {
          resolve(resp as any)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

const http = new AxiosHttp()
export default http
