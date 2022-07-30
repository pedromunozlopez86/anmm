import { createApp } from 'vue'
import { createPinia } from 'pinia'
import persistedState from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'

//styles
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css'
import '@/assets/styles/base.css'

const app = createApp(App)
const pinia = createPinia()

pinia.use(persistedState)

app.use(pinia)
app.use(router)
app.use(PrimeVue)
app.use(ToastService)
app.component('Toast', Toast)
app.mount('#app')
