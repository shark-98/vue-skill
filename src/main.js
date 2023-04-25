import { createApp } from 'vue'
import { useMixin } from './mixin';
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

useMixin(app)

app.use(router)

app.mount('#app')
