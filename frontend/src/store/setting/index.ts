import { defineStore } from 'pinia'
import store from '../index'
import { Setting } from './types'
import variables from '/@/styles/variables.module.less'

const settingStore = defineStore({
  id: 'setting',
  state: (): Setting => ({
    cssVariables:variables
  }),
  getters: {
    cssVars(): Recordable<string|number> {
      return this.cssVariables
    }
  }
})

const useSettingStore = () => {
  return settingStore(store)
}

export default useSettingStore