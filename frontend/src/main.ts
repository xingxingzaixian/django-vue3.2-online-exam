import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { useIconPark } from '/@/components/icon-park/config'

import './styles/index.css'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(useIconPark)

app.mount('#app')
