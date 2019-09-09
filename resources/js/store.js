import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
  		isLoggedIn: !!localStorage.getItem('token'),
      user: '',
  },
  mutations: {
  	    loginUser (state) {
            state.isLoggedIn = true
        },
        logoutUser (state) {
            state.isLoggedIn = false
        },
        setUser: (state, payload) => {
          state.user = payload
        }

  },
  actions: {

  }
})

export default store
