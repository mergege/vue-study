import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter(state) {
      return state.counter * 2
    }
  },
  mutations: {
    add(state) {
      return state.counter++
    }
  },
  actions: {
    add({ commit }) {
      // 这里从store里解构出commit
      setTimeout(() => {
        commit('add')
      }, 1000)
    }
  },
  modules: {}
})
