import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}

const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  }
}

const actions = {
  increment: ({commit}) => commit('increment'),
  decrement: ({commit}) => commit('decrement')
}

const getters = {
  fizzbuzz: state => {
    let message = ''
    if (state.count % 3 === 0) message += 'Fizz'
    if (state.count % 5 === 0) message += 'Buzz'

    return message
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
