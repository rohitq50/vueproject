import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.css'
import '../src/scss/main.scss'

// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// createApp.use(BootstrapVue)
// createApp.use(IconsPlugin)

createApp(App).use(router).mount('#app')
