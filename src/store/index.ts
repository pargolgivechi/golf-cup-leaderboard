import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

// axios.defaults.baseURL = 'https://api.wearematchplay.com/v2'

export default new Vuex.Store({
  state: {
    rounds: [],
    preroundMatches: [],
    roundSixteenMatches: [],
    quarterfinalsMatches: [],
    semifinalsMatches: [],
    finalMatches: []
  },
  mutations: {
    setRounds (state, data) {
      state.rounds = data.rounds
    },
    setPreroundMatches (state, matches) {
      state.preroundMatches = matches
    },
    setRoundSixteenMatches (state, matches) {
      state.roundSixteenMatches = matches
    },
    setQuarterfinalsMatches (state, matches) {
      state.quarterfinalsMatches = matches
    },
    setSemifinalsMatches (state, matches) {
      state.semifinalsMatches = matches
    },
    setFinalMatches (state, matches) {
      state.finalMatches = matches
    }
  },
  actions: {
    getRounds ({ commit }) {
      axios.get('rounds-data.json')
        .then(response => {
          commit('setRounds', response.data)
        })
    },
    getPreroundMatches ({ commit }, roundName) {
      axios.get(`cup-matches-${roundName}.json`)
        .then(response => {
          commit('setPreroundMatches', response.data)
        })
    },
    getRoundSixteenMatches ({ commit }, roundName) {
      axios.get(`cup-matches-${roundName}.json`)
        .then(response => {
          commit('setRoundSixteenMatches', response.data)
        })
    },
    getQuarterfinalsMatches ({ commit }, roundName) {
      axios.get(`cup-matches-${roundName}.json`)
        .then(response => {
          commit('setQuarterfinalsMatches', response.data)
        })
    },
    getSemifinalsMatches ({ commit }, roundName) {
      axios.get(`cup-matches-${roundName}.json`)
        .then(response => {
          commit('setSemifinalsMatches', response.data)
        })
    },
    getFinalMatches ({ commit }, roundName) {
      axios.get(`cup-matches-${roundName}.json`)
        .then(response => {
          commit('setFinalMatches', response.data)
        })
    }
  }
})
