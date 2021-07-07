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
| Importing styles
|--------------------------------------------------------------------------
*/

import 'bootstrap/dist/css/bootstrap.css'           // Bootstrap
import '@/assets/scss/main.scss'                    // Main project styles file

/*
|-----------------------------------------------------å---------------------
| Importing plugins
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
| Application configuration
|--------------------------------------------------------------------------
*/

Vue.config.productionTip = false

/*
|--------------------------------------------------------------------------
| Application start
|--------------------------------------------------------------------------
*/

new Vue({ render: h => h(App), router, store }).$mount('#app')
