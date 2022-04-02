import { createApp } from 'vue'
import router from './router'
import store from './store'
import { useIconPark } from './components/IconPark/config'
import './styles/index.less'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(useIconPark)
app.use(MotionPlugin)

app.mount('#app')
