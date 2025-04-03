import { createApp } from 'vue'
import App from './App.vue'

/* ĐIỀU HƯỚNG THÔNG QUA /SRC/ROUTER */
import router from './router/index';

/* BẮT ĐẦU QUẢN LÝ STYLES THÔNG QUA SASS */
import './assets/styles/main.scss'
/* KẾT THÚC QUẢN LÝ STYLES THÔNG QUA SASS */

/* BẮT ĐẦU BẮT BUỘC PHẢI CÓ KHÔNG ĐƯỢC THIẾU */
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css'

import { createPinia } from 'pinia'

const vuetify = createVuetify({
    components,
    directives,
})


const pinia = createPinia()
/* KẾT THÚC BẮT BUỘC PHẢI CÓ KHÔNG ĐƯỢC THIẾU */

createApp(App)
    .use(pinia)
    .use(vuetify)
    .use(router)
    .mount('#app')
