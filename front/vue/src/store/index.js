
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    layout: 'Interfaz_default'
  },
  mutations: {
    SET_LAYOUT (state, newLayout) {
      state.layout = newLayout
    }
  }
})