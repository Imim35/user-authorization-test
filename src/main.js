import Vue from 'vue'
import App from '@/App.vue'

import store          from "@/store"
import router         from '@/router'
import VueBus         from 'vue-event-bus'
import Vuelidate      from 'vuelidate'

Vue.use(VueBus)
Vue.use(Vuelidate)
/*
|--------------------------------------------------------------------------
| Импорт стилей
|--------------------------------------------------------------------------
*/

import 'bootstrap/dist/css/bootstrap.css'           // Bootstrap
import '@/assets/scss/main.scss'                    // Основной файл стилей проекта

/*
|-----------------------------------------------------å---------------------
| Импорт плагинов
|--------------------------------------------------------------------------
*/

import Notification   from '@/plugins/notification'
import Popup          from '@/plugins/popup/popup'
import Loader         from './plugins/loader'

Vue.use(Notification)
Vue.use(Popup)
Vue.use(Loader)

/*
|--------------------------------------------------------------------------
| Конфигурация приложения
|--------------------------------------------------------------------------
*/

Vue.config.productionTip = false

/*
|--------------------------------------------------------------------------
| Старт приложения
|--------------------------------------------------------------------------
*/

new Vue({ render: h => h(App), router, store }).$mount('#app')
