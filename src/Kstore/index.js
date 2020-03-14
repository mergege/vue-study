import Vue from 'vue'
import Vuex from './kvuex.js'

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
    add(state, myCounter) {
      state.counter = state.counter + myCounter
      return state.counter
    }
  },
  actions: {
    add({ commit }, payLoad) {
      // 这里从store里解构出commit
      setTimeout(() => {
        commit('add', payLoad) // 注意这里有用到window.setTimeout,this指向window
      }, 1000)
    }
  },
  modules: {}
})
