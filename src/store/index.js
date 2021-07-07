import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { createStore } from 'vuex-extensions'
import auth from './auth/auth'

export default createStore(Vuex.Store, {
    plugins: [],
    modules: {
      auth
    }
})
