import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import '/node_modules/primeflex/primeflex.css'
import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './router'

// Components
import AceNGLogo from '@/components/logo/AceNGLogo.vue'

const renderApp = () => {
  createApp(App)
    .use(createPinia())
    .use(router)
    .use(PrimeVue)

    .component('AceNGLogo', AceNGLogo)

    .mount('#app')
}

renderApp()
