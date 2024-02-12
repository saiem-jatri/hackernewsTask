import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import Pagination from 'v-pagination-3';
import router from './router/index.js'
const app = createApp(App)

app.use(router)
app.component('pagination', Pagination);
app.mount('#app')
