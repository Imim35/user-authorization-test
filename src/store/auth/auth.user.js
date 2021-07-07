export default {
  namespaced: true,
  modules: {},
  state: {
    data: {
      id                  : null,
      email               : null,
      password            : null,
      successful          : 0,
      unsuccessful        : 0
    }
  },
  getters: {},
  actions: {},
  mutations: {
    'SET'(state, user) {
      if(user) {
        state.data.id       = user.id
        state.data.email    = user.email
        state.data.password = user.password
      } else {
        state.data.id       = null
        state.data.email    = null
        state.data.password = null
      }
    },
    'SUCCESSFUL_TRY'(state, payload) {
      state.data.successful = payload
    },
    'UNSUCCESSFUL_TRY'(state, payload) {
      state.data.unsuccessful = payload
    }
  }
}
