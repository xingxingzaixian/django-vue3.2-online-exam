import { createApp } from 'vue'
import router from './router'
import store from './store'
import { useIconPark } from './components/IconPark/config'
import directive from './directive'
import './styles/index.less'
import 'animate.css'
import App from './App.vue'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(useIconPark)
app.use(directive)

app.mount('#app')
