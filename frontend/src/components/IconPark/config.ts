import type { App } from 'vue'
import {
  User,
  Lock,
  Home,
  Me,
  Agreement,
  Brain,
  ListView,
  Editor,
  DropDownList,
  CloseSmall,
  Refresh,
  Setting,
  IndentLeft,
  IndentRight,
  Remind,
  ClothesCrewNeck,
  Plus
} from '@icon-park/vue-next'

export const useIconPark = (app: App) => {
  app.component('IconParkUser', User)
  app.component('IconParkLock', Lock)
  app.component('IconParkHome', Home)
  app.component('IconParkMe', Me)
  app.component('IconParkAgreement', Agreement)
  app.component('IconParkBrain', Brain)
  app.component('IconParkListView', ListView)
  app.component('IconParkEditor', Editor)
  app.component('IconParkDropDownList', DropDownList)
  app.component('IconParkCloseSmall', CloseSmall)
  app.component('IconParkRefresh', Refresh)
  app.component('IconParkSetting', Setting)
  app.component('IconParkIndentLeft', IndentLeft)
  app.component('IconParkIndentRight', IndentRight)
  app.component('IconParkRemind', Remind)
  app.component('IconParkClothesCrewNeck', ClothesCrewNeck)
  app.component('IconParkPlus', Plus)
}
