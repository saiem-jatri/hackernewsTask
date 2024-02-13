import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import Pagination from 'v-pagination-3';
import router from './router/index.js'
import Loader from "./components/Loader.vue";
const app = createApp(App)

app.use(router)
app.component('Loader', Loader)
app.component('pagination', Pagination);
app.mount('#app')
