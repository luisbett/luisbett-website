import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './plugins/i18n'
import generalPlugins from './plugins/generalPlugins';

createApp(App)
.use(router)
.use(i18n)
.use(generalPlugins)
.mount('#app')