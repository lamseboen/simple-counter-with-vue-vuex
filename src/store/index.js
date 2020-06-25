import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// ini comment
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: (state) => {
      state.count++
    },
    decrement: (state) => {
      state.count--
    },
    resetCount: (state) => {
      state.count = 0
    }
  },
  actions: {
    increment: ({ commit }) => {
      commit('increment')
    },
    decrement: ({ commit }) => {
      commit('decrement')
    },
    resetCount: (context) => {
      context.commit('resetCount')
    }
  },
  plugins: [createPersistedState()]
})

export default store
