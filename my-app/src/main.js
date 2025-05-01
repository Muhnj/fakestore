import { createApp } from 'vue'
// import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import App from './App.vue'

// 👇 Import your router
import router from './router'

const app = createApp(App)

// 👇 Tell Vue to use the router
app.use(router)

app.mount('#app')
