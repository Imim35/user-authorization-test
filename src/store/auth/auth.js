import mocks from '@/mocks/users.json'
import user from './auth.user'
export default {
  namespaced: true,
  state: {
    authenticated: false,
    users        : null
  },
  modules: { user },
  getters: {},
  actions: {
    // Get all Users
    getUsers({ commit }) {
      commit('SET',mocks)
      return mocks
    }
  },

  mutations: {

    'SET'(state, users) {
      state.users = users
    },
    // Auth user
    'AUTH_USER'(state, payload) {
      state.authenticated = payload
    }
  }
}
